// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'q6bxh8rao3'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-inphhnug.us.auth0.com',            // Auth0 domain
  clientId: 'J7jJSlCb26Bey5nU4dIoTAIJHK8Z5dRd',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
