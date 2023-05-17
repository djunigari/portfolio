-- CreateTable
CREATE TABLE "EducationInstitution" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "site" TEXT,
    "logoImageUrl" TEXT
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "startAt" DATETIME,
    "endAt" DATETIME,
    "institutionId" TEXT NOT NULL,
    CONSTRAINT "Course_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "EducationInstitution" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
