import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeuticTipsComponent } from './therapeutic-tips.component';

describe('TherapeuticTipsComponent', () => {
  let component: TherapeuticTipsComponent;
  let fixture: ComponentFixture<TherapeuticTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapeuticTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapeuticTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
