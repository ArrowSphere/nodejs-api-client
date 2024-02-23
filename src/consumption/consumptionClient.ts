import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { ConsumptionBI } from './entities/bi/consumptionBI';
import { GetResult } from '../getResult';
import { Consumption } from './entities/consumption/consumption';
import { ConsumptionDownloadRequest } from './entities/consumption/consumptionDownloadRequest';
import {
  ConsumptionBudget,
  ConsumptionBudgetType,
} from './entities/consumption/consumptionBudget';

export type ConsumptionDownloadRequestPayload = {
  customer: string;
  licenseRef: string;
  dateStart: string;
  dateEnd: string;
  columns: Array<string>;
  callbackURL: string;
};

export class ConsumptionClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/consumption';

  public async getMonthlyConsumption(
    licenseReference: string,
    parameters: Parameters,
  ): Promise<GetResult<Consumption>> {
    this.path = `/monthly/license/${licenseReference}`;

    return new GetResult(Consumption, await this.get(parameters));
  }

  public async getDailyConsumption(
    licenseReference: string,
    parameters: Parameters,
  ): Promise<GetResult<Consumption>> {
    this.path = `/daily/license/${licenseReference}`;

    return new GetResult(Consumption, await this.get(parameters));
  }

  public async getBIConsumption(
    parameters: Parameters,
  ): Promise<GetResult<ConsumptionBI>> {
    this.path = '/bi/top/monthly';

    return new GetResult(ConsumptionBI, await this.get(parameters));
  }

  public async consumptionDownloadRequest(
    payload: ConsumptionDownloadRequestPayload,
  ): Promise<ConsumptionDownloadRequest> {
    this.path = '/v2/downloadRequest';

    return new ConsumptionDownloadRequest(await this.post(payload));
  }

  public async updateBudgetSettings(
    licenseReference: string,
    payload: ConsumptionBudgetType,
    parameters: Parameters = {},
  ): Promise<GetResult<ConsumptionBudget>> {
    this.path = `/license/${licenseReference}/budget`;

    return new GetResult(
      ConsumptionBudget,
      await this.patch(payload, parameters),
    );
  }

  public async getBudgetSettings(
    licenseReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<ConsumptionBudget>> {
    this.path = `/license/${licenseReference}/budget`;

    return new GetResult(ConsumptionBudget, await this.get(parameters));
  }
}
