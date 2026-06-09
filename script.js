function calcularLucroComJS() {
    // Captura os elementos e valores digitados na tela
    const hectaresInput = document.getElementById('hectares');
    const culturaSelect = document.getElementById('cultura');
    const resultadoDiv = document.getElementById('resultado');

    const hectares = parseFloat(hectaresInput.value);
    const cultura = culturaSelect.value;

    // Validação de segurança: verifica se o usuário digitou um número válido
    if (!hectares || hectares <= 0) {
        alert("Por favor, insira uma quantidade válida de hectares.");
        hectaresInput.focus();
        return;
    }

    // Variáveis de cálculo (Valores médios estimados de mercado)
    let precoSaca = 0;
    let rendimentoPorHectare = 0; // medido em sacas

    // Lógica de decisão para cada tipo de cultura
    switch (cultura) {
        case "soja":
            rendimentoPorHectare = 60;  // Média de 60 sacas por hectare
            precoSaca = 135.00;         // Preço estimado da saca de soja
            break;
        case "milho":
            rendimentoPorHectare = 100; // Média de 100 sacas por hectare
            precoSaca = 60.00;          // Preço estimado da saca de milho
            break;
        case "algodao":
            rendimentoPorHectare = 280; // Média de 280 arrobas/sacos equivalentes
            precoSaca = 85.00;          // Preço estimado
            break;
        default:
            alert("Cultura não reconhecida.");
            return;
    }

    // Cálculos matemáticos
    const producaoEstimada = hectares * rendimentoPorHectare;
    const faturamentoEstimado = producaoEstimada * precoSaca;

    // Formatação dos números para a moeda e padrões brasileiros (pt-BR)
    const producaoFormatada = producaoEstimada.toLocaleString('pt-BR');
    const faturamentoFormatado = faturamentoEstimado.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Exibe o bloco de resultado e injeta o conteúdo na página HTML
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <h3>Resultado da Simulação:</h3>
        <p><strong>Cultura selecionada:</strong> ${cultura.toUpperCase()}</p>
        <p><strong>Produção Estimada:</strong> ${producaoFormatada} sacas</p>
        <p><strong>Faturamento Bruto Estimado:</strong> ${faturamentoFormatado}</p>
        <small>*Valores fictícios baseados em médias gerais de mercado para fins ilustrativos.</small>
    `;
}