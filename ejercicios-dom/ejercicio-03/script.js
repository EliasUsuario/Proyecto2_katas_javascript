//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulPaises = document.createElement('ul');

countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulPaises.appendChild(li);
});
document.body.appendChild(ulPaises);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminar = document.querySelector('.fn-remove-me');
if (eliminar) {
    eliminar.remove();
}

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const crearLista = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});
crearLista.appendChild(ulCars);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.querySelector('[data-function="printHere"]');

countries2.forEach(country => { //Se modifica el nombre a "countries2" para que no haya conflicto con "countries"del ejercicio 1.
    const countryDiv = document.createElement('div');
    const title = document.createElement('h4');
    const image = document.createElement('img');

    title.textContent = country.title;
    image.src = country.imgUrl;
    image.alt = country.title;

    countryDiv.appendChild(title);
    countryDiv.appendChild(image);

    container.appendChild(countryDiv);
});

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const botonBorrar = document.createElement('button');
botonBorrar.textContent = 'Eliminar último elemento';
document.body.appendChild(botonBorrar);

botonBorrar.addEventListener('click', () => {
    const seleccionDivs = document.querySelectorAll('[data-function="printHere"] div');
    
    // Actualización y eliminación del último div.
    if (seleccionDivs.length > 0) {
        seleccionDivs[seleccionDivs.length - 1].remove();
    }
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const contenedor = document.querySelector('[data-function="printHere"]');

countries.forEach(country => {
    
    const ciudadDiv = document.createElement('div');
    
    const title = document.createElement('h4');
    title.textContent = country.title;
    
    const image = document.createElement('img');
    image.src = country.imgUrl;

    const btn = document.createElement('button');
    btn.textContent = 'Eliminar este elemento';

    btn.addEventListener('click', () => {
        ciudadDiv.remove();
    });

    ciudadDiv.appendChild(title);
    ciudadDiv.appendChild(image);
    ciudadDiv.appendChild(btn);
    
    container.appendChild(ciudadDiv);
});
