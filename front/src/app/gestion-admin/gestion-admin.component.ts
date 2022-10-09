import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Admin } from '../Modele/Admin.Model';
import { AdminServices } from '../Service/Admin.Service';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css']
})
export class GestionAdminComponent implements OnInit {

  public admins: Admin[] = [];
  public adminSubscription: Subscription = new Subscription;
  constructor(private adminService: AdminServices) { }

  ngOnInit(): void {
    this.adminSubscription = this.adminService.adminSubject.subscribe(
      (admins: Admin[]) => {
        this.admins = admins;
      }
    );
    this.adminService.getAdminFromServer();
    this.adminService.emitAdmin();
  }

  ngOnDestroy() {
    this.adminSubscription.unsubscribe();
  }

}
