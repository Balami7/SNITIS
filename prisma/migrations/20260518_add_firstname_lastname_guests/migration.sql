-- AlterTable: replace fullName with firstName + lastName, add numberOfGuests
ALTER TABLE "registrations" ADD COLUMN "firstName" TEXT NOT NULL DEFAULT '';
ALTER TABLE "registrations" ADD COLUMN "lastName" TEXT NOT NULL DEFAULT '';
ALTER TABLE "registrations" ADD COLUMN "numberOfGuests" INTEGER NOT NULL DEFAULT 1;

-- Migrate existing data: split fullName into firstName / lastName
UPDATE "registrations"
SET
  "firstName" = TRIM(SPLIT_PART("fullName", ' ', 1)),
  "lastName"  = TRIM(SUBSTRING("fullName" FROM POSITION(' ' IN "fullName") + 1));

-- Drop old column
ALTER TABLE "registrations" DROP COLUMN "fullName";
