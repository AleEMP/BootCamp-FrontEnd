import { Home, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cart-store";
// import { useState } from "react";

export const Header = () => {
  const { cart } = useCartStore();
  // const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <div className="relative flex px-4 items-center justify-between h-16 bg-red-500 text-white">
      <Link to={"/"}>
        <Home />
      </Link>

      <div className="flex items-center gap-4">
        <Link to={"/products"}>Tienda</Link>
        {/* <button
          className="cursor-pointer relative"
          onClick={() => setOpenCart(!openCart)}
        >
          <ShoppingCart />
          <label className="bg-blue-600 text-xs rounded-full w-4 h-4 absolute -top-2 -right-2">
            {cart.length}
          </label>
        </button> */}
        <Link
          to="/cart"
          className="cursor-pointer relative text-white hover:text-gray-200"
        >
          <ShoppingCart />
          <label className="bg-blue-600 text-xs rounded-full w-4 h-4 absolute -top-2 -right-2 flex items-center justify-center">
            {cart.length}
          </label>
        </Link>
      </div>

      {/* {openCart && (
        <div className="absolute right-5 top-14 max-w-[280px] bg-white text-black border border-gray-950/30 h-fit rounded-lg flex flex-col gap-6 p-2">
          {cart.map((product) => (
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="text-xs">{product.title}</h3>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};
