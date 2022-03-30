import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { iCardData } from './dashboard-content-card.model';

@Component({
  selector: 'app-dashboard-content-card',
  templateUrl: './dashboard-content-card.component.html',
  styleUrls: ['./dashboard-content-card.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class DashboardContentCardComponent implements OnInit {


  @Input() data: iCardData;
  title: string = "Projeto sem nome";
  openDescription: boolean = false;
  constructor() { }


  ngOnInit(): void {
  }

  setDescriptionStatus(name: string, status: boolean) {
    console.log(name, '-', status);
    this.openDescription = status;
  }
}
