class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return 'Summary: ' + this.title + ', ' + this.author + ', ' + this.year;
    }

    getAge() {
        let d = new Date().getFullYear()
        return d - this.year; 
    }
}

b1 = new Book('A good book', 'Bob', 1999);
b2 = new Book('Happy book', 'Rob', 1403);

b3 = new Book('Old Book', 'Santa', 1424);
console.log(b3.getAge());
