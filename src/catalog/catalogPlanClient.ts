import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import {
  CreateCatalogPlanPayload,
  CreateCatalogPlanResponse,
  GetCatalogPlanResponse,
  ListCatalogPlansResponse,
  UpdateCatalogPlanPayload,
} from './types/catalogPlan';

export class CatalogPlanClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/catalog/plans';

  /**
   * Lists the catalog plans of the logged-in reseller
   */
  public async listCatalogPlans(
    parameters: Parameters = {},
  ): Promise<ListCatalogPlansResponse> {
    this.path = '';

    return this.get(parameters, {}, { returnAxiosData: true });
  }

  /**
   * Gets a single catalog plan by name
   */
  public async getCatalogPlan(
    planName: string,
    parameters: Parameters = {},
  ): Promise<GetCatalogPlanResponse> {
    this.path = this.planPath(planName);

    return this.get(parameters, {}, { returnAxiosData: true });
  }

  /**
   * Creates a new catalog plan
   */
  public async createCatalogPlan(
    payload: CreateCatalogPlanPayload,
    parameters: Parameters = {},
  ): Promise<CreateCatalogPlanResponse> {
    this.path = '';

    return this.post(payload, parameters, {}, { returnAxiosData: true });
  }

  /**
   * Partially updates a catalog plan (name, customersRef and/or programs)
   */
  public async updateCatalogPlan(
    planName: string,
    payload: UpdateCatalogPlanPayload,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = this.planPath(planName);

    return this.patch(payload, parameters, {}, { returnAxiosData: true });
  }

  /**
   * Deletes a catalog plan
   */
  public async deleteCatalogPlan(
    planName: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = this.planPath(planName);

    return this.delete(parameters);
  }

  /**
   * Plan names may contain spaces, so they must be encoded in the URL path
   */
  private planPath(planName: string): string {
    return `/${encodeURIComponent(planName)}`;
  }
}
