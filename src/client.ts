import { ClientInitParams, DefaultClientConfig } from 'src/types/client.types';
import { OAuth } from 'src/OAuth';

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
  oauth: OAuth;

  constructor(config: ClientInitParams) {
    const { instanceUrl, loginUrl, clientId, redirectUri } = config;

    this.instanceUrl = instanceUrl ?? defaultClientConfig.instanceUrl;
    this.loginUrl = loginUrl ?? defaultClientConfig.loginUrl;
    this.redirectUri = redirectUri ?? defaultClientConfig.redirectUri;
    this.clientId = clientId;

    this.oauth = new OAuth({
      loginUrl: this.loginUrl,
      redirectUri: this.redirectUri,
      clientId: this.clientId,
    });
  }
}
