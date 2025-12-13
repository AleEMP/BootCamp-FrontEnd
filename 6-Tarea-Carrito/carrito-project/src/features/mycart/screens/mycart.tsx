import { Trash2, Plus, Minus } from "lucide-react";
import { useCartStore } from "@/common/store/cart-store";
import type { Product } from "@/common/types";

export function Mycart() {
  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    decreaseProductQuantity,
  } = useCartStore();

  const groupedCart = cart.reduce((acc, product) => {
    const existing = acc.find((item) => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      acc.push({ ...product, qty: 1 });
    }
    return acc;
  }, [] as (Product & { qty: number })[]);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6">
        Mi Carrito ({cart.length} productos)
      </h2>

      {groupedCart.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Carrito vacio</p>
      ) : (
        <div className="flex flex-col gap-4">
          {groupedCart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain p-1"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg truncate w-40 sm:w-64">
                    {item.title}
                  </span>
                  <span className="text-gray-500 text-sm">
                    ${item.price} c/u
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <button
                    onClick={() => decreaseProductQuantity(item.id)}
                    className="p-2 hover:bg-gray-100 text-gray-600 transition-colors"
                    title="Quitar uno"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="text-sm font-bold px-3 bg-gray-50 h-full flex items-center justify-center min-w-10">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => addProductToCart(item)}
                    className="p-2 hover:bg-gray-100 text-gray-600 transition-colors"
                    title="Agregar uno"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <span className="font-bold text-lg w-20 text-right hidden sm:block">
                  ${(item.price * item.qty).toFixed(2)}
                </span>

                <button
                  onClick={() => removeProductFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 p-2 transition-colors"
                  title="Eliminar todo"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 p-6 bg-gray-50 rounded-lg flex justify-between items-center border-t border-gray-200">
            <span className="text-xl font-light">Total a Pagar:</span>
            <span className="text-3xl font-bold text-gray-800">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
