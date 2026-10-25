import { Component } from '@angular/core';
import { UserLogin } from '../classes/UserLogin';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  // Khởi tạo model để binding
  user = new UserLogin();

  onLogin() {
    console.log('Thông tin đăng nhập:', this.user);
    let infor=JSON.stringify(this.user)
    alert("Xử lý đăng nhập:\n"+infor)
  }
}


