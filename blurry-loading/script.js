const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// we want to use function blurring in interval of 30ms
let int = setInterval(blurring, 30);

function blurring() {
    load++;
    if(load > 99) { //to stop counting
        clearInterval(int);
    }
    loadText.innerHTML = `${load}%`; //change numbers
    // http://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers - link to solve
    //make ...% more transparent when the bg picture gettin unblured
    loadText.style.opacity = scale(load, 0, 100, 1, 0.01);
    //same for blur
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
//from stackoverflow
function scale (number, in_min, in_max, out_min, out_max) {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}