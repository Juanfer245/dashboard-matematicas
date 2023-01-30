import { Component, OnInit } from '@angular/core';
import { StudentHttpService } from 'src/app/services/cursos-http.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
//ngOnInit se ejecuta luego del constructor
export class StudentComponent implements OnInit  {

  //creamos objeto del servicio desde product-http, inyectamos el servicio
  constructor(private studentHttpService: StudentHttpService) { 
 
  }

  ngOnInit(): void {
 
  }
  
  getStudents() {
    const url = 'http://api.escuelajs.co/api/v1/products';
    this.studentHttpService.getAll().subscribe(
      response => {
        console.log(response)
      }
    )
  };

  getPStudent(){
    const url = 'http://api.escuelajs.co/api/v1/products';
    return this.studentHttpService.getOne(4).subscribe(
      response => {
        console.log(response)
      }
    )
  };

  createStudent(){
    const data ={
      id: 5,
      name: 'Juanito',
      age: 19,
      email: 'jfc.tipan@yavirac.edu.ec',
      password: '1234',
      courseId: 8,
      images: ['http://api.escuelajs.co/api/v1/products'],

    }
    const url = 'http://api.escuelajs.co/api/v1/products';
    return this.studentHttpService.store(data).subscribe(
      response => {
        console.log(response)
      }
    )
  };

  updateStudent(){
    const data ={
      id: 5,
      name: 'Juanito',
      age: 19,
      email: 'jfc.tipan@yavirac.edu.ec',
      password: '5678',
      images: ['http://api.escuelajs.co/api/v1/products'], 

    }
    return this.studentHttpService.update(1, data).subscribe(
      response => {
        console.log(response)
      }
    )
  };

  deleteStudent(){
    this.studentHttpService.destroy(1).subscribe(
      response => {
        console.log(response)
      }
    )
  };
  
}
