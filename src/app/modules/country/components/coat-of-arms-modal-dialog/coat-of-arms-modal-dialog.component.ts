import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from '@models/*';

@Component({
  selector: 'app-coat-of-arms-modal-dialog',
  templateUrl: './coat-of-arms-modal-dialog.component.html',
  styleUrls: ['./coat-of-arms-modal-dialog.component.scss'],
})
export class CoatOfArmsModalDialogComponent implements OnInit {
  country: Country;
  constructor(
    private dialogRef: MatDialogRef<CoatOfArmsModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: Country
  ) {
    this.country = data;
  }

  ngOnInit(): void {}
  closeDialog() {
    this.dialogRef.close();
  }
}
