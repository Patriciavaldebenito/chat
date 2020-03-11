import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 friends:User[];

  constructor() { 

    let User0: User={
      name:'Patricia',
      nick:'paty',
      subnick:'paty',
      age:28,
      email:'patricia.valdebenito@usach.cl',
      friend:true,
      uid:0
    }
    
    let User1: User={
      name:'mili',
      nick:'miu',
      subnick:'milii',
      age:0,
      email:'patricia.valdebenito@usach.cl',
      friend:true,
      uid:1
    }
    
    let User2: User={
      name:'Patricio',
      nick:'toylokoyo',
      subnick:'pato',
      age:19,
      email:'patricia.valdebenito@usach.cl',
      friend:false,
      uid:2
    }
    
    let User3: User={
      name:'Nataly',
      nick:'naty',
      subnick:'natili',
      age:16,
      email:'patricia.valdebenito@usach.cl',
      friend:false,
      uid:3
    }
    
    let User4: User={
      name:'Dominique',
      nick:'domi',
      subnick:'omi',
      age:28,
      email:'patricia.valdebenito@usach.cl',
      friend:false,
      uid:4
    }

    this.friends = [ User0,User1,User2,User3,User4 ];
    console.log(this.friends);
  }

  ngOnInit(): void {
  }

}
