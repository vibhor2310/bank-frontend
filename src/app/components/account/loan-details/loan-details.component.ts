import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../service/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  imports: [NgFor,NgIf],
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.css'
})
export class LoanDetailsComponent implements OnInit{

  errorMsg:string|undefined;
  loans:any[]=[];
  aid:any

  constructor(private accountService:AccountService,private actRoute:ActivatedRoute){} 


  ngOnInit(): void {
    this.getLoanDetails();
  }



  getLoanDetails(){
    this.actRoute.parent?.paramMap.subscribe(p=>{
      this.aid = p.get('id');
      // console.log(this.aid);
      this.accountService.getLoanDetails(this.aid).subscribe({
        next:(data)=>{
          this.loans= data;
        },
        error:(err)=>{
          this.errorMsg = "Unable to show at this time , please try after some time"
        }
      })
      
    })
      
  }
 



}



// loans = [
//   { date: '2024-11-26', 
//     loanType: 'PROPERTY', 
//     amount: 5000000, 
//     status: 'APPROVED'
//   }, 
//   { 
//     date: '2024-11-26', 
//     loanType: 'STUDY',
//     amount: 200000 ,
//     status: 'PENDING', 
//   },
//   { 
//     date: '2024-11-26', 
//     loanType: 'HOME', 
//     amount: 2000,
//     status: 'NOT_APPROVED' 
//   }
// ]
