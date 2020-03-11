import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserListService } from 'src/app/services/user-list.service';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId:any;
  friends:User[];
  friend:User;

  constructor(private activatedRoute:ActivatedRoute,
    private userListService:UserListService) { 
      this.friends = this.userListService.getFriends();
     this.friendId = this.activatedRoute.snapshot.params['uid'];
     
     console.log(this.friendId);
     

    this.friend = this.friends.find((e)=> {
    return e.uid ==this.friendId });
    console.log(this.friend);
  }

  ngOnInit(): void {
  }

}
