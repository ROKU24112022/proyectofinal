import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  constructor() { }
  usuario:any = [{}]
  email:any = [{}]
  password:any = [{}]


  ngOnInit(): void {
  }
  enviar(){
    console.log(this.usuario,this.email,this.password)
  }

}
