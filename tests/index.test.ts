import { expect } from 'chai'
import { PublicApiClient } from '../src'

describe('index', () => {
  describe('PublicApiClient', () => {
    it('constructor should be callable', () => {
      expect(new PublicApiClient()).to.exist
    })
  })
})
