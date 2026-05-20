//Função análise de compatibilidade

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
}


iniciarSistema();
