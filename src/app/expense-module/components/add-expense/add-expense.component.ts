import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.services';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  addExpense: any = {};
  @Output() closeAddExpense: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,
    private userService: UserService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addExpense = {
      'driver_name': '',
      'advance_num': '',
      'disel_liter': '',
      'disel_price': '',
      'loading_charging': '',
      'driver_comission': '',
      'cleaner_comission': '',
      'toll_charge': '',
      'rto_charge': '',
      'others': '',
    };
  }


  closeExpenseScreen() {
    this.closeAddExpense.emit(true);
  }

  onSubmit1(addNew: NgForm) {
    console.log(addNew.value); 
  //   if(addNew.value === true){
  //   alert("Sucessfully Created!");
  // }
    // this.router.navigate(['/expense']);
    // addNew.form.reset();
  }
  onReset(addNew: NgForm) {
    addNew.form.reset();
  }
}
