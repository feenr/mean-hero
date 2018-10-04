import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  username: string;

  constructor(protected authService: AuthService) {
    if (authService.getProfile()) {
      this.username = authService.getProfile().given_name || '';
    }
  }

  ngOnInit() {
  }

}
