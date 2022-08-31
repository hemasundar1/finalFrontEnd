import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationDetails } from 'src/app/employee-module/classes/application-details';
import { DocumentDetails } from 'src/app/employee-module/classes/document-details';
import { UserModel } from 'src/app/employee-module/classes/user-model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private baseURL="http://localhost:8086/employee/"
 private allrequestsapp=this.baseURL+"requests"
 private allrequestsdocments=this.baseURL+"documents"
 //private documentdetails=this.baseURL+"document"
 private allrequestsusers=this.baseURL+"users"
 private getCurrentuser="http://localhost:8086/current-employee"
 
 private request=this.baseURL+"request"
 private approve=this.baseURL+"requestApprove"
 private reject=this.baseURL+"requestReject"

 private getByemployeeId="http://localhost:8086/admin/list"
 
  constructor(private http:HttpClient) { }

  getCurrentUser():Observable<any>{
    return this.http.get<any>(`${this.getCurrentuser}`);
  }

  getEmployeeById(id:any):Observable<any>
  {
    return this.http.get<any>(`${this.getByemployeeId}/${id}`);
  }

  appliedscholarship():Observable<any>
  {
     return this.http.get<any>(`${this.allrequestsdocments}`);
  }
  getDocumentById(id:any):Observable<DocumentDetails>
  {
    return this.http.get<DocumentDetails>(`${this.allrequestsdocments}/${id}`);
  }
  approveStatus(id:number,approveA:ApplicationDetails)
  {
    console.log(id,approveA);
    return this.http.put(`${this.approve}/${id}`,approveA);
  }
  rejectStatus(id:number,rejectR:ApplicationDetails)
  {
    console.log(id,rejectR);
    return this.http.put(`${this.reject}/${id}`,rejectR);
  }
  public downloadFile(loanId:any){
    const REQUEST_PARAMS = new HttpParams().set('id',loanId);
    return this.http.get("http://localhost:8086/downloadFromDB" , {
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer'
    })
  }

  public downloadType(loanId:any){
    const REQUEST_PARAM = new HttpParams().set('id',loanId);
    return this.http.get( "http://localhost:8086/fileType" , { params: REQUEST_PARAM });
  }

  // public checkDocumentSize(file:FormData){
  //   return this.httpclient.post(this.PATH_OF_API + "/checkDocumentSize", file, {responseType: 'text'});
  // }
}
