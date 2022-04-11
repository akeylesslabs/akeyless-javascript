# akeyless.GatewayUpdateProducerHanaDb

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hanaDbname** | **String** | HanaDb Name | [optional] 
**hanadbCreateStatements** | **String** | HanaDb Creation statements | [optional] 
**hanadbHost** | **String** | HanaDb Host | [optional] [default to &#39;127.0.0.1&#39;]
**hanadbPassword** | **String** | HanaDb Password | [optional] 
**hanadbPort** | **String** | HanaDb Port | [optional] [default to &#39;443&#39;]
**hanadbRevocationStatements** | **String** | HanaDb Revocation statements | [optional] 
**hanadbUsername** | **String** | HanaDb Username | [optional] 
**name** | **String** | Producer name | 
**newName** | **String** | Producer name | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessDbSchema** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessHost** | **[String]** |  | [optional] 
**secureAccessWeb** | **Boolean** |  | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


