import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario = {
    email: '',
    clave: ''
  }
  constructor(private authService: AuthService) {

  }
  
  Registrarse() {
    console.log(this.usuario);
    const{email,clave}=this.usuario;
    this.authService.register(email,clave).then(res=>{
      console.log("Se registro",res);
    });
  }


  Ingresar() {
    console.log(this.usuario);
    const{email,clave}=this.usuario;
    this.authService.login(email,clave).then(res=>{
      console.log("Se registro",res);
    });
  }

  IngresarConGoogle() {
    console.log(this.usuario);
    const{email,clave}=this.usuario;
    this.authService.loginWithGoogle(email,clave).then(res=>{
      console.log("Se registro",res);
    });
  }


  logout(){
    this.authService.logOut();
  }
}
