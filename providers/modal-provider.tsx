"use client";

import {
  CreateUserModal,
  ResetPasswordUserModal,
  DeleteUserModal,
  UpdateUserInfoModal,
  UpdateUserStatusModal,
  CreateRoleModal,
  UpdateRoleModal,
} from "@/components/modals";
import DeleteRoleModal from "@/components/modals/roles/delete-role-modal";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* user */}
      <CreateUserModal />
      <UpdateUserInfoModal />
      <UpdateUserStatusModal />
      <ResetPasswordUserModal />
      <DeleteUserModal />
      {/* role */}
      <CreateRoleModal />
      <UpdateRoleModal />
      <DeleteRoleModal />
    </>
  );
};
