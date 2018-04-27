import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'Monster';

  constructor() {}

  ngOnInit() {
 // 	var mySwiper = new Swiper('.swiper-container', {
	//     speed: 400,
	//     spaceBetween: 100
	// });
	navigator.serviceWorker.register('sw.js');
	  Notification.requestPermission(function(result) {
    	if (result === 'granted') {
	      navigator.serviceWorker.ready.then(function(registration) {
	        registration.showNotification('Monster', {
	          body: '5 new matching Jobs found for your profile - check now!',
				icon: 'assets/icon-128x128.png' // optional
	        });
	      });
	    }
	  });
  }
}
