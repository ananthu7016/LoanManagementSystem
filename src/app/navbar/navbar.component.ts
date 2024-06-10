import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  //#region  For Navbar
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;

  }
  //#endregion


  //#region Logout
  logOut() {
    // then we need to log out 
    this.router.navigate(['/login']);
  }

  //#endregion

}
