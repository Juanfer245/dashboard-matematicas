import { CreateStudentDto, UpdateStudentDto, StudentModel } from '../modules/student.modul';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentHttpService {

  readonly API_URL:string = 'http://api.escuelajs.co/api/v1/products'; //declaramaos variable de lectura por que no puede ser modificada 
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<StudentModel[]> {
    const url = `${this.API_URL}`
    return this.httpClient.get<StudentModel[]>(url);
  }

//No es un arreglo por que solo retorna un objeto 
  getOne(id: StudentModel['id']):Observable<StudentModel> {
    const url = `${this.API_URL}/${id}`
   return  this.httpClient.get<StudentModel>(url);
  }

  store(product: CreateStudentDto):Observable<StudentModel> {
    const url = `${this.API_URL}`
   return this.httpClient.post<StudentModel>(this.API_URL, product);
  }
//actualizamos solo un objeto
  update(id: StudentModel['id'], product: UpdateStudentDto):Observable<StudentModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<StudentModel>(url, product);
  }

  destroy(id: StudentModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
    )
  };
  }
