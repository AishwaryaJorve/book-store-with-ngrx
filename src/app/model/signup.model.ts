import { Books } from "./books.model";

export class SignUp {
  id?: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  books: Books[] = [];

  constructor(
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    books: Books[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.books = books;
  }
}
