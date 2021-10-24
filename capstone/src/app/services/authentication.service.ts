import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

  constructor(private userService: UserService, private router: Router) { }

  //Notifies the router is the user is allowed to visit this route
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.user$.pipe(
      take(1),
      map(user => !!user), //maps this to a boolean value
      tap(isLoggedIn => {
        if(!isLoggedIn){
          console.log('access denied')
          this.router.navigate(['/login'])
        }
      })
    )
  }
}
