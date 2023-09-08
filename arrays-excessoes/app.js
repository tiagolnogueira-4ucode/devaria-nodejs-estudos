try{
    const listaDeProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Café",
        "Laranja",
        "Macarrão",
        "Sabonete",
        "Detergente"
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(protudo => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    });
    
    listaProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));
    
    const listaProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento  => {
        return !listaProdutosSolicitadosDisponiveis.find(produto => produto === argumento);
    });
    
    listaProdutosSolicitadosNaoDisponiveis.forEach(produto => console.log(`Este produto nós não temos: ${produto}`));
    
    const listaProdutosOrdenados = listaDeProdutosDisponiveis.sort();
    listaProdutosOrdenados.forEach(produto => console.log(produto));
} catch(e){
    console.log('Não foi possível executar o pedido de compra');
}
