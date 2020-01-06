import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/providers/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() members: Member[] = [];
  constructor() {
    this.members.push({ firstname: 'jonas', lastname: 'van hoof', _id: 'd123qwdw23djq123owd' });
  }

  ngOnInit() {
  }

}
