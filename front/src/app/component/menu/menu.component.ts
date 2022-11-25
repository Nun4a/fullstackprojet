import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
