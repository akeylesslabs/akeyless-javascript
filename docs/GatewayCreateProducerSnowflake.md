# akeyless.GatewayCreateProducerSnowflake

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | Account name | [optional] 
**accountPassword** | **String** | Database Password | [optional] 
**accountUsername** | **String** | Database Username | [optional] 
**dbName** | **String** | Database name | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this item [true/false] | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**privateKey** | **String** | RSA Private key (base64 encoded) | [optional] 
**privateKeyPassphrase** | **String** | The Private key passphrase | [optional] 
**role** | **String** | User role | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;24h&#39;]
**warehouse** | **String** | Warehouse name | [optional] 


