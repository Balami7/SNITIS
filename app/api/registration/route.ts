import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (
      !body ||
      typeof body !== "object" ||
      !("address" in body) ||
      !body.address ||
      typeof body.address !== "object"
    ) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Validate required fields
    const requiredFields = [
      "first_name",
      "last_name",
      "position",
      "organisation",
      "phone",
      "email",
    ];

    for (const field of requiredFields) {
      if (typeof body[field] !== "string" || !body[field].trim()) {
        return NextResponse.json(
          { error: `Missing or invalid required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const numberOfGuests = typeof body.number_of_guests === "number" && body.number_of_guests >= 1
      ? Math.min(Math.floor(body.number_of_guests), 10)
      : 1;

    // Validate address object
    const address = body.address as Record<string, unknown>;
    const { country, state, city, building_apart, street } = address;

    if (
      typeof country !== "string" ||
      typeof state !== "string" ||
      typeof city !== "string" ||
      typeof building_apart !== "string" ||
      typeof street !== "string" ||
      !country.trim() ||
      !state.trim() ||
      !city.trim() ||
      !building_apart.trim() ||
      !street.trim()
    ) {
      return NextResponse.json(
        { error: "Missing required address fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format
    const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;
    if (!phoneRegex.test(body.phone.trim())) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Create registration record in database
    const registration = await prisma.registration.create({
      data: {
        firstName: body.first_name.trim(),
        lastName: body.last_name.trim(),
        numberOfGuests,
        position: body.position.trim(),
        organisation: body.organisation.trim(),
        country: country.trim(),
        state: state.trim(),
        city: city.trim(),
        buildingApart: building_apart.trim(),
        street: street.trim(),
        phone: body.phone.trim(),
        email: body.email.trim(),
      },
    });

    console.log(`✓ Registration created: ${registration.id} (${registration.firstName} ${registration.lastName})`);

    return NextResponse.json(
      {
        success: true,
        message: "Registration submitted successfully",
        id: registration.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      { error: "Failed to process registration. Please try again later." },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to fetch all registrations (for admin dashboard)
export async function GET() {
  try {
    // Optional: Add authentication check here
    const registrations = await prisma.registration.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      count: registrations.length,
      data: registrations,
    });
  } catch (error) {
    console.error("Fetch registrations error:", error);

    return NextResponse.json(
      { error: "Failed to fetch registrations" },
      { status: 500 }
    );
  }
}
