titulo = document.getElementById("titulo")
desc = document.getElementById("desc")
autor = document.getElementById("autor")
banner = document.getElementById("arquivo")
texto = document.getElementById("texto")

banner.addEventListener("input", function () {
    document.getElementById("capa").style.backgroundImage = "url("+ banner.value +")"
});

function adicionarPublicacao() {

    let qtdArtigos = publicacoes.length;

    const agora = new Date();

    const dia = agora.getDate();
    const mes = agora.getMonth() + 1;
    const ano = agora.getFullYear();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    const minutoS = minuto < 10 ? "0" + minuto : minuto;
    const diaS = dia < 10 ? "0" + dia : dia;

    publicacoes.push({
        id: qtdArtigos + 1,
        titulo: titulo.value,
        desc: desc.value,
        autor: autor.value,
        data: `${diaS}/${mes}/${ano} - ${hora}:${minutoS}`,
        banner: banner.value,
        texto: texto.value
    });

    // 🔥 Salva tudo NO LOCALSTORAGE
    localStorage.setItem("publicacoes", JSON.stringify(publicacoes));

    alert("Artigo Publicado!");

    titulo.value = ""
    desc.value = ""
    autor.value = ""
    banner.value = ""
    texto.value = ""

    window.open('texto.html?id='+ publicacoes.length, '_self')
}