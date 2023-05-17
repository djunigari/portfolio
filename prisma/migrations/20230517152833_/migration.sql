/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Tecnology` table. All the data in the column will be lost.
  - Added the required column `iconName` to the `Tecnology` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tecnology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "iconName" TEXT NOT NULL
);
INSERT INTO "new_Tecnology" ("id", "name") SELECT "id", "name" FROM "Tecnology";
DROP TABLE "Tecnology";
ALTER TABLE "new_Tecnology" RENAME TO "Tecnology";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
