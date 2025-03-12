import { expect } from 'chai';
import { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { AxiosSingleton } from '../src';

const REQUEST: InternalAxiosRequestConfig = {
  url: 'testUrl',
  method: 'GET',
  headers: new AxiosHeaders({
    test: 'key',
    apiKey: 'myTestRequestAPIKEY',
  }),
};

const RESPONSE: AxiosResponse = {
  data: {},
  config: REQUEST as InternalAxiosRequestConfig,
  status: 200,
  statusText: 'GET',
  headers: {
    test: 'key',
  },
  request: {
    test: 'test',
  },
};

describe('axiosSingleton', function () {
  describe('cleanResponseLog', function () {
    it('should be call', function () {
      const response = AxiosSingleton['cleanResponseLog'](RESPONSE);

      expect(response).to.not.have.property('request');
      expect(response.config.headers.apiKey).to.equal(
        '****************************IKEY',
      );
    });
  });

  describe('sanitizeObject', () => {
    it('should mask sensitive fields in a simple object', () => {
      const sampleObj = { apiKey: '1234567890abcdef', other: 'value' };
      const sanitizedObj = AxiosSingleton['sanitizeObject'](sampleObj);

      expect(sanitizedObj).to.have.property(
        'apiKey',
        '****************************cdef',
      );
      expect(sanitizedObj).to.have.property('other', 'value');
    });

    it('should process recursively and handle circular references', () => {
      const sampleObj: any = { apiKey: 'secretkey', nested: {} };
      sampleObj.nested.self = sampleObj;
      const sanitizedObj = AxiosSingleton['sanitizeObject'](sampleObj);

      expect(sanitizedObj).to.have.property(
        'apiKey',
        '****************************tkey',
      );
      expect(sanitizedObj.nested).to.be.an('object');
    });
  });
});
