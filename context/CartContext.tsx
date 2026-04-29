"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Producto } from "@/lib/products"

type ItemCarrito = Producto & { cantidad: number }

type CartContextType = {
  carrito: ItemCarrito[]
  agregarAlCarrito: (producto: Producto) => void
  eliminarDelCarrito: (id: number) => void
  limpiarCarrito: () => void
  totalItems: number
  totalPrecio: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])
  const [cargado, setCargado] = useState(false)
  const limpiarCarrito = () => setCarrito([])

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    try {
      const guardado = localStorage.getItem("carrito")
      if (guardado) setCarrito(JSON.parse(guardado))
    } catch {
      console.error("Error al leer el carrito")
    } finally {
      setCargado(true)
    }
  }, [])

  // Guardar en localStorage cada vez que cambia el carrito
  useEffect(() => {
    if (cargado) {
      localStorage.setItem("carrito", JSON.stringify(carrito))
    }
  }, [carrito, cargado])

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id)
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0)
  const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, totalItems, totalPrecio }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider")
  return context
}