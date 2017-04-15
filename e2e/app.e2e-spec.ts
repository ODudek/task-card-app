import { TaskCardAppPage } from './app.po';

describe('task-card-app App', () => {
  let page: TaskCardAppPage;

  beforeEach(() => {
    page = new TaskCardAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
