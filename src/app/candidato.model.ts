export class Candidato {
    constructor(
        public id?: number,
        public tipo?: string,
        public nome?: string,
        public sexo?: string,
        public email?: string,
        public dataNascimento?: string,
        public estadoCivil?: string,
        public filhos?: number,
        public ddd1?: string,
        public telefone1?: string,
        public tipo1?: string,
        public ddd2?: string,
        public telefone2?: string,
        public tipo2?: string,
        public endereco?: string,
        public numero?: string,
        public complemento?: string,
        public bairro?: string,
        public cidade?: string,
        public uf?: string,
        public formacao?: string,
        public nivelIngles?: string,
        public experiencia?: string,
        public qualificacao?: string,
    ) {}
}
    