import { FunnelPage } from './app.po';

describe('funnel App', () => {
  let page: FunnelPage;

  beforeEach(() => {
    page = new FunnelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('YucFunnel');
  });
});
