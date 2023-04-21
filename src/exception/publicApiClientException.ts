export class PublicApiClientException extends Error {
  public httpCode: number;
  public httpError: string;
  public config: any;

  constructor(message: string, httpError = '', httpCode = 0, config = {}) {
    super(message);
    this.httpCode = httpCode;
    this.httpError = httpError;
    this.config = config;
  }
}
