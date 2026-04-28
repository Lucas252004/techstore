"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const { totalItems } = useCart()
  const router = useRouter()
  const [busqueda, setBusqueda] = useState("")

  const handleBusqueda = (e: React.FormEvent) => {
    e.preventDefault()
    if (busqueda.trim()) {
      router.push(`/productos?q=${encodeURIComponent(busqueda.trim())}`)
      setBusqueda("")
    }
  }

return (
  <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">

      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 flex-shrink-0 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        TechStore
      </Link>

      {/* Buscador centrado */}
      <form onSubmit={handleBusqueda} className="w-full max-w-sm relative">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
        />
      </form>

      {/* Links */}
      <div className="flex items-center gap-6 text-sm flex-shrink-0">
        <Link href="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
        <Link href="/productos" className="hover:text-blue-400 transition-colors">Productos</Link>
        <Link href="/reparaciones" className="hover:text-blue-400 transition-colors">
          Reparaciones
        </Link>
        <Link href="/contacto" className="hover:text-blue-400 transition-colors">Contacto</Link>
        <Link href="/carrito" className="relative hover:text-blue-400 transition-colors">
          Carrito
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-4 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

    </div>
  </nav>
)
}