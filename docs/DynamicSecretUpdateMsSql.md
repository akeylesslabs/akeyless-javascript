# akeyless.DynamicSecretUpdateMsSql

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**araEnabled** | **Boolean** | Enable or disable Agentic Runtime Authority rule enforcement for this item. Mirrors commands.AgenticRulesParams.AraEnabled. | [optional] 
**customUsernameTemplate** | **String** | Customize how temporary usernames are generated using go template | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**inputRule** | **[String]** | Agentic input rule in name&#x3D;...,rule&#x3D;... format (e.g. name&#x3D;rule1,rule&#x3D;Sanitize input) Mirrors commands.AgenticRulesParams — kept separate because ResourceDS cannot embed it (different package, different struct layout). | [optional] 
**itemCustomFields** | **{String: String}** | Additional custom fields to associate with the item | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**mssqlAllowedDbNames** | **String** | CSV of allowed DB names for runtime selection when getting the secret value. Empty &#x3D;&gt; use target DB only; \&quot;*\&quot; &#x3D;&gt; any DB allowed; One or more names &#x3D;&gt; user must choose from this list | [optional] 
**mssqlCreateStatements** | **String** | MSSQL Creation statements | [optional] 
**mssqlDbname** | **String** | MSSQL Name | [optional] 
**mssqlHost** | **String** | MSSQL Host | [optional] [default to &#39;127.0.0.1&#39;]
**mssqlPassword** | **String** | MSSQL Password | [optional] 
**mssqlPort** | **String** | MSSQL Port | [optional] [default to &#39;1433&#39;]
**mssqlRevocationStatements** | **String** | MSSQL Revocation statements | [optional] 
**mssqlUsername** | **String** | MSSQL Username | [optional] 
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**outputRule** | **[String]** | Agentic output rule in name&#x3D;...,rule&#x3D;... format (e.g. name&#x3D;rule1,rule&#x3D;Mask secrets) | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessDbName** | **String** | The DB name (relevant only for DB Dynamic-Secret) | [optional] 
**secureAccessDbSchema** | **String** | The DB schema | [optional] 
**secureAccessDelay** | **Number** | The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts) | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**skipDryRun** | **String** | If set, dry-run will be skipped | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**useCapitalLetters** | **String** | Specifies whether the generated temporary password must contain at least one uppercase character from the ISO basic Latin alphabet (A to Z). [true/false] | [optional] 
**useLowerLetters** | **String** | Specifies whether the generated temporary password must contain at least one lowercase character from the ISO basic Latin alphabet (a to z). [true/false] | [optional] 
**useNumbers** | **String** | Specifies whether the generated temporary password must contain at least one numeric character (0 to 9). [true/false] | [optional] 
**useSpecialCharacters** | **String** |  | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


