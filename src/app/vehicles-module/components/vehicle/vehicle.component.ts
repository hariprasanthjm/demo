import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { vehicleDatas } from '../../../shared/models/vehicles';
import { vehicleDatas1 } from '../../../shared/models/vehicles';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  public showAddVehicle = false;
  public myvehiclesList = [];
  public myvehiclesList1 = [];
  public width;

  constructor( ngZone: NgZone ) {
    window.onresize = (e) => {
        ngZone.run(() => {
            this.width = window.innerWidth;
            // console.log(this.width, 'width');
        });
    };
   }

  ngOnInit() {
    this.myvehiclesList = vehicleDatas;
    this.myvehiclesList1 = vehicleDatas1;
  }
  detectCloseChanges(evt) {
    if (evt) {
      this.showAddVehicle = false;
    }
  }
  createNewVehicle() {
    this.showAddVehicle = true;
  }
  detectTabChanges(evt) {
    console.log(evt);
  }

}
