import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalProductMasterComponent } from './external-product-master.component';

describe('ExternalProductMasterComponent', () => {
  let component: ExternalProductMasterComponent;
  let fixture: ComponentFixture<ExternalProductMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalProductMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalProductMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
