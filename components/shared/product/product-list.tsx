import ProductCard from "./product-card";
import { Product } from "@/types";

const ProductList = ({ data, title }: { data: Product[]; title?: string }) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>No Products found</div>
      )}
    </div>
  );
};

export default ProductList;
