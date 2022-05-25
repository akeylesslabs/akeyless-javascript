# akeyless.GatewayCreateProducerRedshift

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creationStatements** | **String** | Redshift Creation statements | [optional] 
**name** | **String** | Producer name | 
**producerEncryptionKey** | **String** | Dynamic producer encryption key | [optional] 
**redshiftDbName** | **String** | Redshift DB Name | [optional] 
**redshiftHost** | **String** | Redshift Host | [optional] [default to &#39;127.0.0.1&#39;]
**redshiftPassword** | **String** | Redshift Password | [optional] 
**redshiftPort** | **String** | Redshift Port | [optional] [default to &#39;5439&#39;]
**redshiftUsername** | **String** | Redshift Username | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessHost** | **[String]** |  | [optional] 
**ssl** | **Boolean** | SSL connection mode | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


