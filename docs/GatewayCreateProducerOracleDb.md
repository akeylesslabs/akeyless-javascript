# akeyless.GatewayCreateProducerOracleDb

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dbServerCertificates** | **String** | (Optional) DB server certificates | [optional] 
**dbServerName** | **String** | (Optional) Server name for certificate verification | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this item | [optional] 
**name** | **String** | Producer name | 
**oracleHost** | **String** | Oracle Host | [optional] [default to &#39;127.0.0.1&#39;]
**oraclePassword** | **String** | Oracle Password | [optional] 
**oraclePort** | **String** | Oracle Port | [optional] [default to &#39;1521&#39;]
**oracleScreationStatements** | **String** | Oracle Creation statements | [optional] 
**oracleServiceName** | **String** | Oracle DB Name | [optional] 
**oracleUsername** | **String** | Oracle Username | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessHost** | **[String]** |  | [optional] 
**secureAccessWeb** | **Boolean** |  | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


