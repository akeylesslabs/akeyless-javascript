# akl.V2Api

All URIs are relative to *http://localhost*

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

> CreateRoleAuthMethodAssocOutput assocRoleAuthMethod(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.AssocRoleAuthMethod() // AssocRoleAuthMethod | 
};
apiInstance.assocRoleAuthMethod(opts, (error, data, response) => {
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
 **body** | [**AssocRoleAuthMethod**](AssocRoleAuthMethod.md)|  | [optional] 

### Return type

[**CreateRoleAuthMethodAssocOutput**](CreateRoleAuthMethodAssocOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## auth

> AuthOutput auth(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.Auth() // Auth | 
};
apiInstance.auth(opts, (error, data, response) => {
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
 **body** | [**Auth**](Auth.md)|  | [optional] 

### Return type

[**AuthOutput**](AuthOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## configure

> ConfigureOutput configure(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.Configure() // Configure | 
};
apiInstance.configure(opts, (error, data, response) => {
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
 **body** | [**Configure**](Configure.md)|  | [optional] 

### Return type

[**ConfigureOutput**](ConfigureOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethod

> CreateAuthMethodOutput createAuthMethod(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateAuthMethod() // CreateAuthMethod | 
};
apiInstance.createAuthMethod(opts, (error, data, response) => {
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
 **body** | [**CreateAuthMethod**](CreateAuthMethod.md)|  | [optional] 

### Return type

[**CreateAuthMethodOutput**](CreateAuthMethodOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodAWSIAM

> CreateAuthMethodAWSIAMOutput createAuthMethodAWSIAM(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateAuthMethodAWSIAM() // CreateAuthMethodAWSIAM | 
};
apiInstance.createAuthMethodAWSIAM(opts, (error, data, response) => {
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
 **body** | [**CreateAuthMethodAWSIAM**](CreateAuthMethodAWSIAM.md)|  | [optional] 

### Return type

[**CreateAuthMethodAWSIAMOutput**](CreateAuthMethodAWSIAMOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodAzureAD

> CreateAuthMethodAzureADOutput createAuthMethodAzureAD(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateAuthMethodAzureAD() // CreateAuthMethodAzureAD | 
};
apiInstance.createAuthMethodAzureAD(opts, (error, data, response) => {
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
 **body** | [**CreateAuthMethodAzureAD**](CreateAuthMethodAzureAD.md)|  | [optional] 

### Return type

[**CreateAuthMethodAzureADOutput**](CreateAuthMethodAzureADOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodHuawei

> CreateAuthMethodHuaweiOutput createAuthMethodHuawei(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateAuthMethodHuawei() // CreateAuthMethodHuawei | 
};
apiInstance.createAuthMethodHuawei(opts, (error, data, response) => {
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
 **body** | [**CreateAuthMethodHuawei**](CreateAuthMethodHuawei.md)|  | [optional] 

### Return type

[**CreateAuthMethodHuaweiOutput**](CreateAuthMethodHuaweiOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodOAuth2

> CreateAuthMethodOAuth2Output createAuthMethodOAuth2(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateAuthMethodOAuth2() // CreateAuthMethodOAuth2 | 
};
apiInstance.createAuthMethodOAuth2(opts, (error, data, response) => {
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
 **body** | [**CreateAuthMethodOAuth2**](CreateAuthMethodOAuth2.md)|  | [optional] 

### Return type

[**CreateAuthMethodOAuth2Output**](CreateAuthMethodOAuth2Output.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodSAML

> CreateAuthMethodSAMLOutput createAuthMethodSAML(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateAuthMethodSAML() // CreateAuthMethodSAML | 
};
apiInstance.createAuthMethodSAML(opts, (error, data, response) => {
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
 **body** | [**CreateAuthMethodSAML**](CreateAuthMethodSAML.md)|  | [optional] 

### Return type

[**CreateAuthMethodSAMLOutput**](CreateAuthMethodSAMLOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodUniversalIdentity

> CreateAuthMethodUniversalIdentityOutput createAuthMethodUniversalIdentity(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateAuthMethodUniversalIdentity() // CreateAuthMethodUniversalIdentity | 
};
apiInstance.createAuthMethodUniversalIdentity(opts, (error, data, response) => {
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
 **body** | [**CreateAuthMethodUniversalIdentity**](CreateAuthMethodUniversalIdentity.md)|  | [optional] 

### Return type

[**CreateAuthMethodUniversalIdentityOutput**](CreateAuthMethodUniversalIdentityOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDynamicSecret

> Object createDynamicSecret(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateDynamicSecret() // CreateDynamicSecret | 
};
apiInstance.createDynamicSecret(opts, (error, data, response) => {
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
 **body** | [**CreateDynamicSecret**](CreateDynamicSecret.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createKey

> CreateKeyOutput createKey(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateKey() // CreateKey | 
};
apiInstance.createKey(opts, (error, data, response) => {
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
 **body** | [**CreateKey**](CreateKey.md)|  | [optional] 

### Return type

[**CreateKeyOutput**](CreateKeyOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPKICertIssuer

> CreatePKICertIssuerOutput createPKICertIssuer(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreatePKICertIssuer() // CreatePKICertIssuer | 
};
apiInstance.createPKICertIssuer(opts, (error, data, response) => {
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
 **body** | [**CreatePKICertIssuer**](CreatePKICertIssuer.md)|  | [optional] 

### Return type

[**CreatePKICertIssuerOutput**](CreatePKICertIssuerOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRole

> Object createRole(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateRole() // CreateRole | 
};
apiInstance.createRole(opts, (error, data, response) => {
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
 **body** | [**CreateRole**](CreateRole.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSSHCertIssuer

> CreateSSHCertIssuerOutput createSSHCertIssuer(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateSSHCertIssuer() // CreateSSHCertIssuer | 
};
apiInstance.createSSHCertIssuer(opts, (error, data, response) => {
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
 **body** | [**CreateSSHCertIssuer**](CreateSSHCertIssuer.md)|  | [optional] 

### Return type

[**CreateSSHCertIssuerOutput**](CreateSSHCertIssuerOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSecret

> CreateSecretOutput createSecret(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.CreateSecret() // CreateSecret | 
};
apiInstance.createSecret(opts, (error, data, response) => {
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
 **body** | [**CreateSecret**](CreateSecret.md)|  | [optional] 

### Return type

[**CreateSecretOutput**](CreateSecretOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decrypt

> DecryptOutput decrypt(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.Decrypt() // Decrypt | 
};
apiInstance.decrypt(opts, (error, data, response) => {
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
 **body** | [**Decrypt**](Decrypt.md)|  | [optional] 

### Return type

[**DecryptOutput**](DecryptOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decryptPKCS1

> DecryptPKCS1Output decryptPKCS1(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DecryptPKCS1() // DecryptPKCS1 | 
};
apiInstance.decryptPKCS1(opts, (error, data, response) => {
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
 **body** | [**DecryptPKCS1**](DecryptPKCS1.md)|  | [optional] 

### Return type

[**DecryptPKCS1Output**](DecryptPKCS1Output.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAuthMethod

> DeleteAuthMethodOutput deleteAuthMethod(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DeleteAuthMethod() // DeleteAuthMethod | 
};
apiInstance.deleteAuthMethod(opts, (error, data, response) => {
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
 **body** | [**DeleteAuthMethod**](DeleteAuthMethod.md)|  | [optional] 

### Return type

[**DeleteAuthMethodOutput**](DeleteAuthMethodOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAuthMethods

> DeleteAuthMethodsOutput deleteAuthMethods(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DeleteAuthMethods() // DeleteAuthMethods | 
};
apiInstance.deleteAuthMethods(opts, (error, data, response) => {
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
 **body** | [**DeleteAuthMethods**](DeleteAuthMethods.md)|  | [optional] 

### Return type

[**DeleteAuthMethodsOutput**](DeleteAuthMethodsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteItem

> DeleteItemOutput deleteItem(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DeleteItem() // DeleteItem | 
};
apiInstance.deleteItem(opts, (error, data, response) => {
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
 **body** | [**DeleteItem**](DeleteItem.md)|  | [optional] 

### Return type

[**DeleteItemOutput**](DeleteItemOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteItems

> DeleteItemsOutput deleteItems(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DeleteItems() // DeleteItems | 
};
apiInstance.deleteItems(opts, (error, data, response) => {
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
 **body** | [**DeleteItems**](DeleteItems.md)|  | [optional] 

### Return type

[**DeleteItemsOutput**](DeleteItemsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRole

> Object deleteRole(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DeleteRole() // DeleteRole | 
};
apiInstance.deleteRole(opts, (error, data, response) => {
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
 **body** | [**DeleteRole**](DeleteRole.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRoleAssociation

> Object deleteRoleAssociation(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DeleteRoleAssociation() // DeleteRoleAssociation | 
};
apiInstance.deleteRoleAssociation(opts, (error, data, response) => {
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
 **body** | [**DeleteRoleAssociation**](DeleteRoleAssociation.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRoleRule

> DeleteRoleRuleOutput deleteRoleRule(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DeleteRoleRule() // DeleteRoleRule | 
};
apiInstance.deleteRoleRule(opts, (error, data, response) => {
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
 **body** | [**DeleteRoleRule**](DeleteRoleRule.md)|  | [optional] 

### Return type

[**DeleteRoleRuleOutput**](DeleteRoleRuleOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRoles

> Object deleteRoles(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DeleteRoles() // DeleteRoles | 
};
apiInstance.deleteRoles(opts, (error, data, response) => {
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
 **body** | [**DeleteRoles**](DeleteRoles.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## describeItem

> Item describeItem(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.DescribeItem() // DescribeItem | 
};
apiInstance.describeItem(opts, (error, data, response) => {
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
 **body** | [**DescribeItem**](DescribeItem.md)|  | [optional] 

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## encrypt

> EncryptOutput encrypt(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.Encrypt() // Encrypt | 
};
apiInstance.encrypt(opts, (error, data, response) => {
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
 **body** | [**Encrypt**](Encrypt.md)|  | [optional] 

### Return type

[**EncryptOutput**](EncryptOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## encryptPKCS1

> EncryptPKCS1Output encryptPKCS1(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.EncryptPKCS1() // EncryptPKCS1 | 
};
apiInstance.encryptPKCS1(opts, (error, data, response) => {
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
 **body** | [**EncryptPKCS1**](EncryptPKCS1.md)|  | [optional] 

### Return type

[**EncryptPKCS1Output**](EncryptPKCS1Output.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAuthMethod

> AuthMethod getAuthMethod(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.GetAuthMethod() // GetAuthMethod | 
};
apiInstance.getAuthMethod(opts, (error, data, response) => {
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
 **body** | [**GetAuthMethod**](GetAuthMethod.md)|  | [optional] 

### Return type

[**AuthMethod**](AuthMethod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDynamicSecretValue

> {String: String} getDynamicSecretValue(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.GetDynamicSecretValue() // GetDynamicSecretValue | 
};
apiInstance.getDynamicSecretValue(opts, (error, data, response) => {
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
 **body** | [**GetDynamicSecretValue**](GetDynamicSecretValue.md)|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRSAPublic

> GetRSAPublicOutput getRSAPublic(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.GetRSAPublic() // GetRSAPublic | 
};
apiInstance.getRSAPublic(opts, (error, data, response) => {
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
 **body** | [**GetRSAPublic**](GetRSAPublic.md)|  | [optional] 

### Return type

[**GetRSAPublicOutput**](GetRSAPublicOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRole

> Role getRole(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.GetRole() // GetRole | 
};
apiInstance.getRole(opts, (error, data, response) => {
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
 **body** | [**GetRole**](GetRole.md)|  | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSSHCertificate

> GetSSHCertificateOutput getSSHCertificate(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.GetSSHCertificate() // GetSSHCertificate | 
};
apiInstance.getSSHCertificate(opts, (error, data, response) => {
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
 **body** | [**GetSSHCertificate**](GetSSHCertificate.md)|  | [optional] 

### Return type

[**GetSSHCertificateOutput**](GetSSHCertificateOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSecretValue

> {String: String} getSecretValue(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.GetSecretValue() // GetSecretValue | 
};
apiInstance.getSecretValue(opts, (error, data, response) => {
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
 **body** | [**GetSecretValue**](GetSecretValue.md)|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listAuthMethods

> ListAuthMethodsOutput listAuthMethods(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.ListAuthMethods() // ListAuthMethods | 
};
apiInstance.listAuthMethods(opts, (error, data, response) => {
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
 **body** | [**ListAuthMethods**](ListAuthMethods.md)|  | [optional] 

### Return type

[**ListAuthMethodsOutput**](ListAuthMethodsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listItems

> ListItemsInPathOutput listItems(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.ListItems() // ListItems | 
};
apiInstance.listItems(opts, (error, data, response) => {
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
 **body** | [**ListItems**](ListItems.md)|  | [optional] 

### Return type

[**ListItemsInPathOutput**](ListItemsInPathOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listRoles

> ListRolesOutput listRoles(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.ListRoles() // ListRoles | 
};
apiInstance.listRoles(opts, (error, data, response) => {
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
 **body** | [**ListRoles**](ListRoles.md)|  | [optional] 

### Return type

[**ListRolesOutput**](ListRolesOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## moveObjects

> Object moveObjects(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.MoveObjects() // MoveObjects | 
};
apiInstance.moveObjects(opts, (error, data, response) => {
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
 **body** | [**MoveObjects**](MoveObjects.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshKey

> RefreshKeyOutput refreshKey(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.RefreshKey() // RefreshKey | 
};
apiInstance.refreshKey(opts, (error, data, response) => {
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
 **body** | [**RefreshKey**](RefreshKey.md)|  | [optional] 

### Return type

[**RefreshKeyOutput**](RefreshKeyOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reverseRBAC

> ReverseRBACOutput reverseRBAC(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.ReverseRBAC() // ReverseRBAC | 
};
apiInstance.reverseRBAC(opts, (error, data, response) => {
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
 **body** | [**ReverseRBAC**](ReverseRBAC.md)|  | [optional] 

### Return type

[**ReverseRBACOutput**](ReverseRBACOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rollbackSecret

> RollbackSecretOutput rollbackSecret(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.RollbackSecret() // RollbackSecret | 
};
apiInstance.rollbackSecret(opts, (error, data, response) => {
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
 **body** | [**RollbackSecret**](RollbackSecret.md)|  | [optional] 

### Return type

[**RollbackSecretOutput**](RollbackSecretOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rotateKey

> RotateKeyOutput rotateKey(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.RotateKey() // RotateKey | 
};
apiInstance.rotateKey(opts, (error, data, response) => {
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
 **body** | [**RotateKey**](RotateKey.md)|  | [optional] 

### Return type

[**RotateKeyOutput**](RotateKeyOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setItemState

> Object setItemState(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.SetItemState() // SetItemState | 
};
apiInstance.setItemState(opts, (error, data, response) => {
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
 **body** | [**SetItemState**](SetItemState.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setRoleRule

> Object setRoleRule(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.SetRoleRule() // SetRoleRule | 
};
apiInstance.setRoleRule(opts, (error, data, response) => {
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
 **body** | [**SetRoleRule**](SetRoleRule.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## signPKCS1

> SignPKCS1Output signPKCS1(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.SignPKCS1() // SignPKCS1 | 
};
apiInstance.signPKCS1(opts, (error, data, response) => {
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
 **body** | [**SignPKCS1**](SignPKCS1.md)|  | [optional] 

### Return type

[**SignPKCS1Output**](SignPKCS1Output.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## staticCredsAuth

> StaticCredsAuthOutput staticCredsAuth(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.StaticCredsAuth() // StaticCredsAuth | 
};
apiInstance.staticCredsAuth(opts, (error, data, response) => {
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
 **body** | [**StaticCredsAuth**](StaticCredsAuth.md)|  | [optional] 

### Return type

[**StaticCredsAuthOutput**](StaticCredsAuthOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidCreateChildToken

> UidCreateChildTokenOutput uidCreateChildToken(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.UidCreateChildToken() // UidCreateChildToken | 
};
apiInstance.uidCreateChildToken(opts, (error, data, response) => {
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
 **body** | [**UidCreateChildToken**](UidCreateChildToken.md)|  | [optional] 

### Return type

[**UidCreateChildTokenOutput**](UidCreateChildTokenOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidGenerateToken

> UidGenerateTokenOutput uidGenerateToken(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.UidGenerateToken() // UidGenerateToken | 
};
apiInstance.uidGenerateToken(opts, (error, data, response) => {
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
 **body** | [**UidGenerateToken**](UidGenerateToken.md)|  | [optional] 

### Return type

[**UidGenerateTokenOutput**](UidGenerateTokenOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidListChildren

> UniversalIdentityDetails uidListChildren(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.UidListChildren() // UidListChildren | 
};
apiInstance.uidListChildren(opts, (error, data, response) => {
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
 **body** | [**UidListChildren**](UidListChildren.md)|  | [optional] 

### Return type

[**UniversalIdentityDetails**](UniversalIdentityDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidRevokeToken

> Object uidRevokeToken(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.UidRevokeToken() // UidRevokeToken | 
};
apiInstance.uidRevokeToken(opts, (error, data, response) => {
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
 **body** | [**UidRevokeToken**](UidRevokeToken.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uidRotateToken

> UidRotateTokenOutput uidRotateToken(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.UidRotateToken() // UidRotateToken | 
};
apiInstance.uidRotateToken(opts, (error, data, response) => {
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
 **body** | [**UidRotateToken**](UidRotateToken.md)|  | [optional] 

### Return type

[**UidRotateTokenOutput**](UidRotateTokenOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateItem

> UpdateItemOutput updateItem(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.UpdateItem() // UpdateItem | 
};
apiInstance.updateItem(opts, (error, data, response) => {
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
 **body** | [**UpdateItem**](UpdateItem.md)|  | [optional] 

### Return type

[**UpdateItemOutput**](UpdateItemOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRole

> UpdateRoleOutput updateRole(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.UpdateRole() // UpdateRole | 
};
apiInstance.updateRole(opts, (error, data, response) => {
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
 **body** | [**UpdateRole**](UpdateRole.md)|  | [optional] 

### Return type

[**UpdateRoleOutput**](UpdateRoleOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSecretVal

> UpdateSecretValOutput updateSecretVal(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.UpdateSecretVal() // UpdateSecretVal | 
};
apiInstance.updateSecretVal(opts, (error, data, response) => {
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
 **body** | [**UpdateSecretVal**](UpdateSecretVal.md)|  | [optional] 

### Return type

[**UpdateSecretValOutput**](UpdateSecretValOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadRSA

> Object uploadRSA(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.UploadRSA() // UploadRSA | 
};
apiInstance.uploadRSA(opts, (error, data, response) => {
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
 **body** | [**UploadRSA**](UploadRSA.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyPKCS1

> Object verifyPKCS1(opts)



### Example

```javascript
import akl from 'akeyless-javascript';

let apiInstance = new akl.V2Api();
let opts = {
  'body': new akl.VerifyPKCS1() // VerifyPKCS1 | 
};
apiInstance.verifyPKCS1(opts, (error, data, response) => {
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
 **body** | [**VerifyPKCS1**](VerifyPKCS1.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

