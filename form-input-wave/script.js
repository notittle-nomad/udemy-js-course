const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, ind) =>
        `<span style="transition-delay:${ind * 69}ms">${letter}</span>`
    )
    .join(""); // split - to separate letters in the word and make an array of each element; map - to manipulate array's elements, join - to make an array like a string; transition-delay - operating the time delay in jumping letters
});
