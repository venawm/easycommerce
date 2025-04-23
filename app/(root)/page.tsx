import ProductList from "@/components/shared/product/product-list";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";
import React from "react";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ViewAllProducts from "@/components/shared/product/view-all-products";

const page = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  return (
    <div>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="New Releases" limit={8} />
      <ViewAllProducts />
    </div>
  );
};

export default page;
