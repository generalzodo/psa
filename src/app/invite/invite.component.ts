import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var Toastify: any;

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  post: any = {}
  isValidFormSubmitted: boolean = false;

  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
  }

  makePayment(form: NgForm) {

    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
  }

  sendInvite(form: NgForm,) {
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
      text: 'Your invite has been recieved successfully',
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
