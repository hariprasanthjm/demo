import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  public static fullName: String;
  public static  mobNum: Number;

  public static setName(name){
    this.fullName=name;
  }

  public static getName():String{
    return this.fullName;
  }

}