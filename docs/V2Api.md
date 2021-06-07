# akeyless.V2Api

All URIs are relative to *https://api.akeyless.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assocRoleAuthMethod**](V2Api.md#assocRoleAuthMethod) | **POST** /assoc-role-am | 
[**assocTargetItem**](V2Api.md#assocTargetItem) | **POST** /assoc-target-item | 
[**auth**](V2Api.md#auth) | **POST** /auth | 
[**configure**](V2Api.md#configure) | **POST** /configure | 
[**createAWSTarget**](V2Api.md#createAWSTarget) | **POST** /create-aws-target | 
[**createArtifactoryTarget**](V2Api.md#createArtifactoryTarget) | **POST** /create-artifactory-target | 
[**createAuthMethod**](V2Api.md#createAuthMethod) | **POST** /create-auth-method | 
[**createAuthMethodAWSIAM**](V2Api.md#createAuthMethodAWSIAM) | **POST** /create-auth-method-aws-iam | 
[**createAuthMethodAzureAD**](V2Api.md#createAuthMethodAzureAD) | **POST** /create-auth-method-azure-ad | 
[**createAuthMethodGCP**](V2Api.md#createAuthMethodGCP) | **POST** /create-auth-method-gcp | 
[**createAuthMethodHuawei**](V2Api.md#createAuthMethodHuawei) | **POST** /create-auth-method-huawei | 
[**createAuthMethodOAuth2**](V2Api.md#createAuthMethodOAuth2) | **POST** /create-auth-method-oauth2 | 
[**createAuthMethodSAML**](V2Api.md#createAuthMethodSAML) | **POST** /create-auth-method-saml | 
[**createAuthMethodUniversalIdentity**](V2Api.md#createAuthMethodUniversalIdentity) | **POST** /create-auth-method-universal-identity | 
[**createAzureTarget**](V2Api.md#createAzureTarget) | **POST** /create-azure-target | 
[**createClassicKey**](V2Api.md#createClassicKey) | **POST** /create-classic-key | 
[**createDBTarget**](V2Api.md#createDBTarget) | **POST** /create-db-target | 
[**createDFCKey**](V2Api.md#createDFCKey) | **POST** /create-dfc-key | 
[**createDynamicSecret**](V2Api.md#createDynamicSecret) | **POST** /create-dynamic-secret | 
[**createEKSTarget**](V2Api.md#createEKSTarget) | **POST** /create-eks-target | 
[**createGKETarget**](V2Api.md#createGKETarget) | **POST** /create-gke-target | 
[**createGcpTarget**](V2Api.md#createGcpTarget) | **POST** /create-gcp-target | 
[**createKey**](V2Api.md#createKey) | **POST** /create-key | 
[**createPKICertIssuer**](V2Api.md#createPKICertIssuer) | **POST** /create-pki-cert-issuer | 
[**createRabbitMQTarget**](V2Api.md#createRabbitMQTarget) | **POST** /create-rabbitmq-target | 
[**createRole**](V2Api.md#createRole) | **POST** /create-role | 
[**createRotatedSecret**](V2Api.md#createRotatedSecret) | **POST** /create-rotated-secret | 
[**createSSHCertIssuer**](V2Api.md#createSSHCertIssuer) | **POST** /create-ssh-cert-issuer | 
[**createSSHTarget**](V2Api.md#createSSHTarget) | **POST** /create-ssh-target | 
[**createSecret**](V2Api.md#createSecret) | **POST** /create-secret | 
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
[**describePermissions**](V2Api.md#describePermissions) | **POST** /describe-permissions | 
[**encrypt**](V2Api.md#encrypt) | **POST** /encrypt | 
[**encryptPKCS1**](V2Api.md#encryptPKCS1) | **POST** /encrypt-pkcs1 | 
[**gatewayCreateProducerArtifactory**](V2Api.md#gatewayCreateProducerArtifactory) | **POST** /gateway-create-producer-artifactory | 
[**gatewayCreateProducerAws**](V2Api.md#gatewayCreateProducerAws) | **POST** /gateway-create-producer-aws | 
[**gatewayCreateProducerAzure**](V2Api.md#gatewayCreateProducerAzure) | **POST** /gateway-create-producer-azure | 
[**gatewayCreateProducerCertificateAutomation**](V2Api.md#gatewayCreateProducerCertificateAutomation) | **POST** /gateway-create-producer-certificate-automation | 
[**gatewayCreateProducerCustom**](V2Api.md#gatewayCreateProducerCustom) | **POST** /gateway-create-producer-custom | 
[**gatewayCreateProducerEks**](V2Api.md#gatewayCreateProducerEks) | **POST** /gateway-create-producer-eks | 
[**gatewayCreateProducerGcp**](V2Api.md#gatewayCreateProducerGcp) | **POST** /gateway-create-producer-gcp | 
[**gatewayCreateProducerGke**](V2Api.md#gatewayCreateProducerGke) | **POST** /gateway-create-producer-gke | 
[**gatewayCreateProducerMSSQL**](V2Api.md#gatewayCreateProducerMSSQL) | **POST** /gateway-create-producer-mssql | 
[**gatewayCreateProducerMongo**](V2Api.md#gatewayCreateProducerMongo) | **POST** /gateway-create-producer-mongo | 
[**gatewayCreateProducerMySQL**](V2Api.md#gatewayCreateProducerMySQL) | **POST** /gateway-create-producer-mysql | 
[**gatewayCreateProducerPostgreSQL**](V2Api.md#gatewayCreateProducerPostgreSQL) | **POST** /gateway-create-producer-postgresql | 
[**gatewayCreateProducerRabbitMQ**](V2Api.md#gatewayCreateProducerRabbitMQ) | **POST** /gateway-create-producer-rabbitmq | 
[**gatewayCreateProducerRdp**](V2Api.md#gatewayCreateProducerRdp) | **POST** /gateway-create-producer-rdp | 
[**gatewayCreateProducerSnowflake**](V2Api.md#gatewayCreateProducerSnowflake) | **POST** /gateway-create-producer-snowflake | 
[**gatewayDeleteAllowedManagementAccess**](V2Api.md#gatewayDeleteAllowedManagementAccess) | **POST** /gateway-delete-allowed-management-access | 
[**gatewayDeleteProducer**](V2Api.md#gatewayDeleteProducer) | **POST** /gateway-delete-producer | 
[**gatewayGetConfig**](V2Api.md#gatewayGetConfig) | **POST** /gateway-get-config | 
[**gatewayGetProducer**](V2Api.md#gatewayGetProducer) | **POST** /gateway-get-producer | 
[**gatewayGetTmpUsers**](V2Api.md#gatewayGetTmpUsers) | **POST** /gateway-get-producer-tmp-creds | 
[**gatewayListAllowedManagementAccess**](V2Api.md#gatewayListAllowedManagementAccess) | **POST** /gateway-list-allowed-management-access | 
[**gatewayListProducers**](V2Api.md#gatewayListProducers) | **POST** /gateway-list-producers | 
[**gatewayRevokeTmpUsers**](V2Api.md#gatewayRevokeTmpUsers) | **POST** /gateway-revoke-producer-tmp-creds | 
[**gatewayStartProducer**](V2Api.md#gatewayStartProducer) | **POST** /gateway-start-producer | 
[**gatewayStopProducer**](V2Api.md#gatewayStopProducer) | **POST** /gateway-stop-producer | 
[**gatewayUpdateTmpUsers**](V2Api.md#gatewayUpdateTmpUsers) | **POST** /gateway-update-producer-tmp-creds | 
[**getAccountLogo**](V2Api.md#getAccountLogo) | **POST** /get-account-logo | 
[**getAuthMethod**](V2Api.md#getAuthMethod) | **POST** /get-auth-method | 
[**getDynamicSecretValue**](V2Api.md#getDynamicSecretValue) | **POST** /get-dynamic-secret-value | 
[**getKubeExecCreds**](V2Api.md#getKubeExecCreds) | **POST** /get-kube-exec-creds | 
[**getPKICertificate**](V2Api.md#getPKICertificate) | **POST** /get-pki-certificate | 
[**getRSAPublic**](V2Api.md#getRSAPublic) | **POST** /get-rsa-public | 
[**getRole**](V2Api.md#getRole) | **POST** /get-role | 
[**getRotatedSecretValue**](V2Api.md#getRotatedSecretValue) | **POST** /get-rotated-secret-value | 
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
[**updateAssoc**](V2Api.md#updateAssoc) | **POST** /update-assoc | 
[**updateDBTargetDetails**](V2Api.md#updateDBTargetDetails) | **POST** /update-db-target-details | 
[**updateItem**](V2Api.md#updateItem) | **POST** /update-item | 
[**updateRDPTargetDetails**](V2Api.md#updateRDPTargetDetails) | **POST** /update-rdp-target-details | 
[**updateRabbitMQTargetDetails**](V2Api.md#updateRabbitMQTargetDetails) | **POST** /update-rabbitmq-target-details | 
[**updateRole**](V2Api.md#updateRole) | **POST** /update-role | 
[**updateRotatedSecret**](V2Api.md#updateRotatedSecret) | **POST** /update-rotated-secret | 
[**updateRotationSettings**](V2Api.md#updateRotationSettings) | **POST** /update-rotation-settingsrotate-key | 
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.AssocRoleAuthMethod(); // AssocRoleAuthMethod | 
apiInstance.assocRoleAuthMethod(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.AssocTargetItem(); // AssocTargetItem | 
apiInstance.assocTargetItem(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.Auth(); // Auth | 
apiInstance.auth(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.Configure(); // Configure | 
apiInstance.configure(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## createAWSTarget

> CreateAWSTargetOutput createAWSTarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAWSTarget(); // CreateAWSTarget | 
apiInstance.createAWSTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAWSTarget**](CreateAWSTarget.md)|  | 

### Return type

[**CreateAWSTargetOutput**](CreateAWSTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createArtifactoryTarget

> CreateArtifactoryTargetOutput createArtifactoryTarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateArtifactoryTarget(); // CreateArtifactoryTarget | 
apiInstance.createArtifactoryTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateArtifactoryTarget**](CreateArtifactoryTarget.md)|  | 

### Return type

[**CreateArtifactoryTargetOutput**](CreateArtifactoryTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethod

> CreateAuthMethodOutput createAuthMethod(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethod(); // CreateAuthMethod | 
apiInstance.createAuthMethod(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodAWSIAM(); // CreateAuthMethodAWSIAM | 
apiInstance.createAuthMethodAWSIAM(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodAzureAD(); // CreateAuthMethodAzureAD | 
apiInstance.createAuthMethodAzureAD(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## createAuthMethodGCP

> CreateAuthMethodGCPOutput createAuthMethodGCP(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodGCP(); // CreateAuthMethodGCP | 
apiInstance.createAuthMethodGCP(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAuthMethodGCP**](CreateAuthMethodGCP.md)|  | 

### Return type

[**CreateAuthMethodGCPOutput**](CreateAuthMethodGCPOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthMethodHuawei

> CreateAuthMethodHuaweiOutput createAuthMethodHuawei(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodHuawei(); // CreateAuthMethodHuawei | 
apiInstance.createAuthMethodHuawei(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodOAuth2(); // CreateAuthMethodOAuth2 | 
apiInstance.createAuthMethodOAuth2(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodSAML(); // CreateAuthMethodSAML | 
apiInstance.createAuthMethodSAML(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAuthMethodUniversalIdentity(); // CreateAuthMethodUniversalIdentity | 
apiInstance.createAuthMethodUniversalIdentity(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## createAzureTarget

> CreateAzureTargetOutput createAzureTarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateAzureTarget(); // CreateAzureTarget | 
apiInstance.createAzureTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAzureTarget**](CreateAzureTarget.md)|  | 

### Return type

[**CreateAzureTargetOutput**](CreateAzureTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createClassicKey

> CreateClassicKeyOutput createClassicKey(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateClassicKey(); // CreateClassicKey | 
apiInstance.createClassicKey(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateClassicKey**](CreateClassicKey.md)|  | 

### Return type

[**CreateClassicKeyOutput**](CreateClassicKeyOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDBTarget

> CreateDBTargetOutput createDBTarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateDBTarget(); // CreateDBTarget | 
apiInstance.createDBTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateDBTarget**](CreateDBTarget.md)|  | 

### Return type

[**CreateDBTargetOutput**](CreateDBTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDFCKey

> CreateDFCKeyOutput createDFCKey(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateDFCKey(); // CreateDFCKey | 
apiInstance.createDFCKey(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateDFCKey**](CreateDFCKey.md)|  | 

### Return type

[**CreateDFCKeyOutput**](CreateDFCKeyOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDynamicSecret

> Object createDynamicSecret(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateDynamicSecret(); // CreateDynamicSecret | 
apiInstance.createDynamicSecret(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## createEKSTarget

> CreateEKSTargetOutput createEKSTarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateEKSTarget(); // CreateEKSTarget | 
apiInstance.createEKSTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateEKSTarget**](CreateEKSTarget.md)|  | 

### Return type

[**CreateEKSTargetOutput**](CreateEKSTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createGKETarget

> CreateGKETargetOutput createGKETarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateGKETarget(); // CreateGKETarget | 
apiInstance.createGKETarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateGKETarget**](CreateGKETarget.md)|  | 

### Return type

[**CreateGKETargetOutput**](CreateGKETargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createGcpTarget

> CreateGcpTargetOutput createGcpTarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateGcpTarget(); // CreateGcpTarget | 
apiInstance.createGcpTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateGcpTarget**](CreateGcpTarget.md)|  | 

### Return type

[**CreateGcpTargetOutput**](CreateGcpTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createKey

> CreateKeyOutput createKey(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateKey(); // CreateKey | 
apiInstance.createKey(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreatePKICertIssuer(); // CreatePKICertIssuer | 
apiInstance.createPKICertIssuer(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

> CreateRabbitMQTargetOutput createRabbitMQTarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateRabbitMQTarget(); // CreateRabbitMQTarget | 
apiInstance.createRabbitMQTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateRabbitMQTarget**](CreateRabbitMQTarget.md)|  | 

### Return type

[**CreateRabbitMQTargetOutput**](CreateRabbitMQTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRole

> Object createRole(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateRole(); // CreateRole | 
apiInstance.createRole(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## createRotatedSecret

> CreateRotatedSecretOutput createRotatedSecret(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateRotatedSecret(); // CreateRotatedSecret | 
apiInstance.createRotatedSecret(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateRotatedSecret**](CreateRotatedSecret.md)|  | 

### Return type

[**CreateRotatedSecretOutput**](CreateRotatedSecretOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSSHCertIssuer

> CreateSSHCertIssuerOutput createSSHCertIssuer(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateSSHCertIssuer(); // CreateSSHCertIssuer | 
apiInstance.createSSHCertIssuer(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

> CreateSSHTargetOutput createSSHTarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateSSHTarget(); // CreateSSHTarget | 
apiInstance.createSSHTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateSSHTarget**](CreateSSHTarget.md)|  | 

### Return type

[**CreateSSHTargetOutput**](CreateSSHTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSecret

> CreateSecretOutput createSecret(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateSecret(); // CreateSecret | 
apiInstance.createSecret(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## createWebTarget

> CreateWebTargetOutput createWebTarget(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.CreateWebTarget(); // CreateWebTarget | 
apiInstance.createWebTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateWebTarget**](CreateWebTarget.md)|  | 

### Return type

[**CreateWebTargetOutput**](CreateWebTargetOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decrypt

> DecryptOutput decrypt(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.Decrypt(); // Decrypt | 
apiInstance.decrypt(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DecryptPKCS1(); // DecryptPKCS1 | 
apiInstance.decryptPKCS1(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteAuthMethod(); // DeleteAuthMethod | 
apiInstance.deleteAuthMethod(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteAuthMethods(); // DeleteAuthMethods | 
apiInstance.deleteAuthMethods(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteItem(); // DeleteItem | 
apiInstance.deleteItem(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteItems(); // DeleteItems | 
apiInstance.deleteItems(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteRole(); // DeleteRole | 
apiInstance.deleteRole(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteRoleAssociation(); // DeleteRoleAssociation | 
apiInstance.deleteRoleAssociation(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteRoleRule(); // DeleteRoleRule | 
apiInstance.deleteRoleRule(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteRoles(); // DeleteRoles | 
apiInstance.deleteRoles(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteTarget(); // DeleteTarget | 
apiInstance.deleteTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteTargetAssociation(); // DeleteTargetAssociation | 
apiInstance.deleteTargetAssociation(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DeleteTargets(); // DeleteTargets | 
apiInstance.deleteTargets(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DescribeItem(); // DescribeItem | 
apiInstance.describeItem(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## describePermissions

> DescribePermissionsOutput describePermissions(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.DescribePermissions(); // DescribePermissions | 
apiInstance.describePermissions(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DescribePermissions**](DescribePermissions.md)|  | 

### Return type

[**DescribePermissionsOutput**](DescribePermissionsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## encrypt

> EncryptOutput encrypt(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.Encrypt(); // Encrypt | 
apiInstance.encrypt(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.EncryptPKCS1(); // EncryptPKCS1 | 
apiInstance.encryptPKCS1(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## gatewayCreateProducerArtifactory

> GatewayCreateProducerArtifactoryOutput gatewayCreateProducerArtifactory(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerArtifactory(); // GatewayCreateProducerArtifactory | 
apiInstance.gatewayCreateProducerArtifactory(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerAws(); // GatewayCreateProducerAws | 
apiInstance.gatewayCreateProducerAws(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerAzure(); // GatewayCreateProducerAzure | 
apiInstance.gatewayCreateProducerAzure(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## gatewayCreateProducerCertificateAutomation

> GatewayCreateProducerCertificateAutomationOutput gatewayCreateProducerCertificateAutomation(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerCertificateAutomation(); // GatewayCreateProducerCertificateAutomation | 
apiInstance.gatewayCreateProducerCertificateAutomation(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GatewayCreateProducerCertificateAutomation**](GatewayCreateProducerCertificateAutomation.md)|  | 

### Return type

[**GatewayCreateProducerCertificateAutomationOutput**](GatewayCreateProducerCertificateAutomationOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerCustom

> GatewayCreateProducerCustomOutput gatewayCreateProducerCustom(opts)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let opts = {
  'body': new akeyless.GatewayCreateProducerCustom() // GatewayCreateProducerCustom | 
};
apiInstance.gatewayCreateProducerCustom(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GatewayCreateProducerCustom**](GatewayCreateProducerCustom.md)|  | [optional] 

### Return type

[**GatewayCreateProducerCustomOutput**](GatewayCreateProducerCustomOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerEks

> GatewayCreateProducerEksOutput gatewayCreateProducerEks(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerEks(); // GatewayCreateProducerEks | 
apiInstance.gatewayCreateProducerEks(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## gatewayCreateProducerGcp

> GatewayCreateProducerGcpOutput gatewayCreateProducerGcp(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerGcp(); // GatewayCreateProducerGcp | 
apiInstance.gatewayCreateProducerGcp(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GatewayCreateProducerGcp**](GatewayCreateProducerGcp.md)|  | 

### Return type

[**GatewayCreateProducerGcpOutput**](GatewayCreateProducerGcpOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayCreateProducerGke

> GatewayCreateProducerGkeOutput gatewayCreateProducerGke(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerGke(); // GatewayCreateProducerGke | 
apiInstance.gatewayCreateProducerGke(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerMSSQL(); // GatewayCreateProducerMSSQL | 
apiInstance.gatewayCreateProducerMSSQL(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerMongo(); // GatewayCreateProducerMongo | 
apiInstance.gatewayCreateProducerMongo(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerMySQL(); // GatewayCreateProducerMySQL | 
apiInstance.gatewayCreateProducerMySQL(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerPostgreSQL(); // GatewayCreateProducerPostgreSQL | 
apiInstance.gatewayCreateProducerPostgreSQL(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerRabbitMQ(); // GatewayCreateProducerRabbitMQ | 
apiInstance.gatewayCreateProducerRabbitMQ(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerRdp(); // GatewayCreateProducerRdp | 
apiInstance.gatewayCreateProducerRdp(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## gatewayCreateProducerSnowflake

> GatewayCreateProducerSnowflakeOutput gatewayCreateProducerSnowflake(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayCreateProducerSnowflake(); // GatewayCreateProducerSnowflake | 
apiInstance.gatewayCreateProducerSnowflake(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GatewayCreateProducerSnowflake**](GatewayCreateProducerSnowflake.md)|  | 

### Return type

[**GatewayCreateProducerSnowflakeOutput**](GatewayCreateProducerSnowflakeOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayDeleteAllowedManagementAccess

> Object gatewayDeleteAllowedManagementAccess(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayDeleteAllowedManagementAccess(); // GatewayDeleteAllowedManagementAccess | 
apiInstance.gatewayDeleteAllowedManagementAccess(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GatewayDeleteAllowedManagementAccess**](GatewayDeleteAllowedManagementAccess.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayDeleteProducer

> GatewayDeleteProducerOutput gatewayDeleteProducer(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayDeleteProducer(); // GatewayDeleteProducer | 
apiInstance.gatewayDeleteProducer(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## gatewayGetConfig

> AkeylessGatewayConfig gatewayGetConfig(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayGetConfig(); // GatewayGetConfig | 
apiInstance.gatewayGetConfig(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayGetProducer(); // GatewayGetProducer | 
apiInstance.gatewayGetProducer(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayGetTmpUsers(); // GatewayGetTmpUsers | 
apiInstance.gatewayGetTmpUsers(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## gatewayListAllowedManagementAccess

> GetSubAdminsListReplyObj gatewayListAllowedManagementAccess(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayListAllowedManagementAccess(); // GatewayListAllowedManagementAccess | 
apiInstance.gatewayListAllowedManagementAccess(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GatewayListAllowedManagementAccess**](GatewayListAllowedManagementAccess.md)|  | 

### Return type

[**GetSubAdminsListReplyObj**](GetSubAdminsListReplyObj.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewayListProducers

> GetProducersListReplyObj gatewayListProducers(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayListProducers(); // GatewayListProducers | 
apiInstance.gatewayListProducers(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## gatewayRevokeTmpUsers

> gatewayRevokeTmpUsers(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayRevokeTmpUsers(); // GatewayRevokeTmpUsers | 
apiInstance.gatewayRevokeTmpUsers(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayStartProducer(); // GatewayStartProducer | 
apiInstance.gatewayStartProducer(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayStopProducer(); // GatewayStopProducer | 
apiInstance.gatewayStopProducer(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GatewayUpdateTmpUsers(); // GatewayUpdateTmpUsers | 
apiInstance.gatewayUpdateTmpUsers(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
apiInstance.getAccountLogo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetAuthMethod(); // GetAuthMethod | 
apiInstance.getAuthMethod(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetDynamicSecretValue(); // GetDynamicSecretValue | 
apiInstance.getDynamicSecretValue(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## getKubeExecCreds

> GetKubeExecCredsOutput getKubeExecCreds(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetKubeExecCreds(); // GetKubeExecCreds | 
apiInstance.getKubeExecCreds(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetKubeExecCreds**](GetKubeExecCreds.md)|  | 

### Return type

[**GetKubeExecCredsOutput**](GetKubeExecCredsOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPKICertificate

> GetPKICertificateOutput getPKICertificate(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetPKICertificate(); // GetPKICertificate | 
apiInstance.getPKICertificate(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetPKICertificate**](GetPKICertificate.md)|  | 

### Return type

[**GetPKICertificateOutput**](GetPKICertificateOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRSAPublic

> GetRSAPublicOutput getRSAPublic(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetRSAPublic(); // GetRSAPublic | 
apiInstance.getRSAPublic(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetRole(); // GetRole | 
apiInstance.getRole(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## getRotatedSecretValue

> {String: String} getRotatedSecretValue(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetRotatedSecretValue(); // GetRotatedSecretValue | 
apiInstance.getRotatedSecretValue(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetRotatedSecretValue**](GetRotatedSecretValue.md)|  | 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSSHCertificate

> GetSSHCertificateOutput getSSHCertificate(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetSSHCertificate(); // GetSSHCertificate | 
apiInstance.getSSHCertificate(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetSecretValue(); // GetSecretValue | 
apiInstance.getSecretValue(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetTarget(); // GetTarget | 
apiInstance.getTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.GetTargetDetails(); // GetTargetDetails | 
apiInstance.getTargetDetails(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ListAuthMethods(); // ListAuthMethods | 
apiInstance.listAuthMethods(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ListItems(); // ListItems | 
apiInstance.listItems(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ListRoles(); // ListRoles | 
apiInstance.listRoles(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ListTargets(); // ListTargets | 
apiInstance.listTargets(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.MoveObjects(); // MoveObjects | 
apiInstance.moveObjects(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let opts = {
  'body': new akeyless.RawCreds() // RawCreds | 
};
apiInstance.rawCreds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.RefreshKey(); // RefreshKey | 
apiInstance.refreshKey(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.ReverseRBAC(); // ReverseRBAC | 
apiInstance.reverseRBAC(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.RollbackSecret(); // RollbackSecret | 
apiInstance.rollbackSecret(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateRotationSettings(); // UpdateRotationSettings | 
apiInstance.rotateKey(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateRotationSettings**](UpdateRotationSettings.md)|  | 

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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.SetItemState(); // SetItemState | 
apiInstance.setItemState(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.SetRoleRule(); // SetRoleRule | 
apiInstance.setRoleRule(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.SignPKCS1(); // SignPKCS1 | 
apiInstance.signPKCS1(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.StaticCredsAuth(); // StaticCredsAuth | 
apiInstance.staticCredsAuth(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidCreateChildToken(); // UidCreateChildToken | 
apiInstance.uidCreateChildToken(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidGenerateToken(); // UidGenerateToken | 
apiInstance.uidGenerateToken(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidListChildren(); // UidListChildren | 
apiInstance.uidListChildren(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidRevokeToken(); // UidRevokeToken | 
apiInstance.uidRevokeToken(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UidRotateToken(); // UidRotateToken | 
apiInstance.uidRotateToken(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateAWSTargetDetails(); // UpdateAWSTargetDetails | 
apiInstance.updateAWSTargetDetails(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## updateAssoc

> Object updateAssoc(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateAssoc(); // UpdateAssoc | 
apiInstance.updateAssoc(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateAssoc**](UpdateAssoc.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDBTargetDetails

> UpdateTargetOutput updateDBTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateDBTargetDetails(); // UpdateDBTargetDetails | 
apiInstance.updateDBTargetDetails(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateItem(); // UpdateItem | 
apiInstance.updateItem(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateRDPTargetDetails(); // UpdateRDPTargetDetails | 
apiInstance.updateRDPTargetDetails(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateRabbitMQTargetDetails(); // UpdateRabbitMQTargetDetails | 
apiInstance.updateRabbitMQTargetDetails(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateRole(); // UpdateRole | 
apiInstance.updateRole(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## updateRotatedSecret

> UpdateRotatedSecretOutput updateRotatedSecret(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateRotatedSecret(); // UpdateRotatedSecret | 
apiInstance.updateRotatedSecret(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateRotatedSecret**](UpdateRotatedSecret.md)|  | 

### Return type

[**UpdateRotatedSecretOutput**](UpdateRotatedSecretOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRotationSettings

> RotateKeyOutput updateRotationSettings()



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
apiInstance.updateRotationSettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RotateKeyOutput**](RotateKeyOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSSHTargetDetails

> UpdateTargetOutput updateSSHTargetDetails(body)



### Example

```javascript
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateSSHTargetDetails(); // UpdateSSHTargetDetails | 
apiInstance.updateSSHTargetDetails(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateSecretVal(); // UpdateSecretVal | 
apiInstance.updateSecretVal(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateTarget(); // UpdateTarget | 
apiInstance.updateTarget(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = null; // Object | 
apiInstance.updateTargetDetails(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UpdateWebTargetDetails(); // UpdateWebTargetDetails | 
apiInstance.updateWebTargetDetails(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.UploadRSA(); // UploadRSA | 
apiInstance.uploadRSA(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
import akeyless from 'akeyless';

let apiInstance = new akeyless.V2Api();
let body = new akeyless.VerifyPKCS1(); // VerifyPKCS1 | 
apiInstance.verifyPKCS1(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

