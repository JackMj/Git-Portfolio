import { GitforlioPage } from './app.po';

describe('gitforlio App', function() {
  let page: GitforlioPage;

  beforeEach(() => {
    page = new GitforlioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
