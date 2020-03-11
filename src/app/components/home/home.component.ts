import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserListService } from 'src/app/services/user-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends:User[];
  query:string='';

  constructor(private userListService:UserListService,
   ){
     this.friends = this.userListService.getFriends();
     
  }

  ngOnInit(): void {
  }

}
