import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AccountService{

    private getTransactionHistoryApi = 'http://localhost:8081/customer/transaction-history/get/';

    private getAccountByUsernameApi = 'http://localhost:8081/customer/account-id';

    private getAccountByIdApi = 'http://localhost:8081/customer/account/get/';

    private postTransactionApi = 'http://localhost:8081/customer/account/transaction/transfer';

    private depositMoneyApi = 'http://localhost:8081/customer/account/transaction/deposit';

    private withdrawMoneyApi = 'http://localhost:8081/customer/account/transaction/withdraw';

    private getLoanDetailsApi = 'http://localhost:8081/customer/loan-details/get/';

    private getCardDetailsApi = 'http://localhost:8081/customer/card-details/get/';

    private loanApplyApi = 'http://localhost:8081/customer/account/loan-apply/';

    private cardApplyApi = 'http://localhost:8081/customer/account/card-apply/';

    private postFDApi = 'http://localhost:8081/customer/investment/FD/';

    private postMutualFundApi = 'http://localhost:8081/customer/investment/mutual-fund/';

    private postBondsApi = 'http://localhost:8081/customer/investment/bonds/';
    
    constructor(private httpClient:HttpClient){ } // injecting HttpClinet;

    getTransactionHistory(aid:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.get(this.getTransactionHistoryApi+aid,httpOptions);

    }

    getAccountByUsername(username:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.get(this.getAccountByUsernameApi+"?username="+username,httpOptions);
    }

    getAccountById(aid:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.get(this.getAccountByIdApi+aid,httpOptions);
    }

    postTransaction(obj:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.post(this.postTransactionApi,obj,httpOptions);

    }

    depositMoney(obj:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };

          return this.httpClient.post(this.depositMoneyApi,obj,httpOptions);
          

    }

    withdrawMoney(obj:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };

          return this.httpClient.post(this.withdrawMoneyApi,obj,httpOptions);
          

    }

    getLoanDetails(aid:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.get(this.getLoanDetailsApi+aid,httpOptions);

    }

    getCardDetails(aid:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.get(this.getCardDetailsApi+aid,httpOptions);

    }

    applyForLoan(obj:any,aid:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.post(this.loanApplyApi+aid,obj,httpOptions);

    }

    applyForCard(cardType:any,aid:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.post(this.cardApplyApi+aid,cardType,httpOptions);

    }

    applyForFD(obj:any,aid:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.post(this.postFDApi+aid,obj,httpOptions);

    }

    applyForMutualFund(obj:any,aid:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.post(this.postMutualFundApi+aid,obj,httpOptions);
    }

    applyForBonds(obj:any,aid:any){
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.post(this.postBondsApi+aid,obj,httpOptions);

    }

}