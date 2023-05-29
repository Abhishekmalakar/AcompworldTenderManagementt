import { Component, Inject, OnInit } from '@angular/core';
import { TenderServicesService } from '../tender-services.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TenderModel } from '../tender-model';

@Component({
  selector: 'app-tender-details',
  templateUrl: './tender-details.component.html',
  styleUrls: ['./tender-details.component.css']
})
export class TenderDetailsComponent implements OnInit {

  //constructor() { }
  data!: number;
  constructor(

     private tenderServicesService:TenderServicesService,

    public dialogRef: MatDialogRef<TenderDetailsComponent>,

   @Inject(MAT_DIALOG_DATA) public tenderId : number

    ){this.data = tenderId}
    public displayedColumns=[
      'tenderTitle',
      'organization',
      'tenderValue',
      'lastSubmissionDate',
       'attachment',
       'details',
      'tenderAddress'];
     public dataSource= new MatTableDataSource<TenderModel>();

     ter:TenderModel=new TenderModel();
  ngOnInit(): void {
    this.getTenderDetailbyId(this.tenderId);
  }

  public getTenderDetailbyId(tenderId: number){


    this.tenderServicesService.getDetailbytitle(tenderId).subscribe((data)=>{
      console.log("Apyyyypb",data);
     //this.dataSource.dat = data as TenderModel;
      this.ter = data as TenderModel;
    });
  }
}

