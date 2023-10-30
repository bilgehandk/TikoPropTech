import { Component, OnInit } from '@angular/core';
import { PropertyService } from './property.service';
import { PropertyModel } from './property.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.css'],
})
export class PropertyManagementComponent implements OnInit {
  newProperty: PropertyModel = { id: 0, type: '', location: '', price: 0 };
  properties: PropertyModel[] = [
    { id: 1, type: 'Residance', location: 'İstanbul', price: 250000 },
    { id: 2, type: 'Apartman', location: 'Kocaeli', price: 120000 },
    { id: 3, type: 'Apartman', location: 'İstanbul', price: 180000 },
    { id: 4, type: 'Villa', location: 'İzmir', price: 350000 },
  ];

  constructor(private propertyService: PropertyService, private router: Router) {}

  ngOnInit() {
    this.propertyService.getProperties().subscribe((data: PropertyModel[]) => {
      this.properties = data;
    });
  }

  addProperty() {
    if (this.newProperty.type === '' || this.newProperty.location === '' || this.newProperty.price === 0) {
      alert('Please fill out all required fields before adding the property.');
      return;
    }

    this.propertyService.addProperty({ ...this.newProperty });
    this.newProperty = { id: 0, type: '', location: '', price: 0 };
  }

  deleteProperty(property: PropertyModel) {
    this.propertyService.deleteProperty(property.id);
  }
}
