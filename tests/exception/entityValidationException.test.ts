import { EntityValidationException } from '../../src/exception';
import { constants } from 'http2';
import { expect } from 'chai';

describe('EntityValidationException', () => {
  describe('constructor', () => {
    it('constructor with all argument', function () {
      const notFoundException = new EntityValidationException(
        'Entity Error',
        'this is http error',
        constants.HTTP_STATUS_FORBIDDEN,
      );

      expect(notFoundException).to.be.instanceof(EntityValidationException);
    });

    it('constructor without argument', function () {
      const notFoundException = new EntityValidationException('Entity Error');

      expect(notFoundException).to.be.instanceof(EntityValidationException);
    });
  });
});
