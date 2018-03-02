import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

	pageSize = 100;
	apiBaseUrl = 'https://mauroao-lista-telefonica-api.herokuapp.com/api'; 
	
	constructor() {}
}

/* 
	url do servico interno do node js
	apiBaseUrl: 'http://localhost:3000/api' 
*/

/* 
	url do servico do node js na nuvem
	apiBaseUrl: 'https://mauroao-lista-telefonica-api.herokuapp.com/api' 
*/
