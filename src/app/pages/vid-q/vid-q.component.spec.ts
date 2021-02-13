import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidQComponent } from './vid-q.component';

describe('VidQComponent', () => {
  let component: VidQComponent;
  let fixture: ComponentFixture<VidQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
