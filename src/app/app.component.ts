import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userInfo: userInfo[] = [];

  public buttonState: boolean = false;

  public user: userInfo = {
    nickname: '',
    comment: '',
  };

  constructor() {}

  onSave() {
    this.userInfo.push(this.user);
    this.user = {
      nickname: '',
      comment: '',
    };  
  }
}

interface userInfo {
  nickname: string;
  comment: string;
}
