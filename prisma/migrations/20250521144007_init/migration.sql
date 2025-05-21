/*
  Warnings:

  - You are about to drop the `_RolePermission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RolePermission" DROP CONSTRAINT "_RolePermission_A_fkey";

-- DropForeignKey
ALTER TABLE "_RolePermission" DROP CONSTRAINT "_RolePermission_B_fkey";

-- DropTable
DROP TABLE "_RolePermission";

-- CreateIndex
CREATE INDEX "RolePermission_roleId_permissionId_idx" ON "RolePermission"("roleId", "permissionId");

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
