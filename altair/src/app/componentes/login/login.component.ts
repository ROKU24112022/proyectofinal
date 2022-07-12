import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  usuarios:any = []
  password:any = []
  data:any [] = []

  ngOnInit(): void {
    console.log('Binvenido a login')
  }

  iniciar(){
    this.data.push(this.usuarios,this.password)
    console.log(this.usuarios,this.password)
  }
  recuperar(){

  }

}
