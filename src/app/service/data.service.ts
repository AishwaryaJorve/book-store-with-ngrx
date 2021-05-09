import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../model/books.model';
import {UserWithToken} from '../model/user-with-token.model'
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /**
   * save token in localstorage
   * @param token
   */
  saveToken(token:string){
    localStorage.setItem("token",token);
  }

  saveUser(user:User){
   localStorage.setItem("user",JSON.stringify(user));
  }

  /**
   * save book
   * @param book
   * @returns
   */
  saveBook(book:Books){
    let user=this.getUser();
    let books=user.books;
    user.books=[...books,book];
    return user;
  }

  /**
   * update book
   * @param book
   */
   updateBookInLocalStorage(book:Books){
    //fetch current user from local stroge
    let user=this.getUser()

    //fetch books from user
    let books=user.books

    //iterate books and matched already books id with incoming bookId to update
    for(let i=0;i<books.length;i++){
      if(books[i].bookId==book.bookId){

        // update new data with old
        books[i].authorName=book.authorName;
        books[i].discription=book.discription;
        user.books=[...books];
      }
    }
    return user;
  }

  /**
   * fetch user from localstorage.
   * @returns user
   */
  getUser(){
    let user=<User>(JSON.parse(localStorage.getItem("user")));
    return user;
  }

  /**
   * fetch token from localstorage.
   * @returns token
   */
  getToken(){
    let token=localStorage.getItem('token');
    return token;
  }

 /**
   * to check is user log in or not with fetching token from localstorage
   * @returns
   */
  isLoggedIn(){

    //fetch token from localstorage
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  /**
   * to logout user with removing token from localstorage
   * @returns
   */
   logout(){
    localStorage.clear();
    return true;
  }

}
