import { BeerlistPage } from './app.po';

describe('beerlist App', () => {
  let page: BeerlistPage;

  beforeEach(() => {
    page = new BeerlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
