/*
  Warnings:

  - You are about to alter the column `investment_term` on the `offer` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `offer` MODIFY `image` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `investment_term` TIMESTAMP NOT NULL,
    MODIFY `expected_return` DOUBLE NOT NULL DEFAULT 0.0,
    MODIFY `status` VARCHAR(191) NOT NULL DEFAULT '';
