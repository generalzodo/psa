import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'psa';
  videos: any = [];
  data: any;
  post: any = {}
  isValidFormSubmitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCHING', response.res);
      this.videos = response.res.items
      // console.log(this.data);

    });
  }

  sanitize(videoURL: any) {
    let vid = videoURL.replace("watch", "embed");
    vid = vid.replace("?v=", "/");
    return this._sanitizer.bypassSecurityTrustResourceUrl(vid);
  }

  sendContact(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      console.log('invalid');

      return;
    }
    this.isValidFormSubmitted = true;
    this.http.post<any>('https://mailthis.to/somto8000@gmail.com', this.post).subscribe(res => {
      console.log(res);

    });


  }

}
