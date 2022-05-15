import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  students=[
    {
      name: 'Spiegel, Spike',
      graduated: false,
      honors: false,
      examDate: new Date (2044, 12, 12, 13)
    },
    {
      name: 'Atreides, Paul',
      graduated: true,
      honors: false,
      examDate: new Date (2044, 11, 10, 14)
    },
    {
      name: 'Organa, Leia',
      graduated: true,
      honors: true,
      examDate: new Date (2044, 9, 2, 10)
    },
    {
      name: 'Weyland, David',
      graduated: false,
      honors: false,
      examDate: new Date (2044, 8, 17, 7)
    },
    {
      name: 'Aran, Samus',
      graduated: true,
      honors: false,
      examDate: new Date (2044, 5, 15, 11)
    }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
