import { useState } from "react"

export const PhoneHook = () => {
  const [value] = useState({
    name: "phone",
    type: "text",
    placeholder: "Ingrese su número de celular",
    errorMessage: "¡El número de celular debe tener 9 caracteres y solo debe incluir números!",
    label: "Celular",
    pattern: "^[0-9]{3,16}$",
    required: true,
  })

  return value
}