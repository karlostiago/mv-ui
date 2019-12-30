import { Telefone } from './telefone';
import { Estabelecimento } from './Estabelecimento';
export class Profissional {
    id: number;
    nome: string;
    endereco: string;
    telefones: Telefone[] = [];
    estabelecimentos: Estabelecimento[] = [];
}
