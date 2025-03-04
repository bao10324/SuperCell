import { Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent
{
  @Input('user') user !: User;

  
  subscription!: Subscription;

  constructor(public dialog: MatDialog, public filedialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      data: this.user,
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}