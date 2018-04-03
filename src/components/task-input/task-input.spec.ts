import { render } from '@stencil/core/testing';
import { TaskInput } from './task-input';

describe('app', () => {
  it('should build', () => {
    expect(new TaskInput()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [TaskInput],
        html: '<task-input></task-input>'
      });
    });
  });
});
