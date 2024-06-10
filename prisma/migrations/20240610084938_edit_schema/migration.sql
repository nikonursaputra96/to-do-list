/*
  Warnings:

  - You are about to drop the column `item` on the `Checklist` table. All the data in the column will be lost.
  - Added the required column `ItemId` to the `Checklist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Checklist" DROP COLUMN "item",
ADD COLUMN     "ItemId" INTEGER NOT NULL;
