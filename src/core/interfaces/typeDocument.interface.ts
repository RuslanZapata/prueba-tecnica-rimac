export interface TypeDocument {
  errorMessage: string;
  label:        string;
  name:      string;
  defaultValue: number;
  opciones:  Opciones[];
}

export interface Opciones {
  value: number;
  label: string;
}