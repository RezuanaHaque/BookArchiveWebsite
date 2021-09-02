const a = [
    {
        key: 'hey', k: 'ndj'
    },
    {
        key: 'heaaaaay', k: 'neeeeeedj', c111: 123
    },
    {
        key: 'hccccey', k: 'nxxxdj'
    }

];
const load = a => {
    a.forEach(b => {
        const c = Object.keys(b);
        if (c.indexOf('c111') === -1) {
            console.log('hello');
        }
        else {
            console.log('nooo');
        }
    });

}
load(a);
<div class="card border border-3 h-100" style="width: 18rem;">
    <img src="https://covers.openlibrary.org/b/id/10909258-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-black">${book.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Author Name:</b>${book.author_name}</li>
            <li class="list-group-item"><b>First Publish Year:</b>${book.first_publish_year}</li>
        </ul>
                </div>
    `

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