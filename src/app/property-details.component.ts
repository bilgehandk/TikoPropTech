import { Component, OnInit } from '@angular/core';
import { PropertyService } from './property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  propertyId?: number;
  property: any;

  constructor(private propertyService: PropertyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.propertyId = id ? +id : 0;
      if (this.propertyId) {
        this.property = this.propertyService.getPropertyById(this.propertyId);
      }
    });
  }

  goBack() {
    window.history.back();
  }
}
