const botaoTrailer = document.querySelector('.botao-trailer')
const model = document.querySelector('.modal')
const fechaXModel = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkDoVideo = video.src

function alternarModal() {
    model.classList.toggle('aberto')
}

botaoTrailer.addEventListener("click", function() {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

fechaXModel.addEventListener('click', function() {
    alternarModal()
    video.setAttribute("src", "")
})