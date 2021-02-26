/*
  Warnings:

  - You are about to drop the column `imageId` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `recipeId` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Picture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "publicIds" TEXT,
    "recipeId" INTEGER NOT NULL,
    FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Picture" ("id", "publicIds") SELECT "id", "publicIds" FROM "Picture";
DROP TABLE "Picture";
ALTER TABLE "new_Picture" RENAME TO "Picture";
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "background" TEXT,
    "name" TEXT,
    "email" TEXT
);
INSERT INTO "new_Recipe" ("id", "title", "ingredients", "background", "name", "email") SELECT "id", "title", "ingredients", "background", "name", "email" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
