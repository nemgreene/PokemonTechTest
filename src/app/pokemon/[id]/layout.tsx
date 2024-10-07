import Link from "next/link";
import React from "react";
import { PokeDex, PDContext } from "../../utilities";
import ContextWrapper from "@/app/ContextWrapper";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="p-5">
        <Link href={"/"} className="p-3">
          Back
        </Link>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </main>
  );
}
