import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentSvgComponent } from './content-svg/content-svg.component';

@Component({
  selector: 'content',
  standalone: true,
  imports: [RouterModule, ContentSvgComponent],
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.css',
})
export class EmptyPageComponent {

}
