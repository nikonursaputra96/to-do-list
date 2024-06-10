-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_checklistId_fkey";

-- AlterTable
ALTER TABLE "Checklist" ADD COLUMN     "ItemId" INTEGER;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "Checklist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
