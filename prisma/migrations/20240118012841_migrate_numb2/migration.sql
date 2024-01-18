/*
  Warnings:

  - You are about to drop the column `Filler` on the `blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `blog` DROP COLUMN `Filler`;

-- AlterTable
ALTER TABLE `profile` MODIFY `bio` VARCHAR(191) NULL;
