import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: boolean;

  constructor(private dataService: DataService) { 
    console.log("Constructor ran");
  }

  ngOnInit() {
    console.log("ngOnInit ran");

    this.name = "John Doe";
    this.age = 30;
    this.address = {
      street: "50 Main st",
      city: "Boston",
      state: "MA"
    }
    this.hobbies = ["Write code", "Watch movies", "Ride bike"];
    this.hello = 0;
    this.dataService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    
  }
  onClick() {
    console.log("HELLO");
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    // Prevent submit
    return false; 
  }

  deleteHobby(selectedHobby){
    this.hobbies.forEach((hobby, index, array)=>{
      if(hobby == selectedHobby)
        this.hobbies.splice(index , 1);
    });
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Address{
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}