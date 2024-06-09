export class ApprovalDetails {

    // this  is a model class to show the details to verify 

    verificationId: number = 0;
    customerId: number = 0;
    loanId: number = 0;
    customerName: string = '';
    customerPhone: string = '';
    loanName: string = '';
    loanAmount: number = 0;
    review: string = '';
    loanRequestDate: Date = new Date();
    repaymentFrequency: number = 0;


}
