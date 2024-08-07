# akeyless.TargetCreateSsh

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of the object | [optional] 
**host** | **String** | SSH host name | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Target name | 
**port** | **String** | SSH port | [optional] [default to &#39;22&#39;]
**privateKey** | **String** | SSH private key | [optional] 
**privateKeyPassword** | **String** | SSH private key password | [optional] 
**sshPassword** | **String** | SSH password to rotate | [optional] 
**sshUsername** | **String** | SSH username | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


