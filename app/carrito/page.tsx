"use client"

import { useCart } from "@/context/CartContext"
import Link from "next/link"

export default function Carrito() {
  const { carrito, eliminarDelCarrito, totalItems, totalPrecio } = useCart()

  if (carrito.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="text-5xl mb-4">🛒</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h1>
        <p className="text-gray-500 mb-8">Agregá productos para verlos acá.</p>
        <Link href="/productos" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Ver productos
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Tu carrito ({totalItems} {totalItems === 1 ? "producto" : "productos"})
      </h1>

      <div className="space-y-4 mb-8">
        {carrito.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4">
            <div className="bg-gray-100 rounded-lg p-3 w-20 h-20 flex items-center justify-center flex-shrink-0">
              <img src={item.imagen} alt={item.nombre} className="h-full object-contain" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{item.nombre}</p>
              <p className="text-sm text-gray-500">{item.descripcion}</p>
              <p className="text-blue-600 font-bold mt-1">${item.precio.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">x{item.cantidad}</span>
              <button
                onClick={() => eliminarDelCarrito(item.id)}
                className="text-red-400 hover:text-red-600 text-sm transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Subtotal ({totalItems} productos)</span>
          <span className="font-bold text-xl text-gray-800">${totalPrecio.toLocaleString()}</span>
        </div>
        <Link
          href="/checkout"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
        >
          Finalizar compra →
        </Link>
        <Link href="/productos" className="block text-center text-gray-500 text-sm mt-3 hover:text-gray-700">
          ← Seguir comprando
        </Link>
      </div>
    </div>
  )
}