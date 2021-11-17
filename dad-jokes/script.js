const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();
//this is a recomended way to instal, but we can chang eit to async way
//using .then()
// function generateJoke() {
//   //setting for the api
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   };
//   // to jet jokes from API
//   fetch('http://icanhazdadjoke.com', config)
//   .then((responce) => responce.json())
//   .then((data) => {
//     jokeElement.innerHTML = data.joke;
//   });
// }

//async - await
async function generateJoke() {
  //setting for the api
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };
  const res = await fetch('http://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeElement.innerHTML = data.joke;
}