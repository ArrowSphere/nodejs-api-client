import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { OrganizationUnit } from './entities/organizationUnit';
import { OrganizationUnitList } from './entities/organizationUnitList';

export enum OrganisationUnitPayloadFields {
  COLUMN_NAME = 'name',
}

export type OrganisationUnitPayloadType = {
  [OrganisationUnitPayloadFields.COLUMN_NAME]: string;
};

export class OrganizationUnitClient extends AbstractRestfulClient {
  protected basePath = '/partners/organisationUnits';

  public async getList(
    perPage = 25,
    page = 1,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnitList>> {
    this.setPage(page);
    this.setPerPage(perPage);

    return new GetResult(OrganizationUnitList, await this.get(parameters));
  }

  public async create(
    payload: OrganisationUnitPayloadType,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    return new GetResult(
      OrganizationUnit,
      await this.post(payload, parameters),
    );
  }

  public async getOne(
    organisationUnitRef: string,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    this.path = `/${organisationUnitRef}`;

    return new GetResult(OrganizationUnit, await this.get(parameters));
  }

  public async update(
    organisationUnitRef: string,
    payload: OrganisationUnitPayloadType,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    this.path = `/${organisationUnitRef}`;

    return new GetResult(
      OrganizationUnit,
      await this.patch(payload, parameters),
    );
  }

  public async deleteOne(
    organisationUnitRef: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${organisationUnitRef}`;

    return await this.delete(parameters);
  }
}
