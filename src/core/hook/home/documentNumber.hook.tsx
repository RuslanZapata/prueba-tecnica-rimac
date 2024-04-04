import { useState } from "react"

export const DocumentNumberHook = () => {
  const [value] = useState({
    name: "documentNumber",
    type: "text",
    placeholder: "Ingrese su número de DNI",
    errorMessage: "¡El número de DNI debe tener 8 caracteres y solo debe incluir números!",
    label: "Nro. de documento",
    pattern: "^[0-9]{3,16}$",
    required: true,
  })

  return value
}