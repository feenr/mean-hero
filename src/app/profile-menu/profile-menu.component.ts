import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {
  username: string;

  constructor(public authService: AuthService) {
    if (authService.getProfile()) {
      this.username = authService.getProfile().given_name || '';
    }
  }

  ngOnInit() {
  }

}
