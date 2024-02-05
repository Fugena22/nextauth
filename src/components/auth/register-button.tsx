"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface RegisterButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function RegisterButton({
  children,
  mode = "redirect",
  asChild,
}: RegisterButtonProps) {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/register");
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
