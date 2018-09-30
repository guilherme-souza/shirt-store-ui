import { Component, OnInit } from '@angular/core';
import { Shirt } from '../shirt';
import { ShirtService } from '../shirt.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  shirts: Shirt[];

  constructor(private shirtService: ShirtService) { }

  ngOnInit() {
    this.listShirts();
  }

  listShirts(): void {
    this.shirtService.getShirts().subscribe(shirts => this.shirts = shirts);
  }

  selectShirt(shirt: Shirt): void {
    this.shirtService.selectedShirt = shirt;
  }
}
