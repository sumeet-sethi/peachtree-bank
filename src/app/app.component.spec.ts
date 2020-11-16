import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const prepareTestBed = () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AppModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  beforeEach(() => {
    prepareTestBed();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
