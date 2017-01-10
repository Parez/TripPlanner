import { MyTripsPage } from './app.po';

describe('my-trips App', function() {
  let page: MyTripsPage;

  beforeEach(() => {
    page = new MyTripsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
