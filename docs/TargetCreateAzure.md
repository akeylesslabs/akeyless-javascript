# akeyless.TargetCreateAzure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **String** | Azure client/application id | [optional] 
**clientSecret** | **String** | Azure client secret | [optional] 
**connectionType** | **String** | Type of connection [credentials/cloud-identity] | [optional] [default to &#39;credentials&#39;]
**description** | **String** | Description of the object | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Target name | 
**resourceGroupName** | **String** | The Resource Group name in your Azure subscription | [optional] 
**resourceName** | **String** | The name of the relevant Resource | [optional] 
**subscriptionId** | **String** | Azure Subscription Id | [optional] 
**tenantId** | **String** | Azure tenant id | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**useGwCloudIdentity** | **Boolean** | Use the GW&#39;s Cloud IAM [Deprecated: Use connection-type&#x3D;cloud-identity] | [optional] 


