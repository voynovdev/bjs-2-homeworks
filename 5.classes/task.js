// Задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(value) {
		if (value < 0) {
			this.state = 0;
		} else if (value > 100) {
			this.state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {

	constructor(author) {
		super(author)
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author) {
		super(author)
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author) {
		super(author)
		this.type = "detective";
	}
}

// Задача 2

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	findBookBy(type, value) {
		for (let book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				const givenBook = this.books[i];
				this.books.splice(i, 1);
				return givenBook;
			}
		}
		return null;
	}
}

// Задача 3

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}
		if (!this.marks.hasOwnProperty(subject)) {
			this.marks[subject] = [];
		}
		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		}
		const summ = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
		const averageMarks = summ / this.marks[subject].length;
		return averageMarks;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);

		if (subjects.length === 0) {
			return 0;
		}

		const totalAverage = subjects.reduce((acc, subject) => {
			return acc + this.getAverageBySubject(subject)
		}, 0)

		return totalAverage / subjects.length;
	}
}