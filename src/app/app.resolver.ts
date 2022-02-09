import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


// import { ProductService } from '../product/product.service';

@Injectable({
    providedIn: 'root'
})
export class AppResolverService implements Resolve<any> {
    constructor(private route: ActivatedRoute, private http: HttpClient) { }
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        console.log(route.paramMap);

        console.log('Called Get Product in resolver...', route);
        return this.http.get<any>('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCpcbnHO2HQFqSldL-Wq9EIw')
    }
}