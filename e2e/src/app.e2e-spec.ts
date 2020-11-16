import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a Trasnfer Icon', () => {
    page.navigateTo();
    expect(page.getTransferIcon()).toBe('compare_arrows');
  });

  it('should have a FROM ACCOUNT label', () => {
    page.navigateTo();
    expect(page.getFromAccountLabel()).toBe('FROM ACCOUNT');
  });

  it('should have a TO ACCOUNT label', () => {
    page.navigateTo();
    expect(page.getToAccountLabel()).toBe('TO ACCOUNT');
  });

  it('should have a AMOUNT ($) label', () => {
    page.navigateTo();
    expect(page.getAmountLabel()).toBe('AMOUNT ($)');
  });

  it('should have a Clear button', () => {
    page.navigateTo();
    expect(page.getClearButton()).toBe('Clear');
  });

  it('should have a Submit button', () => {
    page.navigateTo();
    expect(page.getSubmitButton()).toBe('Submit');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
