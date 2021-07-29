import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private AfAuth: AngularFireAuth
  ) { }

  registerUser(value){
    return new Promise<any>((resolve,reject)=>{
      this.AfAuth.createUserWithEmailAndPassword(value.email, value.password).then(
        res=>resolve(res),
        err=>reject(err))
    })
  }
  loginUser(value){
    return new Promise<any>((resolve,reject)=>{
      this.AfAuth.signInWithEmailAndPassword(value.email, value.password)
      .then(
        res=>resolve(res),
        err=>reject(err))
    })
  }

  chatUser(value){
    return new Promise<any>((resolve,reject)=>{
      this.AfAuth.signInWithEmailAndPassword(value.chat, value.password).then(
        res=>resolve(res),
        err=>reject(err))
    })
  }
}
