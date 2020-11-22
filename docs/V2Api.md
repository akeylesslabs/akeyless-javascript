# akeyless.V2Api

All URIs are relative to *https://api.akeyless.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assocRoleAuthMethod**](V2Api.md#assocRoleAuthMethod) | **POST** /assoc-role-am | 
[**auth**](V2Api.md#auth) | **POST** /auth | 
[**configure**](V2Api.md#configure) | **POST** /configure | 
[**createAuthMethod**](V2Api.md#createAuthMethod) | **POST** /create-auth-method | 
[**createAuthMethodAWSIAM**](V2Api.md#createAuthMethodAWSIAM) | **POST** /create-auth-method-aws-iam | 
[**createAuthMethodAzureAD**](V2Api.md#createAuthMethodAzureAD) | **POST** /create-auth-method-azure-ad | 
[**createAuthMethodHuawei**](V2Api.md#createAuthMethodHuawei) | **POST** /create-auth-method-huawei | 
[**createAuthMethodOAuth2**](V2Api.md#createAuthMethodOAuth2) | **POST** /create-auth-method-oauth2 | 
[**createAuthMethodSAML**](V2Api.md#createAuthMethodSAML) | **POST** /create-auth-method-saml | 
[**createAuthMethodUniversalIdentity**](V2Api.md#createAuthMethodUniversalIdentity) | **POST** /create-auth-method-universal-identity | 
[**createDynamicSecret**](V2Api.md#createDynamicSecret) | **POST** /create-dynamic-secret | 
[**createKey**](V2Api.md#createKey) | **POST** /create-key | 
[**createPKICertIssuer**](V2Api.md#createPKICertIssuer) | **POST** /create-pki-cert-issuer | 
[**createRole**](V2Api.md#createRole) | **POST** /create-role | 
[**createSSHCertIssuer**](V2Api.md#createSSHCertIssuer) | **POST** /create-ssh-cert-issuer | 
[**createSecret**](V2Api.md#createSecret) | **POST** /create-secret | 
[**decrypt**](V2Api.md#decrypt) | **POST** /decrypt | 
[**decryptPKCS1**](V2Api.md#decryptPKCS1) | **POST** /decrypt-pkcs1 | 
[**deleteAuthMethod**](V2Api.md#deleteAuthMethod) | **POST** /delete-auth-method | 
[**deleteAuthMethods**](V2Api.md#deleteAuthMethods) | **POST** /delete-auth-methods | 
[**deleteItem**](V2Api.md#deleteItem) | **POST** /delete-item | 
[**deleteItems**](V2Api.md#deleteItems) | **POST** /delete-items | 
[**deleteRole**](V2Api.md#deleteRole) | **POST** /delete-role | 
[**deleteRoleAssociation**](V2Api.md#deleteRoleAssociation) | **POST** /delete-assoc | 
[**deleteRoleRule**](V2Api.md#deleteRoleRule) | **POST** /delete-role-rule | 
[**deleteRoles**](V2Api.md#deleteRoles) | **POST** /delete-roles | 
[**describeItem**](V2Api.md#describeItem) | **POST** /describe-item | 
[**encrypt**](V2Api.md#encrypt) | **POST** /encrypt | 
[**encryptPKCS1**](V2Api.md#encryptPKCS1) | **POST** /encrypt-pkcs1 | 
[**getAuthMethod**](V2Api.md#getAuthMethod) | **POST** /get-auth-method | 
[**getDynamicSecretValue**](V2Api.md#getDynamicSecretValue) | **POST** /get-dynamic-secret-value | 
[**getRSAPublic**](V2Api.md#getRSAPublic) | **POST** /get-rsa-public | 
[**getRole**](V2Api.md#getRole) | **POST** /get-role | 
[**getSSHCertificate**](V2Api.md#getSSHCertificate) | **POST** /get-ssh-certificate | 
[**getSecretValue**](V2Api.md#getSecretValue) | **POST** /get-secret-value | 
[**listAuthMethods**](V2Api.md#listAuthMethods) | **POST** /list-auth-methods | 
[**listItems**](V2Api.md#listItems) | **POST** /list-items | 
[**listRoles**](V2Api.md#listRoles) | **POST** /list-roles | 
[**moveObjects**](V2Api.md#moveObjects) | **POST** /move-objects | 
[**refreshKey**](V2Api.md#refreshKey) | **POST** /refresh-key | 
[**reverseRBAC**](V2Api.md#reverseRBAC) | **POST** /reverse-rbac | 
[**rollbackSecret**](V2Api.md#rollbackSecret) | **POST** /rollback-secret | 
[**rotateKey**](V2Api.md#rotateKey) | **POST** /rotate-key | 
[**setItemState**](V2Api.md#setItemState) | **POST** /set-item-state | 
[**setRoleRule**](V2Api.md#setRoleRule) | **POST** /set-role-rule | 
[**signPKCS1**](V2Api.md#signPKCS1) | **POST** /sign-pkcs1 | 
[**staticCredsAuth**](V2Api.md#staticCredsAuth) | **POST** /static-creds-auth | 
[**uidCreateChildToken**](V2Api.md#uidCreateChildToken) | **POST** /uid-create-child-token | 
[**uidGenerateToken**](V2Api.md#uidGenerateToken) | **POST** /uid-generate-token | 
[**uidListChildren**](V2Api.md#uidListChildren) | **POST** /uid-list-children | 
[**uidRevokeToken**](V2Api.md#uidRevokeToken) | **POST** /uid-revoke-token | 
[**uidRotateToken**](V2Api.md#uidRotateToken) | **POST** /uid-rotate-token | 
[**updateItem**](V2Api.md#updateItem) | **POST** /update-item | 
[**updateRole**](V2Api.md#updateRole) | **POST** /update-role | 
[**updateSecretVal**](V2Api.md#updateSecretVal) | **POST** /update-secret-val | 
[**uploadRSA**](V2Api.md#uploadRSA) | **POST** /upload-rsa | 
[**verifyPKCS1**](V2Api.md#verifyPKCS1) | **POST** /verify-pkcs1 | 



## assocRoleAuthMethod

> CreateRoleAuthMethodAssocOutput assocRoleAuthMethod(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.AssocRoleAuthMethod(); // AssocRoleAuthMethod | 
apiInstance.assocRoleAuthMethod(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssocRoleAuthMethod**](AssocRoleAuthMethod.md)|  | 

### Return type

[**CreateRoleAuthMethodAssocOutput**](CreateRoleAuthMethodAssocOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## auth

> AuthOutput auth(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.Auth(); // Auth | 
apiInstance.auth(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Auth**](Auth.md)|  | 

### Return type

[**AuthOutput**](AuthOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## configure

> ConfigureOutput configure(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.Configure(); // Configure | 
apiInstance.configure(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Configure**](Configure.md)|  | 

### Return type

[**ConfigureOutput**](ConfigureOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethod

> CreateAuthMethodOutput createAuthMethod(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethod(); // CreateAuthMethod | 
apiInstance.createAuthMethod(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAuthMethod**](CreateAuthMethod.md)|  | 

### Return type

[**CreateAuthMethodOutput**](CreateAuthMethodOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodAWSIAM

> CreateAuthMethodAWSIAMOutput createAuthMethodAWSIAM(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodAWSIAM(); // CreateAuthMethodAWSIAM | 
apiInstance.createAuthMethodAWSIAM(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAuthMethodAWSIAM**](CreateAuthMethodAWSIAM.md)|  | 

### Return type

[**CreateAuthMethodAWSIAMOutput**](CreateAuthMethodAWSIAMOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodAzureAD

> CreateAuthMethodAzureADOutput createAuthMethodAzureAD(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodAzureAD(); // CreateAuthMethodAzureAD | 
apiInstance.createAuthMethodAzureAD(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAuthMethodAzureAD**](CreateAuthMethodAzureAD.md)|  | 

### Return type

[**CreateAuthMethodAzureADOutput**](CreateAuthMethodAzureADOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodHuawei

> CreateAuthMethodHuaweiOutput createAuthMethodHuawei(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodHuawei(); // CreateAuthMethodHuawei | 
apiInstance.createAuthMethodHuawei(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAuthMethodHuawei**](CreateAuthMethodHuawei.md)|  | 

### Return type

[**CreateAuthMethodHuaweiOutput**](CreateAuthMethodHuaweiOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodOAuth2

> CreateAuthMethodOAuth2Output createAuthMethodOAuth2(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodOAuth2(); // CreateAuthMethodOAuth2 | 
apiInstance.createAuthMethodOAuth2(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAuthMethodOAuth2**](CreateAuthMethodOAuth2.md)|  | 

### Return type

[**CreateAuthMethodOAuth2Output**](CreateAuthMethodOAuth2Output.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodSAML

> CreateAuthMethodSAMLOutput createAuthMethodSAML(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodSAML(); // CreateAuthMethodSAML | 
apiInstance.createAuthMethodSAML(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAuthMethodSAML**](CreateAuthMethodSAML.md)|  | 

### Return type

[**CreateAuthMethodSAMLOutput**](CreateAuthMethodSAMLOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodUniversalIdentity

> CreateAuthMethodUniversalIdentityOutput createAuthMethodUniversalIdentity(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodUniversalIdentity(); // CreateAuthMethodUniversalIdentity | 
apiInstance.createAuthMethodUniversalIdentity(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAuthMethodUniversalIdentity**](CreateAuthMethodUniversalIdentity.md)|  | 

### Return type

[**CreateAuthMethodUniversalIdentityOutput**](CreateAuthMethodUniversalIdentityOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDynamicSecret

> Object createDynamicSecret(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateDynamicSecret(); // CreateDynamicSecret | 
apiInstance.createDynamicSecret(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateDynamicSecret**](CreateDynamicSecret.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createKey

> CreateKeyOutput createKey(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateKey(); // CreateKey | 
apiInstance.createKey(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateKey**](CreateKey.md)|  | 

### Return type

[**CreateKeyOutput**](CreateKeyOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPKICertIssuer

> CreatePKICertIssuerOutput createPKICertIssuer(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreatePKICertIssuer(); // CreatePKICertIssuer | 
apiInstance.createPKICertIssuer(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreatePKICertIssuer**](CreatePKICertIssuer.md)|  | 

### Return type

[**CreatePKICertIssuerOutput**](CreatePKICertIssuerOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRole

> Object createRole(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateRole(); // CreateRole | 
apiInstance.createRole(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateRole**](CreateRole.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSSHCertIssuer

> CreateSSHCertIssuerOutput createSSHCertIssuer(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateSSHCertIssuer(); // CreateSSHCertIssuer | 
apiInstance.createSSHCertIssuer(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateSSHCertIssuer**](CreateSSHCertIssuer.md)|  | 

### Return type

[**CreateSSHCertIssuerOutput**](CreateSSHCertIssuerOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSecret

> CreateSecretOutput createSecret(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateSecret(); // CreateSecret | 
apiInstance.createSecret(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateSecret**](CreateSecret.md)|  | 

### Return type

[**CreateSecretOutput**](CreateSecretOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decrypt

> DecryptOutput decrypt(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.Decrypt(); // Decrypt | 
apiInstance.decrypt(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Decrypt**](Decrypt.md)|  | 

### Return type

[**DecryptOutput**](DecryptOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decryptPKCS1

> DecryptPKCS1Output decryptPKCS1(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DecryptPKCS1(); // DecryptPKCS1 | 
apiInstance.decryptPKCS1(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DecryptPKCS1**](DecryptPKCS1.md)|  | 

### Return type

[**DecryptPKCS1Output**](DecryptPKCS1Output.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAuthMethod

> DeleteAuthMethodOutput deleteAuthMethod(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteAuthMethod(); // DeleteAuthMethod | 
apiInstance.deleteAuthMethod(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteAuthMethod**](DeleteAuthMethod.md)|  | 

### Return type

[**DeleteAuthMethodOutput**](DeleteAuthMethodOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAuthMethods

> DeleteAuthMethodsOutput deleteAuthMethods(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteAuthMethods(); // DeleteAuthMethods | 
apiInstance.deleteAuthMethods(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteAuthMethods**](DeleteAuthMethods.md)|  | 

### Return type

[**DeleteAuthMethodsOutput**](DeleteAuthMethodsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteItem

> DeleteItemOutput deleteItem(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteItem(); // DeleteItem | 
apiInstance.deleteItem(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteItem**](DeleteItem.md)|  | 

### Return type

[**DeleteItemOutput**](DeleteItemOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteItems

> DeleteItemsOutput deleteItems(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteItems(); // DeleteItems | 
apiInstance.deleteItems(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteItems**](DeleteItems.md)|  | 

### Return type

[**DeleteItemsOutput**](DeleteItemsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRole

> Object deleteRole(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteRole(); // DeleteRole | 
apiInstance.deleteRole(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteRole**](DeleteRole.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRoleAssociation

> Object deleteRoleAssociation(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteRoleAssociation(); // DeleteRoleAssociation | 
apiInstance.deleteRoleAssociation(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteRoleAssociation**](DeleteRoleAssociation.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRoleRule

> DeleteRoleRuleOutput deleteRoleRule(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteRoleRule(); // DeleteRoleRule | 
apiInstance.deleteRoleRule(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteRoleRule**](DeleteRoleRule.md)|  | 

### Return type

[**DeleteRoleRuleOutput**](DeleteRoleRuleOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRoles

> Object deleteRoles(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteRoles(); // DeleteRoles | 
apiInstance.deleteRoles(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteRoles**](DeleteRoles.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## describeItem

> Item describeItem(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DescribeItem(); // DescribeItem | 
apiInstance.describeItem(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DescribeItem**](DescribeItem.md)|  | 

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## encrypt

> EncryptOutput encrypt(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.Encrypt(); // Encrypt | 
apiInstance.encrypt(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Encrypt**](Encrypt.md)|  | 

### Return type

[**EncryptOutput**](EncryptOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## encryptPKCS1

> EncryptPKCS1Output encryptPKCS1(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.EncryptPKCS1(); // EncryptPKCS1 | 
apiInstance.encryptPKCS1(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EncryptPKCS1**](EncryptPKCS1.md)|  | 

### Return type

[**EncryptPKCS1Output**](EncryptPKCS1Output.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAuthMethod

> AuthMethod getAuthMethod(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetAuthMethod(); // GetAuthMethod | 
apiInstance.getAuthMethod(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetAuthMethod**](GetAuthMethod.md)|  | 

### Return type

[**AuthMethod**](AuthMethod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDynamicSecretValue

> {String: String} getDynamicSecretValue(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetDynamicSecretValue(); // GetDynamicSecretValue | 
apiInstance.getDynamicSecretValue(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetDynamicSecretValue**](GetDynamicSecretValue.md)|  | 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRSAPublic

> GetRSAPublicOutput getRSAPublic(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetRSAPublic(); // GetRSAPublic | 
apiInstance.getRSAPublic(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetRSAPublic**](GetRSAPublic.md)|  | 

### Return type

[**GetRSAPublicOutput**](GetRSAPublicOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRole

> Role getRole(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetRole(); // GetRole | 
apiInstance.getRole(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetRole**](GetRole.md)|  | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSSHCertificate

> GetSSHCertificateOutput getSSHCertificate(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetSSHCertificate(); // GetSSHCertificate | 
apiInstance.getSSHCertificate(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetSSHCertificate**](GetSSHCertificate.md)|  | 

### Return type

[**GetSSHCertificateOutput**](GetSSHCertificateOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSecretValue

> {String: String} getSecretValue(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetSecretValue(); // GetSecretValue | 
apiInstance.getSecretValue(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetSecretValue**](GetSecretValue.md)|  | 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listAuthMethods

> ListAuthMethodsOutput listAuthMethods(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ListAuthMethods(); // ListAuthMethods | 
apiInstance.listAuthMethods(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListAuthMethods**](ListAuthMethods.md)|  | 

### Return type

[**ListAuthMethodsOutput**](ListAuthMethodsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listItems

> ListItemsInPathOutput listItems(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ListItems(); // ListItems | 
apiInstance.listItems(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListItems**](ListItems.md)|  | 

### Return type

[**ListItemsInPathOutput**](ListItemsInPathOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listRoles

> ListRolesOutput listRoles(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ListRoles(); // ListRoles | 
apiInstance.listRoles(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListRoles**](ListRoles.md)|  | 

### Return type

[**ListRolesOutput**](ListRolesOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## moveObjects

> Object moveObjects(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.MoveObjects(); // MoveObjects | 
apiInstance.moveObjects(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MoveObjects**](MoveObjects.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshKey

> RefreshKeyOutput refreshKey(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.RefreshKey(); // RefreshKey | 
apiInstance.refreshKey(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RefreshKey**](RefreshKey.md)|  | 

### Return type

[**RefreshKeyOutput**](RefreshKeyOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reverseRBAC

> ReverseRBACOutput reverseRBAC(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ReverseRBAC(); // ReverseRBAC | 
apiInstance.reverseRBAC(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReverseRBAC**](ReverseRBAC.md)|  | 

### Return type

[**ReverseRBACOutput**](ReverseRBACOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rollbackSecret

> RollbackSecretOutput rollbackSecret(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.RollbackSecret(); // RollbackSecret | 
apiInstance.rollbackSecret(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RollbackSecret**](RollbackSecret.md)|  | 

### Return type

[**RollbackSecretOutput**](RollbackSecretOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rotateKey

> RotateKeyOutput rotateKey(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.RotateKey(); // RotateKey | 
apiInstance.rotateKey(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RotateKey**](RotateKey.md)|  | 

### Return type

[**RotateKeyOutput**](RotateKeyOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setItemState

> Object setItemState(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.SetItemState(); // SetItemState | 
apiInstance.setItemState(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SetItemState**](SetItemState.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setRoleRule

> Object setRoleRule(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.SetRoleRule(); // SetRoleRule | 
apiInstance.setRoleRule(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SetRoleRule**](SetRoleRule.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## signPKCS1

> SignPKCS1Output signPKCS1(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.SignPKCS1(); // SignPKCS1 | 
apiInstance.signPKCS1(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SignPKCS1**](SignPKCS1.md)|  | 

### Return type

[**SignPKCS1Output**](SignPKCS1Output.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## staticCredsAuth

> StaticCredsAuthOutput staticCredsAuth(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.StaticCredsAuth(); // StaticCredsAuth | 
apiInstance.staticCredsAuth(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StaticCredsAuth**](StaticCredsAuth.md)|  | 

### Return type

[**StaticCredsAuthOutput**](StaticCredsAuthOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidCreateChildToken

> UidCreateChildTokenOutput uidCreateChildToken(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidCreateChildToken(); // UidCreateChildToken | 
apiInstance.uidCreateChildToken(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UidCreateChildToken**](UidCreateChildToken.md)|  | 

### Return type

[**UidCreateChildTokenOutput**](UidCreateChildTokenOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidGenerateToken

> UidGenerateTokenOutput uidGenerateToken(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidGenerateToken(); // UidGenerateToken | 
apiInstance.uidGenerateToken(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UidGenerateToken**](UidGenerateToken.md)|  | 

### Return type

[**UidGenerateTokenOutput**](UidGenerateTokenOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidListChildren

> UniversalIdentityDetails uidListChildren(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidListChildren(); // UidListChildren | 
apiInstance.uidListChildren(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UidListChildren**](UidListChildren.md)|  | 

### Return type

[**UniversalIdentityDetails**](UniversalIdentityDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidRevokeToken

> Object uidRevokeToken(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidRevokeToken(); // UidRevokeToken | 
apiInstance.uidRevokeToken(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UidRevokeToken**](UidRevokeToken.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidRotateToken

> UidRotateTokenOutput uidRotateToken(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidRotateToken(); // UidRotateToken | 
apiInstance.uidRotateToken(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UidRotateToken**](UidRotateToken.md)|  | 

### Return type

[**UidRotateTokenOutput**](UidRotateTokenOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateItem

> UpdateItemOutput updateItem(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateItem(); // UpdateItem | 
apiInstance.updateItem(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateItem**](UpdateItem.md)|  | 

### Return type

[**UpdateItemOutput**](UpdateItemOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRole

> UpdateRoleOutput updateRole(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateRole(); // UpdateRole | 
apiInstance.updateRole(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateRole**](UpdateRole.md)|  | 

### Return type

[**UpdateRoleOutput**](UpdateRoleOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSecretVal

> UpdateSecretValOutput updateSecretVal(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateSecretVal(); // UpdateSecretVal | 
apiInstance.updateSecretVal(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateSecretVal**](UpdateSecretVal.md)|  | 

### Return type

[**UpdateSecretValOutput**](UpdateSecretValOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadRSA

> Object uploadRSA(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UploadRSA(); // UploadRSA | 
apiInstance.uploadRSA(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UploadRSA**](UploadRSA.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyPKCS1

> Object verifyPKCS1(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.VerifyPKCS1(); // VerifyPKCS1 | 
apiInstance.verifyPKCS1(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VerifyPKCS1**](VerifyPKCS1.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

