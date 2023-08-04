import { child, get, onValue, push, ref, update } from "firebase/database";
import { collection, getDocs } from "firebase/firestore/lite";
import {  db, dbCollection, dbRef } from "../utils/FirebaseDB";

export  function  getAllUser(){
    return get(child(dbRef, 'users'))
}

export function newUser(form){
    const newUserId = push(child(ref(db), 'users')).key

    const create = {}

    create['/users/' + newUserId] = form;

    return update(ref(db), create)
}