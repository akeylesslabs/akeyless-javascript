# akeyless.TargetCreateDB

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azureClientId** | **String** | (Optional) Client id (relevant for \&quot;cloud-service-provider\&quot; only) | [optional] 
**azureClientSecret** | **String** | (Optional) Client secret (relevant for \&quot;cloud-service-provider\&quot; only) | [optional] 
**azureTenantId** | **String** | (Optional) Tenant id (relevant for \&quot;cloud-service-provider\&quot; only) | [optional] 
**cloudServiceProvider** | **String** | (Optional) Cloud service provider (currently only supports Azure) | [optional] 
**clusterMode** | **Boolean** | Cluster Mode | [optional] 
**comment** | **String** | Deprecated - use description | [optional] 
**connectionType** | **String** | Type of connection to mssql database [credentials/cloud-identity/wallet/parent-target] | [default to &#39;credentials&#39;]
**dbName** | **String** |  | [optional] 
**dbServerCertificates** | **String** | (Optional) DB server certificates | [optional] 
**dbServerName** | **String** | (Optional) Server name for certificate verification | [optional] 
**dbType** | **String** |  | 
**description** | **String** | Description of the object | [optional] 
**host** | **String** |  | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**mongodbAtlas** | **Boolean** |  | [optional] 
**mongodbAtlasApiPrivateKey** | **String** | MongoDB Atlas private key | [optional] 
**mongodbAtlasApiPublicKey** | **String** | MongoDB Atlas public key | [optional] 
**mongodbAtlasProjectId** | **String** | MongoDB Atlas project ID | [optional] 
**mongodbDefaultAuthDb** | **String** | MongoDB server default authentication database | [optional] 
**mongodbUriOptions** | **String** | MongoDB server URI options | [optional] 
**name** | **String** | Target name | 
**oracleServiceName** | **String** | Oracle db service name | [optional] 
**oracleWalletLoginType** | **String** | Oracle Wallet login type (password/mtls) | [optional] 
**oracleWalletP12FileData** | **String** | Oracle wallet p12 file data in base64 | [optional] 
**oracleWalletSsoFileData** | **String** | Oracle wallet sso file data in base64 | [optional] 
**parentTargetName** | **String** | Name of the parent target, relevant only when connection-type is parent-target | [optional] 
**port** | **String** |  | [optional] 
**pwd** | **String** |  | [optional] 
**snowflakeAccount** | **String** |  | [optional] 
**snowflakeApiPrivateKey** | **String** | RSA Private key (base64 encoded) | [optional] 
**snowflakeApiPrivateKeyPassword** | **String** | The Private key passphrase | [optional] 
**ssl** | **Boolean** | Enable/Disable SSL [true/false] | [optional] [default to false]
**sslCertificate** | **String** | SSL connection certificate | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userName** | **String** |  | [optional] 


