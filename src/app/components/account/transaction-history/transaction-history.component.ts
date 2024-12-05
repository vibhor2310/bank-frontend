import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../service/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  imports: [NgFor,NgIf],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent implements OnInit{

  errorMsg:string|undefined;
  transactions:any[]=[];
  aid:any

  constructor(private accountService:AccountService,private actRoute:ActivatedRoute){

    
 
  }
  ngOnInit(): void {
    this.getTransactionHistory();
 
  }

  getTransactionHistory(){
    this.actRoute.parent?.paramMap.subscribe(p=>{
      this.aid = p.get('id');
      // console.log(this.aid);
      this.accountService.getTransactionHistory(this.aid).subscribe({
        next:(data)=>{
          this.transactions= data;
        },
        error:(err)=>{
          this.errorMsg = "Unable to show at this time , please try after some time"
        }
      })
      
    })
      
  }


  

}


// transactions = [
//   { date: '2024-11-26', 
//     accountNumber: 'ACC1234567890', 
//     transactionType: 'Deposit', 
//     amount: 5000 
//   }, 
//   { 
//     date: '2024-11-26', 
//     accountNumber: 'ACC1234567890', 
//     transactionType: 'Withdrawal', 
//     amount: 2000 
//   },
//   { 
//     date: '2024-11-26', 
//     accountNumber: 'ACC1234565540', 
//     transactionType: 'TRANSFER', 
//     amount: 2000 
//   },
//   { 
//     date: '2024-11-26', 
//     accountNumber: 'ACC1234567890', 
//     transactionType: 'Withdrawal', 
//     amount: 2000 
//   },
//   { 
//     date: '2024-11-26', 
//     accountNumber: 'ACC1234567890', 
//     transactionType: 'DEPOSIT', 
//     amount: 2000 
//   }    
// ]
