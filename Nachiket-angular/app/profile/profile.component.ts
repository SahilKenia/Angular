import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user:any;

  constructor(private router:Router){
  const data=localStorage.getItem('curruser');
  if(data){
    this.user=JSON.parse(data);
  
  }
  };
  
  onSubmit():void{
  
  localStorage.removeItem('curruser');
  this.router.navigate(['/login']);
  }
}
