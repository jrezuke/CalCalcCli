import { CalCalcPage } from './app.po';

describe('cal-calc App', function() {
  let page: CalCalcPage;

  beforeEach(() => {
    page = new CalCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
