class UI{
        addFilmToUI(newFilm) {
            var filmList = document.querySelector('#films');
            const inner = document.querySelector('#films').innerHTML;
            filmList.innerHTML = inner + `<tr>
            <td><img src="${newFilm.url}" style="height:100px;" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>`;        
        }
        clearInputs() {
            titleElement.value = "";
            directorElement.value = "";
            urlElement.value = "";
        }
        deleteFilmFromUI = function(e){
            e.target.parentElement.parentElement.remove();
        }
        deleteFilmsFromUI() {
            let filmList = document.querySelector('#films');
            console.log(filmList.children.length);
            while(filmList.children.length !== 0){
                filmList.firstChild.remove();
            }
        }
        displayMessages(errMessage,type) {
            let messageDivParent = document.querySelector('.card-body');
            let messageDiv = document.createElement('div');
            messageDiv.className = `alert alert-${type}`;
            messageDiv.textContent = errMessage;
            messageDivParent.appendChild(messageDiv);
        
            setInterval(function(){
                messageDiv.remove();
            },2000)
        
        }
        loadFilmsToUI(films) {
            let filmList = document.querySelector('#films');
            films.forEach(function(film) {
                const inner = filmList.innerHTML;
                filmList.innerHTML = inner + `<tr>
                <td><img src="${film.url}" style="height:100px;" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr>`;
            });
        }


}

