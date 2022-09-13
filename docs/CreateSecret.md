# akeyless.CreateSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this item | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] 
**metadata** | **String** | Metadata about the secret | [optional] 
**multilineValue** | **Boolean** | The provided value is a multiline value (separated by &#39;\\n&#39;) | [optional] 
**name** | **String** | Secret name | 
**passwordManagerCustomField** | **{String: String}** | For Password Management use, additional fields | [optional] 
**passwordManagerInjectUrl** | **[String]** | For Password Management use, reflect the website context | [optional] 
**passwordManagerPassword** | **String** | For Password Management use, additional fields | [optional] 
**passwordManagerUsername** | **String** | For Password Management use | [optional] 
**protectionKey** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessHost** | **[String]** |  | [optional] 
**secureAccessSshCreds** | **String** |  | [optional] 
**secureAccessSshUser** | **String** |  | [optional] 
**secureAccessUrl** | **String** |  | [optional] 
**secureAccessWebBrowsing** | **Boolean** |  | [optional] 
**secureAccessWebProxy** | **Boolean** |  | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**type** | **String** | For Password Management use, reflect the website context | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**value** | **String** | The secret value | 


