const divCompleta = document.querySelector('.popupFull')

const botoesPaises = document.querySelectorAll('.confirmPaises')
const botoesTimes = document.querySelectorAll('.confirmTime')
const paisesCarousel = document.querySelector('#carouselPaises')
const premierCarousel = document.querySelector('#carouselPremierLeague')
const tituloSelect = document.querySelector('#selectTitulo')

function scrollToTop() {
    window.scrollTo(0, 0);
}
//PARA CADA ITEM, ADICIONAR O EVENT LISTENER
botoesPaises.forEach(item =>{
    item.addEventListener('click', checarPais)
})

botoesTimes.forEach(item =>{
    item.addEventListener('click', checarTime)
})

function checarPais(){
    if(event.srcElement.id == 'premierLeague'){
        paisesCarousel.style.display = 'none';
        premierCarousel.style.opacity = '1';
        premierCarousel.style.pointerEvents = 'all';
        tituloSelect.textContent = 'SELECIONE O TIME DESEJADO';
    }
    else if(event.srcElement.id == 'brasileirao'){
        console.log('brasileirao')
    }
    else if(event.srcElement.id == 'laLiga'){
        console.log('laLiga')
    }
    else{
        console.log('ligue1')
    }

}

const listra = document.querySelectorAll('.listra');
const borda = document.querySelector('.tabela')
const nomeTimeCima = document.querySelector('.nomeTimeCima')
const nomeTimeCimaBaixo = document.querySelector('.nomeTimeCimaBaixo')
const pictureImage = document.querySelector("#imagemTime");

function checarTime(){
    divCompleta.style.display = 'none';
    scrollToTop();

    switch(event.srcElement.id){
        case 'arsenal':
        for (let i = 0; i < listra.length; i++) {
            listra[i].style.backgroundColor = 'var(--red-white-linhas)';
        }
        borda.style.borderColor = 'var(--red-white-neon)';
        nomeTimeCima.textContent = 'Arsenal'
        pictureImage.src = 'imagens/PremierLeagueEscudos/arsenal-football-club.svg'
        break;

        case 'city':
            for (let i = 0; i < listra.length; i++) {
                listra[i].style.backgroundColor = 'var(--lightblue-white-linhas)';
            }
            borda.style.borderColor = 'var(--lightblue-white-neon)';
            nomeTimeCima.textContent = 'Manchester'
            nomeTimeCimaBaixo.textContent = 'City'
            nomeTimeCimaBaixo.style.color = 'var(--lightblue-white-linhas)'
            pictureImage.src = 'imagens/PremierLeagueEscudos/manchester-city-football-club.svg'
        break;
        case 'united':
        for (let i = 0; i < listra.length; i++) {
            listra[i].style.backgroundColor = 'var(--red-yellow-linhas)';
        }
        borda.style.borderColor = 'var(--red-yellow-neon)';
        nomeTimeCima.textContent = 'Manchester'
        nomeTimeCimaBaixo.textContent = 'United'
        nomeTimeCimaBaixo.style.color = 'var(--red-yellow-linhas)'
        pictureImage.src = 'imagens/PremierLeagueEscudos/manchester-united-football-club.svg'
        break;
        case 'liverpool':
            for (let i = 0; i < listra.length; i++) {
                listra[i].style.backgroundColor = 'var(--red-red-linhas)';
            }
            borda.style.borderColor = 'var(--red-red-neon)';
            nomeTimeCima.textContent = 'Liverpool'
            pictureImage.src = 'imagens/PremierLeagueEscudos/liverpool-football-club.svg'
        break;

    }

}