import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/service';
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
  public callbackFunctionDeleteUser!: ((id: number) => void);
  @Input()
  callbackFunctionChangeUser: ((id: number) => void) | undefined;

  displayedColumns: string[] = ['id', 'name', 'Supp.', 'Add'];

  dataSource!: MatTableDataSource<dataSourceType>;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<dataSourceType>(this.dataSourceArg)
  }

  deleteUser = (id: number) => {
    console.log(this.callbackFunctionDeleteUser);
    console.log(id);
    this.callbackFunctionDeleteUser(id);
  }

  changeUser = (id: number) => {
    if(this.callbackFunctionChangeUser) this.callbackFunctionChangeUser(id);
  }

}
