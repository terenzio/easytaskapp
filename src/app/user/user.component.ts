import {Component, computed, signal, Input, input, EventEmitter, Output, output} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input() avatar!: string;
  // @Input() name!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  //@Output() select = new EventEmitter();
  select = output<string>();

  //selectedUser = DUMMY_USERS[randomIndex];
  selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  imagePath = computed(() => {
       return 'assets/users/' + this.avatar();
  })

  onSelectedUser() {
    console.log("Clicked!!");
    console.log('User selected:', this.selectedUser);
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.id());
  }


}
