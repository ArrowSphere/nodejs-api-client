// Test tools
import Validator from 'validatorjs'
import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'

// Sources
import { TestData, TestEntity } from './TestEntity'
import { EntityValidationException } from '../src/exception'

chai.use(sinonChai)

describe('AbstractEntity', () => {
  describe('constructor', () => {
    it('validates the data passed as parameters', () => {
      const data: TestData = {
        sampleField: 'sampleValue',
      }

      const spy = sinon.stub(TestEntity.prototype, 'validate')
      new TestEntity(data)
      expect(spy).to.have.been.called
      spy.restore()
    })
  })

  describe('validate', () => {
    it('validates if the flag is set to true', () => {
      const data: TestData = {
        sampleField: 'sampleValue',
      }
      const spy = sinon.stub(Validator.prototype, 'passes').returns(true)
      const entity = new TestEntity(data, true)
      entity.validate(data)
      expect(spy).to.have.been.called
      spy.restore()
    })

    it('throws a EntityValidationException if the validation fails', () => {
      const data: TestData = {
        sampleField: 12,
      }

      const entity = new TestEntity(data, true)
      try {
        entity.validate(data)
      } catch (error) {
        expect(error).to.be.instanceOf(EntityValidationException)
      }
    })
  })
})
