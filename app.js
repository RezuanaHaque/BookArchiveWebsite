//  hiding the spinner 
document.getElementById("spinner").style.display = "none";

const searchBook = () => {
    const searchField = document.getElementById('searchfield');
    const searchText = searchField.value;
    searchField.value = '';
    // showing the spinner after search button clicked 
    document.getElementById("spinner").style.display = "block";
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    // fetching the whole data 
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data))
    // .then(data => console.log(data))
}

const displayBooks = books => {
    const row = document.getElementById('row');
    // for clearing the previous result 
    row.textContent = '';
    if (books.numFound === 0) {
        const totalResult = document.getElementById('total-result');
        // no result founf warning 
        totalResult.innerText = 'NO RESULT FOUND';
        document.getElementById("spinner").style.display = "none";
    }
    else {
        const totalResult = document.getElementById('total-result');
        totalResult.innerText = `Total ${books.numFound} Results Found`;
        const bookArrayPrevious = books.docs;
        const bookArray = bookArrayPrevious.slice(0, 25);
        // using forEach loop
        bookArray.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
            row.appendChild(div);
            // for invalid img 
            const bookKeys = Object.keys(book);
            // when a book doesnt contain an img 
            if (bookKeys.indexOf('cover_i') === -1) {
                div.innerHTML = `
                <div class="card border border-3 h-100" style="width: 18rem;">
                <img src="https://covers.openlibrary.org/b/id/10909258-M.jpg"  width="282px" height="423px"  class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title  text-center  text-black">${book.title}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Author Name: </b>${book.author_name}</li>
                        <li class="list-group-item"><b>First Publish Year: </b>${book.first_publish_year}</li>
                        <li class="list-group-item"><b>Publisher: </b>${book.publisher}</li>
                    </ul>
                </div>
                `
            }
            // when a book contains img 
            else {
                div.innerHTML = `    
                    <div class="card border border-3 h-100 " style="width: 18rem;">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"  width="282px" height="423px"  class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title  text-center  text-black">${book.title}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Author Name: </b>${book.author_name}</li>
                        <li class="list-group-item"><b>First Publish Year: </b>${book.first_publish_year}</li>
                        <li class="list-group-item"><b>Publisher: </b>${book.publisher}</li>
                    </ul>
                </div>
                    `
            }
        });
        // hiding the spinner after result 
        document.getElementById("spinner").style.display = "none";
    }
}
