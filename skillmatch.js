//Dados do candidado

const candidato = {
    nome: "Thaize Bertelli",
    area: ["Front-End", "UX/UI Design"],
    habilidades: ["JavaScript", "GitHub", "Kanban", "Figma", "HTML", "CSS"],
    experienciaMeses: 8,
    estudandoAtualmente: true,
};

//Lista de vagas

const vagas = [
    {
        id: 1,
        empresa: "TechStart",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["JavaScript", "GitHub", "Lógica de Programação", "HTML", "CSS"],
        Salario: 2800,
        modalidade: "Remoto",
        nivel: "Júnior",
        beneficios: ["Vale alimentação", "Plano de saúde", "Auxílio home office"],
        ativa: true
    },

    {
        id: 2,
        empresa: "CodeLab",
        cargo: "Estágio Front-End",
        requisitos: ["JavaScript", "Kanban", "HTML"],
        Salario: 1200,
        modalidade: "Híbrido",
        nivel: "Estágio",
        beneficios: ["Vale Transporte", "Curso interno"],
        ativa: true
    },

    {
        id: 3,
        empresa: "WebSolutions",
        cargo: "Programador Front-end Júnior",
        requisitos: ["JavaScript", "Figma", "HTML", "CSS"],
        Salario: 2500,
        modalidade: "Presencial",
        nivel: "Júnior",
        beneficios: ["Vale alimentação", "Plano de saúde", "Vale transporte", "Gympass"],
        ativa: false
    },
];

//Funções

function analisarCompatibilidade(candidato, vaga){

    //Habilidades possuidas
    const habilidadesPossuidas = vaga.requisitos.filter(requisito => candidato.habilidades.includes(requisito));

    //habilidades faltantes
    const habilidadesFaltantes = vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requsiito));
    
    //cálculo porcentagem
    const compatibilidade = (habilidadesPossuidas.lenght / vaga.requisitos.lenght) * 100;

    //Classificação
    let classificação = "";

    if (compatibilidade >= 80){
        classificação = "Alta compatibilidade"
    } else if (compatibilidade >= 50){
        classificação = "Média compatibilidade"
    } else {
        classificação = "Baixa compatibilidade"
    }

    //Retorno Informações
    return {
        empresa:vaga.empresa,
        cargo:vaga.cargo,
        compatibilidade: compatibilidade.toFixed(0),
        habilidadesPossuidas,
        habilidadesFaltantes,
        classificação
    };
}


//Teste inicial
console.log("Sistema SkillMatch iniciado com sucesso!");
console.log(candidato);
console.log(vagas);