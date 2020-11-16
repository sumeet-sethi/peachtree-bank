import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferComponent } from './transfer.component';
import { AppModule } from '../app.module';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  const prepareTestBed = () => {
    TestBed.configureTestingModule({
      declarations: [TransferComponent],
      imports: [AppModule]
    }).compileComponents();
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  beforeEach(() => {
    prepareTestBed();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should empty merchant field', () => {
    component.merchant = 'test';
    component.clear();
    expect(component.merchant).toEqual('');
  });

  it('should zero amount  field', () => {
    component.amount = 0;
    component.clear();
    expect(component.amount).toEqual(0);
  });

  it('should make preview true', () => {
    component.preview = false;
    component.submit();
    expect(component.preview).toEqual(true);
  });

  it('should call transfer if statements', () => {
    spyOn<any>(component, 'clear');
    component.preview = true;
    component.balance = 1000;
    component.amount = 10;
    component.transfer();
    expect(component.preview).toEqual(false);
    expect(component.clear).toHaveBeenCalled();
  });

  it('should call transfer else statements', () => {
    spyOn<any>(component['snackBar'], 'open');
    component.preview = true;
    component.balance = 1000;
    component.amount = 2000;
    component.transfer();
    expect(component['snackBar'].open).toHaveBeenCalled();
  });

});
