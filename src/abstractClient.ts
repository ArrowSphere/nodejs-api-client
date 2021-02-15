import axios, { AxiosInstance, AxiosResponse } from 'axios'
import NotFoundException from './exceptions/notFoundException'
import PublicApiClientException from './exceptions/publicApiClientException'
import { URLSearchParams } from 'url'

enum ParameterKeys {
  API_KEY = 'apiKey',
  PAGE = 'page',
  PER_PAGE = 'per_page',
}

type Parameters = Record<string, string | undefined>

export default abstract class AbstractClient {
  /**
   * Base path for HTTP calls
   * @protected {string}
   */
  protected basePath = ''

  /**
   * Current path for HTTP calls
   * @protected {string}
   */
  protected path = ''

  /**
   * Axios instance for client
   * @protected {AxiosInstance}
   */
  protected client: AxiosInstance

  /**
   * ArrowSphere API URL
   * @protected {url}
   */
  protected url = ''

  /**
   * ArrowSphere API key
   * @protected {string}
   */
  protected apiKey = ''

  /**
   * Current pagination page number
   * @protected {number}
   */
  protected page = 1

  /**
   * Pagination's per page result limit
   * @protected {number}
   */
  protected perPage = 1

  /**
   * AbstractClient constructor.
   * @param {AxiosInstance|null} client Pre-existing Axios instance that will be used for calls
   * @returns AbstractClient
   */
  protected constructor(client: AxiosInstance | null = null) {
    this.client = client ?? axios.create()
  }

  /**
   * Sets the Client ArrowSphere API key
   * @param {string} key ArrowSphere API key
   * @returns this
   */
  public setApiKey(key: string): this {
    this.apiKey = key

    return this
  }

  /**
   * Sets the client ArrowSphere API url
   * @param {string} url API url
   * @return this
   */
  public setUrl(url: string): this {
    this.url = url

    return this
  }

  /**
   * Returns the API url.
   * @return {string}
   */
  public getUrl(): string {
    return this.url
  }

  /**
   * Sets number of results per page
   * @param {number} perPage
   * @return this
   */
  public setPerPage(perPage: number): this {
    this.perPage = perPage

    return this
  }

  /**
   * Sets the page number
   * @param {number} page
   * @return AbstractClient
   */
  public setPage(page: number): this {
    this.page = page

    return this
  }

  /**
   * Sends a GET request and returns the response
   * @param {Parameters} parameters
   * @param {Array} headers
   * @return string
   * @throws AxiosError
   * @throws NotFoundException
   * @throws PublicApiClientException
   */
  protected async get(
    parameters: Parameters = {},
    headers: Record<string, string> = {},
  ): Promise<AxiosResponse['data']> {
    const response = await this.client.get(this.generateUrl(parameters), {
      headers: this.prepareHeaders(headers),
    })

    return this.getResponse(response)
  }

  /**
   * Processes and returns the Axios response data
   * @param {AxiosResponse} response
   * @return StreamInterface
   * @throws NotFoundException
   * @throws PublicApiClientException
   */
  private getResponse(response: AxiosResponse): AxiosResponse['data'] {
    const statusCode = response.status
    if (statusCode === 404) {
      throw new NotFoundException(`Resource not found on URL ${this.getUrl()}`)
    }

    if (statusCode >= 400 && statusCode <= 599) {
      throw new PublicApiClientException(
        `Error: status code: ${statusCode}. URL: ${this.getUrl()}`,
      )
    }

    return response.data
  }

  /**
   * Prepare headers before sending
   * @param {Record<string, string>} headers
   * @return Record<string, string>
   */
  private prepareHeaders(
    headers: Record<string, string>,
  ): Record<string, string> {
    return { ...headers, [ParameterKeys.API_KEY]: this.apiKey }
  }

  /**
   * Sends a POST request and returns the response
   *
   *
   * @return AxiosResponse
   *
   * @throws AxiosResponse
   * @throws NotFoundException
   * @throws PublicApiClientException
   * @param {Record<string, unknown>} payload
   * @param {Parameters} parameters
   * @param {Record<string, string>} headers
   */
  protected async post(
    payload: Record<string, unknown> = {},
    parameters: Parameters = {},
    headers: Record<string, string> = {},
  ): Promise<AxiosResponse> {
    const response = await this.client.post(
      this.generateUrl(parameters),
      payload,
      {
        headers: this.prepareHeaders(headers),
      },
    )

    return this.getResponse(response)
  }

  /**
   * Generates the full url for request
   * @param {Record<string, string>} parameters
   * @return string
   */
  protected generateUrl(parameters: Parameters = {}): string {
    const params = { ...parameters, ...this.generatePagination() }

    let paramsStr = ''
    if (Object.values(params).length) {
      const query = new URLSearchParams(params)
      paramsStr = '?' + query
    }

    return this.url + this.basePath + this.path + paramsStr
  }

  /**
   * Generates the pagination part of the url
   * @return {Record<string, string>}
   */
  private generatePagination(): Parameters {
    if (this.page === 1 && !this.perPage) {
      return {}
    }

    const params: { [key in ParameterKeys]?: string } = {}

    if (this.page > 1) {
      params[ParameterKeys.PAGE] = `${this.page}`
    }

    if (this.perPage > 0) {
      params[ParameterKeys.PER_PAGE] = `${this.perPage}`
    }

    return params
  }
}
