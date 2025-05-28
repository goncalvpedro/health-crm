/*
  Warnings:

  - The values [ACOMPANHAMENTO,RESTAURAÇÃO,CANAL,CLAREAMENTO] on the enum `ProcCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProcCategory_new" AS ENUM ('NO_CATEGORY', 'ENDODONTIA', 'ESTÉTICA', 'DENTÍSTICA', 'CIRURGIA', 'PRÓTESE');
ALTER TABLE "procedures" ALTER COLUMN "category" DROP DEFAULT;
ALTER TABLE "procedures" ALTER COLUMN "category" TYPE "ProcCategory_new" USING ("category"::text::"ProcCategory_new");
ALTER TYPE "ProcCategory" RENAME TO "ProcCategory_old";
ALTER TYPE "ProcCategory_new" RENAME TO "ProcCategory";
DROP TYPE "ProcCategory_old";
ALTER TABLE "procedures" ALTER COLUMN "category" SET DEFAULT 'NO_CATEGORY';
COMMIT;

-- AlterTable
ALTER TABLE "procedures" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "category" SET DEFAULT 'NO_CATEGORY';
