import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { ConsumptionBI } from './entities/bi/consumptionBI';
import { GetResult } from '../getResult';
import { Consumption } from './entities/consumption/consumption';

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
}
