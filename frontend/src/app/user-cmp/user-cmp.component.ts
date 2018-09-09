import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {UserServiceService} from '../user-service.service';
import {User} from './user';

@Component({
  selector: 'app-user-cmp',
  templateUrl: './user-cmp.component.html',
  styleUrls: ['./user-cmp.component.css']
})
export class UserCmpComponent implements OnInit {

   allUsers: User[];
   statusCode: number;
   requestProcessing = false;
   userIdToUpdate = null;
   processValidation = false;
   //Create form
   userForm = new FormGroup({
       user_name: new FormControl('', Validators.required),
       user_role: new FormControl('', Validators.required)	   
   });
   //Create constructor to get service instance
   constructor(private userServiceService: UserServiceService) {
   }
   //Create ngOnInit() and and load users
   ngOnInit(): void {
        this.getAllUsers();
   }   
   //Fetch all users
   getAllUsers() {
        this.userServiceService.getAllUsers()
	  .subscribe(
                data => this.allUsers = data,
                errorCode =>  this.statusCode = errorCode);   
   }
   //Handle create and update user
   onUserFormSubmit() {
	  this.processValidation = true;   
	  if (this.userForm.invalid) {
	       return; //Validation failed, exit from method.
	  }   
	  //Form is valid, now perform create or update
          this.preProcessConfigurations();
	  let user = this.userForm.value;
	  if (this.userIdToUpdate === null) {  
	    //Generate user id then create user
            this.userServiceService.getAllUsers()
	      .subscribe(users => {
			 
		   //Generate user id	 
		   let maxIndex = users.length - 1;
		   let userWithMaxIndex = users[maxIndex];
		   let userId = userWithMaxIndex.id + 1;
		   user.id = userId;
		   
		   //Create user
     	   this.userServiceService.createUser(user)
			  .subscribe(successCode => {
				   this.statusCode = successCode;
				   this.getAllUsers();	
           this.backToCreateUser();
				 },
				 errorCode => this.statusCode = errorCode
			   );
		 });		
	   } else {  
   	     //Handle update user
          user.id = this.userIdToUpdate; 		
         this.userServiceService.updateUser(user)
	        .subscribe(successCode => {
		     this.statusCode = successCode;
		     this.getAllUsers();	
		     this.backToCreateUser();
		},
		errorCode => this.statusCode = errorCode);	  
	   }
   }
   //Load user by id to edit
   loadUserToEdit(userId: string) {
      this.preProcessConfigurations();
      this.userServiceService.getUserById(userId)
	   .subscribe(user => {
	            this.userIdToUpdate = user.id;   
	            this.userForm.setValue({ user_name: user.user_name, user_role: user.user_role });
	   	    this.processValidation = true;
		    this.requestProcessing = false;   
	   },
           errorCode =>  this.statusCode = errorCode);   
   }
   //Delete user
   deleteUser(userId: string) {
      this.preProcessConfigurations();
      this.userServiceService.deleteUserById(userId)
	      .subscribe(successCode => {
		  //this.statusCode = successCode;
	  	  //Expecting success code 204 from server
		  this.statusCode = 204;
		  this.getAllUsers();	
		  this.backToCreateUser();
		},
		errorCode => this.statusCode = errorCode);    
   }
   //Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
      this.requestProcessing = true;   
   }
   //Go back from update to create
   backToCreateUser() {
      this.userIdToUpdate = null;
      this.userForm.reset();	  
      this.processValidation = false;
   }
}
