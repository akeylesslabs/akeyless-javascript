# akeyless.UpdateRDPTargetDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adminName** | **String** |  | [optional] 
**adminPwd** | **String** |  | [optional] 
**hostName** | **String** |  | [optional] 
**hostPort** | **String** |  | [optional] 
**name** | **String** | Target name | 
**newVersion** | **Boolean** | Whether to create a new version of not | [optional] [default to false]
**protectionKey** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


