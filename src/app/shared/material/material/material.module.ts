import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar'

const material = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatDialogModule,
  MatToolbarModule
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
