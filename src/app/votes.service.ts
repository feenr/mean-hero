import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Vote } from './vote';
import { Hero } from './hero';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from './auth/auth.service';

import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  private votesUrl = environment.serviceUri + '/api/votes';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService, private authService: AuthService) { }

  performVote(heroId, voterId, value): Observable<Vote> {
    const vote = new Vote(heroId, voterId, value);
    this.messageService.add(`VotesService: Creating vote ${vote.heroId}, ${vote.voterId}, ${value}`);
    return this.http.post<Object>(this.votesUrl, vote, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
    }).pipe<Vote>(
        map<Object, Vote>(retHero => new Vote(retHero['heroId'], retHero['voterId'], retHero['value']))
    );
  }
}
