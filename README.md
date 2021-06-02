# akeyless

akeyless - JavaScript client for akeyless
The purpose of this application is to provide access to Akeyless API.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0
- Package version: 2.4.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://akeyless.io](http://akeyless.io)

To install this package, use:

```
npm install akeyless
```

## Getting started

```js
const akeyless = require('akeyless');

const client = new akeyless.ApiClient();

// default: public API Gateway
client.basePath = 'https://api.akeyless.io';

// use port 8081 exposed by the deployment:
// client.basePath = 'https://gateway.company.com:8081';

// use port 8080 exposed by the deployment with /v2 prefix:
// client.basePath = 'https://gateway.company.com:8080/v2';

const api = new akeyless.V2Api(client);

api.auth(akeyless.Auth.constructFromObject({
    'admin-email': "foo@example.com",
    'admin-password': "strong-password",
})).then(data => data.token)
    .then(token => {
        return api.getSecretValue(akeyless.GetSecretValue.constructFromObject({
            'name': 'my-secret',
        }))
    })
    .then(console.log)
    .catch(console.log)
```
## Documentation for API Endpoints

All URIs are relative to *https://api.akeyless.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*akeyless.V2Api* | [**assocRoleAuthMethod**](docs/V2Api.md#assocRoleAuthMethod) | **POST** /assoc-role-am | 
*akeyless.V2Api* | [**assocTargetItem**](docs/V2Api.md#assocTargetItem) | **POST** /assoc-target-item | 
*akeyless.V2Api* | [**auth**](docs/V2Api.md#auth) | **POST** /auth | 
*akeyless.V2Api* | [**configure**](docs/V2Api.md#configure) | **POST** /configure | 
*akeyless.V2Api* | [**createAWSTarget**](docs/V2Api.md#createAWSTarget) | **POST** /create-aws-target | 
*akeyless.V2Api* | [**createArtifactoryTarget**](docs/V2Api.md#createArtifactoryTarget) | **POST** /create-artifactory-target | 
*akeyless.V2Api* | [**createAuthMethod**](docs/V2Api.md#createAuthMethod) | **POST** /create-auth-method | 
*akeyless.V2Api* | [**createAuthMethodAWSIAM**](docs/V2Api.md#createAuthMethodAWSIAM) | **POST** /create-auth-method-aws-iam | 
*akeyless.V2Api* | [**createAuthMethodAzureAD**](docs/V2Api.md#createAuthMethodAzureAD) | **POST** /create-auth-method-azure-ad | 
*akeyless.V2Api* | [**createAuthMethodGCP**](docs/V2Api.md#createAuthMethodGCP) | **POST** /create-auth-method-gcp | 
*akeyless.V2Api* | [**createAuthMethodHuawei**](docs/V2Api.md#createAuthMethodHuawei) | **POST** /create-auth-method-huawei | 
*akeyless.V2Api* | [**createAuthMethodOAuth2**](docs/V2Api.md#createAuthMethodOAuth2) | **POST** /create-auth-method-oauth2 | 
*akeyless.V2Api* | [**createAuthMethodSAML**](docs/V2Api.md#createAuthMethodSAML) | **POST** /create-auth-method-saml | 
*akeyless.V2Api* | [**createAuthMethodUniversalIdentity**](docs/V2Api.md#createAuthMethodUniversalIdentity) | **POST** /create-auth-method-universal-identity | 
*akeyless.V2Api* | [**createAzureTarget**](docs/V2Api.md#createAzureTarget) | **POST** /create-azure-target | 
*akeyless.V2Api* | [**createClassicKey**](docs/V2Api.md#createClassicKey) | **POST** /create-classic-key | 
*akeyless.V2Api* | [**createDBTarget**](docs/V2Api.md#createDBTarget) | **POST** /create-db-target | 
*akeyless.V2Api* | [**createDFCKey**](docs/V2Api.md#createDFCKey) | **POST** /create-dfc-key | 
*akeyless.V2Api* | [**createDynamicSecret**](docs/V2Api.md#createDynamicSecret) | **POST** /create-dynamic-secret | 
*akeyless.V2Api* | [**createEKSTarget**](docs/V2Api.md#createEKSTarget) | **POST** /create-eks-target | 
*akeyless.V2Api* | [**createGKETarget**](docs/V2Api.md#createGKETarget) | **POST** /create-gke-target | 
*akeyless.V2Api* | [**createGcpTarget**](docs/V2Api.md#createGcpTarget) | **POST** /create-gcp-target | 
*akeyless.V2Api* | [**createKey**](docs/V2Api.md#createKey) | **POST** /create-key | 
*akeyless.V2Api* | [**createPKICertIssuer**](docs/V2Api.md#createPKICertIssuer) | **POST** /create-pki-cert-issuer | 
*akeyless.V2Api* | [**createRabbitMQTarget**](docs/V2Api.md#createRabbitMQTarget) | **POST** /create-rabbitmq-target | 
*akeyless.V2Api* | [**createRole**](docs/V2Api.md#createRole) | **POST** /create-role | 
*akeyless.V2Api* | [**createRotatedSecret**](docs/V2Api.md#createRotatedSecret) | **POST** /create-rotated-secret | 
*akeyless.V2Api* | [**createSSHCertIssuer**](docs/V2Api.md#createSSHCertIssuer) | **POST** /create-ssh-cert-issuer | 
*akeyless.V2Api* | [**createSSHTarget**](docs/V2Api.md#createSSHTarget) | **POST** /create-ssh-target | 
*akeyless.V2Api* | [**createSecret**](docs/V2Api.md#createSecret) | **POST** /create-secret | 
*akeyless.V2Api* | [**createWebTarget**](docs/V2Api.md#createWebTarget) | **POST** /create-web-target | 
*akeyless.V2Api* | [**decrypt**](docs/V2Api.md#decrypt) | **POST** /decrypt | 
*akeyless.V2Api* | [**decryptPKCS1**](docs/V2Api.md#decryptPKCS1) | **POST** /decrypt-pkcs1 | 
*akeyless.V2Api* | [**deleteAuthMethod**](docs/V2Api.md#deleteAuthMethod) | **POST** /delete-auth-method | 
*akeyless.V2Api* | [**deleteAuthMethods**](docs/V2Api.md#deleteAuthMethods) | **POST** /delete-auth-methods | 
*akeyless.V2Api* | [**deleteItem**](docs/V2Api.md#deleteItem) | **POST** /delete-item | 
*akeyless.V2Api* | [**deleteItems**](docs/V2Api.md#deleteItems) | **POST** /delete-items | 
*akeyless.V2Api* | [**deleteRole**](docs/V2Api.md#deleteRole) | **POST** /delete-role | 
*akeyless.V2Api* | [**deleteRoleAssociation**](docs/V2Api.md#deleteRoleAssociation) | **POST** /delete-assoc | 
*akeyless.V2Api* | [**deleteRoleRule**](docs/V2Api.md#deleteRoleRule) | **POST** /delete-role-rule | 
*akeyless.V2Api* | [**deleteRoles**](docs/V2Api.md#deleteRoles) | **POST** /delete-roles | 
*akeyless.V2Api* | [**deleteTarget**](docs/V2Api.md#deleteTarget) | **POST** /delete-target | 
*akeyless.V2Api* | [**deleteTargetAssociation**](docs/V2Api.md#deleteTargetAssociation) | **POST** /delete-assoc-target-item | 
*akeyless.V2Api* | [**deleteTargets**](docs/V2Api.md#deleteTargets) | **POST** /delete-targets | 
*akeyless.V2Api* | [**describeItem**](docs/V2Api.md#describeItem) | **POST** /describe-item | 
*akeyless.V2Api* | [**describePermissions**](docs/V2Api.md#describePermissions) | **POST** /describe-permissions | 
*akeyless.V2Api* | [**encrypt**](docs/V2Api.md#encrypt) | **POST** /encrypt | 
*akeyless.V2Api* | [**encryptPKCS1**](docs/V2Api.md#encryptPKCS1) | **POST** /encrypt-pkcs1 | 
*akeyless.V2Api* | [**gatewayAddSubAdmins**](docs/V2Api.md#gatewayAddSubAdmins) | **POST** /gateway-add-sub-admins | 
*akeyless.V2Api* | [**gatewayCreateProducerArtifactory**](docs/V2Api.md#gatewayCreateProducerArtifactory) | **POST** /gateway-create-producer-artifactory | 
*akeyless.V2Api* | [**gatewayCreateProducerAws**](docs/V2Api.md#gatewayCreateProducerAws) | **POST** /gateway-create-producer-aws | 
*akeyless.V2Api* | [**gatewayCreateProducerAzure**](docs/V2Api.md#gatewayCreateProducerAzure) | **POST** /gateway-create-producer-azure | 
*akeyless.V2Api* | [**gatewayCreateProducerCertificateAutomation**](docs/V2Api.md#gatewayCreateProducerCertificateAutomation) | **POST** /gateway-create-producer-certificate-automation | 
*akeyless.V2Api* | [**gatewayCreateProducerCustom**](docs/V2Api.md#gatewayCreateProducerCustom) | **POST** /gateway-create-producer-custom | 
*akeyless.V2Api* | [**gatewayCreateProducerEks**](docs/V2Api.md#gatewayCreateProducerEks) | **POST** /gateway-create-producer-eks | 
*akeyless.V2Api* | [**gatewayCreateProducerGcp**](docs/V2Api.md#gatewayCreateProducerGcp) | **POST** /gateway-create-producer-gcp | 
*akeyless.V2Api* | [**gatewayCreateProducerGke**](docs/V2Api.md#gatewayCreateProducerGke) | **POST** /gateway-create-producer-gke | 
*akeyless.V2Api* | [**gatewayCreateProducerMSSQL**](docs/V2Api.md#gatewayCreateProducerMSSQL) | **POST** /gateway-create-producer-mssql | 
*akeyless.V2Api* | [**gatewayCreateProducerMongo**](docs/V2Api.md#gatewayCreateProducerMongo) | **POST** /gateway-create-producer-mongo | 
*akeyless.V2Api* | [**gatewayCreateProducerMySQL**](docs/V2Api.md#gatewayCreateProducerMySQL) | **POST** /gateway-create-producer-mysql | 
*akeyless.V2Api* | [**gatewayCreateProducerPostgreSQL**](docs/V2Api.md#gatewayCreateProducerPostgreSQL) | **POST** /gateway-create-producer-postgresql | 
*akeyless.V2Api* | [**gatewayCreateProducerRabbitMQ**](docs/V2Api.md#gatewayCreateProducerRabbitMQ) | **POST** /gateway-create-producer-rabbitmq | 
*akeyless.V2Api* | [**gatewayCreateProducerRdp**](docs/V2Api.md#gatewayCreateProducerRdp) | **POST** /gateway-create-producer-rdp | 
*akeyless.V2Api* | [**gatewayCreateProducerSnowflake**](docs/V2Api.md#gatewayCreateProducerSnowflake) | **POST** /gateway-create-producer-snowflake | 
*akeyless.V2Api* | [**gatewayDeleteProducer**](docs/V2Api.md#gatewayDeleteProducer) | **POST** /gateway-delete-producer | 
*akeyless.V2Api* | [**gatewayDeleteSubAdmins**](docs/V2Api.md#gatewayDeleteSubAdmins) | **POST** /gateway-delete-sub-admins | 
*akeyless.V2Api* | [**gatewayGetConfig**](docs/V2Api.md#gatewayGetConfig) | **POST** /gateway-get-config | 
*akeyless.V2Api* | [**gatewayGetProducer**](docs/V2Api.md#gatewayGetProducer) | **POST** /gateway-get-producer | 
*akeyless.V2Api* | [**gatewayGetTmpUsers**](docs/V2Api.md#gatewayGetTmpUsers) | **POST** /gateway-get-producer-tmp-creds | 
*akeyless.V2Api* | [**gatewayListProducers**](docs/V2Api.md#gatewayListProducers) | **POST** /gateway-list-producers | 
*akeyless.V2Api* | [**gatewayListSubAdmins**](docs/V2Api.md#gatewayListSubAdmins) | **POST** /gateway-list-SubAdmins | 
*akeyless.V2Api* | [**gatewayRevokeTmpUsers**](docs/V2Api.md#gatewayRevokeTmpUsers) | **POST** /gateway-revoke-producer-tmp-creds | 
*akeyless.V2Api* | [**gatewayStartProducer**](docs/V2Api.md#gatewayStartProducer) | **POST** /gateway-start-producer | 
*akeyless.V2Api* | [**gatewayStopProducer**](docs/V2Api.md#gatewayStopProducer) | **POST** /gateway-stop-producer | 
*akeyless.V2Api* | [**gatewayUpdateTmpUsers**](docs/V2Api.md#gatewayUpdateTmpUsers) | **POST** /gateway-update-producer-tmp-creds | 
*akeyless.V2Api* | [**getAccountLogo**](docs/V2Api.md#getAccountLogo) | **POST** /get-account-logo | 
*akeyless.V2Api* | [**getAuthMethod**](docs/V2Api.md#getAuthMethod) | **POST** /get-auth-method | 
*akeyless.V2Api* | [**getDynamicSecretValue**](docs/V2Api.md#getDynamicSecretValue) | **POST** /get-dynamic-secret-value | 
*akeyless.V2Api* | [**getKubeExecCreds**](docs/V2Api.md#getKubeExecCreds) | **POST** /get-kube-exec-creds | 
*akeyless.V2Api* | [**getPKICertificate**](docs/V2Api.md#getPKICertificate) | **POST** /get-pki-certificate | 
*akeyless.V2Api* | [**getRSAPublic**](docs/V2Api.md#getRSAPublic) | **POST** /get-rsa-public | 
*akeyless.V2Api* | [**getRole**](docs/V2Api.md#getRole) | **POST** /get-role | 
*akeyless.V2Api* | [**getRotatedSecretValue**](docs/V2Api.md#getRotatedSecretValue) | **POST** /get-rotated-secret-value | 
*akeyless.V2Api* | [**getSSHCertificate**](docs/V2Api.md#getSSHCertificate) | **POST** /get-ssh-certificate | 
*akeyless.V2Api* | [**getSecretValue**](docs/V2Api.md#getSecretValue) | **POST** /get-secret-value | 
*akeyless.V2Api* | [**getTarget**](docs/V2Api.md#getTarget) | **POST** /get-target | 
*akeyless.V2Api* | [**getTargetDetails**](docs/V2Api.md#getTargetDetails) | **POST** /get-target-details | 
*akeyless.V2Api* | [**listAuthMethods**](docs/V2Api.md#listAuthMethods) | **POST** /list-auth-methods | 
*akeyless.V2Api* | [**listItems**](docs/V2Api.md#listItems) | **POST** /list-items | 
*akeyless.V2Api* | [**listRoles**](docs/V2Api.md#listRoles) | **POST** /list-roles | 
*akeyless.V2Api* | [**listTargets**](docs/V2Api.md#listTargets) | **POST** /list-targets | 
*akeyless.V2Api* | [**moveObjects**](docs/V2Api.md#moveObjects) | **POST** /move-objects | 
*akeyless.V2Api* | [**rawCreds**](docs/V2Api.md#rawCreds) | **POST** /raw-creds | 
*akeyless.V2Api* | [**refreshKey**](docs/V2Api.md#refreshKey) | **POST** /refresh-key | 
*akeyless.V2Api* | [**reverseRBAC**](docs/V2Api.md#reverseRBAC) | **POST** /reverse-rbac | 
*akeyless.V2Api* | [**rollbackSecret**](docs/V2Api.md#rollbackSecret) | **POST** /rollback-secret | 
*akeyless.V2Api* | [**rotateKey**](docs/V2Api.md#rotateKey) | **POST** /rotate-key | 
*akeyless.V2Api* | [**setItemState**](docs/V2Api.md#setItemState) | **POST** /set-item-state | 
*akeyless.V2Api* | [**setRoleRule**](docs/V2Api.md#setRoleRule) | **POST** /set-role-rule | 
*akeyless.V2Api* | [**signPKCS1**](docs/V2Api.md#signPKCS1) | **POST** /sign-pkcs1 | 
*akeyless.V2Api* | [**staticCredsAuth**](docs/V2Api.md#staticCredsAuth) | **POST** /static-creds-auth | 
*akeyless.V2Api* | [**uidCreateChildToken**](docs/V2Api.md#uidCreateChildToken) | **POST** /uid-create-child-token | 
*akeyless.V2Api* | [**uidGenerateToken**](docs/V2Api.md#uidGenerateToken) | **POST** /uid-generate-token | 
*akeyless.V2Api* | [**uidListChildren**](docs/V2Api.md#uidListChildren) | **POST** /uid-list-children | 
*akeyless.V2Api* | [**uidRevokeToken**](docs/V2Api.md#uidRevokeToken) | **POST** /uid-revoke-token | 
*akeyless.V2Api* | [**uidRotateToken**](docs/V2Api.md#uidRotateToken) | **POST** /uid-rotate-token | 
*akeyless.V2Api* | [**updateAWSTargetDetails**](docs/V2Api.md#updateAWSTargetDetails) | **POST** /update-aws-target-details | 
*akeyless.V2Api* | [**updateAssoc**](docs/V2Api.md#updateAssoc) | **POST** /update-assoc | 
*akeyless.V2Api* | [**updateDBTargetDetails**](docs/V2Api.md#updateDBTargetDetails) | **POST** /update-db-target-details | 
*akeyless.V2Api* | [**updateItem**](docs/V2Api.md#updateItem) | **POST** /update-item | 
*akeyless.V2Api* | [**updateRDPTargetDetails**](docs/V2Api.md#updateRDPTargetDetails) | **POST** /update-rdp-target-details | 
*akeyless.V2Api* | [**updateRabbitMQTargetDetails**](docs/V2Api.md#updateRabbitMQTargetDetails) | **POST** /update-rabbitmq-target-details | 
*akeyless.V2Api* | [**updateRole**](docs/V2Api.md#updateRole) | **POST** /update-role | 
*akeyless.V2Api* | [**updateRotatedSecret**](docs/V2Api.md#updateRotatedSecret) | **POST** /update-rotated-secret | 
*akeyless.V2Api* | [**updateRotationSettings**](docs/V2Api.md#updateRotationSettings) | **POST** /update-rotation-settingsrotate-key | 
*akeyless.V2Api* | [**updateSSHTargetDetails**](docs/V2Api.md#updateSSHTargetDetails) | **POST** /update-ssh-target-details | 
*akeyless.V2Api* | [**updateSecretVal**](docs/V2Api.md#updateSecretVal) | **POST** /update-secret-val | 
*akeyless.V2Api* | [**updateTarget**](docs/V2Api.md#updateTarget) | **POST** /update-target | 
*akeyless.V2Api* | [**updateTargetDetails**](docs/V2Api.md#updateTargetDetails) | **POST** /update-target-details | 
*akeyless.V2Api* | [**updateWebTargetDetails**](docs/V2Api.md#updateWebTargetDetails) | **POST** /update-web-target-details | 
*akeyless.V2Api* | [**uploadRSA**](docs/V2Api.md#uploadRSA) | **POST** /upload-rsa | 
*akeyless.V2Api* | [**verifyPKCS1**](docs/V2Api.md#verifyPKCS1) | **POST** /verify-pkcs1 | 


## Documentation for Models

 - [akeyless.APIKeyAccessRules](docs/APIKeyAccessRules.md)
 - [akeyless.AWSIAMAccessRules](docs/AWSIAMAccessRules.md)
 - [akeyless.AWSPayload](docs/AWSPayload.md)
 - [akeyless.AWSSecretsMigration](docs/AWSSecretsMigration.md)
 - [akeyless.AdminsConfigPart](docs/AdminsConfigPart.md)
 - [akeyless.AkeylessGatewayConfig](docs/AkeylessGatewayConfig.md)
 - [akeyless.AllowedAccess](docs/AllowedAccess.md)
 - [akeyless.AssocRoleAuthMethod](docs/AssocRoleAuthMethod.md)
 - [akeyless.AssocTargetItem](docs/AssocTargetItem.md)
 - [akeyless.Auth](docs/Auth.md)
 - [akeyless.AuthMethod](docs/AuthMethod.md)
 - [akeyless.AuthMethodAccessInfo](docs/AuthMethodAccessInfo.md)
 - [akeyless.AuthMethodRoleAssociation](docs/AuthMethodRoleAssociation.md)
 - [akeyless.AuthOutput](docs/AuthOutput.md)
 - [akeyless.AwsS3LogForwardingConfig](docs/AwsS3LogForwardingConfig.md)
 - [akeyless.AzureADAccessRules](docs/AzureADAccessRules.md)
 - [akeyless.AzureKeyVaultMigration](docs/AzureKeyVaultMigration.md)
 - [akeyless.AzureLogAnalyticsForwardingConfig](docs/AzureLogAnalyticsForwardingConfig.md)
 - [akeyless.AzurePayload](docs/AzurePayload.md)
 - [akeyless.CFConfigPart](docs/CFConfigPart.md)
 - [akeyless.CacheConfigPart](docs/CacheConfigPart.md)
 - [akeyless.CertificateIssueInfo](docs/CertificateIssueInfo.md)
 - [akeyless.ClassicKeyDetailsInfo](docs/ClassicKeyDetailsInfo.md)
 - [akeyless.ClassicKeyStatusInfo](docs/ClassicKeyStatusInfo.md)
 - [akeyless.ClassicKeyTargetInfo](docs/ClassicKeyTargetInfo.md)
 - [akeyless.ClientData](docs/ClientData.md)
 - [akeyless.Configure](docs/Configure.md)
 - [akeyless.ConfigureOutput](docs/ConfigureOutput.md)
 - [akeyless.CreateAWSTarget](docs/CreateAWSTarget.md)
 - [akeyless.CreateAWSTargetOutput](docs/CreateAWSTargetOutput.md)
 - [akeyless.CreateArtifactoryTarget](docs/CreateArtifactoryTarget.md)
 - [akeyless.CreateArtifactoryTargetOutput](docs/CreateArtifactoryTargetOutput.md)
 - [akeyless.CreateAuthMethod](docs/CreateAuthMethod.md)
 - [akeyless.CreateAuthMethodAWSIAM](docs/CreateAuthMethodAWSIAM.md)
 - [akeyless.CreateAuthMethodAWSIAMOutput](docs/CreateAuthMethodAWSIAMOutput.md)
 - [akeyless.CreateAuthMethodAzureAD](docs/CreateAuthMethodAzureAD.md)
 - [akeyless.CreateAuthMethodAzureADOutput](docs/CreateAuthMethodAzureADOutput.md)
 - [akeyless.CreateAuthMethodGCP](docs/CreateAuthMethodGCP.md)
 - [akeyless.CreateAuthMethodGCPOutput](docs/CreateAuthMethodGCPOutput.md)
 - [akeyless.CreateAuthMethodHuawei](docs/CreateAuthMethodHuawei.md)
 - [akeyless.CreateAuthMethodHuaweiOutput](docs/CreateAuthMethodHuaweiOutput.md)
 - [akeyless.CreateAuthMethodLDAP](docs/CreateAuthMethodLDAP.md)
 - [akeyless.CreateAuthMethodLDAPOutput](docs/CreateAuthMethodLDAPOutput.md)
 - [akeyless.CreateAuthMethodOAuth2](docs/CreateAuthMethodOAuth2.md)
 - [akeyless.CreateAuthMethodOAuth2Output](docs/CreateAuthMethodOAuth2Output.md)
 - [akeyless.CreateAuthMethodOutput](docs/CreateAuthMethodOutput.md)
 - [akeyless.CreateAuthMethodSAML](docs/CreateAuthMethodSAML.md)
 - [akeyless.CreateAuthMethodSAMLOutput](docs/CreateAuthMethodSAMLOutput.md)
 - [akeyless.CreateAuthMethodUniversalIdentity](docs/CreateAuthMethodUniversalIdentity.md)
 - [akeyless.CreateAuthMethodUniversalIdentityOutput](docs/CreateAuthMethodUniversalIdentityOutput.md)
 - [akeyless.CreateAzureTarget](docs/CreateAzureTarget.md)
 - [akeyless.CreateAzureTargetOutput](docs/CreateAzureTargetOutput.md)
 - [akeyless.CreateClassicKey](docs/CreateClassicKey.md)
 - [akeyless.CreateClassicKeyOutput](docs/CreateClassicKeyOutput.md)
 - [akeyless.CreateDBTarget](docs/CreateDBTarget.md)
 - [akeyless.CreateDBTargetOutput](docs/CreateDBTargetOutput.md)
 - [akeyless.CreateDFCKey](docs/CreateDFCKey.md)
 - [akeyless.CreateDFCKeyOutput](docs/CreateDFCKeyOutput.md)
 - [akeyless.CreateDynamicSecret](docs/CreateDynamicSecret.md)
 - [akeyless.CreateEKSTarget](docs/CreateEKSTarget.md)
 - [akeyless.CreateEKSTargetOutput](docs/CreateEKSTargetOutput.md)
 - [akeyless.CreateGKETarget](docs/CreateGKETarget.md)
 - [akeyless.CreateGKETargetOutput](docs/CreateGKETargetOutput.md)
 - [akeyless.CreateGcpTarget](docs/CreateGcpTarget.md)
 - [akeyless.CreateGcpTargetOutput](docs/CreateGcpTargetOutput.md)
 - [akeyless.CreateKey](docs/CreateKey.md)
 - [akeyless.CreateKeyOutput](docs/CreateKeyOutput.md)
 - [akeyless.CreatePKICertIssuer](docs/CreatePKICertIssuer.md)
 - [akeyless.CreatePKICertIssuerOutput](docs/CreatePKICertIssuerOutput.md)
 - [akeyless.CreateRabbitMQTarget](docs/CreateRabbitMQTarget.md)
 - [akeyless.CreateRabbitMQTargetOutput](docs/CreateRabbitMQTargetOutput.md)
 - [akeyless.CreateRole](docs/CreateRole.md)
 - [akeyless.CreateRoleAuthMethodAssocOutput](docs/CreateRoleAuthMethodAssocOutput.md)
 - [akeyless.CreateRotatedSecret](docs/CreateRotatedSecret.md)
 - [akeyless.CreateRotatedSecretOutput](docs/CreateRotatedSecretOutput.md)
 - [akeyless.CreateSSHCertIssuer](docs/CreateSSHCertIssuer.md)
 - [akeyless.CreateSSHCertIssuerOutput](docs/CreateSSHCertIssuerOutput.md)
 - [akeyless.CreateSSHTarget](docs/CreateSSHTarget.md)
 - [akeyless.CreateSSHTargetOutput](docs/CreateSSHTargetOutput.md)
 - [akeyless.CreateSecret](docs/CreateSecret.md)
 - [akeyless.CreateSecretOutput](docs/CreateSecretOutput.md)
 - [akeyless.CreateTargetItemAssocOutput](docs/CreateTargetItemAssocOutput.md)
 - [akeyless.CreateWebTarget](docs/CreateWebTarget.md)
 - [akeyless.CreateWebTargetOutput](docs/CreateWebTargetOutput.md)
 - [akeyless.CustomerFragment](docs/CustomerFragment.md)
 - [akeyless.CustomerFragmentsJson](docs/CustomerFragmentsJson.md)
 - [akeyless.DSProducerDetails](docs/DSProducerDetails.md)
 - [akeyless.Decrypt](docs/Decrypt.md)
 - [akeyless.DecryptFile](docs/DecryptFile.md)
 - [akeyless.DecryptFileOutput](docs/DecryptFileOutput.md)
 - [akeyless.DecryptOutput](docs/DecryptOutput.md)
 - [akeyless.DecryptPKCS1](docs/DecryptPKCS1.md)
 - [akeyless.DecryptPKCS1Output](docs/DecryptPKCS1Output.md)
 - [akeyless.DefaultConfigPart](docs/DefaultConfigPart.md)
 - [akeyless.DeleteAuthMethod](docs/DeleteAuthMethod.md)
 - [akeyless.DeleteAuthMethodOutput](docs/DeleteAuthMethodOutput.md)
 - [akeyless.DeleteAuthMethods](docs/DeleteAuthMethods.md)
 - [akeyless.DeleteAuthMethodsOutput](docs/DeleteAuthMethodsOutput.md)
 - [akeyless.DeleteItem](docs/DeleteItem.md)
 - [akeyless.DeleteItemOutput](docs/DeleteItemOutput.md)
 - [akeyless.DeleteItems](docs/DeleteItems.md)
 - [akeyless.DeleteItemsOutput](docs/DeleteItemsOutput.md)
 - [akeyless.DeleteRole](docs/DeleteRole.md)
 - [akeyless.DeleteRoleAssociation](docs/DeleteRoleAssociation.md)
 - [akeyless.DeleteRoleRule](docs/DeleteRoleRule.md)
 - [akeyless.DeleteRoleRuleOutput](docs/DeleteRoleRuleOutput.md)
 - [akeyless.DeleteRoles](docs/DeleteRoles.md)
 - [akeyless.DeleteTarget](docs/DeleteTarget.md)
 - [akeyless.DeleteTargetAssociation](docs/DeleteTargetAssociation.md)
 - [akeyless.DeleteTargets](docs/DeleteTargets.md)
 - [akeyless.DescribeItem](docs/DescribeItem.md)
 - [akeyless.DescribePermissions](docs/DescribePermissions.md)
 - [akeyless.DescribePermissionsOutput](docs/DescribePermissionsOutput.md)
 - [akeyless.DynamicSecretProducerInfo](docs/DynamicSecretProducerInfo.md)
 - [akeyless.ElasticsearchLogForwardingConfig](docs/ElasticsearchLogForwardingConfig.md)
 - [akeyless.EmailPassAccessRules](docs/EmailPassAccessRules.md)
 - [akeyless.Encrypt](docs/Encrypt.md)
 - [akeyless.EncryptFile](docs/EncryptFile.md)
 - [akeyless.EncryptFileOutput](docs/EncryptFileOutput.md)
 - [akeyless.EncryptOutput](docs/EncryptOutput.md)
 - [akeyless.EncryptPKCS1](docs/EncryptPKCS1.md)
 - [akeyless.EncryptPKCS1Output](docs/EncryptPKCS1Output.md)
 - [akeyless.ExternalKMSKeyId](docs/ExternalKMSKeyId.md)
 - [akeyless.GCPAccessRules](docs/GCPAccessRules.md)
 - [akeyless.GatewayAddSubAdmins](docs/GatewayAddSubAdmins.md)
 - [akeyless.GatewayCreateProducerArtifactory](docs/GatewayCreateProducerArtifactory.md)
 - [akeyless.GatewayCreateProducerArtifactoryOutput](docs/GatewayCreateProducerArtifactoryOutput.md)
 - [akeyless.GatewayCreateProducerAws](docs/GatewayCreateProducerAws.md)
 - [akeyless.GatewayCreateProducerAwsOutput](docs/GatewayCreateProducerAwsOutput.md)
 - [akeyless.GatewayCreateProducerAzure](docs/GatewayCreateProducerAzure.md)
 - [akeyless.GatewayCreateProducerAzureOutput](docs/GatewayCreateProducerAzureOutput.md)
 - [akeyless.GatewayCreateProducerCertificateAutomation](docs/GatewayCreateProducerCertificateAutomation.md)
 - [akeyless.GatewayCreateProducerCertificateAutomationOutput](docs/GatewayCreateProducerCertificateAutomationOutput.md)
 - [akeyless.GatewayCreateProducerChef](docs/GatewayCreateProducerChef.md)
 - [akeyless.GatewayCreateProducerChefOutput](docs/GatewayCreateProducerChefOutput.md)
 - [akeyless.GatewayCreateProducerCustom](docs/GatewayCreateProducerCustom.md)
 - [akeyless.GatewayCreateProducerCustomOutput](docs/GatewayCreateProducerCustomOutput.md)
 - [akeyless.GatewayCreateProducerEks](docs/GatewayCreateProducerEks.md)
 - [akeyless.GatewayCreateProducerEksOutput](docs/GatewayCreateProducerEksOutput.md)
 - [akeyless.GatewayCreateProducerGcp](docs/GatewayCreateProducerGcp.md)
 - [akeyless.GatewayCreateProducerGcpOutput](docs/GatewayCreateProducerGcpOutput.md)
 - [akeyless.GatewayCreateProducerGke](docs/GatewayCreateProducerGke.md)
 - [akeyless.GatewayCreateProducerGkeOutput](docs/GatewayCreateProducerGkeOutput.md)
 - [akeyless.GatewayCreateProducerMSSQL](docs/GatewayCreateProducerMSSQL.md)
 - [akeyless.GatewayCreateProducerMSSQLOutput](docs/GatewayCreateProducerMSSQLOutput.md)
 - [akeyless.GatewayCreateProducerMongo](docs/GatewayCreateProducerMongo.md)
 - [akeyless.GatewayCreateProducerMongoOutput](docs/GatewayCreateProducerMongoOutput.md)
 - [akeyless.GatewayCreateProducerMySQL](docs/GatewayCreateProducerMySQL.md)
 - [akeyless.GatewayCreateProducerMySQLOutput](docs/GatewayCreateProducerMySQLOutput.md)
 - [akeyless.GatewayCreateProducerPostgreSQL](docs/GatewayCreateProducerPostgreSQL.md)
 - [akeyless.GatewayCreateProducerPostgreSQLOutput](docs/GatewayCreateProducerPostgreSQLOutput.md)
 - [akeyless.GatewayCreateProducerRabbitMQ](docs/GatewayCreateProducerRabbitMQ.md)
 - [akeyless.GatewayCreateProducerRabbitMQOutput](docs/GatewayCreateProducerRabbitMQOutput.md)
 - [akeyless.GatewayCreateProducerRdp](docs/GatewayCreateProducerRdp.md)
 - [akeyless.GatewayCreateProducerRdpOutput](docs/GatewayCreateProducerRdpOutput.md)
 - [akeyless.GatewayCreateProducerSnowflake](docs/GatewayCreateProducerSnowflake.md)
 - [akeyless.GatewayCreateProducerSnowflakeOutput](docs/GatewayCreateProducerSnowflakeOutput.md)
 - [akeyless.GatewayDeleteProducer](docs/GatewayDeleteProducer.md)
 - [akeyless.GatewayDeleteProducerOutput](docs/GatewayDeleteProducerOutput.md)
 - [akeyless.GatewayDeleteSubAdmins](docs/GatewayDeleteSubAdmins.md)
 - [akeyless.GatewayGetConfig](docs/GatewayGetConfig.md)
 - [akeyless.GatewayGetProducer](docs/GatewayGetProducer.md)
 - [akeyless.GatewayGetTmpUsers](docs/GatewayGetTmpUsers.md)
 - [akeyless.GatewayListProducers](docs/GatewayListProducers.md)
 - [akeyless.GatewayListSubAdmins](docs/GatewayListSubAdmins.md)
 - [akeyless.GatewayRevokeTmpUsers](docs/GatewayRevokeTmpUsers.md)
 - [akeyless.GatewayStartProducer](docs/GatewayStartProducer.md)
 - [akeyless.GatewayStartProducerOutput](docs/GatewayStartProducerOutput.md)
 - [akeyless.GatewayStopProducer](docs/GatewayStopProducer.md)
 - [akeyless.GatewayStopProducerOutput](docs/GatewayStopProducerOutput.md)
 - [akeyless.GatewayUpdateItemOutput](docs/GatewayUpdateItemOutput.md)
 - [akeyless.GatewayUpdateTmpUsers](docs/GatewayUpdateTmpUsers.md)
 - [akeyless.GenCustomerFragment](docs/GenCustomerFragment.md)
 - [akeyless.GeneralConfigPart](docs/GeneralConfigPart.md)
 - [akeyless.GetAuthMethod](docs/GetAuthMethod.md)
 - [akeyless.GetCloudIdentity](docs/GetCloudIdentity.md)
 - [akeyless.GetCloudIdentityOutput](docs/GetCloudIdentityOutput.md)
 - [akeyless.GetDynamicSecretValue](docs/GetDynamicSecretValue.md)
 - [akeyless.GetKubeExecCreds](docs/GetKubeExecCreds.md)
 - [akeyless.GetKubeExecCredsOutput](docs/GetKubeExecCredsOutput.md)
 - [akeyless.GetPKICertificate](docs/GetPKICertificate.md)
 - [akeyless.GetPKICertificateOutput](docs/GetPKICertificateOutput.md)
 - [akeyless.GetProducersListReplyObj](docs/GetProducersListReplyObj.md)
 - [akeyless.GetRSAPublic](docs/GetRSAPublic.md)
 - [akeyless.GetRSAPublicOutput](docs/GetRSAPublicOutput.md)
 - [akeyless.GetRole](docs/GetRole.md)
 - [akeyless.GetRotatedSecretValue](docs/GetRotatedSecretValue.md)
 - [akeyless.GetSSHCertificate](docs/GetSSHCertificate.md)
 - [akeyless.GetSSHCertificateOutput](docs/GetSSHCertificateOutput.md)
 - [akeyless.GetSecretValue](docs/GetSecretValue.md)
 - [akeyless.GetSubAdminsListReplyObj](docs/GetSubAdminsListReplyObj.md)
 - [akeyless.GetTarget](docs/GetTarget.md)
 - [akeyless.GetTargetDetails](docs/GetTargetDetails.md)
 - [akeyless.GetTargetDetailsOutput](docs/GetTargetDetailsOutput.md)
 - [akeyless.HashiMigration](docs/HashiMigration.md)
 - [akeyless.HashiPayload](docs/HashiPayload.md)
 - [akeyless.HuaweiAccessRules](docs/HuaweiAccessRules.md)
 - [akeyless.Item](docs/Item.md)
 - [akeyless.ItemGeneralInfo](docs/ItemGeneralInfo.md)
 - [akeyless.ItemTargetAssociation](docs/ItemTargetAssociation.md)
 - [akeyless.ItemVersion](docs/ItemVersion.md)
 - [akeyless.JSONError](docs/JSONError.md)
 - [akeyless.K8SMigration](docs/K8SMigration.md)
 - [akeyless.K8SPayload](docs/K8SPayload.md)
 - [akeyless.LDAPAccessRules](docs/LDAPAccessRules.md)
 - [akeyless.LdapConfigPart](docs/LdapConfigPart.md)
 - [akeyless.LeadershipConfigPart](docs/LeadershipConfigPart.md)
 - [akeyless.ListAuthMethods](docs/ListAuthMethods.md)
 - [akeyless.ListAuthMethodsOutput](docs/ListAuthMethodsOutput.md)
 - [akeyless.ListItems](docs/ListItems.md)
 - [akeyless.ListItemsInPathOutput](docs/ListItemsInPathOutput.md)
 - [akeyless.ListRoles](docs/ListRoles.md)
 - [akeyless.ListRolesOutput](docs/ListRolesOutput.md)
 - [akeyless.ListTargets](docs/ListTargets.md)
 - [akeyless.ListTargetsOutput](docs/ListTargetsOutput.md)
 - [akeyless.LogForwardingConfigPart](docs/LogForwardingConfigPart.md)
 - [akeyless.LogstashLogForwardingConfig](docs/LogstashLogForwardingConfig.md)
 - [akeyless.LogzIoLogForwardingConfig](docs/LogzIoLogForwardingConfig.md)
 - [akeyless.MigrationGeneral](docs/MigrationGeneral.md)
 - [akeyless.MigrationsConfigPart](docs/MigrationsConfigPart.md)
 - [akeyless.MoveObjects](docs/MoveObjects.md)
 - [akeyless.OAuth2AccessRules](docs/OAuth2AccessRules.md)
 - [akeyless.OAuth2CustomClaim](docs/OAuth2CustomClaim.md)
 - [akeyless.PKICertificateIssueDetails](docs/PKICertificateIssueDetails.md)
 - [akeyless.PathRule](docs/PathRule.md)
 - [akeyless.Producer](docs/Producer.md)
 - [akeyless.ProducersConfigPart](docs/ProducersConfigPart.md)
 - [akeyless.RawCreds](docs/RawCreds.md)
 - [akeyless.RefreshKey](docs/RefreshKey.md)
 - [akeyless.RefreshKeyOutput](docs/RefreshKeyOutput.md)
 - [akeyless.ReverseRBAC](docs/ReverseRBAC.md)
 - [akeyless.ReverseRBACClient](docs/ReverseRBACClient.md)
 - [akeyless.ReverseRBACOutput](docs/ReverseRBACOutput.md)
 - [akeyless.Role](docs/Role.md)
 - [akeyless.RoleAuthMethodAssociation](docs/RoleAuthMethodAssociation.md)
 - [akeyless.RollbackSecret](docs/RollbackSecret.md)
 - [akeyless.RollbackSecretOutput](docs/RollbackSecretOutput.md)
 - [akeyless.RotateKey](docs/RotateKey.md)
 - [akeyless.RotateKeyOutput](docs/RotateKeyOutput.md)
 - [akeyless.RotatedSecretDetailsInfo](docs/RotatedSecretDetailsInfo.md)
 - [akeyless.Rotator](docs/Rotator.md)
 - [akeyless.RotatorsConfigPart](docs/RotatorsConfigPart.md)
 - [akeyless.Rules](docs/Rules.md)
 - [akeyless.SAMLAccessRules](docs/SAMLAccessRules.md)
 - [akeyless.SAMLAttribute](docs/SAMLAttribute.md)
 - [akeyless.SSHCertificateIssueDetails](docs/SSHCertificateIssueDetails.md)
 - [akeyless.SetItemState](docs/SetItemState.md)
 - [akeyless.SetRoleRule](docs/SetRoleRule.md)
 - [akeyless.SignPKCS1](docs/SignPKCS1.md)
 - [akeyless.SignPKCS1Output](docs/SignPKCS1Output.md)
 - [akeyless.SplunkLogForwardingConfig](docs/SplunkLogForwardingConfig.md)
 - [akeyless.StaticCredsAuth](docs/StaticCredsAuth.md)
 - [akeyless.StaticCredsAuthOutput](docs/StaticCredsAuthOutput.md)
 - [akeyless.SyslogLogForwardingConfig](docs/SyslogLogForwardingConfig.md)
 - [akeyless.SystemAccessCredentialsReplyObj](docs/SystemAccessCredentialsReplyObj.md)
 - [akeyless.Target](docs/Target.md)
 - [akeyless.TargetItemAssociation](docs/TargetItemAssociation.md)
 - [akeyless.TargetTypeDetailsInput](docs/TargetTypeDetailsInput.md)
 - [akeyless.TmpUserData](docs/TmpUserData.md)
 - [akeyless.UIDTokenDetails](docs/UIDTokenDetails.md)
 - [akeyless.UIdentityConfigPart](docs/UIdentityConfigPart.md)
 - [akeyless.UidCreateChildToken](docs/UidCreateChildToken.md)
 - [akeyless.UidCreateChildTokenOutput](docs/UidCreateChildTokenOutput.md)
 - [akeyless.UidGenerateToken](docs/UidGenerateToken.md)
 - [akeyless.UidGenerateTokenOutput](docs/UidGenerateTokenOutput.md)
 - [akeyless.UidListChildren](docs/UidListChildren.md)
 - [akeyless.UidRevokeToken](docs/UidRevokeToken.md)
 - [akeyless.UidRotateToken](docs/UidRotateToken.md)
 - [akeyless.UidRotateTokenOutput](docs/UidRotateTokenOutput.md)
 - [akeyless.Unconfigure](docs/Unconfigure.md)
 - [akeyless.UniversalIdentityAccessRules](docs/UniversalIdentityAccessRules.md)
 - [akeyless.UniversalIdentityDetails](docs/UniversalIdentityDetails.md)
 - [akeyless.UpdateAWSTargetDetails](docs/UpdateAWSTargetDetails.md)
 - [akeyless.UpdateAssoc](docs/UpdateAssoc.md)
 - [akeyless.UpdateDBTargetDetails](docs/UpdateDBTargetDetails.md)
 - [akeyless.UpdateItem](docs/UpdateItem.md)
 - [akeyless.UpdateItemOutput](docs/UpdateItemOutput.md)
 - [akeyless.UpdateOutput](docs/UpdateOutput.md)
 - [akeyless.UpdateRDPTargetDetails](docs/UpdateRDPTargetDetails.md)
 - [akeyless.UpdateRabbitMQTargetDetails](docs/UpdateRabbitMQTargetDetails.md)
 - [akeyless.UpdateRole](docs/UpdateRole.md)
 - [akeyless.UpdateRoleOutput](docs/UpdateRoleOutput.md)
 - [akeyless.UpdateRotatedSecret](docs/UpdateRotatedSecret.md)
 - [akeyless.UpdateRotatedSecretOutput](docs/UpdateRotatedSecretOutput.md)
 - [akeyless.UpdateRotationSettings](docs/UpdateRotationSettings.md)
 - [akeyless.UpdateSSHTargetDetails](docs/UpdateSSHTargetDetails.md)
 - [akeyless.UpdateSecretVal](docs/UpdateSecretVal.md)
 - [akeyless.UpdateSecretValOutput](docs/UpdateSecretValOutput.md)
 - [akeyless.UpdateTarget](docs/UpdateTarget.md)
 - [akeyless.UpdateTargetDetailsOutput](docs/UpdateTargetDetailsOutput.md)
 - [akeyless.UpdateTargetOutput](docs/UpdateTargetOutput.md)
 - [akeyless.UpdateWebTargetDetails](docs/UpdateWebTargetDetails.md)
 - [akeyless.UploadPKCS12](docs/UploadPKCS12.md)
 - [akeyless.UploadRSA](docs/UploadRSA.md)
 - [akeyless.VerifyPKCS1](docs/VerifyPKCS1.md)


## Documentation for Authorization

All endpoints do not require authorization.
