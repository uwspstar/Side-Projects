import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Record } from '../model/record';

/*
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
];
*/

export interface PeriodicElement {
  date : string,
  fund : string,
  company : string,
  ticker : string,
  cusip : number,
  shares : number,
  marketValue : number,
  weight: number
}
let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  displayedColumns: string[] = ['date', 'fund', 'company', 'ticker', 'cusip', 'shares', 'marketValue', 'weight'];
  dataSource : any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('csvReader') csvReader: any;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  title = 'ark data';
  public records: any[] =[];
  public isShown: boolean = false;

 
  constructor(private changeDetectorRefs: ChangeDetectorRef){

  }
  

  uploadListener($event: any): void {  
  
    ELEMENT_DATA = [];  

    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  

        let headers = (<string>csvRecordsArray[0]).split(',');  
        let headersRow = this.getHeaderArray(headers);  

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = () => {  
        console.log('error while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any): PeriodicElement[] {  
    
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let record = (<string>csvRecordsArray[i]).split(',');  
      if (record.length === headerLength) {       
        const lineData = {
          date:record[0].trim(),
          fund: record[1].trim(), 
          company: record[2].trim(),  
          ticker: record[3].trim(),  
          cusip: parseFloat(record[4]),  
          shares: parseFloat(record[5]), 
          marketValue: parseFloat(record[6]), 
          weight: parseFloat(record[7])
        };
        ELEMENT_DATA.push(lineData);
      }  
    } 

    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.changeDetectorRefs.detectChanges();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.isShown = true;
    return ELEMENT_DATA;    
  } 

  isValidCSVFile(file: any) {  
    return file.name.toLowerCase().endsWith(".csv");  
  }

  getHeaderArray(headers: any): string[] {  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }

  fileReset() {  
    this.csvReader.nativeElement.value = "";  
  } 
}
