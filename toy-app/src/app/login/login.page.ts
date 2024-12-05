import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router untuk navigasi

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}  // Menambahkan Router ke dalam konstruktor

  login() {
    // Logika login, jika berhasil, arahkan ke halaman lain
    console.log('Login:', this.username, this.password);
    // Ganti dengan logika login yang sesuai
  }

  goToRegister() {
    // Fungsi ini untuk mengarahkan ke halaman register
    this.router.navigate(['/register']);  // Pastikan route '/register' terdaftar
  }
}
