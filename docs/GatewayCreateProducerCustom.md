# akeyless.GatewayCreateProducerCustom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adminRotationIntervalDays** | **Number** | Define rotation interval in days | [optional] 
**createSyncUrl** | **String** | URL of an endpoint that implements /sync/create method, for example https://webhook.example.com/sync/create | 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**enableAdminRotation** | **Boolean** | Should admin credentials be rotated | [optional] [default to false]
**itemCustomFields** | **{String: String}** | Additional custom fields to associate with the item | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**payload** | **String** | Secret payload to be sent with each create/revoke webhook request | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**revokeSyncUrl** | **String** | URL of an endpoint that implements /sync/revoke method, for example https://webhook.example.com/sync/revoke | 
**rotateSyncUrl** | **String** | URL of an endpoint that implements /sync/rotate method, for example https://webhook.example.com/sync/rotate | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**timeoutSec** | **Number** | Maximum allowed time in seconds for the webhook to return the results | [optional] [default to 60]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


