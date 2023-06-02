import { AbstractEntity } from '../../../../abstractEntity';
import { SecurityResources, SecurityResourcesType } from './securityResources';

export enum ResourcesFields {
  COLUMN_HEADERS = 'headers',
  COLUMN_RESOURCES = 'resources',
}

export type ResourcesType = {
  [ResourcesFields.COLUMN_HEADERS]: Array<string>;
  [ResourcesFields.COLUMN_RESOURCES]: Array<SecurityResourcesType>;
};

export class Resources extends AbstractEntity<ResourcesType> {
  readonly #headers: Array<string>;
  readonly #resources: Array<SecurityResources>;

  public constructor(resources: ResourcesType) {
    super(resources);

    this.#headers = resources[ResourcesFields.COLUMN_HEADERS];
    this.#resources = resources[ResourcesFields.COLUMN_RESOURCES].map(
      (securityResources: SecurityResourcesType) =>
        new SecurityResources(securityResources),
    );
  }

  get resources(): Array<SecurityResources> {
    return this.#resources;
  }

  get headers(): Array<string> {
    return this.#headers;
  }

  public toJSON(): ResourcesType {
    return {
      [ResourcesFields.COLUMN_HEADERS]: this.headers,
      [ResourcesFields.COLUMN_RESOURCES]: this.resources.map(
        (securityResources: SecurityResources) => securityResources.toJSON(),
      ),
    };
  }
}
