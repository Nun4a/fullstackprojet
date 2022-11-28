import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { dataSourceType } from './datagrid.types';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
})
export class DatagridComponent implements OnInit {

  @Input()
  dataSourceArg!: any[];
  @Input()
  title: string | undefined
  @Output()
  deleteUser: EventEmitter<any> = new EventEmitter();
  // callbackFunctionDeleteUser: ((id: number) => void) | undefined;
  @Output()
  changeUser: EventEmitter<any> = new EventEmitter();
  // callbackFunctionChangeUser: ((id: number) => void) | undefined;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', "mail", "phoneNumber", 'Supp.', 'Add'];

  dataSource!: MatTableDataSource<dataSourceType>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<dataSourceType>(this.dataSourceArg)
  }

  deleteUserEvent = (id: number): void => {
    this.deleteUser.emit([id]);
  }

  changeUserEvent = (id: number) => {
    this.changeUser.emit([id]);
  }
}
