import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import * as firebase from 'firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import firebase from 'firebase/app';
import 'firebase/auth';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  roomForm: FormGroup;
  chatname = '';
  roomname = '';
  ref: any
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.roomForm = this.formBuilder.group({
      'roomname': [null, Validators.required]
    });
  }

  onFormSubmit(form: any) {
    this.ref = firebase.database().ref('rooms/');
    const room = form;
    this.ref.orderByChild('roomname').equalTo(room.roomname).once('value', (snapshot: any) => {
      if (snapshot.exists()) {
        this.snackBar.open('Room name already exist!');
      } else {
        const newRoom = firebase.database().ref('rooms/').push();
        newRoom.set(room);
        // this.router.navigate(['/roomlist']);
      }
    });
  }

}