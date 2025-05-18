/*
  Warnings:

  - You are about to drop the column `group` on the `Permission` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "RoleStatus" AS ENUM ('System', 'User');

-- AlterTable
ALTER TABLE "Permission" DROP COLUMN "group",
ADD COLUMN     "module" TEXT,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "status" "RoleStatus" NOT NULL DEFAULT 'System';

-- DropEnum
DROP TYPE "PermissionGroup";
