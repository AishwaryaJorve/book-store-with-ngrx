export class Books{
 public bookId:string;
 public bookName:string;
 public authorName:string;
 public discription:string;
 constructor(bookId:string,bookName:string, authorName:string, discription:string){
   this.bookId=bookId;
   this.bookName=bookName;
   this.authorName=authorName;
   this.discription=discription;
 }
}
