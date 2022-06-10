import { SalesforceClient } from 'src/client';

async function main() {
  const salesforceClient = new SalesforceClient({
    instanceUrl: 'foo.com',
    clientId: 'clientId',
    redirectUri: 'allcue.app',
  });

  console.log(salesforceClient.oauth.getAuthorizationCodeUrl());
  await salesforceClient.oauth.getAccessToken('code');
}

void main();
