/*
  Warnings:

  - You are about to drop the `EducationInstitution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `degree` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `endAt` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `institutionId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `startAt` on the `Course` table. All the data in the column will be lost.
  - Added the required column `academyId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "EducationInstitution";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "site" TEXT,
    "logoImageUrl" TEXT,
    "degree" TEXT NOT NULL,
    "field" TEXT,
    "startAt" DATETIME NOT NULL,
    "endAt" DATETIME
);

-- CreateTable
CREATE TABLE "Academy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "academyId" TEXT NOT NULL,
    CONSTRAINT "Course_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "Academy" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("id", "name") SELECT "id", "name" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
