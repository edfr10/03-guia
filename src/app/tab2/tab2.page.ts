import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	dataType:string = '';
	result:any;

	validateDataType() {
		if(( this.dataType == 'true' || this.dataType == 'false')  ||  ( this.dataType == 'TRUE' || this.dataType == 'FALSE')){
			return('Bolean data');
		}
		else if( Number(this.dataType) ){
			return('Number data');
		}
		else if( this.dataType == '' ){
			return('Data not valid');
		}
		else{
			return('String data');
		}
	}

}
