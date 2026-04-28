"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const { totalItems } = useCart()
  const router = useRouter()
  const [busqueda, setBusqueda] = useState("")
  const [menuAbierto, setMenuAbierto] = useState(false)

  const handleBusqueda = (e: React.FormEvent) => {
    e.preventDefault()
    if (busqueda.trim()) {
      router.push(`/productos?q=${encodeURIComponent(busqueda.trim())}`)
      setBusqueda("")
      setMenuAbierto(false) // 👉 cerrar menú en mobile
    }
  }

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          TechStore
        </Link>

        {/* Buscador (desktop) */}
        <form onSubmit={handleBusqueda} className="hidden md:block w-full max-w-sm">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
          />
        </form>

        {/* Links (desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-400">Inicio</Link>
          <Link href="/productos" className="hover:text-blue-400">Productos</Link>
          <Link href="/reparaciones" className="hover:text-blue-400">Reparaciones</Link>
          <Link href="/contacto" className="hover:text-blue-400">Contacto</Link>
          <Link href="/carrito" className="relative hover:text-blue-400">
            Carrito
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>
      </div>

      {/* Menú mobile */}
      {menuAbierto && (
        <div className="md:hidden mt-4 flex flex-col gap-4">

          {/* Buscador mobile */}
          <form onSubmit={handleBusqueda}>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
            />
          </form>

          {/* Links mobile */}
          <Link href="/" onClick={() => setMenuAbierto(false)}>Inicio</Link>
          <Link href="/productos" onClick={() => setMenuAbierto(false)}>Productos</Link>
          <Link href="/reparaciones" onClick={() => setMenuAbierto(false)}>Reparaciones</Link>
          <Link href="/contacto" onClick={() => setMenuAbierto(false)}>Contacto</Link>
          <Link href="/carrito" onClick={() => setMenuAbierto(false)} className="relative">
            Carrito ({totalItems})
          </Link>
        </div>
      )}
    </nav>
  )
}