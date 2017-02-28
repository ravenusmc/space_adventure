import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit {

    reasons: string[];
    imageUrl =  'https://source.unsplash.com/5477L9Z5eqI/255x200';

    addReason(value){
        if (value !== ''){
            this.reasons.push(value);
        }
    }


  constructor() {
      this.reasons = ['I have always loved space', 'The vastness of space draws me to it',
      'That feeling when you look up into the sky', 'reason blah blah blah',
      'reason blah blah blah'];
  }

  ngOnInit() {
  }

}
