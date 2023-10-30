import { Injectable } from '@angular/core';
import { PropertyModel } from './property.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private properties: PropertyModel[] = [];

  private propertiesSubject: BehaviorSubject<PropertyModel[]> = new BehaviorSubject(this.properties);

  constructor() {
    // Sample data
    this.properties = [
      { id: 1, type: 'Residance', location: 'İstanbul', price: 250000 },
      { id: 2, type: 'Apartman', location: 'Kocaeli', price: 120000 },
      { id: 3, type: 'Apartman', location: 'İstanbul', price: 180000 },
      { id: 4, type: 'Villa', location: 'İzmir', price: 350000 },
    ];
    this.propertiesSubject.next(this.properties);
  }

  getProperties(): Observable<PropertyModel[]> {
    return this.propertiesSubject.asObservable();
  }

  getPropertyById(id: number) {
    return this.properties.find((p) => p.id === id);
  }

  addProperty(property: PropertyModel) {
    property.id = this.getNextId();
    this.properties.push(property);
    this.propertiesSubject.next([...this.properties]);
  }

  updateProperty(property: PropertyModel) {
    const index = this.properties.findIndex((p) => p.id === property.id);
    if (index !== -1) {
      this.properties[index] = property;
      this.propertiesSubject.next([...this.properties]);
    }
  }

  deleteProperty(id: number) {
    const index = this.properties.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.properties.splice(index, 1);
      this.propertiesSubject.next([...this.properties]);
    }
  }

  private getNextId(): number {
    const maxId = Math.max(...this.properties.map((property) => property.id), 0);
    return maxId + 1;
  }
}
