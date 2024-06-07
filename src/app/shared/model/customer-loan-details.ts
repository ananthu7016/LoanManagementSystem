export class CustomerLoanDetails {

    // this is a model of a class to store the details of Loan taken by a Customer 

    //#region  Get Loan Details of Customer 

    customerId:number=0;
    customerName:string='';
    loanName:string='';
    loanCategory:string='';
    loanAmountTaken:number=0;
    amountToPay:number=0;
    amountPayed:number=0;
    loanStatus:boolean=false;

    //#endregion
}
