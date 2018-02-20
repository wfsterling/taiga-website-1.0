import { TaigaWebsitePage } from './app.po';

describe('taiga-website App', () => {
  let page: TaigaWebsitePage;

  beforeEach(() => {
    page = new TaigaWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
