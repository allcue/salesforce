import { ClientInitParams, DefaultClientConfig } from 'src/types/client.types';
import { OAuth2 } from 'src/oauth2';

const defaultClientConfig: DefaultClientConfig = {
  loginUrl: 'https://login.salesforce.com',
  instanceUrl: '',
  redirectUri: '',
};

export class SalesforceClient {
  instanceUrl: string;
  loginUrl: string;
  clientId: string;
  redirectUri: string;
  oauth2: OAuth2;

  constructor(config: ClientInitParams) {
    const { instanceUrl, loginUrl, clientId, redirectUri } = config;

    this.instanceUrl = instanceUrl ?? defaultClientConfig.instanceUrl;
    this.loginUrl = loginUrl ?? defaultClientConfig.loginUrl;
    this.redirectUri = redirectUri ?? defaultClientConfig.redirectUri;
    this.clientId = clientId;

    this.oauth2 = new OAuth2({
      loginUrl: this.loginUrl,
      redirectUri: this.redirectUri,
      clientId: this.clientId,
    });
  }

  async authorize(
    code: string,
    callbackParams: Record<string, string> = {},
  ): Promise<any> {}
}
