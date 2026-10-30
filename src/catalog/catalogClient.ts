import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { Program } from './entities/program';
import { Programs } from './entities/programs';
import { CheckEligibilityItems } from './entities/checkEligibilityItems';
import { CheckEligibilityPayload } from './types/checkEligibility';

export class CatalogClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/catalog';

  public async listPrograms(
    category: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Programs>> {
    this.path = `/categories/${category}/programs`;

    return new GetResult(Programs, await this.get(parameters));
  }

  public async getProgram(
    category: string,
    program: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Program>> {
    this.path = `/categories/${category}/programs/${program}`;

    return new GetResult(Program, await this.get(parameters));
  }

  /**
   * Checks the Microsoft growth margin eligibility of quote items for an end customer, and resolves their prices
   */
  public async checkEligibility(
    payload: CheckEligibilityPayload,
    parameters: Parameters = {},
  ): Promise<GetResult<CheckEligibilityItems>> {
    this.path = '/check-eligibility';

    return new GetResult(
      CheckEligibilityItems,
      await this.post(payload, parameters),
    );
  }
}
