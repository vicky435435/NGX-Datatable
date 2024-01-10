import { Component, OnInit, ViewChild } from '@angular/core';
// import { IonGrid } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonGrid, IonCard, IonButton, IonInput } from '@ionic/angular/standalone';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NgxDatatableModule, IonRow, IonCol, IonGrid,IonCard, IonButton, IonInput ], 
})
export class HomePage implements OnInit{
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  ColumnMode = ColumnMode;
  loadingIndicator!: boolean;
  temp: any[] = [];
  rows: any[] = [];
  
  constructor() {}

  ngOnInit() {
    this.loadingIndicator = true;
    this.temp = [
      { id: 1, name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { id: 2, name: 'Dany', gender: 'Male', company: 'KFC' },
      { id: 3, name: 'Molly', gender: 'Female', company: 'Burger King' },
      { id: 4, name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { id: 5, name: 'Dany', gender: 'Male', company: 'KFC' },
      { id: 6, name: 'Molly', gender: 'Female', company: 'Burger King' },
      { id: 7, name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { id: 8, name: 'Dany', gender: 'Male', company: 'KFC' },
      { id: 9, name: 'Molly', gender: 'Female', company: 'Burger King' },
      { id: 10, name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { id: 11, name: 'Dany', gender: 'Male', company: 'KFC' },
      { id: 12, name: 'Molly', gender: 'Female', company: 'Burger King' },
      { id: 13, name: 'MollyU', gender: 'Female', company: 'Burger KingS' },
      { id: 14, name: 'Smith', gender: 'Male', company: 'KFC' },
      { id: 15, name: 'Stven', gender: 'Female', company: 'Pizza king' },
      { id: 16, name: 'Alister', gender: 'Male', company: 'Dominos KingS' },
    ];
    this.rows = [...this.temp];
    this.loadingIndicator = false;
  }


  updateFilter(event: any) {
    // console.log(event);
    const val = event.detail.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter((d: any) => {
      return d.name.toLowerCase().indexOf(val) !== -1 ||
             d.gender.toLowerCase().indexOf(val) !== -1 ||
             d.company.toLowerCase().indexOf(val) !== -1 ||
             d.id.toString().indexOf(val) !== -1 ||
             !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }



  edit(row: any) {
    console.log(row);
  }

  deleteItem(row: any) {}
  
}
