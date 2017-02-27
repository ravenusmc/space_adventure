import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit {

    reasons = ['I have always loved space', 'The vastness of space draws me to it',
'That feeling when you look up into the sky', 'reason blah blah blah',
'reason blah blah blah'];

  constructor() { }

  ngOnInit() {
  }

}
