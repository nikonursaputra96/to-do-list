/*
  Warnings:

  - You are about to drop the column `ItemId` on the `Checklist` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_checklistId_fkey";

-- AlterTable
ALTER TABLE "Checklist" DROP COLUMN "ItemId";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "Checklist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
