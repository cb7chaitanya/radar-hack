-- DropIndex
DROP INDEX "Prompt_userId_key";

-- DropIndex
DROP INDEX "Response_userId_key";

-- DropIndex
DROP INDEX "TokenCount_userId_key";

-- AlterTable
ALTER TABLE "Prompt" ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "TokenCount" ALTER COLUMN "timestamp" SET DEFAULT CURRENT_TIMESTAMP;
