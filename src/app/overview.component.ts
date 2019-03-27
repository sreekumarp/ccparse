import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { ColDef, GridOptions } from 'ag-grid-community';
//declare var moment: any;
import 'ag-grid-enterprise';
import * as moment from 'moment';
import { ChildMessageRenderer } from './button.component';
import { Entry } from './data';
import { DialogOverviewExampleDialog } from './dialog.component';

@Component({
  selector: 'qs-product-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  public context;
  items: Object[];
  CCMyComments: string;
  hdfcCCStatement: string;
  citiCCStatement: string;

  //hdfcCCMyComments: string;
  interestCode: string = 'INT NBR';
  hdfcStatementEntires: Entry[];
  citiStatementEntires: Entry[];
  allStatementEntires: Entry[];
  // Chart
  single: any[];
  multi: any[];
  multi2: any[];
  public gridOptions: GridOptions;
  public columnDefs: ColDef[];
  public allColumnDefs: ColDef[];

  public frameworkComponents;

  // Generic Chart options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  autoScale: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'X Axis';
  yAxisLabel: string = 'Y Axis';
  selectedMonthYear: string;

  orangeColorScheme: any = {
    domain: ['#E64A19', '#F57C00', '#FFA726', '#FFB74D', '#FFCC80']
  };

  blueColorScheme: any = {
    domain: ['#01579B', '#00B0FF', '#80D8FF', '#E1F5FE']
  };

  constructor(
    public dialog: MatDialog,
    private _titleService: Title //private _loadingService: TdLoadingService, //private _dialogService: TdDialogService
  ) {
    this.citiCCStatement = `31/12 74332748001 BSNL BILLDESK MUMBAI 80.00
04/01 74332748005 VISTAPRINT INDIA MARKE MUMBAI 350.00
04/01 74568228004 AIRTEL PAYMENT 498.00
11/01 MPO010A0936 SI PAYMENT 17849.94CR
12/01 9981056897 PAYMENT RECD, THANK YOU 6208.00CR
15/01 74568228015 KERALA WATER TAX-BILLDESK 243.00
21/01 74766518021 IRCTC INR HTTPS:// 1904.61
22/01 70313204907 ENHANCED PAYLITE EMI - 011/024 12602.00
22/01 70617012809 FLIPKART.COM 9 EMI - 008/009 2132.00
22/01 70804013258 FLIPKART.COM 9 EMI - 006/009 1722.00
22/01 GOODS & SERVICES TAX @18% 494.72
22/01 INTERESTCHARGE@3.10%(37.2%ANNUAL) 124.96
`;

    this.hdfcCCStatement = `17/12/2017 CGST-VPS1735275517712-RATE 9.0 -33 (Ref# 09999999981217008263196) 6.82
17/12/2017 SGST-VPS1735275517703-RATE 9.0 -33 (Ref# 09999999981217008263139) 18.85
17/12/2017 CGST-VPS1735275517706-RATE 9.0 -33 (Ref# 09999999981217008263154) 40.26
17/12/2017 SGST-VPS1735275517715-RATE 9.0 -33 (Ref# 09999999981217008263212) 6.70
17/12/2017 CGST-VPS1735275517715-RATE 9.0 -33 (Ref# 09999999981217008263212) 6.70
17/12/2017 SGST-VPS1735275517712-RATE 9.0 -33 (Ref# 09999999981217008263196) 6.82
17/12/2017 CGST-VPS1735275517703-RATE 9.0 -33 (Ref# 09999999981217008263139) 18.85
17/12/2017 SGST-VPS1735275517709-RATE 9.0 -33 (Ref# 09999999981217008263170) 19.48
17/12/2017 CGST-VPS1735275517709-RATE 9.0 -33 (Ref# 09999999981217008263170) 19.48
17/12/2017 SGST-VPS1735275517706-RATE 9.0 -33 (Ref# 09999999981217008263154) 40.26
18/12/2017 IRCTC TICKETING INR WWW.IRCTC. 2,282.47
30/12/2017 AMAZON SELLER SERVICES MUMBAI 2,068.00
06/01/2018 NETBANKING TRANSFER (Ref# 00000000000106006334788) 76,542.76 Cr
10/01/2018 ORAVEL STAYS PRIVA INR WWW.OYOROO 2,843.00
17/01/2018 MER EMI ,INT NBR:02,00000000000319 (Ref# 09999999980117008569850) 63.52
17/01/2018 MER EMI ,INT NBR:02,00000000000319 (Ref# 09999999980117008569835) 199.54
17/01/2018 SMARTEMI ,INT NBR:10,00000000000272 (Ref# 09999999980117008569819) 421.66
17/01/2018 INSTALOAN,INT NBR:23,00000000000207 (Ref# 09999999980117008569793) 140.35
17/01/2018 MER EMI ,INT NBR:02,00000000000323 (Ref# 09999999980117008569876) 62.33
17/01/2018 M-FLIPKART INTERNET PR,P:02,0000319 (Ref# 09999999980117008569843) 1,147.61
17/01/2018 M-FLIPKART INTERNET PR,P:02,0000319 (Ref# 09999999980117008569827) 1,466.28
17/01/2018 SMARTEMI ,PRIN NB:10,00000000000272 (Ref# 09999999980117008569801) 2,364.46
17/01/2018 INSTALOAN,PRIN NB:23,00000000000207 (Ref# 09999999980117008569785) 7,053.32
17/01/2018 M-AMAZON SELLER SERVIC,P:02,0000323 (Ref# 09999999980117008569868) 1,126.13
`;

    this.CCMyComments = `31/12/2017	Me	Recaharge	80.00	CITI
    3/1/2017	Me	Vista print	350.00	CITI
    18/12/2017	Varun	IRCTC	2,282.00	HDFC
      Me		498.00	CITI
    10/1/2018	Vinai	Hotel	2,843.00	HDFC
    15/1/2018	Me	Water bill	243.00	CITI
    30/12/2017	Me	Amazon	2,068.00	HDFC
    21/1/2018	Vinai	Train	1,904.61	CITI
      Me		14,936.00	CITI
    22/1/2018	Vinai	Train	1,335.00	CITI
    31/1/2018	Me	Traun	250.00	CITI
    1/2/2018	Me	Recharge	169	CITI
    9/2/2018	Varun	Make my trip - not sure sucess or not	9,246.00	HDFC`;

    /*     this.hdfcCCMyComments = `18-Dec-2017	Varun	IRCTC	2,282.00
    10-Jan-2018	Vinai	Hotel	2,843.00
      Vinai	Amazon EMI 6k  02	1,126.13
      Nithin	Flipkar EMI 02	1,682.73
      Varun	Flipkart EMI :6,999  - 02	1,223.43`; */
    this.gridOptions = {
      defaultColDef: {
        editable: true
      },
      animateRows: true,
      //groupDefaultExpanded: -1, // expand all groups by default
      /* getDataPath: function(data) {
        return data.amountEntries;
      }, */
      onGridReady: function(params) {
        //params.api.sizeColumnsToFit();
      }
      /* autoGroupColumnDef: {
        headerName: 'Amounts',
        cellRendererParams: {
          suppressCount: true
        }
      } */
    };
  }

  ngOnInit(): void {
    this._titleService.setTitle('Product Name');

    //this._loadingService.register('items.load');

    this.createColumnDefs();

    this.context = { componentParent: this };
    this.frameworkComponents = {
      childMessageRenderer: ChildMessageRenderer
    };

    if (localStorage.getItem('monthYear') && localStorage.getItem('monthYear') != 'null') {
      this.selectedMonthYear = localStorage.getItem('monthYear');

      this.retriveMonthYearData(this.selectedMonthYear);
    }
    /* if (localStorage.getItem('hdfcCCStatement') && localStorage.getItem('hdfcCCStatement') != 'null')
      this.hdfcCCStatement = localStorage.getItem('hdfcCCStatement');
    if (localStorage.getItem('citiCCStatement') && localStorage.getItem('citiCCStatement') != 'null')
      this.citiCCStatement = localStorage.getItem('citiCCStatement');
    if (localStorage.getItem('CCMyComments') && localStorage.getItem('CCMyComments') != 'null')
      this.CCMyComments = localStorage.getItem('CCMyComments');*/

    //this.process();
  }

  private createColumnDefs() {
    this.columnDefs = [];

    //TODO: move this to report configuation with an static field/col name
    /* this.columnDefs.push({
      width: 95,
      headerName: 'Date',
      field: 'date',
      valueFormatter: data => moment(data.value).format('DD-MMM-YYYY')
    }); */
    this.columnDefs.push({
      width: 95,
      headerName: 'Date',
      field: 'dateString'
    });
    this.columnDefs.push({ headerName: 'Name', field: 'name', width: 92 });
    this.columnDefs.push({ headerName: 'Description', field: 'description', width: 578 }); //, width: 614
    this.columnDefs.push({ headerName: 'DescriptionComment', field: 'descriptionComment', width: 335 });
    this.columnDefs.push({ headerName: 'Amount', field: 'amount', width: 88 });
    this.columnDefs.push({ headerName: 'Bank', field: 'bankName', width: 75 });

    this.columnDefs.push({
      headerName: '+',
      field: 'amountEntries',
      cellRenderer: 'childMessageRenderer',
      colId: 'amountEntries',
      width: 39
    });

    this.allColumnDefs = Object.assign([], this.columnDefs);
    this.allColumnDefs.splice(3, 1);
  }

  process(): void {
    //localStorage.setItem('hdfcCCStatement', this.hdfcCCStatement);
    //localStorage.setItem('citiCCStatement', this.citiCCStatement);
    // localStorage.setItem('CCMyComments', this.CCMyComments);
    localStorage.setItem('monthYear', this.selectedMonthYear);

    this.hdfcStatementEntires = this.processStatement(this.hdfcCCStatement);
    this.citiStatementEntires = this.processStatement(this.citiCCStatement, true);

    let commentEntries: {
      entriesHDFC: Entry[];
      entriesCITI: Entry[];
    } = this.processComments(this.CCMyComments);

    this.processHDFC(commentEntries.entriesHDFC);
    this.processCITI(commentEntries.entriesCITI);

    //this.onBtExport();
    //this.rowData = hdfcStatementEntires;
  }

  save() {
    localStorage.setItem('monthYear', this.selectedMonthYear);
    localStorage.setItem(this.selectedMonthYear + '_hdfcCCStatement', this.hdfcCCStatement);
    localStorage.setItem(this.selectedMonthYear + '_citiCCStatement', this.citiCCStatement);
    localStorage.setItem(this.selectedMonthYear + '_CCMyComments', this.CCMyComments);
    localStorage.setItem(
      this.selectedMonthYear + '_hdfcStatementEntires',
      this.stringifyOnce(this.hdfcStatementEntires, undefined, 1)
    );
    localStorage.setItem(
      this.selectedMonthYear + '_citiStatementEntires',
      this.stringifyOnce(this.citiStatementEntires, undefined, 1)
    );
  }

  monthYear($event) {
    //this.selectedMonthYear = $event.value;
    console.log($event.value);
    this.retriveMonthYearData($event.value);
  }

  private retriveMonthYearData(selectedMonthYear: string) {
    const hdfcCCStatement = localStorage.getItem(selectedMonthYear + '_hdfcCCStatement');
    const citiCCStatement = localStorage.getItem(selectedMonthYear + '_citiCCStatement');
    const CCMyComments = localStorage.getItem(selectedMonthYear + '_CCMyComments');
    const hdfcStatementEntires = localStorage.getItem(selectedMonthYear + '_hdfcStatementEntires');
    const citiStatementEntires = localStorage.getItem(selectedMonthYear + '_citiStatementEntires');

    if (hdfcCCStatement && hdfcCCStatement != 'null') {
      this.hdfcCCStatement = hdfcCCStatement;
    } else this.hdfcCCStatement = '';
    if (citiCCStatement && citiCCStatement != 'null') this.citiCCStatement = citiCCStatement;
    else this.citiCCStatement = '';

    if (CCMyComments && CCMyComments != 'null') this.CCMyComments = CCMyComments;
    else this.CCMyComments = '';

    if (hdfcStatementEntires && hdfcStatementEntires != 'null') {
      const newData: Entry[] = this.parseJSONEntry(hdfcStatementEntires);
      this.hdfcStatementEntires = newData;
    } else this.hdfcStatementEntires = [];

    if (citiStatementEntires && citiStatementEntires != 'null') {
      const newData: Entry[] = this.parseJSONEntry(citiStatementEntires);
      this.citiStatementEntires = newData;
    } else this.citiStatementEntires = [];
  }

  private parseJSONEntry(statementEntires: string) {
    const data: Entry[] = JSON.parse(statementEntires);
    const newData: Entry[] = [];
    data.forEach(entry => {
      ///const aentry = new Entry(entry.date, entry.description, entry.amount, entry.isCiti);
      const aentry = Object.assign(new Entry(), entry);
      newData.push(aentry);
    });
    return newData;
  }

  selectedIndexChange(tab: number) {
    if (tab == 1) {
      const all: Entry[] = [];
      var backup = {};
      for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        if (key != 'monthYear' && key.indexOf('StatementEntires') > -1) {
          //backup[key] =
          //const data = escape(encodeURIComponent(value));
          const parsedData = JSON.parse(value) as Entry[];
          parsedData.forEach(this.toAll(all));
        }
      }
      //this.hdfcStatementEntires.forEach(this.toAll(all));
      //this.citiStatementEntires.forEach(this.toAll(all));
      this.allStatementEntires = Object.assign([], all);
    }
  }

  private toAll(all: Entry[]): (value: Entry, index: number, array: Entry[]) => void {
    return entry => {
      this.pushToAll(entry, all);
    };
  }

  private pushToAll(entry: Entry, all: Entry[]) {
    const entryCopy = Object.assign({}, entry);
    entryCopy.description = entryCopy.description; // + ' | ' + entryCopy.descriptionComment;
    all.push(entryCopy);
  }

  methodFromParent(entries) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: entries,
      width: '1050px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private processCITI(commentEntries: Entry[]) {
    let sGstList: Entry[] = [];
    let cGstList: Entry[] = [];

    let emiList: Entry[] = [];
    let interestList: Entry[] = [];

    this.processEmiGstInterest(this.citiStatementEntires, sGstList, cGstList, emiList, interestList, true);
    //const interestListCopy = Object.assign([], interestList);
    //this.addInterestsWithEmi(emiList, interestList);
    //this.addGstsWithEmi(emiList, sGstList, cGstList, interestListCopy);
    this.mergeNormalEntries(commentEntries, this.citiStatementEntires, true);
  }

  private processHDFC(commentEntries: Entry[]) {
    let sGstList: Entry[] = [];
    let cGstList: Entry[] = [];

    let emiList: Entry[] = [];
    let interestList: Entry[] = [];

    this.processEmiGstInterest(this.hdfcStatementEntires, sGstList, cGstList, emiList, interestList);
    const interestListCopy = Object.assign([], interestList);
    this.addInterestsWithEmi(emiList, interestList);
    this.addGstsWithEmi(emiList, sGstList, cGstList, interestListCopy);

    this.mergeNormalEntries(commentEntries, this.hdfcStatementEntires);
  }

  private mergeNormalEntries(commentEntries: Entry[], statementEntires: Entry[], isCiti: boolean = false) {
    statementEntires.forEach(entry => {
      let isMerged: boolean = false;
      commentEntries
        .filter(comment => !comment.isMergedWithEntry)
        .some(comment => {
          if (comment.amount === entry.amount && this.compareDates(comment, entry)) {
            this.merge(entry, comment);
            isMerged = true;
            return isMerged;
          } else if (this.compareDates(comment, entry)) {
            if (this.compareInRange(entry.amount, comment.amount)) {
              isMerged = this.showConfirmation(entry, comment, isMerged);
            }
          }
          return isMerged;
        });
    });
  }

  private addInterestsWithEmi(emiList: Entry[], interestList: Entry[]) {
    emiList.forEach(entry => {
      const interestfounds = interestList.filter(
        entryCompare => entry.emiNumber == entryCompare.emiNumber && entry.companyCode == entryCompare.companyCode
      );
      if (interestfounds.length == 1) {
        this.mergeInterestAmt(entry, interestfounds[0], interestList);
      }
    });
    emiList
      .filter(entry => !entry.isInterestMerged)
      .sort((n1, n2) => n1.companyCode - n2.companyCode)
      .sort((n1, n2) => n1.amount - n2.amount)
      .forEach(entry => {
        const interestfounds = interestList
          .sort((n1, n2) => n1.amount - n2.amount)
          .find(
            entryCompare => entry.emiNumber == entryCompare.emiNumber && entry.companyCode == entryCompare.companyCode
          );
        if (interestfounds && interestList.length > 0) {
          this.mergeInterestAmt(entry, interestfounds, interestList);
        }
      });
  }

  private addGstsWithEmi(emiList: Entry[], sGstList: Entry[], cGstList: Entry[], interestList: Entry[]) {
    sGstList = sGstList.sort((n1, n2) => n2.amount - n1.amount);
    cGstList = cGstList.sort((n1, n2) => n2.amount - n1.amount);
    sGstList.forEach((sGst, index) => {
      //sGst.amount = cGstList[index].amount + sGst.amount;
      this.mergeInterestAmt(sGst, cGstList[index], sGstList);
    });
    emiList = emiList.sort((n1, n2) => n2.amount - n1.amount);

    const allGstList: Entry[] = sGstList;
    const allGstListCopy = Object.assign([], allGstList);
    interestList
      .sort((n1, n2) => n2.amount - n1.amount)
      .forEach((entry, index) => {
        const emiEntry = emiList[index];
        const gstFound = allGstListCopy[index];
        if (gstFound) this.mergeInterestAmt(emiEntry, gstFound, allGstList);
      });
  }

  private processEmiGstInterest(
    statementEntires: Entry[],
    sGstList: Entry[],
    cGstList: Entry[],
    emiList: Entry[],
    interestList: Entry[],
    isCiti: boolean = false
  ) {
    statementEntires.forEach(entry => {
      if (this.isSGST(entry.description)) {
        sGstList.push(entry);
      } else if (this.isCGST(entry.description)) {
        cGstList.push(entry);
      } else if (this.isEMI(entry.description)) {
        const index = entry.description.lastIndexOf(':');
        const code = entry.description.toString().substring(index + 1);
        const codes = code.split(',');
        if (codes && codes.length > 1) {
          entry.emiNumber = parseFloat(codes[0]);
          entry.companyCode = parseInt(codes[1]);
        }
        emiList.push(entry);
      } else if (this.isInterest(entry.description)) {
        const index = this.interestIndex(entry.description);
        const code = entry.description.toString().substring(index + this.interestCode.length + 1);
        const codes = code.split(',');
        if (codes && codes.length > 1) {
          entry.emiNumber = parseFloat(codes[0]);
          const cmpyCodes = codes[1].split(' ');
          let cmpyCode = '';
          if (cmpyCodes.length > 0) {
            cmpyCode = cmpyCodes[0];
          }
          entry.companyCode = parseInt(cmpyCode);
        }
        interestList.push(entry);
      }
    });
  }

  private mergeInterestAmt(entry: Entry, interestfound: Entry, interestList: Entry[]) {
    entry.addAmount(interestfound);
    //entry.amountEntries.push(interestfound);
    //entry.amount = entry.amountEntries.reduce((a, b) => {
    //  return a + b.amount;
    //}, 0);
    entry.isInterestMerged = true;
    const index = interestList.indexOf(interestfound);
    if (index > -1) interestList.splice(index, 1);
    this.hdfcStatementEntires = this.hdfcStatementEntires.filter(entry => entry.id != interestfound.id);
  }

  getBooleanValue(cssSelector) {
    return document.querySelector(cssSelector).checked === true;
  }

  onBtExport() {
    /* var params = {
      skipHeader: this.getBooleanValue('#skipHeader'),
      columnGroups: this.getBooleanValue('#columnGroups'),
      skipFooters: this.getBooleanValue('#skipFooters'),
      skipGroups: this.getBooleanValue('#skipGroups'),
      skipPinnedTop: this.getBooleanValue('#skipPinnedTop'),
      skipPinnedBottom: this.getBooleanValue('#skipPinnedBottom'),
      allColumns: this.getBooleanValue('#allColumns'),
      onlySelected: this.getBooleanValue('#onlySelected'),
      suppressQuotes: this.getBooleanValue('#suppressQuotes'),
      fileName: document.querySelector('#fileName')[0].value,
      columnSeparator: document.querySelector('#columnSeparator')[0].value
    };

    if (this.getBooleanValue('#skipGroupR')) {
      params.shouldRowBeSkipped = function(params) {
        return params.node.data.country.charAt(0) === 'R';
      };
    }

    if (this.getBooleanValue('#useCellCallback')) {
      params.processCellCallback = function(params) {
        if (params.value && params.value.toUpperCase) {
          return params.value.toUpperCase();
        } else {
          return params.value;
        }
      };
    }

    if (this.getBooleanValue('#useSpecificColumns')) {
      params.columnKeys = ['country', 'bronze'];
    }

    if (this.getBooleanValue('#processHeaders')) {
      params.processHeaderCallback = function(params) {
        return params.column.getColDef().headerName.toUpperCase();
      };
    }

    if (this.getBooleanValue('#customHeader')) {
      params.customHeader = '[[[ This ia s sample custom header - so meta data maybe?? ]]]\n';
    }
    if (this.getBooleanValue('#customFooter')) {
      params.customFooter = '[[[ This ia s sample custom footer - maybe a summary line here?? ]]]\n';
    }
 */
    this.gridOptions.api.exportDataAsCsv();
  }

  private showConfirmation(entry: Entry, comment: Entry, isMerged: boolean) {
    /*this._dialogService
      .openConfirm({
        message: `Statement: ${entry.amount} => Comment: ${comment.amount} <br>
                  Statement: ${entry.name} => Comment: ${comment.name} <br>
                  Statement: ${entry.description} => Comment: ${comment.descriptionComment} <br>
                  Statement: ${this.formatDate(entry.date)} => Comment: ${this.formatDate(entry.date)} <br>`,
        title: 'Confirm',
        cancelButton: 'Disagree',
        acceptButton: 'Agree'
      })
      .afterClosed()
      .subscribe((accept: boolean) => {
        if (accept) {
          this.merge(entry, comment); // after confirmation
          isMerged = true;
          //this.changeDetectorRef.markForCheck();
          this.gridOptions.api.refreshCells();
        } else {
        }
      });
    return isMerged;*/

    if (
      confirm(
        `Statement: ${entry.amount} => Comment: ${comment.amount} <br>
                  Statement: ${entry.name} => Comment: ${comment.name} <br>
                  Statement: ${entry.description} => Comment: ${comment.descriptionComment} <br>
                  Statement: ${this.formatDate(entry.date)} => Comment: ${this.formatDate(entry.date)} <br>`
      )
    ) {
      this.merge(entry, comment); // after confirmation
      isMerged = true;
      if (this.gridOptions && this.gridOptions.api)
        //this.changeDetectorRef.markForCheck();
        this.gridOptions.api.refreshCells();
      return true;
    }
    return false;
  }

  private compareInRange(entryAmt: number, commentAmt: number) {
    return entryAmt >= commentAmt - 50 && entryAmt <= commentAmt + 50;
  }

  private compareDates(comment: Entry, entry: Entry) {
    return +comment.date == +entry.date;
  }

  public onQuickFilterChanged($event: any) {
    this.gridOptions.api.setQuickFilter($event.target.value);
  }

  private formatDate(date: Date) {
    return moment(date).format('dd-MMM-yyyy');
  }

  private merge(entry: Entry, comment: Entry) {
    entry.descriptionComment = comment.descriptionComment;
    entry.name = comment.name;
    comment.isMergedWithEntry = true;
  }

  private processStatement(statement: string, isCiti: boolean = false): Entry[] {
    let initialArray: string[] = statement.split('\n');
    let entries: Entry[] = [];
    initialArray.map((stringRow: string) => {
      if (!stringRow) return;
      if (this.endsWithCR(stringRow)) return;

      let row: string[] = stringRow.split(' ');
      let date: Date = new Date(this.parseDate(row[0]));
      let entry: Entry = new Entry(date, this.parseDesc(row, isCiti), this.parseAmount(row[row.length - 1]), isCiti);
      entry.id = entries.length + 1;
      console.log(entry);
      entries.push(entry);
    });
    return entries;
  }

  private parseDesc(row: string[], isCiti: boolean = false) {
    let desc: string = '';
    for (let i = isCiti ? 2 : 1; i <= row.length - 2; i++) {
      desc += row[i] + ' ';
    }
    return desc;
  }

  private processComments(comments: string): { entriesHDFC: Entry[]; entriesCITI: Entry[] } {
    let initialArray: string[] = comments.split('\n');
    let entriesHDFC: Entry[] = [];

    let entriesCITI: Entry[] = [];

    initialArray.map((stringRow: string) => {
      if (!stringRow) return;
      if (this.endsWithCR(stringRow)) return;
      let row: string[] = stringRow.split('\t');
      let date: Date = new Date(this.parseDate(row[0]));
      let isCiti: boolean = row[4] === 'CITI';
      let entry: Entry = new Entry(date, row[2], this.parseAmount(row[3]), isCiti);
      entry.name = row[1];
      entry.descriptionComment = row[2];

      console.log(entry);
      if (isCiti) entriesCITI.push(entry);
      else entriesHDFC.push(entry);
    });
    return { entriesHDFC: entriesHDFC, entriesCITI: entriesCITI };
  }

  private endsWithCR(stringRow: string) {
    return stringRow
      .trim()
      .toLowerCase()
      .endsWith('cr');
  }

  private parseDate(dateString: string): Date {
    if (!dateString) return new Date(99, 1, 1);

    let dates: string[] = dateString.split('/');
    let dd: number;
    let mm: number;
    let yy: number;
    if (dateString.indexOf('-') > -1) {
      const dateParsed = new Date(dateString);
      dd = dateParsed.getDate();
      mm = dateParsed.getMonth();
      yy = dateParsed.getFullYear();
    } else {
      dates = dateString.split('/');
      if (dates.length > 0 && dates[0]) {
        dd = +dates[0]; // dd;
        if (isNaN(dd)) return new Date(99, 1, 1);
      }

      if (dates.length > 1 && dates[1]) {
        mm = +dates[1] - 1; // mm;

        if (isNaN(mm)) return new Date(99, 1, 1);
      }

      if (dates.length > 2 && dates[2]) {
        yy = +dates[2]; // mm;

        if (isNaN(yy)) return new Date(99, 1, 1);
      } else {
        yy = new Date().getFullYear();
      }
    }

    let retDate = new Date(yy, mm, dd);
    if (retDate.toString() == 'Invalid Date') return new Date(99, 1, 1);
    return retDate;
  }

  private parseAmount(row: string) {
    return +row.replace(',', '');
  }

  private isSGST(description: string): boolean {
    return description.startsWith('SGST-VPS');
  }

  private isCGST(description: string): boolean {
    return description.startsWith('CGST-VPS');
  }

  private isEMI(description: string): boolean {
    return (
      description.indexOf(this.interestCode) <= -1 &&
      description.indexOf('(Ref#') > -1 &&
      description.indexOf('NETBANKING TRANSFER') <= -1
    );
  }

  private isInterest(description: string): boolean {
    return description.indexOf(this.interestCode) > -1;
  }

  private interestIndex(description: string): number {
    return description.indexOf(this.interestCode);
  }

  stringifyOnce = function(obj, replacer, indent) {
    var printedObjects = [];
    var printedObjectKeys = [];

    function printOnceReplacer(key, value) {
      if (printedObjects.length > 2000) {
        // browsers will not print more than 20K, I don't see the point to allow 2K.. algorithm will not be fast anyway if we have too many objects
        return 'object too long';
      }
      var printedObjIndex: any = false;
      printedObjects.forEach(function(obj, index) {
        if (obj === value) {
          printedObjIndex = index;
        }
      });

      if (key == '') {
        //root element
        printedObjects.push(obj);
        printedObjectKeys.push('root');
        return value;
      } else if (printedObjIndex + '' != 'false' && typeof value == 'object') {
        if (printedObjectKeys[printedObjIndex] == 'root') {
          return '(pointer to root)';
        } else {
          return (
            '(see ' +
            (!!value && !!value.constructor ? value.constructor.name.toLowerCase() : typeof value) +
            ' with key ' +
            printedObjectKeys[printedObjIndex] +
            ')'
          );
        }
      } else {
        var qualifiedKey = key || '(empty key)';
        printedObjects.push(value);
        printedObjectKeys.push(qualifiedKey);
        if (replacer) {
          return replacer(key, value);
        } else {
          return value;
        }
      }
    }
    return JSON.stringify(obj, printOnceReplacer, indent);
  };
}
