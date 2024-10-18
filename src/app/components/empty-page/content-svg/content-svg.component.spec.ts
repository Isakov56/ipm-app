import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSvgComponent } from './content-svg.component';

describe('ContentSvgComponent', () => {
  let component: ContentSvgComponent;
  let fixture: ComponentFixture<ContentSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
