import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecItensComponent } from './selec-itens.component';

describe('SelecItensComponent', () => {
  let component: SelecItensComponent;
  let fixture: ComponentFixture<SelecItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
