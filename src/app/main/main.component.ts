import { Component, OnInit } from '@angular/core';
import { Overview } from '../overview';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  overviews: Overview[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getOverviews();
  }


  getOverviews(): void {
    this.dataService.getOverviews()
        .subscribe(overviews => this.overviews = overviews);
  }
}
