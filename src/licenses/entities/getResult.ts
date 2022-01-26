import { LicenseGetData } from './getLicense/licenseGetResult';
import { AbstractEntity } from '../../abstractEntity';

/**
 * For future get endpoint, create type like LicenseGet
 * and add this type to TypesGet type
 */
export type LicenseGet = {
  license: LicenseGetData;
};

type TypesGet = LicenseGet;

export type GetData<TypesGet> = {
  status: number;
  data: TypesGet;
};

export class GetResult extends AbstractEntity<GetData<TypesGet>> {
  readonly #status: number;
  readonly #data: TypesGet;

  public constructor(data: GetData<TypesGet>) {
    super(data);

    this.#status = data.status;
    this.#data = data.data;
  }

  public get status(): number {
    return this.#status;
  }

  public get data(): TypesGet {
    return this.#data;
  }

  public toJSON(): GetData<TypesGet> {
    return {
      status: this.status,
      data: this.data,
    };
  }
}
