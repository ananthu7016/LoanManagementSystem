import { Component, OnInit } from '@angular/core';
import { ApprovalDetails } from 'src/app/shared/model/approval-details';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.scss']
})
export class ApprovalListComponent implements OnInit {

  // this is a component to show the details of the approval list 

  constructor(public service:AdminService) { }

  ngOnInit(): void {
  console.log('calling the method to fetch all the List of loans to approve');
  this.service.GetDetailsOfLoansToApprove();

  }


  //#region Show Details to approve 
  showDetailsToApprove(details:ApprovalDetails){

    console.log('The Details to show are ',details);

    // then we need to pass it to service so the list component can access it.
     this.service.selectedApprovalDetail = details;
     
  }

  //#endregion

  

}
