# akeyless.DynamicSecretUpdateCassandra

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cassandraCreationStatements** | **String** | Cassandra creation statements | [optional] 
**cassandraHosts** | **String** | Cassandra hosts IP or addresses, comma separated | [optional] 
**cassandraPassword** | **String** | Cassandra superuser password | [optional] 
**cassandraPort** | **String** | Cassandra port | [optional] [default to &#39;9042&#39;]
**cassandraUsername** | **String** | Cassandra superuser username | [optional] 
**customUsernameTemplate** | **String** | Customize how temporary usernames are generated using go template | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**ssl** | **Boolean** | Enable/Disable SSL [true/false] | [optional] [default to false]
**sslCertificate** | **String** | SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA) | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


