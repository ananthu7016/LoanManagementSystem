import { Component, OnInit } from '@angular/core';
import { VerificationDetails } from 'src/app/shared/model/verification-details';
import {OfficerService} from 'src/app/shared/service/officer.service'

@Component({
  selector: 'app-verification-list',
  templateUrl: './verification-list.component.html',
  styleUrls: ['./verification-list.component.scss']
})
export class VerificationListComponent implements OnInit {

  constructor(public service:OfficerService) { }

  ngOnInit(): void {
    this.service.GetDetailsOfAllToVerify();
  }



  //#region Show Specific Details to Verify 
 selectedDetail:VerificationDetails= new VerificationDetails();
 showVerificationDetailToggle:boolean=false;

  showDetailedToVerify(details:VerificationDetails){

    console.log('The Details Recived to Verify are ',details);

    // then we need to store to the Local Instance 
    this.selectedDetail = details;

    // then we need to show the div that has the details 
    this.showVerificationDetailToggle=true;

  }

  //#endregion

}
