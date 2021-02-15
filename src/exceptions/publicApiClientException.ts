export default class PublicApiClientException extends Error {
  constructor(message: string) {
    super(message)
  }
}
