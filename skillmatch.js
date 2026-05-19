//Dados do candidado

const candidato = {
    nome: "Thaize Bertelli",
    area: ["Front-End", "UX/UI Design"],
    habilidades: ["JavaScript", "GitHub", "Figma", "HTML", "CSS"],
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
    const habilidadesFaltantes = vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requisito));
    
    //cálculo porcentagem
    const compatibilidade = (habilidadesPossuidas.length / vaga.requisitos.length) * 100;

    //Classificação
    let classificacao = "";

    if (compatibilidade >= 80){
        classificacao = "Alta compatibilidade"
    } else if (compatibilidade >= 50){
        classificacao = "Média compatibilidade"
    } else {
        classificacao = "Baixa compatibilidade"
    }

    //Retorno Informações
    return {
        empresa:vaga.empresa,
        cargo:vaga.cargo,
        compatibilidade: compatibilidade.toFixed(0),
        habilidadesPossuidas,
        habilidadesFaltantes,
        classificacao
    };
}

//Gerar resultados para analisar a vaga com maior compatibilidade

const resultados = vagas.map(vaga =>
    analisarCompatibilidade(candidato, vaga)
);

//Analisar vaga com maior compatibilidade

const melhorVaga = resultados.reduce((melhor, atual) => {
    if (Number(atual.compatibilidade) > Number(melhor.compatibilidade)){
        return atual;
    } else{
        return melhor;
    }
});


//Resultado da compatibilidade

console.log("-----Ánalise de Vagas-----");

vagas.forEach(vaga => { let resultado = analisarCompatibilidade(candidato, vaga);

    console.log(`EMPRESA: ${resultado.empresa}
CARGO: ${resultado.cargo}
        
COMPATIBILIDADE: ${resultado.compatibilidade}%
CLASSIFICAÇÃO: ${resultado.classificacao}
                
HABILIDADE POSSUIDAS: ${resultado.habilidadesPossuidas.join(" - ")}
                
HABILIDADES FALTANTES: ${resultado.habilidadesFaltantes.join(" - ")}
----------------------------`
     );
});

//Resultado da melhor vaga

console.log(`-----Melhor Vaga-----
    
EMPRESA: ${melhorVaga.empresa}
CARGO: ${melhorVaga.cargo}
COMPATIBILIDADE: ${melhorVaga.compatibilidade}%
----------------------------`

)
