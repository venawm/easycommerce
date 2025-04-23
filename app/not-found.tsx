"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority={true}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p className="text-destructive my-4">Could not find requested page</p>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
