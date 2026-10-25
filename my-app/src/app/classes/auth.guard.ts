import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Giả lập kiểm tra đăng nhập từ localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; //Thay doi dong so 8 theo de bai 

  if (isLoggedIn) {
    return true; // Cho phép vào
  } else {
    alert('Bạn chưa đăng nhập! Tớ không thể cho You vào trang này.');
    // Chuyển hướng về trang nào đó, hoặc trang login
    return router.parseUrl('/contacts');
  }
};


