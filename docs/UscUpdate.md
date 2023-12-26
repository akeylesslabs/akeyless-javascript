# akeyless.UscUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binaryValue** | **Boolean** | Use this option if the universal secrets value is a base64 encoded binary | [optional] 
**description** | **String** | Description of the universal secrets | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**secretId** | **String** | The universal secrets id (or name, for AWS, Azure or K8s targets) to update | 
**tags** | **{String: String}** | Tags for the universal secrets | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**uscName** | **String** | Name of the Universal Secrets Connector item | 
**value** | **String** | Value of the universal secrets item, either text or base64 encoded binary | 


