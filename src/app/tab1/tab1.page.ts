import { Component } from '@angular/core';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
	base:number;
	altura:number;

	calculate() {
		console.log( (this.base + this.altura) *2 );
	}
}
