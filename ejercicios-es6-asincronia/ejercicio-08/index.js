/*Accederemos a los datos de una API pública de Game Of Thrones, 
queremos un select con todos los nombres de los personajes para que cuando un usuario 
seleccione un nombre salga su imagen en el medio de la página
*/

//Selección de los elementos del DOM necesarios
const characterSelect = document.querySelector('#character-list');
const characterImage = document.querySelector('.character-image');

//Creación de una función para obtener los datos de la API
const getCharacters = async () => {
    try {
        const resultadoFetch = await fetch('https://thronesapi.com/api/v2/Characters');
        const characters = await resultadoFetch.json();
        
        // Se llama a las funciones para pintar el DOM
        personajesSelect(characters);
        setupEvents(characters);
        
    } catch (error) {
        console.error("Error recuperando personajes:", error);
    }
};

// Creación de una función para rellenar el <select> con los nombres
const personajesSelect = (characters) => {
    characters.forEach(character => {
        const option = document.createElement('option');
        option.value = character.id; // Uso del ID como valor interno
        option.textContent = character.fullName; // Uso del nombre completo para el usuario
        characterSelect.appendChild(option);
    });
};

// Creación de una función para gestionar el evento de cambio
const setupEvents = (characters) => {
    characterSelect.addEventListener('change', (event) => {
        const selectedId = event.target.value;
        
        // Busqueda del objeto del personaje que coincida con el ID seleccionado
        const selectedCharacter = characters.find(c => c.id == selectedId);
        
        if (selectedCharacter) {
            characterImage.src = selectedCharacter.imageUrl;
            characterImage.alt = selectedCharacter.fullName;
        }
    });
};

// Ejecución de la función inicial
getCharacters();