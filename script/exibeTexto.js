titulo = document.getElementById("eTitulo")
desc = document.getElementById("eDesc")
autor = document.getElementById("eAutor")
data = document.getElementById("eData")
banner = document.getElementById("eBanner")
texto = document.getElementById("eTexto")

const idTexto = new URLSearchParams(location.search).get("id");

function PreencheDados(){
    if (idTexto) {
        const publicacao = publicacoes.find(p => p.id == idTexto);
        if (publicacao) {
            document.title = publicacao.titulo;
            titulo.innerHTML = publicacao.titulo;
            desc.innerHTML = publicacao.desc;
            autor.innerHTML = publicacao.autor;
            data.innerHTML = publicacao.data;
            banner.src = publicacao.banner;
            texto.innerHTML = publicacao.texto;

        } else {
            document.querySelector("main").innerHTML = "<h2>Publicação não encontrada.</h2>";
        }
    } else {
        document.querySelector("main").innerHTML = "<h2>Nenhuma publicação selecionada.</h2>";
    }
}

PreencheDados()

function copiarLink(){
    navigator.clipboard.writeText(window.location.href)

    const btnLink = document.getElementById('btnLink')
    btnLink.classList.add('animacao')
    setTimeout(() => {
        btnLink.classList.remove('animacao');
    }, 500);
}