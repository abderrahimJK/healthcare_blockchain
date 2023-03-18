import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/admin/services/doctor.service';

@Component({
  selector: 'app-appiontment',
  templateUrl: './appiontment.component.html',
  styleUrls: ['./appiontment.component.sass']
})
export class AppiontmentComponent implements OnInit {

  model: any = {
    acID: '',
  };

  Doctors: string[] = [];

  Doctor: any = {
    docID: '',
    fName: 'First Name',
    lName: 'Last Name',
    Doj: '',
    emailID: 'test_name@mail.com',
    phone: '123456789',
    city: 'city',
    state: 'state',
    speciality: 'speciality',
    imageHash: '',
  };

  PatientDetails: any = [];

  loaded: boolean = false;
  loadComplete: boolean = false;

  showProgressCard: boolean = false;
  showProgressWarn: boolean = false;
  progressMsg: string = ''


  constructor(private doctorService: DoctorService) {
    this.progressMsg = 'Loading Doctor Accounts From Blockchain'

    this.PatientDetails = doctorService.DoctorDetails
  }

  ngOnInit(): void {
    this.GetDoctors()
  }

  loadDrDetails() {
    
    this.PatientDetails = []
    for (var i = 0; i <= this.Doctors.length; i++) {
      if (this.Doctors[i])
      
        this.doctorService.getDetails(this.Doctors[i]).then((data: any) => {
          this.PatientDetails.push(data)
          console.log(this.PatientDetails)
        });
    }
    this.progressMsg = ''
    this.showProgressCard = false
  }

  GetDoctors(): any {
    this.showProgressCard = true;
    this.showProgressWarn = false;
    this.progressMsg = ''
    this.loadComplete = false
    console.log("i am here--------------");
    if (this.PatientDetails.length >= 1) {
      this.showProgressCard = false
      return 0
    }
    
    this.doctorService.getDrs().then((docs: any) => {
      this.Doctors = docs
      if (this.Doctors.length >= 1) {
        console.log("i am here");
        this.loadDrDetails();
        this.progressMsg = "Found " + this.Doctors.length + " Accounts"
      }
      else {
        this.progressMsg = 'No Doctors in the Network....'
        this.loadComplete = true
        this.showProgressCard = false
      }
    })

  }
 
}