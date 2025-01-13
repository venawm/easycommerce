import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const Home = async () => {
  return (
    <div>
      <ProductList title="New Arrivals" data={sampleData.products} limit={4} />
    </div>
  );
};

export default Home;
