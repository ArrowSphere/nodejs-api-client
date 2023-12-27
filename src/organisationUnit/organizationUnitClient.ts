import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { OrganizationUnit } from './entities/organizationUnit';
import { OrganizationUnitList } from './entities/organizationUnitList';

export enum OrganizationUnitPayloadFields {
  COLUMN_NAME = 'name',
}

export type OrganizationUnitPayloadType = {
  [OrganizationUnitPayloadFields.COLUMN_NAME]: string;
};

export enum OrganizationUnitClientActionFields {
  ACTION_ATTACH = 'attach',
  ACTION_DETACH = 'detach',
}

export type OrganizationUnitClientActionType = {
  licenses: string[];
  users: string[];
};

export class OrganizationUnitClient extends AbstractRestfulClient {
  protected basePath = '/partners/organizationUnits';

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
    payload: OrganizationUnitPayloadType,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    return new GetResult(
      OrganizationUnit,
      await this.post(payload, parameters),
    );
  }

  public async getOne(
    organizationUnitRef: string,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    this.path = `/${organizationUnitRef}`;

    return new GetResult(OrganizationUnit, await this.get(parameters));
  }

  public async update(
    organizationUnitRef: string,
    payload: OrganizationUnitPayloadType,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    this.path = `/${organizationUnitRef}`;

    return new GetResult(
      OrganizationUnit,
      await this.patch(payload, parameters),
    );
  }

  public async deleteOne(
    organizationUnitRef: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${organizationUnitRef}`;

    return await this.delete(parameters);
  }

  public async batchUpdate(
    action: OrganizationUnitClientActionFields,
    organizationUnitId: number,
    payload: OrganizationUnitClientActionType,
    parameters: Parameters = {},
  ): Promise<void> {
    this.basePath = '/organizationUnit';
    this.path = `/${action}/${organizationUnitId}`;

    return await this.patch(payload, parameters);
  }
}
