import { Component, Input } from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../models/student.model";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentService.getStudents()
      .subscribe({
        next: students => {
          this.students = students.content;
        }
      });
  }

  editStudent(student: Student) {

  }

  deleteStudent(id: number) {

  }
}
