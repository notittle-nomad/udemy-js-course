const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes () {
    //the innerHeight will be different at any point. we should make the 'scroll point' flexible and usable (trigger point)
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach((box) => {
        //let's get the top of the box
        //method getBoundingClientRect() gives us information about the client's viewport
        const boxTop = box.getBoundingClientRect().top;
        //when we go down - boxes appear, else - disappear
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show');
        }
    })
}