import { PublicApiClientException } from '../../src/exception';
import { constants } from 'http2';
import { expect } from 'chai';

describe('PublicApiClientException', () => {
  describe('constructor', () => {
    it('constructor with all argument', function () {
      const notFoundException = new PublicApiClientException(
        `Error on ressource`,
        'this is http error',
        constants.HTTP_STATUS_BAD_REQUEST,
      );

      expect(notFoundException).to.be.instanceof(PublicApiClientException);
    });

    it('constructor without argument', function () {
      const notFoundException = new PublicApiClientException(
        `Error on ressource`,
      );

      expect(notFoundException).to.be.instanceof(PublicApiClientException);
    });
  });
});
