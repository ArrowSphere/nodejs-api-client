import { LicenseGetData } from './getLicense/licenseGetResult';
import { AbstractEntity } from '../../abstractEntity';

export enum GetResultFields {
  COLUMN_STATUS = 'status',
  COLUMN_DATA = 'data',
}
/**
 * @deprecated please use GetLicenseResultData for license
 */
export type LicenseGet = {
  license: LicenseGetData;
};

export type GetData<Entity> = {
  [GetResultFields.COLUMN_STATUS]: number;
  [GetResultFields.COLUMN_DATA]: Entity;
};

/**
 * This interface is use toJSON function in objects (data properties) you want to use
 */
interface AbstractEntityGet<Entity extends AbstractEntityGet<Entity>>
  extends AbstractEntity<Entity['entityDataInput']> {
  toJSON: () => Entity['entityDataInput'];
}

/**
 * WARNING: use this class only when the Entity in data properties is an object not an array or other type
 * Use this class for get call when the response of API is a type of GetData<Entity>
 */
export class GetResult<
  Entity extends AbstractEntityGet<Entity>
> extends AbstractEntity<GetData<Entity['entityDataInput']>> {
  readonly #status: number;
  readonly #data: Entity;

  public constructor(
    cls: new (data: Entity['entityDataInput']) => Entity,
    getResultDataInput: GetData<Entity['entityDataInput']>,
  ) {
    super(getResultDataInput);

    this.#status = getResultDataInput.status;
    this.#data = new cls(getResultDataInput.data);
  }

  public get status(): number {
    return this.#status;
  }

  public get data(): Entity {
    return this.#data;
  }

  public toJSON(): GetData<Entity['entityDataInput']> {
    return JSON.parse(
      JSON.stringify({
        [GetResultFields.COLUMN_STATUS]: this.status,
        [GetResultFields.COLUMN_DATA]: this.data.toJSON(),
      }),
    );
  }
}
