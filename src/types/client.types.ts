export type ClientInitParams = {
  instanceUrl?: string;
  loginUrl?: string;
  redirectUri?: string;
  clientId: string;
};

export type DefaultClientConfig = {
  instanceUrl: string;
  loginUrl: string;
  redirectUri: string;
};
