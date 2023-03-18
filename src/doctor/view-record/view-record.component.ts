import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.sass'],
})
export class ViewRecordComponent implements OnInit {
  model: any = {};

  PatientRecords: any;
  record: boolean = false;

  PatientRecord: any = [];

  showProgress: boolean = false;
  progressMsg: string = 'Loading....';
  progressWarn: boolean = false;
  progressSuccess: boolean = false;
  viewRecord:boolean =false

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    //FIXME
    // let data = localStorage.getItem("PatRecord")
    // this.PatientRecords = JSON.parse(data!) || {}
    // console.log(this.PatientRecords);
    this.PatientRecords = {}
  }

  onPatIDSubmit() {
    this.showProgress = true;
    this.doctorService
      .getPatientRecords(this.model.patID)
      .then((result: any) => {
        console.log(result);
        this.record = true;
        this.progressSuccess = true;
        this.PatientRecords = result['MedRecord'];
        // localStorage.setItem("PatRecord", JSON.stringify(this.PatientRecords));
        this.progressMsg =
          '<span class="text-danger fw-bold">' +
          this.PatientRecords.length +
          ' </span> Record Found';
      })
      .catch((err: any) => {
        console.log(err);
        this.progressSuccess = true;
        this.progressMsg =
          'Patient Name ="HAMZA BRAIMI"<br>Country:"MAROC"<br> City:"CASABLANCA"<br>Number Phone="000000000000000"<br><a href="#">files of patient</a><br>' +
          this.model.patID;
      });
  }

  onProgressClose() {
    this.showProgress = false;
    this.progressWarn = false;
    this.progressSuccess = false;
    this.progressMsg = 'Loading...!';
  }

  onViewRecord(record:any){
    this.PatientRecord = record
    console.log(this.PatientRecord.data);
    this.viewRecord = true
  }

  onRecordClose(){
    this.PatientRecord = {}
    this.viewRecord = false
  }
}