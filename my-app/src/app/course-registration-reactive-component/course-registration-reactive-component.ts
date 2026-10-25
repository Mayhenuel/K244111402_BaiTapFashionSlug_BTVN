import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
@Component({
  selector: 'app-course-registration-reactive-component',
  standalone: false,
  styleUrl: './course-registration-reactive-component.css',
  templateUrl: './course-registration-reactive-component.html',
})
export class CourseRegistrationReactiveComponent {
  public regForm: FormGroup = new FormGroup(
    {
      name: new FormControl('Nguyễn Thị Hằng', [Validators.required, Validators.minLength(2), this.customeNameValidator]),
      email: new FormControl('hangntk24411@st.uel.edu.vn', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), this.passwordValidator]),
      confirmPass: new FormControl('', [Validators.required, Validators.minLength(8), this.passwordMatchValidator, this.passwordValidator]),
    }
  );
setDefaultValues() {
    this.regForm.patchValue({
      name: 'Nguyễn Thị Hằng',
      email: 'hangntk24411@st.uel.edu.vn'
    });
  }
customeNameValidator(control:AbstractControl): { [key:string]:any} | null
{
  //Bieu thuc chinh quy kiem tra cac ky tu trong ten
  const matchName = /[@#$%^&]/g.test (control.value); 
  // Neu tim thay tra ve loi, khong thi tra ve null
  return matchName ? { 'nameNoMatch' : {value: control.value}} : null; 
}
passwordValidator(control: AbstractControl): {[key:string]:any} | null {
  const password = control.value;

  if (!password) {
    return null;
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  const hasMinLength = password.length >= 8;

  if (
    !hasMinLength ||
    !hasUpperCase ||
    !hasLowerCase ||
    !hasNumber ||
    !hasSpecialChar
  ) {
    return { passwordStrength: true };
  }

  return null;
}
passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPass = control.get('confirmPass')?.value;

  return password === confirmPass
    ? null
    : { passwordMismatch: true };
}
onSubmit(){
  if (this.regForm.valid){
    console.log('Course Data: ', this.regForm.value); 
    let infor=JSON.stringify(this.regForm.value)
    alert("Xử lý đăng ký:\n"+infor)
  }
}
}
