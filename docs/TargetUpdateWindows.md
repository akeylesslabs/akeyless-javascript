# akeyless.TargetUpdateWindows

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **String** | SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA) | [optional] 
**connectionType** | **String** | Type of connection to Windows Server [credentials/parent-target] | [optional] [default to &#39;credentials&#39;]
**description** | **String** | Description of the object | [optional] 
**domain** | **String** | User domain name | [optional] 
**hostname** | **String** | Server hostname | 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**keepPrevVersion** | **String** | Whether to keep previous version [true/false]. If not set, use default according to account settings | [optional] 
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Target name | 
**newName** | **String** | New target name | [optional] 
**parentTargetName** | **String** | Name of the parent target, relevant only when connection-type is parent-target | [optional] 
**password** | **String** | Privileged user password | [default to &#39;dummy_value&#39;]
**port** | **String** | Server WinRM port | [optional] [default to &#39;5986&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**useTls** | **String** | Enable/Disable TLS for WinRM over HTTPS [true/false] | [optional] [default to &#39;true&#39;]
**username** | **String** | Privileged username | [default to &#39;dummy_value&#39;]


