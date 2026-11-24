# akeyless.SignEcDsa

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;regular&#39;]
**displayId** | **String** | The display id of the EC key to use for the signing process | [optional] 
**itemId** | **Number** | The item id of the EC key to use for the signing process | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**keyName** | **String** | The name of the EC key to use for the signing process | [optional] 
**message** | **String** | The input message to sign in a base64 format | 
**prehashed** | **Boolean** | Markes that the message is already hashed | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**version** | **Number** | The version of the key to use for signing | [optional] 


