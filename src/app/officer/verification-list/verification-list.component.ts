import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DropDown } from 'src/app/shared/model/drop-down';
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

    // then after that we need to set the Verification id to a instance for the Submition process
    this.verificationReview.id = details.verificationId;

  }

  //#endregion



  //#region On submitting the Verification Report 
  // first we need a instance to Model bind since we need only Id and a String value to Bind
  // we can use the Existing Model for DropDown 
  verificationReview: DropDown = new DropDown();
  onSubmit(){

    // before this method is called we need to bind values to the instance.

   console.log('The Details to Insert is ',this.verificationReview);

    this.service.SaveVerificarionReview(this.verificationReview)
    .subscribe((reponse)=>{
      console.log('This is the Response that we get after sending a request to save the verification report the response recieved is ',reponse);
    },
  (error)=>{
    console.log('some error occured while submitting the review Report, the error is ',error);
  })

  }

  //#endregion

}
