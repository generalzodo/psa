import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
declare var Toastify: any;

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
    this.http.post<any>('https://getform.io/f/e1f00d09-a88d-45cd-907a-b1ff443cfb42', this.post).subscribe(res => {
      console.log(res);

    });
    Toastify({
      text: 'Your message has been recieved successfully',
      duration: 5000,

      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: 'green',
      },
      onClick: function () { } // Callback after click
    }).showToast();

  }

}
