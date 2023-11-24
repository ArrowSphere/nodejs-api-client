import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { OrganizationUnit } from './entities/organizationUnit';
import { OrganizationUnitList } from './entities/organizationUnitList';

export type OrganisationUnitPayloadType = {
  name: string;
};

export class OrganizationUnitClient extends AbstractRestfulClient {
  protected basePath = '/partners/organisationUnits';

  public async listOU(
    perPage = 25,
    page = 1,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnitList>> {
    this.setPage(page);
    this.setPerPage(perPage);

    return new GetResult(OrganizationUnitList, await this.get(parameters));
  }

  public async createOU(
    payload: OrganisationUnitPayloadType,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    return new GetResult(
      OrganizationUnit,
      await this.post(payload, parameters),
    );
  }

  public async getOU(
    organisationUnitRef: string,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    this.path = `/${organisationUnitRef}`;

    return new GetResult(OrganizationUnit, await this.get(parameters));
  }

  public async updateOU(
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

  public async deleteOU(
    organisationUnitReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${organisationUnitReference}`;

    return this.delete(parameters);
  }
}
