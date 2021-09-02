//  hiding the spinner 
document.getElementById("spinner").style.display = "none";

const searchBook = () => {
    const searchField = document.getElementById('searchfield');
    const searchText = searchField.value;
    debugger;
    // showing the spinner after search button clicked 
    document.getElementById("spinner").style.display = "block";
    const url = `http://openlibrary.org/search.json?q=${searchText}`;


    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data))
    // .then(data => console.log(data))


}
const displayBooks = (books) => {
    // console.log(books);
    // debugger;
    const searchResult = document.getElementById('search-result');
    const totalResult = document.getElementById('total-result');
    totalResult.innerText = `Total result is ${books.numFound}`;

    if (books.numFound === 0) {
        searchResult.innerHTML = `
        <h1 class="text-center my-5">NO RESULT FOUND</h1>
        `
        document.getElementById("spinner").style.display = "none";
    }
    else {
        // debugger;
        const bookArray = books.docs;
        console.log(bookArray);
        const row = document.getElementById('row');
        bookArray.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
            row.appendChild(div);
            div.innerHTML = `    
                    <div class="card border border-3 h-100" style="width: 18rem;">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Author Name:</b>${book.author_name}</li>
                        <li class="list-group-item"><b>First Publish Year:</b>${book.first_publish_year}</li>
                    </ul>
                </div>
                    `
        });
        document.getElementById("spinner").style.display = "none";

    }
}
