import { Telefone } from './telefone';
export class Profissional {
    id: number;
    nome: string;
    endereco: string;
    telefones: Telefone[] = [];
}
