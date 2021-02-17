import { AbstractEntity } from '../src'

export type TestData = {
  sampleField: string | number
}

export class TestEntity extends AbstractEntity<TestData> {
  protected readonly VALIDATION_RULES = {
    sampleField: 'required|string',
  }

  constructor(data: TestData, validate?: boolean) {
    super(data)
    this.enableValidation = validate || false
  }
}
