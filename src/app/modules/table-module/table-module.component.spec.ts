import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModule } from './table-module.component';

describe('TableModule', () => {
  let component: TableModule;
  let fixture: ComponentFixture<TableModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
