import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

const Home = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList title="New Arrivals" data={latestProducts} />
    </div>
  );
};

export default Home;
