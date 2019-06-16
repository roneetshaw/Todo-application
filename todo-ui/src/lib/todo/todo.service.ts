import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "./todo";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class TodoService{

    private apiUrl:string;
    constructor(private httpClient: HttpClient){
        this.apiUrl="http://192.168.1.100:8080/todo";
    }

    get():Observable<any>{
       return this.httpClient
        .get(`${this.apiUrl}`)
        .pipe(map((response) => response));
    }
    
    getById(id:string){

    }
    post(todo:Todo):Observable<any>{
        return this.httpClient.post(`${this.apiUrl}`,todo).pipe(
            map((response)=>response));
        
    }
    put(todo:Todo){

    }
    delete(id:string):Observable<any>{
return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
    map((response)=>response));
    }

}