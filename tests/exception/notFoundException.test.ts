import { NotFoundException } from '../../src/exception';
import { constants } from 'http2';
import { expect } from 'chai';

describe('NotFoundException', () => {
  describe('constructor', () => {
    it('constructor with all argument', function () {
      const notFoundException = new NotFoundException(
        `Resource not found`,
        'this is http error',
        constants.HTTP_STATUS_NOT_FOUND,
      );

      expect(notFoundException).to.be.instanceof(NotFoundException);
    });

    it('constructor without argument', function () {
      const notFoundException = new NotFoundException(`Resource not found`);

      expect(notFoundException).to.be.instanceof(NotFoundException);
    });
  });
});
