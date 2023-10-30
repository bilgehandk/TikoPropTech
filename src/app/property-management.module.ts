import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {CommonModule, CurrencyPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [],
    imports: [MatFormFieldModule, MatCardModule, MatListModule, CurrencyPipe, FormsModule, CommonModule],
})
export class PropertyManagementModule {}
