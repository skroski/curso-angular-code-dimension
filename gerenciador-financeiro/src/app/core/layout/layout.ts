import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Header } from './components/header/header';
// Import the Material button module
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-layout',
  imports: [Header, MatButtonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Layout {

}
