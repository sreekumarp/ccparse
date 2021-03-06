import * as moment from 'moment';
export class Entry {
  constructor(public date?: Date, public description?: string, public amount?: number, public isCiti?: boolean) {
    this.amountEntries = [];
    this.amounts = [];
    this.addAmount(this);
  }
  public id: number = 0;
  public name: string = ''; //public year: number,
  public descriptionComment: string = '';
  public companyCode: number = 0;
  public vpsCode: string = '';
  public emiNumber: number = 0;
  public amountEntries: Entry[];
  public amounts: number[];
  public isInterestMerged: boolean = false;
  public isMergedWithEntry: boolean = false;

  public get bankName(): string {
    return this.isCiti ? 'CITI' : 'HDFC';
  }

  public get dateString(): string {
    return moment(this.date).format('DD-MMM-YYYY');
  }

  addAmount(entry: Entry) {
    this.amountEntries.push(Object.assign({}, entry));
    this.amounts.push(entry.amount);

    this.amount = parseFloat(
      this.amounts
        .reduce((a, b) => {
          return a + b;
        }, 0)
        .toFixed(2)
    );
  }
}

export let single: any = [
  {
    name: 'Databases',
    value: 382941
  },
  {
    name: 'Containers',
    value: 152294
  },
  {
    name: 'Streams',
    value: 283000
  },
  {
    name: 'Queries',
    value: 828921
  }
];

export let multi: any = [
  {
    name: 'Databases',
    series: [
      {
        value: 75,
        name: '2017-02-07T07:57:57Z'
      },
      {
        value: 93,
        name: '2017-02-10T14:04:37Z'
      },
      {
        value: 88,
        name: '2017-02-26T03:56:27Z'
      },
      {
        value: 91,
        name: '2017-02-13T04:00:58Z'
      },
      {
        value: 99,
        name: '2017-02-11T08:15:08Z'
      },
      {
        value: 73,
        name: '2017-02-08T08:32:17Z'
      },
      {
        value: 94,
        name: '2017-02-27T18:02:21Z'
      },
      {
        value: 80,
        name: '2017-02-25T03:18:22Z'
      },
      {
        value: 95,
        name: '2017-02-16T08:15:41Z'
      },
      {
        value: 74,
        name: '2017-02-27T13:45:41Z'
      },
      {
        value: 89,
        name: '2017-02-12T22:35:11Z'
      },
      {
        value: 99,
        name: '2017-02-12T19:23:20Z'
      },
      {
        value: 80,
        name: '2017-02-26T04:22:37Z'
      },
      {
        value: 86,
        name: '2017-02-02T13:40:04Z'
      },
      {
        value: 90,
        name: '2017-02-09T08:30:16Z'
      },
      {
        value: 77,
        name: '2017-02-26T16:35:01Z'
      },
      {
        value: 83,
        name: '2017-02-20T02:11:26Z'
      },
      {
        value: 74,
        name: '2017-02-23T13:43:18Z'
      },
      {
        value: 79,
        name: '2017-02-24T14:58:13Z'
      },
      {
        value: 75,
        name: '2017-02-03T15:43:57Z'
      },
      {
        value: 76,
        name: '2017-02-10T12:32:17Z'
      },
      {
        value: 72,
        name: '2017-02-10T14:27:48Z'
      },
      {
        value: 93,
        name: '2017-02-22T16:50:25Z'
      },
      {
        value: 99,
        name: '2017-02-21T08:55:32Z'
      },
      {
        value: 93,
        name: '2017-02-06T03:51:59Z'
      },
      {
        value: 99,
        name: '2017-02-13T19:04:17Z'
      },
      {
        value: 70,
        name: '2017-02-21T06:46:02Z'
      },
      {
        value: 90,
        name: '2017-02-15T01:05:22Z'
      }
    ]
  },
  {
    name: 'Containers',
    series: [
      {
        value: 94,
        name: '2017-02-24T11:37:55Z'
      },
      {
        value: 72,
        name: '2017-02-13T01:39:20Z'
      },
      {
        value: 78,
        name: '2017-02-03T07:42:11Z'
      },
      {
        value: 69,
        name: '2017-02-27T08:23:37Z'
      },
      {
        value: 85,
        name: '2017-02-23T10:00:51Z'
      },
      {
        value: 69,
        name: '2017-02-07T03:53:12Z'
      },
      {
        value: 86,
        name: '2017-02-01T09:59:36Z'
      },
      {
        value: 79,
        name: '2017-02-26T05:11:41Z'
      },
      {
        value: 76,
        name: '2017-02-06T01:55:49Z'
      },
      {
        value: 69,
        name: '2017-02-11T10:00:58Z'
      },
      {
        value: 93,
        name: '2017-02-06T13:47:53Z'
      },
      {
        value: 73,
        name: '2017-02-26T22:27:30Z'
      },
      {
        value: 92,
        name: '2017-02-09T10:37:05Z'
      },
      {
        value: 91,
        name: '2017-02-06T01:43:20Z'
      },
      {
        value: 82,
        name: '2017-02-11T08:36:36Z'
      },
      {
        value: 83,
        name: '2017-02-26T10:44:06Z'
      },
      {
        value: 98,
        name: '2017-02-13T05:55:33Z'
      },
      {
        value: 98,
        name: '2017-02-20T17:08:54Z'
      },
      {
        value: 71,
        name: '2017-02-08T14:55:44Z'
      },
      {
        value: 76,
        name: '2017-02-19T15:01:52Z'
      },
      {
        value: 71,
        name: '2017-02-25T09:01:02Z'
      },
      {
        value: 85,
        name: '2017-02-09T12:39:41Z'
      },
      {
        value: 99,
        name: '2017-02-05T00:04:20Z'
      },
      {
        value: 74,
        name: '2017-02-13T09:06:47Z'
      },
      {
        value: 94,
        name: '2017-02-18T22:26:56Z'
      },
      {
        value: 95,
        name: '2017-02-20T19:35:02Z'
      },
      {
        value: 79,
        name: '2017-02-26T13:47:28Z'
      },
      {
        value: 82,
        name: '2017-02-03T22:25:53Z'
      }
    ]
  }
];

export let multi2: any = [
  {
    name: 'Queries',
    series: [
      {
        value: 86,
        name: '2017-02-18T05:42:03Z'
      },
      {
        value: 78,
        name: '2017-02-19T10:28:34Z'
      },
      {
        value: 95,
        name: '2017-02-20T18:04:56Z'
      },
      {
        value: 99,
        name: '2017-02-09T03:46:09Z'
      },
      {
        value: 96,
        name: '2017-02-23T21:38:14Z'
      },
      {
        value: 76,
        name: '2017-02-25T04:02:58Z'
      },
      {
        value: 93,
        name: '2017-02-16T04:11:43Z'
      },
      {
        value: 88,
        name: '2017-02-25T21:16:49Z'
      },
      {
        value: 74,
        name: '2017-02-05T02:57:50Z'
      },
      {
        value: 92,
        name: '2017-02-11T14:28:06Z'
      },
      {
        value: 86,
        name: '2017-02-22T11:50:09Z'
      },
      {
        value: 92,
        name: '2017-02-27T05:26:53Z'
      },
      {
        value: 71,
        name: '2017-02-10T11:21:41Z'
      },
      {
        value: 94,
        name: '2017-02-01T04:11:49Z'
      },
      {
        value: 69,
        name: '2017-02-23T19:01:52Z'
      },
      {
        value: 69,
        name: '2017-02-12T08:13:44Z'
      },
      {
        value: 87,
        name: '2017-02-18T12:18:38Z'
      },
      {
        value: 99,
        name: '2017-02-13T04:00:55Z'
      },
      {
        value: 94,
        name: '2017-02-06T02:19:15Z'
      },
      {
        value: 75,
        name: '2017-02-11T14:13:24Z'
      },
      {
        value: 93,
        name: '2017-02-21T05:32:06Z'
      },
      {
        value: 76,
        name: '2017-02-08T14:35:45Z'
      },
      {
        value: 85,
        name: '2017-02-15T00:13:20Z'
      },
      {
        value: 80,
        name: '2017-02-26T23:03:11Z'
      },
      {
        value: 85,
        name: '2017-02-08T05:48:51Z'
      },
      {
        value: 81,
        name: '2017-02-20T07:13:16Z'
      },
      {
        value: 87,
        name: '2017-02-21T06:23:07Z'
      },
      {
        value: 81,
        name: '2017-02-27T22:27:23Z'
      }
    ]
  },
  {
    name: 'Databases',
    series: [
      {
        value: 68,
        name: '2017-02-16T06:36:47Z'
      },
      {
        value: 76,
        name: '2017-02-21T05:55:24Z'
      },
      {
        value: 95,
        name: '2017-02-03T16:38:57Z'
      },
      {
        value: 86,
        name: '2017-02-15T19:30:36Z'
      },
      {
        value: 76,
        name: '2017-02-10T23:27:01Z'
      },
      {
        value: 74,
        name: '2017-02-10T05:14:01Z'
      },
      {
        value: 83,
        name: '2017-02-14T16:54:56Z'
      },
      {
        value: 88,
        name: '2017-02-07T14:27:31Z'
      },
      {
        value: 74,
        name: '2017-02-14T21:52:15Z'
      },
      {
        value: 90,
        name: '2017-02-17T16:26:38Z'
      },
      {
        value: 95,
        name: '2017-02-26T08:34:58Z'
      },
      {
        value: 97,
        name: '2017-02-14T07:36:17Z'
      },
      {
        value: 99,
        name: '2017-02-05T20:23:59Z'
      },
      {
        value: 89,
        name: '2017-02-27T11:55:41Z'
      },
      {
        value: 94,
        name: '2017-02-16T22:40:05Z'
      },
      {
        value: 90,
        name: '2017-02-08T08:18:50Z'
      },
      {
        value: 68,
        name: '2017-02-25T20:55:32Z'
      },
      {
        value: 90,
        name: '2017-02-09T18:19:08Z'
      },
      {
        value: 98,
        name: '2017-02-07T03:58:38Z'
      },
      {
        value: 68,
        name: '2017-02-22T19:20:24Z'
      },
      {
        value: 86,
        name: '2017-02-06T22:22:22Z'
      },
      {
        value: 83,
        name: '2017-02-17T20:52:51Z'
      },
      {
        value: 96,
        name: '2017-02-21T21:48:03Z'
      },
      {
        value: 97,
        name: '2017-02-22T17:15:39Z'
      },
      {
        value: 75,
        name: '2017-02-20T06:10:57Z'
      },
      {
        value: 73,
        name: '2017-02-22T18:21:58Z'
      },
      {
        value: 92,
        name: '2017-02-22T15:02:07Z'
      },
      {
        value: 92,
        name: '2017-02-27T10:30:03Z'
      }
    ]
  }
];
