/*
  Warnings:

  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `jobId` on the `Project` table. All the data in the column will be lost.
  - Added the required column `description` to the `Employer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Employer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `Employer` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Job";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Tecnology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TecnologiesOnEmployer" (
    "tecnologyId" TEXT NOT NULL,
    "employerId" TEXT NOT NULL,

    PRIMARY KEY ("tecnologyId", "employerId"),
    CONSTRAINT "TecnologiesOnEmployer_tecnologyId_fkey" FOREIGN KEY ("tecnologyId") REFERENCES "Tecnology" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TecnologiesOnEmployer_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TecnologiesOnProjects" (
    "tecnologyId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    PRIMARY KEY ("tecnologyId", "projectId"),
    CONSTRAINT "TecnologiesOnProjects_tecnologyId_fkey" FOREIGN KEY ("tecnologyId") REFERENCES "Tecnology" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TecnologiesOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "language" TEXT NOT NULL DEFAULT 'en',
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "gitHubUrl" TEXT
);
INSERT INTO "new_Project" ("description", "id", "name") SELECT "description", "id", "name" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_Employer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "language" TEXT NOT NULL DEFAULT 'en',
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "site" TEXT,
    "logoImageUrl" TEXT,
    "startAt" DATETIME NOT NULL,
    "endAt" DATETIME,
    "isItJob" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Employer" ("id", "logoImageUrl", "name", "site") SELECT "id", "logoImageUrl", "name", "site" FROM "Employer";
DROP TABLE "Employer";
ALTER TABLE "new_Employer" RENAME TO "Employer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
