import React from "react";
import { Metadata } from "next";
import ProductForm from "@/components/admin/product-form";

export const metadata: Metadata = {
  title: "Create Product",
};

const CreatePage = () => {
  return (
    <div>
      <h2 className="h2-bold">
        <div className="my-8">
          <ProductForm type="Create" />
        </div>
      </h2>
    </div>
  );
};

export default CreatePage;
