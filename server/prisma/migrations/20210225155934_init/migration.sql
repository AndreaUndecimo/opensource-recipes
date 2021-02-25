/*
  Warnings:

  - You are about to drop the column `imageIds` on the `Recipe` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Picture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "publicIds" TEXT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "background" TEXT,
    "name" TEXT,
    "email" TEXT,
    "imageId" INTEGER,
    FOREIGN KEY ("imageId") REFERENCES "Picture" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("id", "title", "ingredients", "background", "name", "email") SELECT "id", "title", "ingredients", "background", "name", "email" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
