import { Books } from "./books.model";

export class User {
  id?: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  books: Books[] = [];

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    books: Books[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.books = books;
  }
}
