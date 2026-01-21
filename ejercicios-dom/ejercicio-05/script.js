const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumList = document.getElementById('album-list');
function listaAlbums() {
  albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    albumList.appendChild(li);
  });
}
listaAlbums();