import { expect } from 'chai';
import {
  Attributes,
  AttributesData,
  AttributesDataFiltersParameters,
  AttributesDataKeywords,
  AttributesDataSortParameters,
  AttributesFields,
  LicenseFindParameters,
} from '../../../src';

const KEYWORD_VALUE: AttributesDataKeywords[typeof AttributesFields.COLUMN_NAME] = {
  [LicenseFindParameters.KEYWORDS_OPERATOR]: LicenseFindParameters.OPERATOR_AND,
  [LicenseFindParameters.KEYWORDS_VALUES]: ['color'],
};

describe('Attributes', () => {
  describe('AttributesFields enum', () => {
    it('has COLUMN_NAME equal to "name"', () => {
      expect(AttributesFields.COLUMN_NAME).to.equal('name');
    });

    it('has COLUMN_VALUE equal to "value"', () => {
      expect(AttributesFields.COLUMN_VALUE).to.equal('value');
    });
  });

  describe('with name and value', () => {
    const data: AttributesData = {
      [AttributesFields.COLUMN_NAME]: 'color',
      [AttributesFields.COLUMN_VALUE]: 'blue',
    };
    const result = new Attributes(data);

    it('exposes name', () => {
      expect(result.name).to.equal('color');
    });

    it('exposes value', () => {
      expect(result.value).to.equal('blue');
    });

    it('round-trips through toJSON', () => {
      expect(result.toJSON()).to.eql(data);
    });
  });

  describe('with null value', () => {
    const data: AttributesData = {
      [AttributesFields.COLUMN_NAME]: 'color',
      [AttributesFields.COLUMN_VALUE]: null,
    };
    const result = new Attributes(data);

    it('exposes null value', () => {
      expect(result.value).to.be.null;
    });

    it('round-trips through toJSON', () => {
      expect(result.toJSON()).to.eql(data);
    });
  });

  describe('with undefined value', () => {
    const data: AttributesData = {
      [AttributesFields.COLUMN_NAME]: 'color',
    };
    const result = new Attributes(data);

    it('exposes undefined value', () => {
      expect(result.value).to.be.undefined;
    });

    it('round-trips through toJSON', () => {
      expect(result.toJSON()[AttributesFields.COLUMN_NAME]).to.equal('color');
      expect(result.toJSON()[AttributesFields.COLUMN_VALUE]).to.be.undefined;
    });
  });

  describe('AttributesDataKeywords type', () => {
    it('accepts keywords for name and value fields', () => {
      const keywords: AttributesDataKeywords = {
        [AttributesFields.COLUMN_NAME]: KEYWORD_VALUE,
        [AttributesFields.COLUMN_VALUE]: KEYWORD_VALUE,
      };
      expect(keywords[AttributesFields.COLUMN_NAME]).to.eql(KEYWORD_VALUE);
      expect(keywords[AttributesFields.COLUMN_VALUE]).to.eql(KEYWORD_VALUE);
    });

    it('accepts partial keywords', () => {
      const keywords: AttributesDataKeywords = {
        [AttributesFields.COLUMN_NAME]: KEYWORD_VALUE,
      };
      expect(keywords[AttributesFields.COLUMN_NAME]).to.eql(KEYWORD_VALUE);
      expect(keywords[AttributesFields.COLUMN_VALUE]).to.be.undefined;
    });

    it('accepts empty keywords', () => {
      const keywords: AttributesDataKeywords = {};
      expect(keywords[AttributesFields.COLUMN_NAME]).to.be.undefined;
      expect(keywords[AttributesFields.COLUMN_VALUE]).to.be.undefined;
    });
  });

  describe('AttributesDataSortParameters type', () => {
    it('accepts sort parameters for name and value fields', () => {
      const sort: AttributesDataSortParameters = {
        [AttributesFields.COLUMN_NAME]: LicenseFindParameters.SORT_ASCENDING,
        [AttributesFields.COLUMN_VALUE]: LicenseFindParameters.SORT_DESCENDING,
      };
      expect(sort[AttributesFields.COLUMN_NAME]).to.equal(
        LicenseFindParameters.SORT_ASCENDING,
      );
      expect(sort[AttributesFields.COLUMN_VALUE]).to.equal(
        LicenseFindParameters.SORT_DESCENDING,
      );
    });

    it('accepts partial sort parameters', () => {
      const sort: AttributesDataSortParameters = {
        [AttributesFields.COLUMN_NAME]: LicenseFindParameters.SORT_ASCENDING,
      };
      expect(sort[AttributesFields.COLUMN_NAME]).to.equal(
        LicenseFindParameters.SORT_ASCENDING,
      );
      expect(sort[AttributesFields.COLUMN_VALUE]).to.be.undefined;
    });

    it('accepts empty sort parameters', () => {
      const sort: AttributesDataSortParameters = {};
      expect(sort[AttributesFields.COLUMN_NAME]).to.be.undefined;
      expect(sort[AttributesFields.COLUMN_VALUE]).to.be.undefined;
    });
  });

  describe('AttributesDataFiltersParameters type', () => {
    it('accepts filter parameters for name and value fields', () => {
      const filters: AttributesDataFiltersParameters = {
        [AttributesFields.COLUMN_NAME]: ['color', 'size'],
        [AttributesFields.COLUMN_VALUE]: ['blue', 'red'],
      };
      expect(filters[AttributesFields.COLUMN_NAME]).to.eql(['color', 'size']);
      expect(filters[AttributesFields.COLUMN_VALUE]).to.eql(['blue', 'red']);
    });

    it('accepts partial filter parameters', () => {
      const filters: AttributesDataFiltersParameters = {
        [AttributesFields.COLUMN_NAME]: ['color'],
      };
      expect(filters[AttributesFields.COLUMN_NAME]).to.eql(['color']);
      expect(filters[AttributesFields.COLUMN_VALUE]).to.be.undefined;
    });

    it('accepts empty filter parameters', () => {
      const filters: AttributesDataFiltersParameters = {};
      expect(filters[AttributesFields.COLUMN_NAME]).to.be.undefined;
      expect(filters[AttributesFields.COLUMN_VALUE]).to.be.undefined;
    });
  });
});
