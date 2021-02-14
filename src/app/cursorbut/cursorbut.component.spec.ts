import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorbutComponent } from './cursorbut.component';

describe('CursorbutComponent', () => {
  let component: CursorbutComponent;
  let fixture: ComponentFixture<CursorbutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursorbutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorbutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
