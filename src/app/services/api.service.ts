import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private bannerListSubject: BehaviorSubject<any>;
  private bannerList$: Observable<any> | any = null;

  constructor(private http: HttpClient) {
    this.bannerListSubject = new BehaviorSubject(1);
  }

  bannerList(): Observable<any> {
    if (!this.bannerList$) {
      this.bannerList$ = from(
        this.http.get(`${environment.base_url}api/banner/list`, this.httpOptions)
      );
      this.bannerList$.subscribe((data: any) => {
        this.bannerListSubject.next(data);
      });
    }
    return this.bannerListSubject;
  }
}
