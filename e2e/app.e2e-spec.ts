import { SpaceAdventurePage } from './app.po';

describe('space-adventure App', function() {
  let page: SpaceAdventurePage;

  beforeEach(() => {
    page = new SpaceAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
