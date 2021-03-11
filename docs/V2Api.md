# akeyless.V2Api

All URIs are relative to *https://api.akeyless.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assocRoleAuthMethod**](V2Api.md#assocRoleAuthMethod) | **POST** /assoc-role-am | 
[**assocTargetItem**](V2Api.md#assocTargetItem) | **POST** /assoc-target-item | 
[**auth**](V2Api.md#auth) | **POST** /auth | 
[**configure**](V2Api.md#configure) | **POST** /configure | 
[**createAuthMethod**](V2Api.md#createAuthMethod) | **POST** /create-auth-method | 
[**createAuthMethodAWSIAM**](V2Api.md#createAuthMethodAWSIAM) | **POST** /create-auth-method-aws-iam | 
[**createAuthMethodAzureAD**](V2Api.md#createAuthMethodAzureAD) | **POST** /create-auth-method-azure-ad | 
[**createAuthMethodHuawei**](V2Api.md#createAuthMethodHuawei) | **POST** /create-auth-method-huawei | 
[**createAuthMethodOAuth2**](V2Api.md#createAuthMethodOAuth2) | **POST** /create-auth-method-oauth2 | 
[**createAuthMethodSAML**](V2Api.md#createAuthMethodSAML) | **POST** /create-auth-method-saml | 
[**createAuthMethodUniversalIdentity**](V2Api.md#createAuthMethodUniversalIdentity) | **POST** /create-auth-method-universal-identity | 
[**createAwsTarget**](V2Api.md#createAwsTarget) | **POST** /create-aws-target | 
[**createDBTarget**](V2Api.md#createDBTarget) | **POST** /create-db-target | 
[**createDynamicSecret**](V2Api.md#createDynamicSecret) | **POST** /create-dynamic-secret | 
[**createKey**](V2Api.md#createKey) | **POST** /create-key | 
[**createPKICertIssuer**](V2Api.md#createPKICertIssuer) | **POST** /create-pki-cert-issuer | 
[**createRabbitMQTarget**](V2Api.md#createRabbitMQTarget) | **POST** /create-rabbitMQ-target | 
[**createRdpTarget**](V2Api.md#createRdpTarget) | **POST** /create-rdp-target | 
[**createRole**](V2Api.md#createRole) | **POST** /create-role | 
[**createSSHCertIssuer**](V2Api.md#createSSHCertIssuer) | **POST** /create-ssh-cert-issuer | 
[**createSSHTarget**](V2Api.md#createSSHTarget) | **POST** /create-ssh-target | 
[**createSecret**](V2Api.md#createSecret) | **POST** /create-secret | 
[**createTarget**](V2Api.md#createTarget) | **POST** /create-target | 
[**createWebTarget**](V2Api.md#createWebTarget) | **POST** /create-web-target | 
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
[**deleteTarget**](V2Api.md#deleteTarget) | **POST** /delete-target | 
[**deleteTargetAssociation**](V2Api.md#deleteTargetAssociation) | **POST** /delete-assoc-target-item | 
[**deleteTargets**](V2Api.md#deleteTargets) | **POST** /delete-targets | 
[**describeItem**](V2Api.md#describeItem) | **POST** /describe-item | 
[**encrypt**](V2Api.md#encrypt) | **POST** /encrypt | 
[**encryptPKCS1**](V2Api.md#encryptPKCS1) | **POST** /encrypt-pkcs1 | 
[**gatewayAddSubAdmins**](V2Api.md#gatewayAddSubAdmins) | **POST** /gateway-add-sub-admins | 
[**gatewayCreateProducerArtifactory**](V2Api.md#gatewayCreateProducerArtifactory) | **POST** /gateway-create-producer-artifactory | 
[**gatewayCreateProducerAws**](V2Api.md#gatewayCreateProducerAws) | **POST** /gateway-create-producer-aws | 
[**gatewayCreateProducerAzure**](V2Api.md#gatewayCreateProducerAzure) | **POST** /gateway-create-producer-azure | 
[**gatewayCreateProducerEks**](V2Api.md#gatewayCreateProducerEks) | **POST** /gateway-create-producer-eks | 
[**gatewayCreateProducerGke**](V2Api.md#gatewayCreateProducerGke) | **POST** /gateway-create-producer-gke | 
[**gatewayCreateProducerMSSQL**](V2Api.md#gatewayCreateProducerMSSQL) | **POST** /gateway-create-producer-mssql | 
[**gatewayCreateProducerMongo**](V2Api.md#gatewayCreateProducerMongo) | **POST** /gateway-create-producer-mongo | 
[**gatewayCreateProducerMySQL**](V2Api.md#gatewayCreateProducerMySQL) | **POST** /gateway-create-producer-mysql | 
[**gatewayCreateProducerPostgreSQL**](V2Api.md#gatewayCreateProducerPostgreSQL) | **POST** /gateway-create-producer-postgresql | 
[**gatewayCreateProducerRabbitMQ**](V2Api.md#gatewayCreateProducerRabbitMQ) | **POST** /gateway-create-producer-rabbitmq | 
[**gatewayCreateProducerRdp**](V2Api.md#gatewayCreateProducerRdp) | **POST** /gateway-create-producer-rdp | 
[**gatewayCreateProducerVenafi**](V2Api.md#gatewayCreateProducerVenafi) | **POST** /gateway-create-producer-venafi | 
[**gatewayDeleteProducer**](V2Api.md#gatewayDeleteProducer) | **POST** /gateway-delete-producer | 
[**gatewayDeleteSubAdmins**](V2Api.md#gatewayDeleteSubAdmins) | **POST** /gateway-delete-sub-admins | 
[**gatewayGetConfig**](V2Api.md#gatewayGetConfig) | **POST** /gateway-get-config | 
[**gatewayGetProducer**](V2Api.md#gatewayGetProducer) | **POST** /gateway-get-producer | 
[**gatewayGetTmpUsers**](V2Api.md#gatewayGetTmpUsers) | **POST** /gateway-get-producer-tmp-creds | 
[**gatewayListProducers**](V2Api.md#gatewayListProducers) | **POST** /gateway-list-producers | 
[**gatewayListSubAdmins**](V2Api.md#gatewayListSubAdmins) | **POST** /gateway-list-SubAdmins | 
[**gatewayRevokeTmpUsers**](V2Api.md#gatewayRevokeTmpUsers) | **POST** /gateway-revoke-producer-tmp-creds | 
[**gatewayStartProducer**](V2Api.md#gatewayStartProducer) | **POST** /gateway-start-producer | 
[**gatewayStopProducer**](V2Api.md#gatewayStopProducer) | **POST** /gateway-stop-producer | 
[**gatewayUpdateTmpUsers**](V2Api.md#gatewayUpdateTmpUsers) | **POST** /gateway-update-producer-tmp-creds | 
[**getAccountLogo**](V2Api.md#getAccountLogo) | **POST** /get-account-logo | 
[**getAuthMethod**](V2Api.md#getAuthMethod) | **POST** /get-auth-method | 
[**getDynamicPkiCertificate**](V2Api.md#getDynamicPkiCertificate) | **POST** /get-dynamic-pki-certificate | 
[**getDynamicSecretValue**](V2Api.md#getDynamicSecretValue) | **POST** /get-dynamic-secret-value | 
[**getRSAPublic**](V2Api.md#getRSAPublic) | **POST** /get-rsa-public | 
[**getRole**](V2Api.md#getRole) | **POST** /get-role | 
[**getSSHCertificate**](V2Api.md#getSSHCertificate) | **POST** /get-ssh-certificate | 
[**getSecretValue**](V2Api.md#getSecretValue) | **POST** /get-secret-value | 
[**getTarget**](V2Api.md#getTarget) | **POST** /get-target | 
[**getTargetDetails**](V2Api.md#getTargetDetails) | **POST** /get-target-details | 
[**listAuthMethods**](V2Api.md#listAuthMethods) | **POST** /list-auth-methods | 
[**listItems**](V2Api.md#listItems) | **POST** /list-items | 
[**listRoles**](V2Api.md#listRoles) | **POST** /list-roles | 
[**listTargets**](V2Api.md#listTargets) | **POST** /list-targets | 
[**moveObjects**](V2Api.md#moveObjects) | **POST** /move-objects | 
[**rawCreds**](V2Api.md#rawCreds) | **POST** /raw-creds | 
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
[**updateAWSTargetDetails**](V2Api.md#updateAWSTargetDetails) | **POST** /update-aws-target-details | 
[**updateDBTargetDetails**](V2Api.md#updateDBTargetDetails) | **POST** /update-db-target-details | 
[**updateItem**](V2Api.md#updateItem) | **POST** /update-item | 
[**updateRDPTargetDetails**](V2Api.md#updateRDPTargetDetails) | **POST** /update-rdp-target-details | 
[**updateRabbitMQTargetDetails**](V2Api.md#updateRabbitMQTargetDetails) | **POST** /update-rabbitmq-target-details | 
[**updateRole**](V2Api.md#updateRole) | **POST** /update-role | 
[**updateSSHTargetDetails**](V2Api.md#updateSSHTargetDetails) | **POST** /update-ssh-target-details | 
[**updateSecretVal**](V2Api.md#updateSecretVal) | **POST** /update-secret-val | 
[**updateTarget**](V2Api.md#updateTarget) | **POST** /update-target | 
[**updateTargetDetails**](V2Api.md#updateTargetDetails) | **POST** /update-target-details | 
[**updateWebTargetDetails**](V2Api.md#updateWebTargetDetails) | **POST** /update-web-target-details | 
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


## assocTargetItem

> CreateTargetItemAssocOutput assocTargetItem(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.AssocTargetItem(); // AssocTargetItem | 
apiInstance.assocTargetItem(body, (error, data, response) => {
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
 **body** | [**AssocTargetItem**](AssocTargetItem.md)|  | 

### Return type

[**CreateTargetItemAssocOutput**](CreateTargetItemAssocOutput.md)

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


## createAwsTarget

> Object createAwsTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAwsTarget(); // CreateAwsTarget | 
apiInstance.createAwsTarget(body, (error, data, response) => {
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
 **body** | [**CreateAwsTarget**](CreateAwsTarget.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDBTarget

> Object createDBTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateDBTarget(); // CreateDBTarget | 
apiInstance.createDBTarget(body, (error, data, response) => {
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
 **body** | [**CreateDBTarget**](CreateDBTarget.md)|  | 

### Return type

**Object**

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


## createRabbitMQTarget

> Object createRabbitMQTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateRabbitMQTarget(); // CreateRabbitMQTarget | 
apiInstance.createRabbitMQTarget(body, (error, data, response) => {
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
 **body** | [**CreateRabbitMQTarget**](CreateRabbitMQTarget.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRdpTarget

> Object createRdpTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateRdpTarget(); // CreateRdpTarget | 
apiInstance.createRdpTarget(body, (error, data, response) => {
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
 **body** | [**CreateRdpTarget**](CreateRdpTarget.md)|  | 

### Return type

**Object**

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


## createSSHTarget

> Object createSSHTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateSSHTarget(); // CreateSSHTarget | 
apiInstance.createSSHTarget(body, (error, data, response) => {
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
 **body** | [**CreateSSHTarget**](CreateSSHTarget.md)|  | 

### Return type

**Object**

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


## createTarget

> Object createTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = null; // Object | 
apiInstance.createTarget(body, (error, data, response) => {
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
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWebTarget

> Object createWebTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateWebTarget(); // CreateWebTarget | 
apiInstance.createWebTarget(body, (error, data, response) => {
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
 **body** | [**CreateWebTarget**](CreateWebTarget.md)|  | 

### Return type

**Object**

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


## deleteTarget

> Object deleteTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteTarget(); // DeleteTarget | 
apiInstance.deleteTarget(body, (error, data, response) => {
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
 **body** | [**DeleteTarget**](DeleteTarget.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTargetAssociation

> Object deleteTargetAssociation(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteTargetAssociation(); // DeleteTargetAssociation | 
apiInstance.deleteTargetAssociation(body, (error, data, response) => {
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
 **body** | [**DeleteTargetAssociation**](DeleteTargetAssociation.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTargets

> Object deleteTargets(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteTargets(); // DeleteTargets | 
apiInstance.deleteTargets(body, (error, data, response) => {
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
 **body** | [**DeleteTargets**](DeleteTargets.md)|  | 

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


## gatewayAddSubAdmins

> GatewayAddSubAdminsOutput gatewayAddSubAdmins(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayAddSubAdmins(); // GatewayAddSubAdmins | 
apiInstance.gatewayAddSubAdmins(body, (error, data, response) => {
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
 **body** | [**GatewayAddSubAdmins**](GatewayAddSubAdmins.md)|  | 

### Return type

[**GatewayAddSubAdminsOutput**](GatewayAddSubAdminsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerArtifactory

> GatewayCreateProducerArtifactoryOutput gatewayCreateProducerArtifactory(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerArtifactory(); // GatewayCreateProducerArtifactory | 
apiInstance.gatewayCreateProducerArtifactory(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerArtifactory**](GatewayCreateProducerArtifactory.md)|  | 

### Return type

[**GatewayCreateProducerArtifactoryOutput**](GatewayCreateProducerArtifactoryOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerAws

> GatewayCreateProducerAwsOutput gatewayCreateProducerAws(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerAws(); // GatewayCreateProducerAws | 
apiInstance.gatewayCreateProducerAws(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerAws**](GatewayCreateProducerAws.md)|  | 

### Return type

[**GatewayCreateProducerAwsOutput**](GatewayCreateProducerAwsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerAzure

> GatewayCreateProducerAzureOutput gatewayCreateProducerAzure(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerAzure(); // GatewayCreateProducerAzure | 
apiInstance.gatewayCreateProducerAzure(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerAzure**](GatewayCreateProducerAzure.md)|  | 

### Return type

[**GatewayCreateProducerAzureOutput**](GatewayCreateProducerAzureOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerEks

> GatewayCreateProducerEksOutput gatewayCreateProducerEks(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerEks(); // GatewayCreateProducerEks | 
apiInstance.gatewayCreateProducerEks(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerEks**](GatewayCreateProducerEks.md)|  | 

### Return type

[**GatewayCreateProducerEksOutput**](GatewayCreateProducerEksOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerGke

> GatewayCreateProducerGkeOutput gatewayCreateProducerGke(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerGke(); // GatewayCreateProducerGke | 
apiInstance.gatewayCreateProducerGke(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerGke**](GatewayCreateProducerGke.md)|  | 

### Return type

[**GatewayCreateProducerGkeOutput**](GatewayCreateProducerGkeOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerMSSQL

> GatewayCreateProducerMSSQLOutput gatewayCreateProducerMSSQL(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerMSSQL(); // GatewayCreateProducerMSSQL | 
apiInstance.gatewayCreateProducerMSSQL(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerMSSQL**](GatewayCreateProducerMSSQL.md)|  | 

### Return type

[**GatewayCreateProducerMSSQLOutput**](GatewayCreateProducerMSSQLOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerMongo

> GatewayCreateProducerMongoOutput gatewayCreateProducerMongo(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerMongo(); // GatewayCreateProducerMongo | 
apiInstance.gatewayCreateProducerMongo(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerMongo**](GatewayCreateProducerMongo.md)|  | 

### Return type

[**GatewayCreateProducerMongoOutput**](GatewayCreateProducerMongoOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerMySQL

> GatewayCreateProducerMySQLOutput gatewayCreateProducerMySQL(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerMySQL(); // GatewayCreateProducerMySQL | 
apiInstance.gatewayCreateProducerMySQL(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerMySQL**](GatewayCreateProducerMySQL.md)|  | 

### Return type

[**GatewayCreateProducerMySQLOutput**](GatewayCreateProducerMySQLOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerPostgreSQL

> GatewayCreateProducerPostgreSQLOutput gatewayCreateProducerPostgreSQL(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerPostgreSQL(); // GatewayCreateProducerPostgreSQL | 
apiInstance.gatewayCreateProducerPostgreSQL(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerPostgreSQL**](GatewayCreateProducerPostgreSQL.md)|  | 

### Return type

[**GatewayCreateProducerPostgreSQLOutput**](GatewayCreateProducerPostgreSQLOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerRabbitMQ

> GatewayCreateProducerRabbitMQOutput gatewayCreateProducerRabbitMQ(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerRabbitMQ(); // GatewayCreateProducerRabbitMQ | 
apiInstance.gatewayCreateProducerRabbitMQ(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerRabbitMQ**](GatewayCreateProducerRabbitMQ.md)|  | 

### Return type

[**GatewayCreateProducerRabbitMQOutput**](GatewayCreateProducerRabbitMQOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerRdp

> GatewayCreateProducerRdpOutput gatewayCreateProducerRdp(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerRdp(); // GatewayCreateProducerRdp | 
apiInstance.gatewayCreateProducerRdp(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerRdp**](GatewayCreateProducerRdp.md)|  | 

### Return type

[**GatewayCreateProducerRdpOutput**](GatewayCreateProducerRdpOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerVenafi

> GatewayCreateProducerAwsOutput gatewayCreateProducerVenafi(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerAws(); // GatewayCreateProducerAws | 
apiInstance.gatewayCreateProducerVenafi(body, (error, data, response) => {
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
 **body** | [**GatewayCreateProducerAws**](GatewayCreateProducerAws.md)|  | 

### Return type

[**GatewayCreateProducerAwsOutput**](GatewayCreateProducerAwsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayDeleteProducer

> GatewayDeleteProducerOutput gatewayDeleteProducer(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayDeleteProducer(); // GatewayDeleteProducer | 
apiInstance.gatewayDeleteProducer(body, (error, data, response) => {
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
 **body** | [**GatewayDeleteProducer**](GatewayDeleteProducer.md)|  | 

### Return type

[**GatewayDeleteProducerOutput**](GatewayDeleteProducerOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayDeleteSubAdmins

> GatewayDeleteSubAdminsOutput gatewayDeleteSubAdmins(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayDeleteSubAdmins(); // GatewayDeleteSubAdmins | 
apiInstance.gatewayDeleteSubAdmins(body, (error, data, response) => {
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
 **body** | [**GatewayDeleteSubAdmins**](GatewayDeleteSubAdmins.md)|  | 

### Return type

[**GatewayDeleteSubAdminsOutput**](GatewayDeleteSubAdminsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayGetConfig

> AkeylessGatewayConfig gatewayGetConfig(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayGetConfig(); // GatewayGetConfig | 
apiInstance.gatewayGetConfig(body, (error, data, response) => {
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
 **body** | [**GatewayGetConfig**](GatewayGetConfig.md)|  | 

### Return type

[**AkeylessGatewayConfig**](AkeylessGatewayConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayGetProducer

> DSProducerDetails gatewayGetProducer(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayGetProducer(); // GatewayGetProducer | 
apiInstance.gatewayGetProducer(body, (error, data, response) => {
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
 **body** | [**GatewayGetProducer**](GatewayGetProducer.md)|  | 

### Return type

[**DSProducerDetails**](DSProducerDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayGetTmpUsers

> [TmpUserData] gatewayGetTmpUsers(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayGetTmpUsers(); // GatewayGetTmpUsers | 
apiInstance.gatewayGetTmpUsers(body, (error, data, response) => {
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
 **body** | [**GatewayGetTmpUsers**](GatewayGetTmpUsers.md)|  | 

### Return type

[**[TmpUserData]**](TmpUserData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayListProducers

> GetProducersListReplyObj gatewayListProducers(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayListProducers(); // GatewayListProducers | 
apiInstance.gatewayListProducers(body, (error, data, response) => {
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
 **body** | [**GatewayListProducers**](GatewayListProducers.md)|  | 

### Return type

[**GetProducersListReplyObj**](GetProducersListReplyObj.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayListSubAdmins

> GetSubAdminsListReplyObj gatewayListSubAdmins(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayListSubAdmins(); // GatewayListSubAdmins | 
apiInstance.gatewayListSubAdmins(body, (error, data, response) => {
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
 **body** | [**GatewayListSubAdmins**](GatewayListSubAdmins.md)|  | 

### Return type

[**GetSubAdminsListReplyObj**](GetSubAdminsListReplyObj.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayRevokeTmpUsers

> gatewayRevokeTmpUsers(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayRevokeTmpUsers(); // GatewayRevokeTmpUsers | 
apiInstance.gatewayRevokeTmpUsers(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GatewayRevokeTmpUsers**](GatewayRevokeTmpUsers.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayStartProducer

> GatewayStartProducerOutput gatewayStartProducer(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayStartProducer(); // GatewayStartProducer | 
apiInstance.gatewayStartProducer(body, (error, data, response) => {
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
 **body** | [**GatewayStartProducer**](GatewayStartProducer.md)|  | 

### Return type

[**GatewayStartProducerOutput**](GatewayStartProducerOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayStopProducer

> GatewayStopProducerOutput gatewayStopProducer(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayStopProducer(); // GatewayStopProducer | 
apiInstance.gatewayStopProducer(body, (error, data, response) => {
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
 **body** | [**GatewayStopProducer**](GatewayStopProducer.md)|  | 

### Return type

[**GatewayStopProducerOutput**](GatewayStopProducerOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayUpdateTmpUsers

> gatewayUpdateTmpUsers(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayUpdateTmpUsers(); // GatewayUpdateTmpUsers | 
apiInstance.gatewayUpdateTmpUsers(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GatewayUpdateTmpUsers**](GatewayUpdateTmpUsers.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAccountLogo

> {String: String} getAccountLogo()



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
apiInstance.getAccountLogo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
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


## getDynamicPkiCertificate

> {String: String} getDynamicPkiCertificate()



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
apiInstance.getDynamicPkiCertificate((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
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


## getTarget

> Target getTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetTarget(); // GetTarget | 
apiInstance.getTarget(body, (error, data, response) => {
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
 **body** | [**GetTarget**](GetTarget.md)|  | 

### Return type

[**Target**](Target.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTargetDetails

> GetTargetDetailsOutput getTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetTargetDetails(); // GetTargetDetails | 
apiInstance.getTargetDetails(body, (error, data, response) => {
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
 **body** | [**GetTargetDetails**](GetTargetDetails.md)|  | 

### Return type

[**GetTargetDetailsOutput**](GetTargetDetailsOutput.md)

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


## listTargets

> ListTargetsOutput listTargets(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ListTargets(); // ListTargets | 
apiInstance.listTargets(body, (error, data, response) => {
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
 **body** | [**ListTargets**](ListTargets.md)|  | 

### Return type

[**ListTargetsOutput**](ListTargetsOutput.md)

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


## rawCreds

> SystemAccessCredentialsReplyObj rawCreds(opts)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let opts = {
  'body': new akeyless.RawCreds() // RawCreds | 
};
apiInstance.rawCreds(opts, (error, data, response) => {
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
 **body** | [**RawCreds**](RawCreds.md)|  | [optional] 

### Return type

[**SystemAccessCredentialsReplyObj**](SystemAccessCredentialsReplyObj.md)

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


## updateAWSTargetDetails

> UpdateTargetOutput updateAWSTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateAWSTargetDetails(); // UpdateAWSTargetDetails | 
apiInstance.updateAWSTargetDetails(body, (error, data, response) => {
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
 **body** | [**UpdateAWSTargetDetails**](UpdateAWSTargetDetails.md)|  | 

### Return type

[**UpdateTargetOutput**](UpdateTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDBTargetDetails

> UpdateTargetOutput updateDBTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateDBTargetDetails(); // UpdateDBTargetDetails | 
apiInstance.updateDBTargetDetails(body, (error, data, response) => {
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
 **body** | [**UpdateDBTargetDetails**](UpdateDBTargetDetails.md)|  | 

### Return type

[**UpdateTargetOutput**](UpdateTargetOutput.md)

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


## updateRDPTargetDetails

> UpdateTargetOutput updateRDPTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateRDPTargetDetails(); // UpdateRDPTargetDetails | 
apiInstance.updateRDPTargetDetails(body, (error, data, response) => {
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
 **body** | [**UpdateRDPTargetDetails**](UpdateRDPTargetDetails.md)|  | 

### Return type

[**UpdateTargetOutput**](UpdateTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRabbitMQTargetDetails

> UpdateTargetOutput updateRabbitMQTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateRabbitMQTargetDetails(); // UpdateRabbitMQTargetDetails | 
apiInstance.updateRabbitMQTargetDetails(body, (error, data, response) => {
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
 **body** | [**UpdateRabbitMQTargetDetails**](UpdateRabbitMQTargetDetails.md)|  | 

### Return type

[**UpdateTargetOutput**](UpdateTargetOutput.md)

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


## updateSSHTargetDetails

> UpdateTargetOutput updateSSHTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateSSHTargetDetails(); // UpdateSSHTargetDetails | 
apiInstance.updateSSHTargetDetails(body, (error, data, response) => {
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
 **body** | [**UpdateSSHTargetDetails**](UpdateSSHTargetDetails.md)|  | 

### Return type

[**UpdateTargetOutput**](UpdateTargetOutput.md)

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


## updateTarget

> UpdateTargetOutput updateTarget(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateTarget(); // UpdateTarget | 
apiInstance.updateTarget(body, (error, data, response) => {
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
 **body** | [**UpdateTarget**](UpdateTarget.md)|  | 

### Return type

[**UpdateTargetOutput**](UpdateTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTargetDetails

> UpdateTargetOutput updateTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = null; // Object | 
apiInstance.updateTargetDetails(body, (error, data, response) => {
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
 **body** | **Object**|  | 

### Return type

[**UpdateTargetOutput**](UpdateTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWebTargetDetails

> UpdateTargetOutput updateWebTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless-javascript';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateWebTargetDetails(); // UpdateWebTargetDetails | 
apiInstance.updateWebTargetDetails(body, (error, data, response) => {
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
 **body** | [**UpdateWebTargetDetails**](UpdateWebTargetDetails.md)|  | 

### Return type

[**UpdateTargetOutput**](UpdateTargetOutput.md)

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

