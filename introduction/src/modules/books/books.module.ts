import { Module } from "@nestjs/common";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";

@Module({
    imports: [], // le queremos dar a este modulo una funcionalidad externa
    providers: [BooksService], //proveedores, para nosotros principalmente los servicios
    controllers: [BooksController], // los controladores
    exports: [], // si quiero ue este modulo exporte alguna funcionalidad que le es propia
})

export class BooksModule { }