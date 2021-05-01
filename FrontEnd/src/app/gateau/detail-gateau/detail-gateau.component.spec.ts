import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGateauComponent } from './detail-gateau.component';

describe('DetailGateauComponent', () => {
  let component: DetailGateauComponent;
  let fixture: ComponentFixture<DetailGateauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGateauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
