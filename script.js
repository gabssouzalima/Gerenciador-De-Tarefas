const inputTarefa = document.getElementById("tarefa");
const buttonTarefa = document.getElementById("adicionar");
const listaTarefa = document.getElementById("lista");
const mensagemTarefa = document.getElementById("mensagem");

const criarItem = () => {
    const criarNovoItem = document.createElement('li');

    const texto = document.createElement('span');
    texto.textContent = inputTarefa.value;

    const apagarNovoItem = apagarItem(criarNovoItem);

    criarNovoItem.addEventListener("click", () => {
            texto.classList.toggle("concluida");
            criarNovoItem.classList.toggle("item-concluido");
    });

    criarNovoItem.appendChild(texto);
    criarNovoItem.appendChild(apagarNovoItem);

    return criarNovoItem;
};


const apagarItem = (item) => {
    const apagarNovoItem = document.createElement('button');
    apagarNovoItem.textContent = "Remover";

    apagarNovoItem.addEventListener("click", (event) => {
        event.stopPropagation();
        item.remove();
    });

    return apagarNovoItem;
};

buttonTarefa.addEventListener("click", () => {
    if (inputTarefa.value === "") {
        mensagemTarefa.textContent = "Nenhum Item Criado :(";
    } else {
        const item = criarItem();
        listaTarefa.appendChild(item);

        mensagemTarefa.textContent = "";
        inputTarefa.value = "";
    }
});
