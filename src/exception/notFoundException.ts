export class NotFoundException extends Error {
  public httpCode: number;
  public httpError: string;
  public config?: Record<string, unknown>;

  constructor(
    message: string,
    httpError = '',
    httpCode = 0,
    config: Record<string, unknown> = {},
  ) {
    super(message);
    this.httpCode = httpCode;
    this.httpError = httpError;
    this.config = config;
  }
}
