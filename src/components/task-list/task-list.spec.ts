import { render } from '@stencil/core/testing';
import { TaskList } from './task-list';

describe('app', () => {
  it('should build', () => {
    expect(new TaskList()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [TaskList],
        html: '<task-list></task-list>'
      });
    });
  });
});
