// Pegando valores importantes no DOM
const inputItem = document.getElementById('input-item');
const botaoAdicionar = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');
let contador = 0;

// Adicionando evento de clique ao botão "Adicionar"
botaoAdicionar.addEventListener('click', function(evento) {
    evento.preventDefault();
    let itemLista = inputItem.value;
// Condicional para verificar se o campo de entrada está vazio
    if (itemLista === "") {
        alert("Por favor, insira um item para adicionar à lista de compras.");
        return;
    } 

//Criando elementos e adicionando item a lista
    const novoItemLista = document.createElement("li");
    const containerLista = document.createElement("div");
    containerLista.classList.add("lista-item-container");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-${contador}`;
    const textoItem = document.createElement("p");
    textoItem.textContent = itemLista;
    containerLista.appendChild(checkbox);
    containerLista.appendChild(textoItem);
    novoItemLista.appendChild(containerLista);


// Limpando o campo de entrada após adicionar o item à lista
    inputItem.value = "";
    });