-- CreateTable
CREATE TABLE "Employer" (
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

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "language" TEXT NOT NULL DEFAULT 'en',
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "gitHubUrl" TEXT
);

-- CreateTable
CREATE TABLE "Tecnology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "iconUrl" TEXT NOT NULL
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
