import { Suspense } from "react"
import ProductosContent from "./ProductContent"

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando productos...</div>}>
      <ProductosContent />
    </Suspense>
  )
}