import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

	value;
  	constructor(private route:ActivatedRoute, private router:Router) { }

	ngOnInit() {
		this.route.params.subscribe( (params)=> {
			this.value = params.id;
		});
	}

	onGoBack() {
		this.router.navigate(['/dashboard']);
	}
	onLogout() {
		this.router.navigate(['/']);	
	}
}
