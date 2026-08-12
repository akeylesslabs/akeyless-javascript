# akeyless.DynamicSecretCreateCassandra

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**araEnabled** | **Boolean** | Enable or disable Agentic Runtime Authority rule enforcement for this item. Mirrors commands.AgenticRulesParams.AraEnabled. | [optional] 
**cassandraCreationStatements** | **String** | Cassandra creation statements | [optional] 
**cassandraHosts** | **String** | Cassandra hosts IP or addresses, comma separated | [optional] 
**cassandraPassword** | **String** | Cassandra superuser password | [optional] 
**cassandraPort** | **String** | Cassandra port | [optional] [default to &#39;9042&#39;]
**cassandraUsername** | **String** | Cassandra superuser username | [optional] 
**customUsernameTemplate** | **String** | Customize how temporary usernames are generated using go template | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**inputRule** | **[String]** | Agentic input rule in name&#x3D;...,rule&#x3D;... format (e.g. name&#x3D;rule1,rule&#x3D;Sanitize input) Mirrors commands.AgenticRulesParams — kept separate because ResourceDS cannot embed it (different package, different struct layout). | [optional] 
**itemCustomFields** | **{String: String}** | Additional custom fields to associate with the item | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**outputRule** | **[String]** | Agentic output rule in name&#x3D;...,rule&#x3D;... format (e.g. name&#x3D;rule1,rule&#x3D;Mask secrets) | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**skipDryRun** | **String** | If set, dry-run will be skipped | [optional] 
**ssl** | **Boolean** | Enable/Disable SSL [true/false] | [optional] [default to false]
**sslCertificate** | **String** | SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA) | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**useCapitalLetters** | **String** | Specifies whether the generated temporary password must contain at least one uppercase character from the ISO basic Latin alphabet (A to Z). [true/false] | [optional] 
**useLowerLetters** | **String** | Specifies whether the generated temporary password must contain at least one lowercase character from the ISO basic Latin alphabet (a to z). [true/false] | [optional] 
**useNumbers** | **String** | Specifies whether the generated temporary password must contain at least one numeric character (0 to 9). [true/false] | [optional] 
**useSpecialCharacters** | **String** |  | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


