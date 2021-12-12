# akeyless.GatewayUpdateProducerCustom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createSyncUrl** | **String** | URL of an endpoint that implements /sync/create method, for example https://webhook.example.com/sync/create | 
**name** | **String** | Producer name | 
**newName** | **String** | Producer name | [optional] 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**payload** | **String** | Secret payload to be sent with each create/revoke webhook request | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**revokeSyncUrl** | **String** | URL of an endpoint that implements /sync/revoke method, for example https://webhook.example.com/sync/revoke | 
**rotateSyncUrl** | **String** | URL of an endpoint that implements /sync/rotate method, for example https://webhook.example.com/sync/rotate | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**timeoutSec** | **Number** | Maximum allowed time in seconds for the webhook to return the results | [optional] [default to 60]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


