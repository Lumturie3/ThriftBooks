let section = document.getElementById('genresId');
let moreBtn = document.getElementById('moreBtn');

let genres = [
  { name: 'Romance',  img: './../img/love.png' },
  { name: 'Fiction',  img: './../img/fiction.png' },
  { name: 'Sci-Fi',   img: './../img/skifi.png' },
  { name: 'Mystery',  img: './../img/Screenshot 2025-11-22 002923.png' }
];

genres.forEach(g => {
  let card = document.createElement('div');
  card.classList.add('card');

  let img = document.createElement('img');
  img.src = g.img;
  img.alt = g.name + ' book';

  let p = document.createElement('p');
  p.textContent = g.name;

  card.appendChild(img);
  card.appendChild(p);

  section.appendChild(card);
}); 

//Per me dal more mas kartav duhet me thirr ata ne js edhe me ba section appendchld me ba section fmi te vet morin edhe pse e ka 

const more = document.getElementById('moreBtn');
section.appendChild(more);








