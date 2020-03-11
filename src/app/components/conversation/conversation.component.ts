import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId:any;
  constructor(private activatedRoute:ActivatedRoute) { 
     this.friendId = this.activatedRoute.snapshot.params['uid'];
     console.log(this.friendId);
  }

  ngOnInit(): void {
  }

}
