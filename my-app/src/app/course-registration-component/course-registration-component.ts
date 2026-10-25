import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseRegistration } from '../classes/CourseRegistration';

@Component({
  selector: 'app-course-registration-component',
  standalone: false,
  styleUrl: './course-registration-component.css',
  templateUrl: './course-registration-component.html',
})
export class CourseRegistrationComponent {
  // onSubmit(form:NgForm) {
  //   if (form.valid) {
  //     console.log('Course Data:', form.value); 
  //     alert (JSON.stringify(form.value)); 
  //     let infor="Full Name = " + form.value.fullName + "\n" +
  //               "Email = " + form.value.email + "\n" +
  //               "Phone Number = " + form.value.phoneNumber + "\n" +
  //               "Course = " + form.value.course + "\n" +
  //               "Shift = " + form.value.shift; + 
  //               "Agree = " +form.value.agree;
  //     alert(infor);
  //   }
  // }
  courseModel = new CourseRegistration();
  onSubmit()
  {
    let infor = this.courseModel.getInfor()
    console.log('Course Data: ', this.courseModel.getInfor()); 
    alert(infor); 
  }
}
