class Storage {
    addFilmsToLocalStorage(newFilm) {
        let films = this.getFilmsFromLocalStorage();
        if (films === null) {
            films = [];
            films.push(newFilm);
        } else {
            films.push(newFilm);
        }
        localStorage.setItem('films', JSON.stringify(films));
    }
    getFilmsFromLocalStorage() {
        let films = JSON.parse(localStorage.getItem('films'));
        return films;
    }
    deleteFilmFromLocalStorage(e) {
        let films = storage.getFilmsFromLocalStorage();
        let title = e.target.parentElement.previousElementSibling.previousElementSibling;
        let director = e.target.parentElement.previousElementSibling;
        films.forEach(function (film) {
            if (title.textContent == film.title && director.textContent == film.director) {
                films.splice(films.indexOf(film), 1);
            }
        });
        localStorage.setItem('films', JSON.stringify(films));
        ui.displayMessages('Film Başarıyla Kaldırıldı', 'success');
    }
    clearAllFilmsFromStorage() {
        localStorage.removeItem('films');
    }
}


