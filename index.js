// Pegando valores importantes no DOM
const inputItem = document.getElementById('input-item');
const botaoAdicionar = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');

// Adicionando evento de clique ao botão "Adicionar"
botaoAdicionar.addEventListener('click', function(evento) {
    evento.preventDefault();
    const itemLista = inputItem.value;
// Condicional para verificar se o campo de entrada está vazio
    if (itemLista === "") {
        alert("Por favor, insira um item para adicionar à lista de compras.");
        return;
    } 
    
    });