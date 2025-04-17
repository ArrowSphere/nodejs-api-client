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
  protected basePath = '/organizationUnit';

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
    ouRef: string,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    this.path = `/ouRef/${ouRef}`;

    return new GetResult(OrganizationUnit, await this.get(parameters));
  }

  public async update(
    ouRef: string,
    payload: OrganizationUnitPayloadType,
    parameters: Parameters = {},
  ): Promise<GetResult<OrganizationUnit>> {
    this.path = `/ouRef/${ouRef}`;

    return new GetResult(
      OrganizationUnit,
      await this.patch(payload, parameters),
    );
  }

  public async deleteOne(
    ouRef: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/ouRef/${ouRef}`;

    return await this.delete(parameters);
  }

  public async batchUpdate(
    action: OrganizationUnitClientActionFields,
    organizationUnitRef: string,
    payload: OrganizationUnitClientActionType,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${action}/${organizationUnitRef}`;

    return await this.patch<void>(payload, parameters);
  }
}
