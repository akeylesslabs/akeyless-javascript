# akeyless.CreateGcpTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Comment about the target | [optional] 
**gcpKey** | **String** | Base64-encoded service account private key text | [optional] 
**gcpSaEmail** | **String** | GCP service account email | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] 
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**name** | **String** | Target name | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**useGwCloudIdentity** | **Boolean** |  | [optional] 


