function verificar() {
    var data = new Date() // pegar a data atual
    var ano = data.getFullYear() // pegar o ano atual
    var fano = window.document.getElementById('txtano') // pegar o ano digitado
    var res = document.getElementById('res') // pegar o resultado

    // verificar se o ano digitado é maior que o ano atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //adiciona uma imagem
        img.setAttribute('id', 'foto') //adiciona um id na imagem criada
        // verificar os gêneros

        // masculino
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homem_bebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem_jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem_adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem_velho.jpg')
            }
            // feminino
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mulher_bebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher_jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher_adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher_velho.jpg')
            }
        }
    }
    res.style.textAlign = 'center' // centralizar a imagem
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // informar o gênero e idade
    res.appendChild(img) // adicionar a imagem
}