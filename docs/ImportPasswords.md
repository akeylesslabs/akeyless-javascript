# akeyless.ImportPasswords

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;personal&#39;]
**format** | **String** | Password format type [LastPass/Chrome/Firefox/1password/keeper/bitwarden/dashlane] | [optional] [default to &#39;LastPass&#39;]
**importPath** | **String** | File path | 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**protectionKey** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**targetFolder** | **String** | Target folder for imported passwords | [optional] [default to &#39;/&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**updateMode** | **String** |  | [optional] 


