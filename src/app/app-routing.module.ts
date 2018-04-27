import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes:Routes = [ 
    { path:'', component: SignupComponent },
	{ path:'dashboard', component: DashboardComponent },
	{ path:'jobDetails/:id', component: JobDetailsComponent }
];

@NgModule({
    imports:[ RouterModule.forRoot(routes) ],
    exports:[ RouterModule ]
})

export class AppRoutingModule {
    
    constructor() {
        // code...
    }
}