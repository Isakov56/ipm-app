import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataMy = new BehaviorSubject<any[]>( [
  ])

  private jsonUrl = 'assets/tableData.json'; // Path to your JSON file

  constructor(private http: HttpClient) {
    this.loadInitialData(); // Load initial data from the JSON file
  }
  private generateUniqueId(index: number): number {
    // You can use a custom logic here. For example, combine the current time with the index
    return Date.now() + index;
  }

  private loadInitialData(): void {
    console.log('my datrat')
 
    
    this.http.get<any[]>(this.jsonUrl, { headers: { 'Cache-Control': 'no-cache' } })
    .pipe(
      tap(data => {
        // Assign a unique id to each element
        data.forEach((element, index) => {
          element.id = this.generateUniqueId(index); // Assign a unique id
        });
      })
    )
    .subscribe(data => {
      this.dataMy.next(data);
      console.log(data, "my data my data my dta]");
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

  updateTableData(updatedEntry: any): void {
    const currentData = this.dataMy.getValue(); // Get current data

    // Find the index of the item to update
    const index = currentData.findIndex(item => item.id === updatedEntry.id);
    if (index !== -1) {
      // Update the specific item
      currentData[index] = { ...currentData[index], ...updatedEntry }; // Merge existing and new properties
      this.dataMy.next([...currentData]); // Update the data with the new array
      console.log('Updated entry:', updatedEntry);
    } else {
      console.error('Item not found for update:', updatedEntry);
    }
  }
}

