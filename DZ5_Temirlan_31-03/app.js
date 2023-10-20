function filterAndMapBooks(bookA) {
    const booksWithU = bookA.filter(book => book.includes('у'))


    const booksU = bookA.filter(book => !book.includes('у'))


    const booksWithUWithText = booksWithU.map(book => book );


    console.log("Книги с буквой 'у':");
    booksWithUWithText.forEach(book => console.log(book));


    console.log("\nОстальные книги:");
    booksU.forEach(book => console.log(book));
}


const books = [ "унесенные ветром", "любовь", "учитель шарлотта бронте", "убик филип дик", "граф монте кристо", "собор парижской богоатери"];

filterAndMapBooks(books);



// СЧЕТЧИК



const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

let count = 0;


function updateCounter() {
    counterElement.textContent = count;
}


incrementButton.addEventListener("click", function () {
    count++;
    updateCounter();
});


decrementButton.addEventListener("click", function () {
    count--;
    updateCounter();
});


updateCounter();









