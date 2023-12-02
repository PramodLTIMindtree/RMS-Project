import { LightningElement } from 'lwc';

export default class Parentcustomer extends LightningElement {
    searchDetail=[];
    handleCustomer(event){
        this.searchDetail=[];
     //   alert('See the Magic, I called from child')
     //   alert(event.detail);
        try{
            event.detail.forEach(record => {
                var customerData={
                    id:record.Id,
                    name:record.Name,
                    email:record.Email__c,
                    status:record.Status__c
                }
                this.searchDetail.push(customerData);
            });
        }catch(e){
            console.log(e);
        }
    }
    handleClear () {
        this.searchDetail = [];
    }
}