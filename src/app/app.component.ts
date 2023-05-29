import { getTestBed } from '@angular/core/testing';
import { TenderServicesService } from './tender-services.service';
import { Component ,OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { TenderModel } from './tender-model';
import { MatDialog,
         MatDialogRef,
         MAT_DIALOG_DATA,
         MatDialogConfig,

  } from '@angular/material/dialog';
import { from } from 'rxjs';
import { TenderDetailsComponent } from './tender-details/tender-details.component';
import { AddTenderComponent } from './add-tender/add-tender.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'TenderTask';
  public displayedColumns=[
    'tenderTitle',
    'organization',
    'tenderValue',
    'lastSubmissionDate',
   'attachment']
  public dataSource= new MatTableDataSource<TenderModel>();
 // tenderModel!: TenderModel[];
  //ted:TenderModel=new TenderModel();

  constructor( public tenderServicesService:TenderServicesService,
    private dialog: MatDialog){}

ngOnInit(): void{
  this.getTenderDetail();

}
openDialog(tenderId:number){
    const MatdialogConfig = new MatDialogConfig();
    let dialogConfig = {

    width: '600px',
    height: '400px',
    data: tenderId,

    };
    //dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.data = tenderId;
    const dialogRef = this.dialog.open(
      TenderDetailsComponent,
    dialogConfig
    );

}

  public getTenderDetail=()=>{
    this.tenderServicesService.getTender().subscribe((data)=>{
      console.log("Appb",data);
     this.dataSource.data = data as TenderModel[];
     // this.dataSource=new MatTableDataSource(this.tenderModel)
    });
  }

  onClose(){
  this['dialogRef'].close();
  }

  onAdd(){
    const MatdialogConfig = new MatDialogConfig();
    let dialogConfig = {
      width: '600px',
    height: '400px',
  };
 const dialogRef = this.dialog.open(
      AddTenderComponent,
    dialogConfig
    );
  }
}
