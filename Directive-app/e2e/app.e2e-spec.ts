import { DirectiveAppPage } from './app.po';

describe('directive-app App', () => {
  let page: DirectiveAppPage;

  beforeEach(() => {
    page = new DirectiveAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
