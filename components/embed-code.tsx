"use client"

import { useState } from "react"
import { CopyIcon, CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmbedCode() {
  const [copied, setCopied] = useState(false)
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

  const iframeCode = `<iframe src="${baseUrl}/embed" width="100%" height="800" frameborder="0"></iframe>`

  const handleCopy = () => {
    navigator.clipboard.writeText(iframeCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-8 p-4 bg-muted rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Código para embeber</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Copia este código y pégalo en tu sitio web para mostrar la galería de noticias:
      </p>
      <div className="bg-background p-4 rounded border mb-4 overflow-x-auto">
        <code className="text-sm">{iframeCode}</code>
      </div>
      <Button onClick={handleCopy} variant="outline" size="sm">
        {copied ? (
          <>
            <CheckIcon className="h-4 w-4 mr-2" />
            Copiado
          </>
        ) : (
          <>
            <CopyIcon className="h-4 w-4 mr-2" />
            Copiar código
          </>
        )}
      </Button>
    </div>
  )
}
