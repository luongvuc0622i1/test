import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hai',
  templateUrl: './hai.component.html',
  styleUrl: './hai.component.css'
})
export class HaiComponent {

  constructor(private router: Router) { }

  click() {
    this.router.navigate(['/mot']);
  }

}
