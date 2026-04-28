import Link from "next/link"

const redes = [
  {
    nombre: "Instagram",
    usuario: "@techstore.ar",
    url: "https://instagram.com/techstore.ar",
    color: "hover:border-pink-700 hover:bg-pink-950/30",
    texto: "hover:text-pink-400",
    icono: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    nombre: "Facebook",
    usuario: "TechStore Argentina",
    url: "https://facebook.com/techstore.ar",
    color: "hover:border-blue-700 hover:bg-blue-950/30",
    texto: "hover:text-blue-400",
    icono: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    nombre: "WhatsApp",
    usuario: "+54 9 11 0000-0000",
    url: "https://wa.me/5491100000000",
    color: "hover:border-emerald-700 hover:bg-emerald-950/30",
    texto: "hover:text-emerald-400",
    icono: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    nombre: "TikTok",
    usuario: "@techstore.ar",
    url: "https://tiktok.com/@techstore.ar",
    color: "hover:border-slate-500 hover:bg-slate-800/30",
    texto: "hover:text-slate-300",
    icono: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
]

export default function Contacto() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-[#0f1117] text-white py-16 px-4 text-center border-b border-[#2a2d3a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.12),transparent_70%)]" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-slate-100 mb-3">Contacto</h1>
          <p className="text-slate-400 max-w-md mx-auto">
            Escribinos por el medio que prefieras y te respondemos a la brevedad.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Formulario */}
        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-6">Envianos un mensaje</h2>
          <div className="bg-[#161820] border border-[#2a2d3a] rounded-2xl p-7 space-y-5">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Apellido</label>
                <input
                  type="text"
                  placeholder="Tu apellido"
                  className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Asunto</label>
              <select className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all">
                <option value="">Seleccioná un tema</option>
                <option value="compra">Consulta sobre compra</option>
                <option value="reparacion">Servicio técnico</option>
                <option value="envio">Seguimiento de envío</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Mensaje</label>
              <textarea
                rows={5}
                placeholder="¿En qué te podemos ayudar?"
                className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold transition-all active:scale-95">
              Enviar mensaje
            </button>

          </div>
        </div>

        {/* Redes y datos */}
        <div className="flex flex-col gap-8">

          {/* Redes sociales */}
          <div>
            <h2 className="text-xl font-bold text-slate-100 mb-6">Seguinos en redes</h2>
            <div className="grid grid-cols-2 gap-3">
              {redes.map((red) => (
                <Link
                  key={red.nombre}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-[#161820] border border-[#2a2d3a] rounded-xl p-4 flex items-center gap-3 transition-all ${red.color}`}
                >
                  <span className={`text-slate-400 transition-colors ${red.texto}`}>
                    {red.icono}
                  </span>
                  <div>
                    <p className="text-slate-100 text-sm font-medium">{red.nombre}</p>
                    <p className="text-slate-500 text-xs">{red.usuario}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Info de contacto */}
          <div>
            <h2 className="text-xl font-bold text-slate-100 mb-6">Información</h2>
            <div className="bg-[#161820] border border-[#2a2d3a] rounded-2xl p-6 space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-blue-950 border border-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-100 text-sm font-medium">Dirección</p>
                  <p className="text-slate-400 text-sm">Av. Corrientes 1234, CABA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-blue-950 border border-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-100 text-sm font-medium">Horario</p>
                  <p className="text-slate-400 text-sm">Lun–Vie: 9:00 a 19:00</p>
                  <p className="text-slate-400 text-sm">Sáb: 10:00 a 15:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-blue-950 border border-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-100 text-sm font-medium">Email</p>
                  <p className="text-slate-400 text-sm">hola@techstore.ar</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}