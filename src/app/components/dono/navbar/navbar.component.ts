import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService : LoginService,
    private route : Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('logout ....');
    this.loginService.logout();
    this.route.navigate(['/login']);
  }

}
