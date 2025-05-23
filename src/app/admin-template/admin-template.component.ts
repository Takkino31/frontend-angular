import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-admin-template',
  standalone: false,
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent implements OnInit{

  constructor(
    public authService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
