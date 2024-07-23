# akeyless.GatewayCreateProducerRedshift

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creationStatements** | **String** | Redshift Creation statements | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKey** | **String** | Dynamic producer encryption key | [optional] 
**redshiftDbName** | **String** | Redshift DB Name | [optional] 
**redshiftHost** | **String** | Redshift Host | [optional] [default to &#39;127.0.0.1&#39;]
**redshiftPassword** | **String** | Redshift Password | [optional] 
**redshiftPort** | **String** | Redshift Port | [optional] [default to &#39;5439&#39;]
**redshiftUsername** | **String** | Redshift Username | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts) | [optional] 
**ssl** | **Boolean** | Enable/Disable SSL [true/false] | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


