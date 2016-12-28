import { EstagioPage } from './app.po';

describe('estagio App', function() {
  let page: EstagioPage;

  beforeEach(() => {
    page = new EstagioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
