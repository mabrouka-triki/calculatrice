import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurDeCalculComponent } from './compteur-de-calcul.component';

describe('CompteurDeCalculComponent', () => {
  let component: CompteurDeCalculComponent;
  let fixture: ComponentFixture<CompteurDeCalculComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteurDeCalculComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompteurDeCalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
