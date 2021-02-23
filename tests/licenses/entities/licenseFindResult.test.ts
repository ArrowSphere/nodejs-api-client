import { expect } from 'chai'
import { LicenseFindResult } from '../../../src/licenses'
import { LicenseFindResultFields } from '../../../src/licenses/entities/licenseFindResult'
import { MOCK_LICENSE_DATA } from '../licensesClient.test'

describe('LicenseFindResult', () => {
  describe('constructor', () => {
    it('sets a default value for the highlight column', () => {
      const result = new LicenseFindResult({
        ...MOCK_LICENSE_DATA,
        [LicenseFindResultFields.COLUMN_HIGHLIGHT]: undefined,
      })
      expect(result.getHighlight()).to.eqls({})
    })
  })
})
