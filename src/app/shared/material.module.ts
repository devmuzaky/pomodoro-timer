import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule, MatRippleModule, MatDialogContent, MatDialogTitle, MatFormField, MatInput, MatDialogActions, MatDialogClose,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {
}
