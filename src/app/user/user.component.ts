import { Component,computed,Input,Output,EventEmitter, output} from '@angular/core';

interface User {
  id:string,
  avatar:string,
  name:string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Output() selectedUser= new EventEmitter<string>();
  @Output() sUserName = new EventEmitter<string>();
  //selectedUser = output<string>()
  //avatar = input.required<string>()
  //name = input.required<string>()
  //imagePath = computed(()=>'assets/users/'+this.avatar())  lazim olsa prop sonuna moterize artir
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onUserClick (){
    this.selectedUser.emit(this.user.id)
    //this.sUserName.emit(this.name)
  }
}
