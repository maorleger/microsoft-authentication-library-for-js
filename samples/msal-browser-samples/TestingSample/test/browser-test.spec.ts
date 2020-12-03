import "expect-puppeteer";
import * as msal from "@azure/msal-node";

// Credentials
const username = "thomastest@thomastestidentity.onmicrosoft.com"; // Add your username here
const password = "Sq3c1FzZIqi5"; // Add your password here

const config = {
  auth: {
    clientId: "02cc3091-3da3-41cb-b0d3-ba83939506d4", // Add your clientId here
    authority: "https://login.microsoftonline.com/d3b5b4a3-1532-4d7f-a3a2-72c272fe1ced/" // Add your tenanted authority here
  } 
};

function writeTokensToCache(storageLocation, tokensToCache) {

}

function flattenTokenCache(tokenCache) {
    
}

// Defining the timeout for the test
const timeout = 8000;

// Go to the specified path and wait for the domcontent to load before running the tests
beforeAll(async () => {
  const pca = new msal.PublicClientApplication(config);

  const usernamePasswordRequest = {
      scopes: ["user.read"],
      username: username,
      password: password
  };

  await pca.acquireTokenByUsernamePassword(usernamePasswordRequest);
  const tokenCache = JSON.parse(pca.getTokenCache().serialize());
  const cacheItems = flattenTokenCache(tokenCache);

  await page.goto('http://localhost:30662');
});

describe('Title of the page', () => {
  test('Title of the page', async () => {
    // Gets page title
    const title = await page.title();
    // Compares it with the intended behaviour
    expect(title).toBe('Quickstart | MSAL.JS Vanilla JavaScript SPA');
  }, timeout);


});