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
    this.http.post<any>('https://getform.io/f/501eab67-3638-499a-81aa-b9bf661f3439', this.post).subscribe(res => {
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
