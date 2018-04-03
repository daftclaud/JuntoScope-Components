import { render } from '@stencil/core/testing';
import { TaskCreator } from './task-creator';

describe('app', () => {
  it('should build', () => {
    expect(new TaskCreator()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [TaskCreator],
        html: '<task-creator></task-creator>'
      });
    });
  });
});
