interface Item {
    id: number;
    title: string;
    category: string;
}

interface IBorrowable extends Item {
    dueData: string; //заменил Date на string (без понятия как работать с типом Date)
    isAvailable: boolean;

    checkOut(bookTitle: string): string;
    returnItem(bookTitle: string): string;
}

class Book implements IBorrowable {
    id: number;
    title: string;
    category: string;
    dueData: string; //заменил Date на string (без понятия как работать с типом Date)
    isAvailable: boolean;

    constructor (id: number, title: string, category: string, dueData: string, isAvailable: boolean){
        this.id = id;
        this.title = title;
        this.category = category;
        this.dueData = dueData;
        this.isAvailable = isAvailable;
    }

    checkOut(bookTitle: string) {
        if (bookTitle === this.title && this.isAvailable === true) {
            this.isAvailable = false
            return Книга "${bookTitle}" найдена и выдана! Дата возврата ${this.dueData}.
        }
        return Книга "${bookTitle}" не найдена или не доступна.
    };

    returnItem(bookTitle: string){
        if (bookTitle === this.title && this.isAvailable !== true) {
            this.isAvailable = true
            return Книга "${bookTitle}" найдена и возвращена!
        }
        return Книга "${bookTitle}" не найдена или не была одолжена.
    };
}

const firstBook = new Book(1, 'bobTitle', 'bobCategory', 'Понедельник', true)
//console.log(firstBook.checkOut('bobitle'))
// код, который использовался при проверке

class User {
    userId: number;
    name: string;

    constructor (userId: number, name: string) {
        this.userId = userId;
        this.name = name;
    }

    borrowBook(bookTitle: string) {
        if (bookTitle === firstBook.title && firstBook.isAvailable === true) {
            firstBook.isAvailable = false
            return Книга "${bookTitle}" найдена и выдана пользователю - ${this.name}! Дата возврата ${firstBook.dueData}.
        }
        return Книга "${bookTitle}" не найдена или не доступна.
    };

    returnItem(bookTitle: string){
        if (bookTitle === firstBook.title && firstBook.isAvailable !== true) {
            firstBook.isAvailable = true
            return Книга "${bookTitle}" найдена и возвращена!
        }
        return Книга "${bookTitle}" не найдена или не была одолжена.
    };
}

const fisrtUser = new User(1, 'bobUser')
//console.log(fisrtUser.borrowBook('bobTitle'))
// код, который использовался при проверке

class Library {
    books: string[];
    users: string[];

    constructor (books: string[], users: string[]) {
        this.books = books;
        this.users = users;
    }

    addBook(bookTitle: string) {
        this.books.push(bookTitle)
    }

    registerUser(userName: string) {
        this.users.push(userName)
    }

    findBooksByTitle(bookTitle: string) {
        if (bookTitle === this.books.find((element) => element === bookTitle)) {
            return Книга "${[bookTitle]}" найдена!
        } return Книга "${bookTitle}" не найдена!
    }

    checkOutBook(bookId: number, userId: number) {
        if (this.books[bookId] === firstBook.title && firstBook.isAvailable === true) {
            firstBook.isAvailable = false
            return Книга "${this.books[bookId]}" найдена и выдана пользователю - ${this.users[userId]}!
        }
        return Книга "${this.books[bookId]}" не найдена или не доступна.
    };

    returnBook(bookId: number, userId: number) {
        if (this.books[bookId] === firstBook.title && firstBook.isAvailable !== true) {
            firstBook.isAvailable = true
            return Книга "${this.books[bookId]}" у пользователя - ${this.users[userId]} найдена и возвращена!
        }
        return Книга "${this.books[bookId]}" не найдена или не была одолжена.
    };
}

const fisrtLibrary = new Library(['firstBook', 'secondBook'], ['BigBob', 'SmallBob', 'MediumBob'])
