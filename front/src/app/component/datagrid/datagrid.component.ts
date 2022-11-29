import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  @Input()
  callbackFunctionDeleteUser: ((id: number) => void) | undefined;
  @Input()
  callbackFunctionChangeUser: ((id: number) => void) | undefined;

  displayedColumns: string[] = ['id', 'name', 'Supp.', 'Add'];

  dataSource!: MatTableDataSource<dataSourceType>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<dataSourceType>(this.dataSourceArg)
  }

  deleteUser = (id: number) => {
    if(this.callbackFunctionDeleteUser) this.callbackFunctionDeleteUser(id);
  }

  changeUser = (id: number) => {
    if(this.callbackFunctionChangeUser) this.callbackFunctionChangeUser(id);
  }

}
