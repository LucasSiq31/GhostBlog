function exibirHome(){
    for (let i = publicacoes.length; i > (publicacoes.length - 6); i--) {
        const publicacao = publicacoes.find(p => Number(p.id) === i);
        
        if (!publicacao) {
            console.warn("ID não encontrado:", i);
            continue; // pula para o próximo loop
        }
        
        document.getElementById("publicacoes").innerHTML += `
        <a href="texto.html?id=${encodeURIComponent(i)}" class="card">
            <div>
            <img src="${publicacao.banner}" alt="">
            <b>${publicacao.titulo}</b>
            <p>${publicacao.desc}</p>
            </div>
            <div>Ver Post</div>
        </a>
        `;

        console.log("concluído " + i);
    }
}

function exibirTudo(){
    for (let i = publicacoes.length; i >= 0; i--){
        const publicacao = publicacoes.find(p => p.id == i);
        
        if (!publicacao) {
            console.warn("ID não encontrado:", i);
            continue; // pula para o próximo loop
        }
        
        document.getElementById("publicacoes").innerHTML += `
        <a href="texto.html?id=${encodeURIComponent(i)}" class="card">
            <div>
            <img src="${publicacao.banner}" alt="">
            <b>${publicacao.titulo}</b>
            <p>${publicacao.desc}</p>
            </div>
            <div>Ver Post</div>
        </a>
        `;

        console.log("concluído " + i);
    }
}

function exibirNoArtigo(){
    for (let i = publicacoes.length; i > (publicacoes.length - 3);i--) {
        const publicacao = publicacoes.find(p => Number(p.id) === i);

        if (!publicacao) {
            console.warn("ID não encontrado:", i);
            continue; // pula para o próximo loop
        }
        
        document.getElementById("publicacoes").innerHTML += `
        <a href="texto.html?id=${encodeURIComponent(i)}" class="card">
            <div>
            <img src="${publicacao.banner}" alt="">
            <b>${publicacao.titulo}</b>
            <p>${publicacao.desc}</p>
            </div>
            <div>Ver Post</div>
        </a>
        `;

        console.log("concluído " + i);
    }

}

