export class Customer {

    // this is the model class for Customers 


    //#region Register Customer 

    custId:number=0;
    custFirstName :string='';
    custLastName:string='';
    custOccupation:string='';
    custAddress:string='';
    custPhone:string='';
    custAadhar:string='';
    custGender:string='';
    custDob:Date=new Date();
    custNationality:string='';
    custAnnualIncome:number=0;
    custEmploymentStatus:boolean=false;
    custMaritalStatus:boolean=false;
    userId:number=0;
    custStatus:boolean=true;
    //#endregion
}
