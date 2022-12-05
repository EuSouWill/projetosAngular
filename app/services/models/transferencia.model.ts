

export interface Transferencia {
  id?: string;
  valor: number;
  destino: number | string;
  origem: number | string;
  data?: string;
}
