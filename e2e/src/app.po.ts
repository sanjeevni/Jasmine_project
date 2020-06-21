import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('appSpan')).getText() as Promise<string>;
  }

  setUsername(username) {
     element(by.id('username')).sendKeys(username);
  }

  setPassword(password) {
    element(by.id('password')).sendKeys(password);
  }

  clickLoginBtn(){
    element(by.id('subBtn')).click();
  }

}
