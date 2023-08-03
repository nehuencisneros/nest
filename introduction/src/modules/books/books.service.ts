import { Injectable } from "@nestjs/common";
import { BookEntity } from "./entities/book.entity";
import { CreateBookDto } from "./dtos/create-book.dto";

@Injectable()

export class BooksService {
    stock: BookEntity[]
    constructor() { 
        this.stock = [
            {
                id: 1,
                title: "lord of the rings",
                autor: "jrr tolkien"
            },
            {
                id: 2,
                title: "harry potter",
                autor: "j k rowling"
            },
            {
                id: 3,
                title: "1984",
                autor: "george orwell"
            }
        ]
    }
    async findAllBooks(): Promise<BookEntity[]>{
        return this.stock
    }

    async createBook(createBookDto:CreateBookDto): Promise<BookEntity>{
        const newBook: BookEntity = {
            id: this.stock.length +1,
            title: createBookDto.title,
            autor: createBookDto.autor
        }

        this.stock.push(newBook)

        return newBook
    }
}