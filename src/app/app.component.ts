import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxApp';
  userData: any = '' ;
  displayedColumns: string[] = ['name', 'email', 'mobile'];
  dataSource = new MatTableDataSource<any>();
  constructor(
    private store : Store<any>
  ){ 
    store.select('userState').subscribe( (data:any) => {
      this.userData = data.user
      if (data) {
        this.dataSource.data = Array.isArray(data.user) ? data.user : [data.user];
      }
      console.log(this.userData)
    })
  }
}