import { Profissional } from './profissional';
import { Estabelecimento } from './Estabelecimento';
export class Vinculo {
    id: number;
    idProfissional: number;
    nomeProfissional: string;
    nomeEstabelecimento: string;
    profissional: Profissional = new Profissional();
    estabelecimento: Estabelecimento = new Estabelecimento();
}
