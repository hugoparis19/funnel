import { browser, by, element } from 'protractor';

export class FunnelPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yuc-root h1')).getText();
  }
}
