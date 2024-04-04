import { useState } from "react"
import { TypeDocument } from "../../interfaces/typeDocument.interface";

export const DocumentHook = () => {
  const [value] = useState<TypeDocument>({
    errorMessage: "¡Tiene  que seleccione un tipo de documento!",
    label: "Tipo de documento",
    name: "typeDocument",
    defaultValue: 1,
    opciones: [
      {
        value: 1,
        label: "DNI"
      },
      {
        value: 2,
        label: "Carnet de extranjeria"
      },
    ]

  })

  return value
}