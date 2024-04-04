import { useState } from "react"

export const DocumentHook = () => {
  const [value] = useState({
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