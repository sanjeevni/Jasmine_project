import { browser, by, element } from 'protractor';

export class MainPage {
  getDashboardText(): Promise<string> {
    return element(by.id('dashboardSpan')).getText() as Promise<string>;
  }

}
