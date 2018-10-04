import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('First nav button should be dashboard', () => {
    page.navigateTo();
    expect(page.getNavButton()).toEqual('Dashboard');
  });
});
