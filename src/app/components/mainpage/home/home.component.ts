import { Component } from '@angular/core';
import {SvgDisplayComponent} from './svg-display/svg-display.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SvgDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
