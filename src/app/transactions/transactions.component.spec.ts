import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';
import { AppModule } from '../app.module';
import TransactionalData from '../../mock/transactions.json';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  const prepareTestBed = () => {
    TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      imports: [AppModule]
    }).compileComponents();
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  beforeEach(() => {
    prepareTestBed();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should false sortByDateUpDown', () => {
    component.sortByDateUpDown = true;
    component.sortByDate();
    expect(component.sortByDateUpDown).toEqual(false);
  });

  it('should true sortByDateUpDown', () => {
    component.sortByDateUpDown = false;
    component.sortByDate();
    expect(component.sortByDateUpDown).toEqual(true);
  });

  it('should false sortByBeneficiaryUpDown', () => {
    component.sortByBeneficiaryUpDown = true;
    component.sortByBeneficiary();
    expect(component.sortByAmountUpDown).toEqual(false);
  });

  it('should true sortByBeneficiaryUpDown', () => {
    component.sortByBeneficiaryUpDown = false;
    component.sortByBeneficiary();
    expect(component.sortByBeneficiaryUpDown).toEqual(true);
  });

  it('should false sortByAmountUpDown', () => {
    component.sortByAmountUpDown = true;
    component.sortByAmount();
    expect(component.sortByAmountUpDown).toEqual(false);
  });

  it('should true sortByAmountUpDown', () => {
    component.sortByAmountUpDown = false;
    component.sortByAmount();
    expect(component.sortByAmountUpDown).toEqual(true);
  });

});
