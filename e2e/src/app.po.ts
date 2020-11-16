import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTransferIcon(): Promise<string> {
    return element(by.xpath('//app-transfer/mat-card/mat-toolbar/mat-icon')).getText() as Promise<string>;
  }

  getFromAccountLabel(): Promise<string> {
    return element(by.xpath('//*[@id="mat-form-field-label-1"]/mat-label')).getText() as Promise<string>;
  }

  getToAccountLabel(): Promise<string> {
    return  element(by.xpath('//*[@id="mat-form-field-label-3"]/mat-label')).getText() as Promise<string>;
  }

  getAmountLabel(): Promise<string> {
    return element(by.xpath('//*[@id="mat-form-field-label-5"]/mat-label')).getText() as Promise<string>;
  }

  getClearButton(): Promise<string> {
    return element(by.xpath('//mat-card-actions/button[1]/span')).getText() as Promise<string>;
  }

  getSubmitButton(): Promise<string> {
    return element(by.xpath('//mat-card-actions/button[2]/span')).getText() as Promise<string>;
  }

}
