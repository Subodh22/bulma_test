import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidBlueComponent } from './vid-blue.component';

describe('VidBlueComponent', () => {
  let component: VidBlueComponent;
  let fixture: ComponentFixture<VidBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidBlueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
