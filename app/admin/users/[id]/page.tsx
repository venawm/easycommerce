import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";
import UpdateUserForm from "./update-user-form";

export const metadata: Metadata = {
  title: "User Edit",
};
const UserEditPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const user = await getUserById(id);

  if (!user) notFound();

  const formattedUser = {
    id: user.id,
    name: user.name || "", // Convert null to empty string
    email: user.email,
    role: user.role || "user", // Convert null to default role
  };
  return (
    <div className="space-y-8 max-w-lg mx-auto ">
      <h1 className="h2-bold">Update User</h1>
      <UpdateUserForm user={formattedUser} />
    </div>
  );
};

export default UserEditPage;
