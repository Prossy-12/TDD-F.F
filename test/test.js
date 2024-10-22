// test/test.js
import { chai } from 'chai';  // Use import instead of require
import { multiply } from '../multiply.js';  // Adjust path according to your structure

describe('Multiply Function Tests', () => {
  it('should return 1 when multiplying 1 and 1', () => {
    assert.equal(multiply(1, 1), 1);
  });

  it('should return 4 when multiplying 2 and 2', () => {
    assert.equal(multiply(2, 2), 4);
  });

  it('should return 9 when multiplying 3 and 3', () => {
    assert.equal(multiply(3, 3), 9);
  });
});
