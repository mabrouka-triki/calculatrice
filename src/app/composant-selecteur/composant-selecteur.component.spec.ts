import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantSelecteurComponent } from './composant-selecteur.component';

describe('ComposantSelecteurComponent', () => {
  let component: ComposantSelecteurComponent;
  let fixture: ComponentFixture<ComposantSelecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantSelecteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComposantSelecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
