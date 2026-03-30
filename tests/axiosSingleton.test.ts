import { expect } from 'chai';
import { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { AxiosSingleton } from '../src';
import sinon from 'sinon';

const REQUEST: InternalAxiosRequestConfig = {
  url: 'testUrl',
  method: 'GET',
  headers: new AxiosHeaders({
    test: 'key',
    apiKey: 'myTestRequestAPIKEY',
  }),
  data: {
    password: 'myPassword',
  },
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
  describe('_handleRequest', function () {
    it('should be call', function () {
      const spy = sinon.spy(console, 'info');
      AxiosSingleton['_handleRequest'](REQUEST, true);
      expect(spy.calledOnce).to.be.true;
    });

    it('should not be call', function () {
      const spy = sinon.spy(console, 'info');
      AxiosSingleton['_handleRequest'](REQUEST);
      expect(spy.calledOnce).to.be.false;
    });
  });

  describe('_handleResponse', function () {
    it('should be call', function () {
      const spy = sinon.spy(console, 'info');
      AxiosSingleton['_handleResponse'](RESPONSE, true);
      expect(spy.calledOnce).to.be.true;
    });

    it('should not be call', function () {
      const spy = sinon.spy(console, 'info');
      AxiosSingleton['_handleResponse'](RESPONSE);
      expect(spy.calledOnce).to.be.false;
    });
  });

  describe('cleanResponseLog', function () {
    it('should be call', function () {
      const response = AxiosSingleton['cleanResponseLog'](RESPONSE);

      expect(response).to.not.have.property('request');
      expect(response.config.headers.apiKey).to.equal(
        '****************************IKEY',
      );
      expect(response.config.data.password).to.equal('***');
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

    it('should sanitize sensitive fields inside a JSON-stringified string value', () => {
      const innerPayload = {
        apiKey: 'myTestRequestAPIKEY',
        password: 'myPassword',
        safe: 'value',
      };
      const sampleObj = { data: JSON.stringify(innerPayload) };
      const sanitizedObj = AxiosSingleton['sanitizeObject'](sampleObj);

      const parsedData = JSON.parse(sanitizedObj.data);
      expect(parsedData).to.have.property(
        'apiKey',
        '****************************IKEY',
      );
      expect(parsedData).to.have.property('password', '***');
      expect(parsedData).to.have.property('safe', 'value');
    });

    it('should leave non-JSON string values untouched', () => {
      const sampleObj = { message: 'hello world', count: 42 };
      const sanitizedObj = AxiosSingleton['sanitizeObject'](sampleObj);

      expect(sanitizedObj).to.have.property('message', 'hello world');
      expect(sanitizedObj).to.have.property('count', 42);
    });
  });
});
