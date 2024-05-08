import { Component } from '@angular/core';
import {Student} from "../../../models/student.model";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-student-creat',
  templateUrl: './student-creat.component.html',
  styleUrls: ['./student-creat.component.css']
})
export class StudentCreatComponent {
  newStudent: Student = {
    id: 0,
    code: '',
    firstName: '',
    lastName: '',
    email: '',
    major: '',
    payments: []
  };

  constructor(private studentService: StudentService) { }

  createStudent(): void {
    this.studentService.createStudent(this.newStudent)
      .subscribe((response) => {
        console.log('New student added:', response);
      }, (error) => {
        console.error('Error adding new student:', error);
      });
  }
}
