import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDisplayComponent } from './svg-display.component';

describe('SvgDisplayComponent', () => {
  let component: SvgDisplayComponent;
  let fixture: ComponentFixture<SvgDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
