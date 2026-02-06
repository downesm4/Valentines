const noButton = document.querySelector('.runaway');
noButton.addEventListener('click', noClicked);
const container = document.querySelector('.question');
const yesButton = document.querySelector('.button-yes');
yesButton.addEventListener('click', yesClicked);
const againButton = document.querySelector('.button-again');
againButton.addEventListener('click', againClicked);

function yesClicked() {
    document.querySelector('.yes').style.display = 'block';
    document.querySelector('.question-container').style.display = 'none';
}

function againClicked() {
    document.querySelector('.yes').style.display = 'none';
    document.querySelector('.question-container').style.display = 'block';
}


function noClicked() {
    alert('This is not an option, please reconsider! ❤️');
    noButton.style.transform = `translate(0px, 0px)`;
}



noButton.addEventListener('mouseover', () => {
    const buttonRect = noButton.getBoundingClientRect();

    const padding = 20
    const maxX = window.innerWidth - buttonRect.width - padding;
    const maxY = window.innerHeight - buttonRect.height - padding;

    const x = Math.random() * maxX + padding;
    const y = Math.random() * maxY + padding;

    noButton.style.position = `fixed`;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

});
