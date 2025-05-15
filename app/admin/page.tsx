import EmbedCode from "@/components/embed-code"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Gestionar Contenido</h2>
        <p className="mb-4">
          Desde aquí puedes gestionar el contenido que aparece en tu galería de noticias. En una implementación real,
          conectarías con tu CMS o base de datos.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/admin/create">Añadir nuevo elemento</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/manage">Gestionar elementos existentes</Link>
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Vista previa</h2>
        <p className="mb-4">
          Puedes ver cómo se verá tu galería de noticias en la página principal o en la versión embebida.
        </p>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/" target="_blank">
              Ver página principal
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/embed" target="_blank">
              Ver versión embebida
            </Link>
          </Button>
        </div>
      </div>

      <EmbedCode />
    </div>
  )
}
