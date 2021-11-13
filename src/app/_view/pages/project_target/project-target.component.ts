import { Component, OnInit } from '@angular/core';


// export interface PeriodicElement {
//   name: string;
//   language: string;
//   address: string;
//   date: number;
//   profile: string;
//   action : string;
  
// }

const ELEMENT_DATA = [
  {name: 'Hydrogen', language: 'hindi' , address:'dddddd', date:'25-5-2021' ,profile:'view'},
  {name: 'Hydrogen', language: 'hindi' , address:'dddddd', date:'25-5-2020' ,profile:'view'},
  {name: 'Hydrogen', language: 'hindi' , address:'dddddd', date:'25-5-2020' ,profile:'view'},
  {name: 'Hydrogen', language: 'hindi' , address:'dddddd', date:'25-5-2020' ,profile:'view'},
  {name: 'Hydrogen', language: 'hindi' , address:'dddddd', date:'25-5-2020' ,profile:'view'},
 
];

@Component({
  selector: 'app-project-target',
  templateUrl: './project-target.component.html',
  styleUrls: ['./project-target.component.scss']
})
export class ProjectTargetComponent implements OnInit {

  displayedColumns:string[] = ['name','language','address', 'date','profile', 'action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
