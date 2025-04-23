import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ViewAllProducts = () => {
  return (
    <div className="flex justify-center items-center my-8 ">
      <Button asChild className="px-8 py-4 text-lg font-semibold">
        <Link href="/search">View all Products</Link>
      </Button>
    </div>
  );
};

export default ViewAllProducts;
