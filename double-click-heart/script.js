const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
        console.log(clickTime);
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    //client position
    const x = e.clientX;
    const y = e.clientY;
    // left-top corner position
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;
    //calculate inside click position
    const xInside = x - leftOffset
    const yInside = y - topOffset
    // we create style in style css already. now we are giving the position coordinates
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;
    //add class to the element
    loveMe.appendChild(heart);
    times.innerHTML = ++timesClicked;
    // now any time you click - it adds the element to the DOM. to prevent this use .remove()
    setTimeout(() => heart.remove(), 1000)
}