//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.createElement('div');
const contenidoP = document.createElement('p');
divConP.appendChild(contenidoP);
document.body.appendChild(divConP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divLoop = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  divLoop.appendChild(p);
}
document.body.appendChild(divLoop);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const Pdinamico = document.createElement('p');
Pdinamico.textContent = 'Soy dinámico!';
document.body.appendChild(Pdinamico);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
//      const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');

apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});

document.body.appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(el => el.remove());

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.
const allDivs = document.querySelectorAll('div');
const midP = document.createElement('p');
midP.textContent = 'Voy en medio!';

if (allDivs.length >= 2) {
  allDivs[1].insertAdjacentElement('beforebegin', midP);
}

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase.
//      fn-insert-here
const insertContainers = document.querySelectorAll('div.fn-insert-here');
insertContainers.forEach(div => {
  const pInside = document.createElement('p');
  pInside.textContent = 'Voy dentro!';
  div.appendChild(pInside);
});