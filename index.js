//Pegando elementos importantes do DOM
const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contatorItens = 0; // Contador para gerar IDs únicos para os checkboxes



//Adicionando um evento de click no botão "Adicionar"
botaoAdicionar.addEventListener("click", function (evento) {
    evento.preventDefault(); // Evita que o formulário seja enviado, assim a pagina não da reload
    let itemLista = inputItem.value; //Pega o valor do input
    //Verifica se o input não está vazio
    if (itemLista == "") {
        alert("Por favor, digite um item para adicionar à lista de compras.");
        return; // Sai da função para evitar adicionar um item vazio
    }

    const novoItem = document.createElement("li"); //Cria um novo elemento "li"
    const containerItem = document.createElement("div"); //Cria um novo elemento "div" para conter o checkbox e o texto
    containerItem.classList.add("lista-item-container"); //Adiciona a classe "lista-item-container" ao container do item
    const checkbox = document.createElement("input"); //Cria um novo elemento "input" para o checkbox
    checkbox.type = "checkbox"; //Define o tipo do input como checkbox
    checkbox.id = `checkbox-${contatorItens}`; //Define um ID único para o checkbox usando o contador
    const textoItem = document.createElement("p"); //Cria um novo elemento "p" para o texto do item
    textoItem.textContent = itemLista; //Define o texto do item como o valor do input
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            textoItem.style.textDecoration = "line-through";
            textoItem.style.color = "gray"; // Dica visual extra
        } else {
            textoItem.style.textDecoration = "none";
            textoItem.style.color = "black";
        }
    });
    const dataAtual = new Date(); //Pega a data atual
    const textoData = document.createElement("p"); //Cria um novo elemento "p" para o texto da data
    textoData.classList.add("texto-data"); //Adiciona a classe "texto-data" ao texto da data
    textoData.textContent = `Adicionado em: ${dataAtual.toLocaleDateString()} às ${dataAtual.toLocaleTimeString()}`; //Define o texto da data com a data e hora atual formatada

    containerItem.appendChild(checkbox); //Adiciona o checkbox ao container do item
    containerItem.appendChild(textoItem); //Adiciona o texto do item ao container do item
    novoItem.appendChild(containerItem); //Adiciona o container do item ao novo item (li)
    novoItem.appendChild(textoData); //Adiciona o texto da data ao novo item (li)
    listaDeCompras.appendChild(novoItem); //Adiciona o novo item à lista de compras

    contatorItens++; // Incrementa o contador para o próximo item
    inputItem.value = ""; //Limpa o valor do input
    let textoInicial = document.querySelector(".texto-inicial-lista"); // Seleciona o texto inicial da lista
    textoInicial.textContent = ""; // Limpa o texto inicial da lista quando um item é adicionado
})

inputItem.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Impede o navegador de recarregar a página
    }
});

