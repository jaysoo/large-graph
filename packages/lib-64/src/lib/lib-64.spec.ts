import { lib64 } from './lib-64.js';

describe('lib64', () => {
  it('should work', () => {
    expect(lib64()).toEqual('lib-64');
  })
})
