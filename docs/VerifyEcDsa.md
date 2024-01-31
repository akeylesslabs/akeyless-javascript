# akeyless.VerifyEcDsa

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayId** | **String** | The display id of the EC key to use for the verification process | [optional] 
**itemId** | **Number** | The item id of the EC key to use for the verification process | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**keyName** | **String** | The name of the EC key to use for the verification process | [optional] 
**message** | **String** | The message to be verified in a base64 format | 
**prehashed** | **Boolean** | Markes that the message is already hashed | [optional] 
**signature** | **String** | The message&#39;s signature | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**version** | **Number** | The version of the key to use for verification | [optional] 


