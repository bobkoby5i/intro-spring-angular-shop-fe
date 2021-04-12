import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private userService:UserService){

    }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const currentUser = this.userService.currentUserValue;
      if (currentUser){
        // what is this === should be >0
        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === 1){ 
          this.router.navigate(['/401']);
          return false;
        }
        return true;
      }
    this.router.navigate(['/login']); // current user is null or authentication required
    return false;
  }
  
}
