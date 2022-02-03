import { LicenseGetData } from './licenses';
import { AbstractEntity } from './abstractEntity';
import { Pagination, PaginationData } from './pagination';

export enum GetResultFields {
  COLUMN_STATUS = 'status',
  COLUMN_DATA = 'data',
  COLUMN_PAGINATION = 'pagination',
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
  [GetResultFields.COLUMN_PAGINATION]?: PaginationData;
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
  readonly #pagination?: Pagination;

  public constructor(
    cls: new (data: Entity['entityDataInput']) => Entity,
    getResultDataInput: GetData<Entity['entityDataInput']>,
  ) {
    super(getResultDataInput);

    this.#status = getResultDataInput[GetResultFields.COLUMN_STATUS];
    this.#data = new cls(getResultDataInput[GetResultFields.COLUMN_DATA]);
    this.#pagination = getResultDataInput[GetResultFields.COLUMN_PAGINATION]
      ? new Pagination(
          getResultDataInput[
            GetResultFields.COLUMN_PAGINATION
          ] as PaginationData,
        )
      : undefined;
  }

  public get status(): number {
    return this.#status;
  }

  public get data(): Entity {
    return this.#data;
  }

  get pagination(): Pagination | undefined {
    return this.#pagination;
  }

  public toJSON(): GetData<Entity['entityDataInput']> {
    return JSON.parse(
      JSON.stringify({
        [GetResultFields.COLUMN_STATUS]: this.status,
        [GetResultFields.COLUMN_DATA]: this.data.toJSON(),
        [GetResultFields.COLUMN_PAGINATION]: this.pagination?.toJSON(),
      }),
    );
  }
}
