import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.css'
})
export class EmptyPageComponent {

}
