import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  selectedAdmin: Admin;
  readonly URL_API = 'http://localhost:3000/api/admin';
  admins: Admin[] = [];
  constructor(private http: HttpClient) {
    this.selectedAdmin = new Admin();
   }
  getAdmin(id: string) {
    return this.http.get(this.URL_API + '/' + id);
  }
  getAdmins() {
    return this.http.get(this.URL_API);
  }

  postAdmins(Admins: Admin) {
    return this.http.post(this.URL_API, Admins);
  }

  putAdmins(Admins: Admin) {
    return this.http.put(this.URL_API + '/$(gasto._id)', Admins);
  }

  deleteAdmins(_id: string) {
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
