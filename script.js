//Mensagem de boas-vindas ao clicar no botão
document.addEventListener('DOMContentLoaded',()=>{
    const button= document.querySelector('button');
    button.addEventListener('click',()=>{
        alert('Estamos animados para começar o ano com vocês!');
    });


    //Contador de dias para início das aulas
    const startDate = new Date('2024-08-01');//Defina a data de início das aulas
    const todat = new Date();
    const timeDiff = startDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000* 60* 24));

    constc= countdownElement = document.createElement('p');
    countdownElement.textContent = `Faltam $(daysLeft} dias para o início das aulas!`;
    document.querySelector('.card').appendChild(countdownElement);

    //Alterar a imagem ao clicar
    const image = document.querySelector('img');
    image.addEventListener('click',()=>{
        image.src =voltaaualas .jpg;
    });

    //Mostrar uma mensagem de boas-vindas com animação
    const card = document.querySelector('.card');
    card.style.opacity = 0;
    card.style.transition = 'opacity 2s';

    setTimeout(()=>{
        card.style.opacity = 1;
    },100);
});