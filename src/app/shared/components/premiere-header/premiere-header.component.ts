import { Component } from '@angular/core';
import { Globals } from '../../../globals';

@Component({
  selector: 'app-premiere-header',
  templateUrl: './premiere-header.component.html',
  /*template:'{{fullName}}',*/
  styleUrls: ['./premiere-header.component.scss']
})
export class PremiereHeaderComponent {
  fullName=Globals.getName();
  console.log(fullName);
  }
