export default class NotFoundException extends Error {
  constructor(message: string) {
    super(message)
  }
}
