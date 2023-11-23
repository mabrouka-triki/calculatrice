import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantRouteurComponent } from './composant-routeur.component';

describe('ComposantRouteurComponent', () => {
  let component: ComposantRouteurComponent;
  let fixture: ComponentFixture<ComposantRouteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantRouteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComposantRouteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
