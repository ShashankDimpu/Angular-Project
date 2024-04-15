import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'dimpu_learning';
  constructor(private route:ActivatedRoute, private router: Router ){

  }
  ngOnInit(): void {
    this.router.navigate(['/login'])
    throw new Error('Method not implemented.');
  }
  
 
}
