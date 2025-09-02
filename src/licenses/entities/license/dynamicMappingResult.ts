import { AbstractEntity } from '../../../abstractEntity';

export type DynamicAttributesMappingResultData = {
  [key: string]: string;
};

export class DynamicAttributesMappingResult extends AbstractEntity<DynamicAttributesMappingResultData> {
  public constructor(data: DynamicAttributesMappingResultData) {
    super(data);
  }

  public toJSON(): DynamicAttributesMappingResultData {
    return this.entityDataInput;
  }
}
