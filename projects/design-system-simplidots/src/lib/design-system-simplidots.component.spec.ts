import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemSimplidotsComponent } from './design-system-simplidots.component';

describe('DesignSystemSimplidotsComponent', () => {
  let component: DesignSystemSimplidotsComponent;
  let fixture: ComponentFixture<DesignSystemSimplidotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSystemSimplidotsComponent]
    });
    fixture = TestBed.createComponent(DesignSystemSimplidotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
