import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Utilisateur } from 'src/app/Modele';
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
  public callbackFunctionChangeUser: ((id: number) => void) | undefined;

  displayedColumns: string[] = ['id', 'name', 'Supp.', 'Add'];

  dataSource!: MatTableDataSource<dataSourceType>;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<dataSourceType>(this.dataSourceArg)
    console.log(this.dataSourceArg)
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.dataSource = new MatTableDataSource<dataSourceType>(this.dataSourceArg)
  }

  deleteUser = (user: Utilisateur) => {
    this.callbackFunctionDeleteUser(user.id);
  }

  changeUser = (user: Utilisateur) => {
    if(this.callbackFunctionChangeUser) this.callbackFunctionChangeUser(user.id);
  }

}
