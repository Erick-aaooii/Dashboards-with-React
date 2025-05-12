export type CategoriaGasto = 
  | "Comida"
  | "Passagem"
  | "Entretenimento"
  | "Saúde"
  | "Moradia"
  | "Transporte"
  | "Educação"
  | "Lazer"
  | "Roupas"
  | "Tecnologia"
  | "Serviços"
  | "Vestuário"
  | "Cuidado Pessoal"
  | "Pet"
  | "Beleza"
  | "Fitness"
  | "Bancos"
  | "Investimentos"
  | "Seguros"
  | "Outros";

export default interface Data {
    data: string;
    motivo: string
    nomeDaCompra: string
    valor: number
    tipo: CategoriaGasto
}