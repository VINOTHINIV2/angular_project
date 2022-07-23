import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'ANGULAR ' + VERSION.major;
  public headers = ['Sno', 'Name', 'Class','Team','Score'];
  public rows = [
    {
      Sno :'1',
      Name :'Vicky',
      Class :'B',
      Team :'Red',
      Score :'85',
    },
    {
      Sno :'2',
      Name :'Princy',
      Class :'A',
      Team :'Blue',
      Score :'80',
    },
    {
      Sno :'3',
      Name :'Aravind',
      Class :'C',
      Team :'Green',
      Score :'90',
    },
    {
      Sno :'4',
      Name :'Karthi',
      Class :'B',
      Team :'Yellow',
      Score :'75',
    },
    {
      Sno :'5',
      Name :'Priya',
      Class :'A',
      Team :'Red',
      Score :'84',
    }
  
  ];
}
