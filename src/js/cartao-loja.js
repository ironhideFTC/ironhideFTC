const listaSelecaoItem = document.querySelectorAll(".item");

listaSelecaoItem.forEach(item => {
    item.addEventListener("click", () => {
        desativarCartaoItem();

        const idItemSelecionado = ativarCartaoItem(item);
    })
})

function ativarCartaoItem(item) {
    const idItemSelecionado = item.attributes.id.value;
    const idDoCartaoItemParaAbrir = "cartao-" + idItemSelecionado;
    const cartaoItemParaAbrir = document.getElementById(idDoCartaoItemParaAbrir);
    cartaoItemParaAbrir.classList.add("aberto");
    return idItemSelecionado;
}

function desativarCartaoItem() {
    const cartaoItemAberto = document.querySelector(".aberto");
    if (cartaoItemAberto) {
        cartaoItemAberto.classList.remove("aberto");
    }
}