import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import {
  AttachScopesPayload,
  AttachScopesResponse,
  CreateBusinessRulesPayload,
  CreateBusinessRulesResponse,
  CreatePricingPlanPayload,
  CreatePricingPlanResponse,
  DetachScopesPayload,
  GetBusinessRulesHistoryParameters,
  GetBusinessRulesHistoryResponse,
  GetBusinessRulesParameters,
  GetBusinessRulesResponse,
  GetClientsHistoryParameters,
  GetClientsHistoryResponse,
  GetPricingPlanResponse,
  GetScopesParameters,
  GetScopesResponse,
  ListPricingPlansParameters,
  ListPricingPlansResponse,
  PricingPlanScopeType,
  UpdatePricingPlanPayload,
} from './types/pricingPlan';

export class PricingPlanClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/billing/pricing-plans';

  /**
   * Lists pricing plans with optional filters
   */
  public async listPricingPlans(
    params?: ListPricingPlansParameters,
  ): Promise<ListPricingPlansResponse> {
    this.path = '';

    return this.get(params as Parameters, {}, { returnAxiosData: true });
  }

  /**
   * Gets a single pricing plan by reference
   */
  public async getPricingPlan(
    reference: string,
  ): Promise<GetPricingPlanResponse> {
    this.path = `/${reference}`;

    return this.get({}, {}, { returnAxiosData: true });
  }

  /**
   * Creates a new pricing plan
   */
  public async createPricingPlan(
    payload: CreatePricingPlanPayload,
  ): Promise<CreatePricingPlanResponse> {
    this.path = '';

    return this.post(payload, {}, {}, { returnAxiosData: true });
  }

  /**
   * Updates a pricing plan (rename)
   */
  public async updatePricingPlan(
    reference: string,
    payload: UpdatePricingPlanPayload,
  ): Promise<void> {
    this.path = `/${reference}`;

    return this.patch(payload, {}, {}, { returnAxiosData: true });
  }

  /**
   * Deletes a pricing plan
   */
  public async deletePricingPlan(reference: string): Promise<void> {
    this.path = `/${reference}`;

    return this.delete();
  }

  /**
   * Gets business rules for a pricing plan
   */
  public async getBusinessRules(
    reference: string,
    params?: GetBusinessRulesParameters,
  ): Promise<GetBusinessRulesResponse> {
    this.path = `/${reference}/business-rules`;

    return this.get(params as Parameters, {}, { returnAxiosData: true });
  }

  /**
   * Creates or updates business rules for a pricing plan
   */
  public async createBusinessRules(
    reference: string,
    payload: CreateBusinessRulesPayload,
  ): Promise<CreateBusinessRulesResponse> {
    this.path = `/${reference}/business-rules`;

    return this.post(payload, {}, {}, { returnAxiosData: true });
  }

  /**
   * Gets business rules history for a pricing plan
   */
  public async getBusinessRulesHistory(
    reference: string,
    params: GetBusinessRulesHistoryParameters,
  ): Promise<GetBusinessRulesHistoryResponse> {
    this.path = `/${reference}/business-rules/history`;

    return this.get(params as Parameters, {}, { returnAxiosData: true });
  }

  /**
   * Gets scopes (attached customers or resellers) for a pricing plan
   */
  public async getScopes(
    reference: string,
    type: PricingPlanScopeType,
    params?: GetScopesParameters,
  ): Promise<GetScopesResponse> {
    this.path = `/${reference}/scopes/${type}`;

    return this.get(params as Parameters, {}, { returnAxiosData: true });
  }

  /**
   * Attaches scopes (customers or resellers) to a pricing plan
   */
  public async attachScopes(
    reference: string,
    type: PricingPlanScopeType,
    payload: AttachScopesPayload,
  ): Promise<AttachScopesResponse> {
    this.path = `/${reference}/scopes/${type}`;

    return this.post(payload, {}, {}, { returnAxiosData: true });
  }

  /**
   * Detaches scopes (customers or resellers) from a pricing plan
   */
  public async detachScopes(
    reference: string,
    type: PricingPlanScopeType,
    payload: DetachScopesPayload,
  ): Promise<void> {
    this.path = `/${reference}/scopes/${type}`;

    return this.delete({}, {}, {}, payload);
  }

  /**
   * Gets clients (attach/detach) history for a pricing plan
   */
  public async getClientsHistory(
    reference: string,
    params?: GetClientsHistoryParameters,
  ): Promise<GetClientsHistoryResponse> {
    this.path = `/${reference}/history`;

    return this.get(params as Parameters, {}, { returnAxiosData: true });
  }
}
