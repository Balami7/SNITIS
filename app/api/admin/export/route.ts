import { NextResponse } from "next/server";
import { Workbook } from "exceljs";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Fetch all registrations
    const registrations = await prisma.registration.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Create a new workbook
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet("Registrations");

    // Add headers
    worksheet.columns = [
      { header: "First Name", key: "firstName", width: 15 },
      { header: "Last Name", key: "lastName", width: 15 },
      { header: "Guests", key: "numberOfGuests", width: 8 },
      { header: "Email", key: "email", width: 25 },
      { header: "Phone", key: "phone", width: 18 },
      { header: "Position", key: "position", width: 18 },
      { header: "Organisation", key: "organisation", width: 20 },
      { header: "Country", key: "country", width: 15 },
      { header: "State", key: "state", width: 15 },
      { header: "City", key: "city", width: 15 },
      { header: "Street", key: "street", width: 20 },
      { header: "Building/Apt", key: "buildingApart", width: 15 },
      { header: "Registration Date", key: "createdAt", width: 18 },
    ];

    // Style header row
    worksheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    worksheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF10B981" },
    };

    // Add data rows
    registrations.forEach((reg) => {
      worksheet.addRow({
        firstName: reg.firstName,
        lastName: reg.lastName,
        numberOfGuests: reg.numberOfGuests,
        email: reg.email,
        phone: reg.phone,
        position: reg.position,
        organisation: reg.organisation,
        country: reg.country,
        state: reg.state,
        city: reg.city,
        street: reg.street,
        buildingApart: reg.buildingApart,
        createdAt: new Date(reg.createdAt).toLocaleDateString(),
      });
    });

    // Generate buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Return file with proper headers
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="registrations-${new Date().toISOString().split("T")[0]}.xlsx"`,
      },
    });
  } catch (error) {
    console.error("Export error:", error);
    return NextResponse.json(
      { error: "Failed to generate export file" },
      { status: 500 }
    );
  }
}
