import { Telefone } from './telefone';
export class Estabelecimento {
    id: number;
    nome: string;
    endereco: string;
    telefones: Telefone[] = [];
}
