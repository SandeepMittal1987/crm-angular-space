import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAngularKitComponent } from './core-angular-kit.component';

describe('CoreAngularKitComponent', () => {
  let component: CoreAngularKitComponent;
  let fixture: ComponentFixture<CoreAngularKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreAngularKitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreAngularKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
