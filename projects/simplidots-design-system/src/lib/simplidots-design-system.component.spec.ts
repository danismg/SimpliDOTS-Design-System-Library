import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplidotsDesignSystemComponent } from './simplidots-design-system.component';

describe('SimplidotsDesignSystemComponent', () => {
  let component: SimplidotsDesignSystemComponent;
  let fixture: ComponentFixture<SimplidotsDesignSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplidotsDesignSystemComponent]
    });
    fixture = TestBed.createComponent(SimplidotsDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
