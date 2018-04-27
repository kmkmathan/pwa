import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }
  isLogin = true;
  login = {
  	btn:'Login',
  	head:'Welcome Back',
  	subHead:"",
  	navLogin: 'Sign Up?',
  	oauth:'Or login using'
  }
  ngOnInit() {
  
  }

  onLogin() {
  	if(this.isLogin) {
  		this.login = {
	  	btn:'Sign Up',
	  	head:'Hello!',
	  	subHead:"Let's create an account to continue",
	  	navLogin: 'Login?',
	  	oauth:'Or login using'
	  }
	  this.isLogin= false;
  	} else {
  		this.login = {
		  	btn:'Login',
		  	head:'Welcome Back',
		  	subHead:"",
		  	navLogin: 'Sign Up?',
		  	oauth:'Or login using'
		  }
		  this.isLogin = true;
  	}
  }
  onOauth() {
  	this.router.navigate(['/dashboard']);
  }
  onTopBtn() {
  	if(this.isLogin) {
  		this.router.navigate(['/dashboard']);
  	} else {
  		this.login = {
		  	btn:'Login',
		  	head:'Welcome Back',
		  	subHead:"",
		  	navLogin: 'Sign Up?',
		  	oauth:'Or login using'
		  }
		  this.isLogin = true;
  	}
  }
}
