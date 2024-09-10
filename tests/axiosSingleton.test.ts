import { expect } from 'chai';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosSingleton } from '../src';

const REQUEST: AxiosRequestConfig = {
  url: 'testUrl',
  method: 'GET',
  headers: {
    test: 'key',
    apiKey: 'myTestRequestAPIKEY',
  },
};

const REQUEST_RESULT: AxiosRequestConfig = {
  url: 'testUrl',
  method: 'GET',
  headers: {
    test: 'key',
    apiKey: '****************************IKEY',
  },
};

const REQUEST_WITHOUT_HEADERS: AxiosRequestConfig = {
  url: 'testUrl',
  method: 'GET',
};

const REQUEST_WITHOUT_USER: AxiosRequestConfig = {
  url: 'testUrl',
  method: 'GET',
  data: {
    other: 'other',
  },
};

const REQUEST_WITH_USER: AxiosRequestConfig = {
  url: 'testUrl',
  method: 'GET',
  data: {
    user: { other: 'other' },
  },
};

const REQUEST_WITH_USER_PASSWORD: AxiosRequestConfig = {
  url: 'testUrl',
  method: 'GET',
  data: {
    user: { password: 'pass' },
  },
};

const CLEAN_REQUEST_WITH_USER_PASSWORD: AxiosRequestConfig = {
  url: 'testUrl',
  method: 'GET',
  data: {
    user: { password: '***********' },
  },
};

const RESPONSE: AxiosResponse = {
  data: {},
  config: REQUEST,
  status: 200,
  statusText: 'GET',
  headers: {
    test: 'key',
  },
  request: {
    test: 'test',
  },
};

const RESPONSE_RESULT: AxiosResponse = {
  data: {},
  config: REQUEST_RESULT,
  status: 200,
  statusText: 'GET',
  headers: {
    test: 'key',
  },
};

const RESPONSE_WITHOUT_APIKEY: AxiosResponse = {
  data: {},
  config: REQUEST_RESULT,
  status: 200,
  statusText: 'GET',
  headers: {
    test: 'key',
  },
  request: {
    test: 'test',
  },
};

const RESPONSE_RESULT_WITHOUT_APIKEY: AxiosResponse = {
  data: {},
  config: REQUEST_RESULT,
  status: 200,
  statusText: 'GET',
  headers: {
    test: 'key',
  },
};

const RESPONSE_WITHOUT_HEADERS_AND_REQUEST: AxiosResponse = {
  data: {},
  config: REQUEST_WITHOUT_HEADERS,
  status: 200,
  statusText: 'GET',
  headers: {
    test: 'key',
  },
};

describe('axiosSingleton', function () {
  describe('cleanRequestLog', function () {
    it('should be call', function () {
      const response = AxiosSingleton['cleanRequestLog'](REQUEST);
      console.log(response);

      expect(response).to.deep.equals(REQUEST_RESULT);
    });

    it('should be call without apiKey', function () {
      const response = AxiosSingleton['cleanRequestLog'](REQUEST_RESULT);
      console.log(response);

      expect(response).to.deep.equals(REQUEST_RESULT);
    });

    it('should be call without header', function () {
      const response = AxiosSingleton['cleanRequestLog'](
        REQUEST_WITHOUT_HEADERS,
      );

      expect(response).to.deep.equals(REQUEST_WITHOUT_HEADERS);
    });

    it('should be call without user', function () {
      const response = AxiosSingleton['cleanRequestLog'](REQUEST_WITHOUT_USER);

      expect(response).to.deep.equals(REQUEST_WITHOUT_USER);
    });

    it('should be call with user', function () {
      const response = AxiosSingleton['cleanRequestLog'](REQUEST_WITH_USER);

      expect(response).to.deep.equals(REQUEST_WITH_USER);
    });

    it('should be call with user password', function () {
      const response = AxiosSingleton['cleanRequestLog'](
        REQUEST_WITH_USER_PASSWORD,
      );

      expect(response).to.deep.equals(CLEAN_REQUEST_WITH_USER_PASSWORD);
    });
  });

  describe('cleanResponseLog', function () {
    it('should be call', function () {
      const response = AxiosSingleton['cleanResponseLog'](RESPONSE);

      expect(response).to.deep.equals(RESPONSE_RESULT);
    });

    it('should be call without apiKey', function () {
      const response = AxiosSingleton['cleanResponseLog'](
        RESPONSE_WITHOUT_APIKEY,
      );

      expect(response).to.deep.equals(RESPONSE_RESULT_WITHOUT_APIKEY);
    });

    it('should be call without header', function () {
      const response = AxiosSingleton['cleanResponseLog'](
        RESPONSE_WITHOUT_HEADERS_AND_REQUEST,
      );

      expect(response).to.deep.equals(RESPONSE_WITHOUT_HEADERS_AND_REQUEST);
    });
  });
});
