import { Component, OnInit } from '@angular/core';
import { PropertyService } from './property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  propertyListings: any[] = [
    { id: 1, type: 'Residance', location: 'İstanbul', price: 250000 },
    { id: 2, type: 'Apartman', location: 'Kocaeli', price: 120000 },
    { id: 3, type: 'Apartman', location: 'İstanbul', price: 180000 },
    { id: 4, type: 'Villa', location: 'İzmir', price: 350000 },
  ];

  constructor(private propertyService: PropertyService, private router: Router) {}

  ngOnInit() {
    this.propertyService.getProperties().subscribe((data) => {
      this.propertyListings = data;
    });
  }

  viewPropertyDetails(propertyId: number): void {
    this.router.navigate(['/property-details', propertyId]);

  }
}
