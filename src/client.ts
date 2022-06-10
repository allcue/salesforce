import { ClientInitParams, DefaultClientConfig } from 'src/types/client.types';
import { OAuth } from 'src/OAuth';
import { ITransport } from 'src/types/transport.types';
import { Transport } from 'src/transport';

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

  private readonly transport: ITransport;

  constructor(config: ClientInitParams) {
    const { instanceUrl, loginUrl, clientId, redirectUri } = config;

    this.instanceUrl = instanceUrl ?? defaultClientConfig.instanceUrl;
    this.loginUrl = loginUrl ?? defaultClientConfig.loginUrl;
    this.redirectUri = redirectUri ?? defaultClientConfig.redirectUri;
    this.clientId = clientId;

    this.transport = new Transport();

    this.oauth = new OAuth({
      loginUrl: this.loginUrl,
      redirectUri: this.redirectUri,
      clientId: this.clientId,
      transport: this.transport,
    });
  }
}
