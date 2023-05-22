import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { Program } from './entities/program';
import { Programs } from './entities/programs';

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
}
