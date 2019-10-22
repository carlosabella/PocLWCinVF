import { LightningElement, api } from 'lwc';


export default class LwcDataService extends LightningElement {
    // The record page provides recordId and objectApiName
    @api recordId = '0012o00002NQS5T';
    @api objectApiName = 'Account'; 
}