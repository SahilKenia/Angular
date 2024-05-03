import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email:String='';
  name:String='';
  password:String='';

  constructor(private router:Router){}

  onSubmit():void{
    const userdata={email:this.email,name:this.name,password:this.password};
    console.log(userdata);
    let temp=localStorage.getItem('anguser');
    let storeddata:any[]=[];

    if(temp){
      try{
        storeddata=JSON.parse(temp);
      }catch(err){
        console.error(err);
        return;
      }
    }

    if(!Array.isArray(storeddata)){
      storeddata=[]
    }

    localStorage.setItem('curruser',JSON.stringify(userdata));
    storeddata.unshift(userdata);

    localStorage.setItem('anguser',JSON.stringify(storeddata));
    alert('Registered Successfully');
    this.router.navigate(['/login']);
  }

}

