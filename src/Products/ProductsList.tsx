import * as React from "react";
import { connect } from "react-redux";
import { useState } from "react";

interface ProductsListProps {}
interface Product {
  title: string;
  price: number;
  id: string;
}

const initialProducts = [
  { title: "Escape From Tarkov", price: 60, id: "111" },
  { title: "Hunt: Showdown", price: 70, id: "112" },
  { title: "Hell Let Loose", price: 55, id: "113" },
];

const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const [products, setProducts] = useState(initialProducts);
//   const [products, setProducts] = useState<Product[]>(initialProducts);

  return (
    <div>
      <h2>Games List</h2>
      {initialProducts.map((product) => (
        <div key={product.id}>
          <span>
            {`${product.title}`}: {`${product.price}`}
          </span>

          <button
            onClick={() => {
              setProducts(prevProducts => [{ title: "Half Life", price: 100, id: "114" }, ...prevProducts]);
            }}
          >
            Add Product
          </button>
        </div>
      ))}
    </div>
  );
};

// const mapState2Props = state => {
//   return {
//   };
// }

// export default connect(mapState2Props)(App);
export default ProductsList;
