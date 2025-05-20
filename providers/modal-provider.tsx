"use client";

import CreateUserModal from "@/components/modals/users/create-user-modal";
import DeleteUserModal from "@/components/modals/users/delete-user-modal";
import ResetPasswordUserModal from "@/components/modals/users/reset-password-user-modal";
import UpdateUserInfoModal from "@/components/modals/users/update-user-info-modal";
import UpdateUserStatusModal from "@/components/modals/users/update-user-status-modal";
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
      <CreateUserModal />
      <UpdateUserInfoModal />
      <UpdateUserStatusModal />
      <ResetPasswordUserModal/>
      <DeleteUserModal/>
    </>
  );
};
