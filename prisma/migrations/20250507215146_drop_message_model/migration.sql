/*
  Warnings:

  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_appealId_fkey";

-- AlterTable
ALTER TABLE "Appeal" ADD COLUMN     "message" TEXT;

-- DropTable
DROP TABLE "Message";
