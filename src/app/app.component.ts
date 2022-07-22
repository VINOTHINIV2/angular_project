import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'ANGULAR ' + VERSION.major;
  public headers = ['S.No', 'Name', 'Class','Team','Score'];
  public rows = [
    {
      S.No :'1',
      Name :'Ajay' ,
      Class : 'B',
      Team : 'Blue',
      Score :'80',
    },
    {
      S.No :'2',
      Name :'Vicky' ,
      Class : 'A',
      Team : 'Red',
      Score :'82',
     },
    {
       S.No :'3',
      Name :'Riya' ,
      Class : 'A',
      Team : 'Green',
      Score :'85',
    },
    {
       S.No :'4',
      Name :'Kavin' ,
      Class : 'C',
      Team : 'Blue',
      Score :'90',
    },
    {
       S.No :'5',
      Name :'Keerthi' ,
      Class : 'B',
      Team : 'Yellow',
      Score :'79',
    },
  
  ];
}

