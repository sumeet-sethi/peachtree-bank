import { AppPage } from './app.po';
import { browser, element, by, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a Trasnfer Icon', () => {
    page.navigateTo();
    let xpath = element(by.xpath('//app-transfer/mat-card/mat-toolbar/mat-icon'));
    expect(xpath.getText()).toBe('compare_arrows');
  });

  it('should have a FROM ACCOUNT label', () => {
    page.navigateTo();
    let xpath = element(by.xpath('//*[@id="mat-form-field-label-1"]/mat-label'));
    expect(xpath.getText()).toBe('FROM ACCOUNT');
  });

  it('should have a TO ACCOUNT label', () => {
    page.navigateTo();
    let xpath = element(by.xpath('//*[@id="mat-form-field-label-3"]/mat-label'));
    expect(xpath.getText()).toBe('TO ACCOUNT');
  });

  it('should have a AMOUNT ($) label', () => {
    page.navigateTo();
    let xpath = element(by.xpath('//*[@id="mat-form-field-label-5"]/mat-label'));
    expect(xpath.getText()).toBe('AMOUNT ($)');
  });

  it('should have a Clear button', () => {
    page.navigateTo();
    let xpath = element(by.xpath('//mat-card-actions/button[1]/span'));
    expect(xpath.getText()).toBe('Clear');
  });

  it('should have a Submit button', () => {
    page.navigateTo();
    let xpath = element(by.xpath('//mat-card-actions/button[2]/span'));
    expect(xpath.getText()).toBe('Submit');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
