import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrl: './mot.component.css'
})
export class MotComponent {

  constructor(private router: Router) { }

  click() {
    this.router.navigate(['/hai']);
  }

}
