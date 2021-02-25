import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  title = 'ark data';
  public records: any[] =[];

  @ViewChild('csvReader') csvReader: any;

  constructor(private changeDetectorRefs: ChangeDetectorRef){

  }
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }

  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }

  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  } 

  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = function () {  
        console.log('error while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let currantRecord = (<string>csvRecordsArray[i]).split(',');  
      if (currantRecord.length == headerLength) {  
        let csvRecord: Record = new Record(  
        currantRecord[0].trim(),
        currantRecord[1].trim(), 
        currantRecord[2].trim(),  
        currantRecord[3].trim(),  
        parseFloat(currantRecord[4]),  
        parseFloat(currantRecord[5]), 
        parseFloat(currantRecord[6]), 
        parseFloat(currantRecord[7])
        )
        let pe = {
          date:currantRecord[0].trim(),
          fund: currantRecord[1].trim(), 
          company: currantRecord[2].trim(),  
          ticker: currantRecord[3].trim(),  
          cusip: parseFloat(currantRecord[4]),  
          shares: parseFloat(currantRecord[5]), 
          marketValue: parseFloat(currantRecord[6]), 
          weight: parseFloat(currantRecord[7])
        };

        csvArr.push(csvRecord);  
        ELEMENT_DATA.push(pe);
      }  
    }  
    //ELEMENT_DATA = csvArr;

    console.log('ELEMENT_DATA',JSON.stringify(ELEMENT_DATA));
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.changeDetectorRefs.detectChanges();
    return csvArr;    
  } 
}
