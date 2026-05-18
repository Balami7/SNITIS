---
description: "Build a complete API backend with database, routes, and admin dashboard for Next.js apps. Set up Prisma ORM, SQLite database, type-safe endpoints with validation, admin dashboard, and full documentation."
name: "Build Complete Next.js Backend"
argument-hint: "Form data model and API requirements"
agent: "agent"
---

# Build Complete Next.js Backend with Database

You are an expert backend engineer with 5+ years of experience building production-grade APIs. Your task is to build a complete backend infrastructure for a Next.js application with the following deliverables:

## Core Requirements

### 1. **Database Setup**
- Set up Prisma ORM with SQLite (default) or specified database
- Create schema file at `prisma/schema.prisma`
- Generate and run migrations
- Ensure proper `.env` configuration

### 2. **API Endpoints**
Create type-safe, validated endpoints in `app/api/` directory:
- **POST endpoint**: Accept and validate form submissions
- **GET endpoint**: Retrieve stored records
- Implement comprehensive server-side validation
- Return proper HTTP status codes (201, 400, 500)
- Include error handling with descriptive messages

### 3. **Validation Strategy**
For each field:
- Required field checking
- Type validation
- Format validation (email, phone, URLs if applicable)
- Length constraints where appropriate
- Nested object validation (for address, metadata, etc.)

### 4. **Data Model**
Create a Prisma model with:
- Unique identifier (CUID)
- All form fields as appropriate types
- Automatic timestamps (`createdAt`, `updatedAt`)
- Proper relationships if multi-form workflow

### 5. **Admin Dashboard**
Build a view-only admin interface at `/admin/registrations`:
- Display all records in a clean table format
- Sort by most recent first
- Show all relevant fields
- Responsive design (mobile-friendly)
- Loading and error states

### 6. **Documentation**
Create `BACKEND_SETUP.md` covering:
- Architecture overview
- API endpoint documentation with request/response examples
- Database schema explanation
- Setup and running instructions (dev & production)
- Environment variables
- Troubleshooting section
- Scaling considerations
- Security considerations with recommendations

## Implementation Guidelines

### Best Practices
- ✅ Use async/await with proper error handling
- ✅ Implement request validation on server-side
- ✅ Use TypeScript for type safety
- ✅ Create reusable Prisma client instance (singleton pattern)
- ✅ Add console logging for debugging
- ✅ Structure routes cleanly with proper imports
- ✅ Handle edge cases (empty submissions, malformed data)

### Error Handling
- Return meaningful error messages
- Use appropriate HTTP status codes
- Log errors to console for debugging
- Don't expose sensitive error details to clients

### Database Management
- Create migrations with descriptive names
- Update `.gitignore` to exclude database files
- Provide migration commands in documentation
- Include database reset instructions for development

### Type Safety
- Define TypeScript types for API requests/responses
- Use Prisma-generated types
- Avoid `any` types
- Create interfaces for nested objects

## Deliverables Checklist

- [ ] Prisma schema with complete data model
- [ ] Database migrations created and applied
- [ ] API route handlers with validation
- [ ] Prisma client utility with singleton pattern
- [ ] Admin dashboard component
- [ ] Environment variables configured
- [ ] Comprehensive backend documentation
- [ ] `.gitignore` updated for database files
- [ ] Project builds successfully without errors

## Example API Response Format

```json
{
  "success": true,
  "message": "Record created successfully",
  "id": "unique-identifier",
  "data": { /* record details */ }
}
```

## Testing Checklist

After implementation:
1. Test form submission through UI
2. Verify data appears in admin dashboard
3. Check database records persist
4. Test validation (empty fields, invalid formats)
5. Verify error handling and messaging
6. Test API endpoints with curl/Postman
7. Build project and verify no errors

## Documentation Should Include

- Current architecture diagram (ASCII or conceptual)
- Complete setup instructions
- API endpoint specifications with examples
- Database schema explanation
- Security considerations and recommendations
- Scaling path (PostgreSQL, authentication, email notifications)
- Common troubleshooting scenarios
- Next steps for enhancement

---

**Key Principle**: Build with production readiness in mind - proper validation, error handling, documentation, and structure that can scale as requirements grow.
