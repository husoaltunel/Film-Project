var form = document.querySelector('#film-form');
var titleElement = document.getElementById('title');
var directorElement = document.getElementById('director');
var urlElement = document.getElementById('url');
var cardBody1 = document.querySelectorAll('.card-body')[1];

const ui = new UI()
const storage = new Storage();
eventListeners();

function eventListeners() {

    form.addEventListener('submit', addFilm);
    cardBody1.addEventListener('click', deleteFilm);
    cardBody1.addEventListener('click', deleteFilms);
    document.addEventListener('DOMContentLoaded', function (e) {
        let films = storage.getFilmsFromLocalStorage();
        ui.loadFilmsToUI(films);
    });

}
function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (title === "" || director === "" || url === "") {
        ui.displayMessages('Boş Bırakılamaz', 'danger');
    }
    else {
        var newFilm = new Films(title, director, url)
        ui.addFilmToUI(newFilm);
        storage.addFilmsToLocalStorage(newFilm);
        ui.clearInputs();
        ui.displayMessages('Film Başarıyla Eklendi', 'success');
    }

    e.preventDefault();
}
function deleteFilm(e) {
    if (e.target.id === 'delete-film') {
        ui.deleteFilmFromUI(e);
        storage.deleteFilmFromLocalStorage(e);
    }
    e.preventDefault();
}
function deleteFilms(e) {

    if (e.target.id === 'clear-films') {
        if (confirm('Emin misiniz ?')) {
            ui.deleteFilmsFromUI();
            storage.clearAllFilmsFromStorage();
        }
    }
    e.preventDefault();
}
