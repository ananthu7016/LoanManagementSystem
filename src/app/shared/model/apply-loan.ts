export class ApplyLoan {

    // this is to model to store the details of loans to be applied 

    requestId:number=0;
    loanId:number=0;
    custId:number=0;
    loanRequestDate:Date = new Date();
    loanPurpose:string;
    requestedAmount:number=0;
    repaymentFrequency:number=0;
    requestStatus:boolean=true;


}
