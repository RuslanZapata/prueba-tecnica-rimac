export interface FormInput {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>)=>void ;
  errorMessage: string;
  defaultValue: string | number;
  label: string;
  opciones: Opciones[];
  selectorWidth: boolean;
}

export interface Opciones {
  value: number;
  label: string;
}