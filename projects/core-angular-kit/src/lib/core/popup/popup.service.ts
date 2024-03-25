import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  dialogConfig: MatDialogConfig;
constructor( private dialog: MatDialog) { 
  this.dialogConfig = new MatDialogConfig();
  this.dialogConfig.autoFocus = false;
  this.dialogConfig.panelClass = 'epsSelectorPanel';
  this.dialogConfig.backdropClass = 'opacity-backdrop';
}

open<modalType>(modalComponent: ComponentType<modalType>){
  const dialogRef = this.dialog.open(modalComponent, this.dialogConfig);
  dialogRef.disableClose = true;
  return dialogRef; 
}

async openAwait<modalType>(modalComponent: ComponentType<modalType>): Promise<any>{
  const dialogref = await this.dialog.open(modalComponent, this.dialogConfig);
  dialogref.disableClose = true;
  return await dialogref;
}

}
