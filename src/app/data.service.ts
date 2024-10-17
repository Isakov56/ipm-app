import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataMy = new BehaviorSubject<any[]>( [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ])

  private jsonUrl = 'assets/fiel.json'; // Path to your JSON file

  constructor(private http: HttpClient) {
    this.loadInitialData(); // Load initial data from the JSON file
  }

  private loadInitialData(): void {
    console.log('my datrat') // Push data to BehaviorSubject
    this.http.get<any[]>(this.jsonUrl).subscribe(data => {
      this.dataMy.next(data);
    });
  }

  //constructor() { }
  getTableData(): Observable<any[]> {
    
    return this.dataMy.asObservable(); 
  }
  addTableData(entry: any): void{
    const currentData = this.dataMy.getValue(); // Get current data
    this.dataMy.next([...currentData, entry]); // Update the data
  }
}

