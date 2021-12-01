const buttons = document.querySelectorAll('.ripple');
buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // click coordinates
    const x = e.clientX;
    const y = e.clientY;
    // btn coordinates
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // position inside the button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    this.appendChild(circle);
    // for now each click puts an element to the DOM. now we need to get rid of that
    setTimeout(() => circle.remove(), 500);
  })
})