# akeyless.ShareItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;regular&#39;]
**action** | **String** | Action to be performed on the item [start/stop/describe] | 
**emails** | **[String]** | List of emails to start/stop sharing the secret with | [optional] 
**itemName** | **String** | Item name | 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**shareType** | **String** | Share type [email/token] | [optional] [default to &#39;email&#39;]
**sharedTokenId** | **[String]** | Shared token ids in order to stop sharing a secret | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**ttl** | **Number** | TTL of the Availability of the shared secret in seconds | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**viewOnce** | **Boolean** | ViewOnlyOnce Shared secrets can only be viewed once [true/false] | [optional] [default to false]


