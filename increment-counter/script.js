const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const incremet = target / 500;// bigger num more time calling the updateCounter 
    if(c < target) {
      counter.innerText = `${Math.ceil(c + incremet)}`;
      setTimeout(updateCounter, 1);
    }
  }
  updateCounter();
})