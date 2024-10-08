# akeyless.DynamicSecretUpdateVenafi

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adminRotationIntervalDays** | **Number** | Admin credentials rotation interval (days) | [optional] [default to 0]
**allowSubdomains** | **Boolean** | Allow subdomains | [optional] 
**allowedDomains** | **[String]** | Allowed domains | [optional] 
**autoGeneratedFolder** | **String** | Auto generated folder | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**enableAdminRotation** | **Boolean** | Automatic admin credentials rotation | [optional] [default to false]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**rootFirstInChain** | **Boolean** | Root first in chain | [optional] 
**signUsingAkeylessPki** | **Boolean** | Use Akeyless PKI issuer or Venafi issuer | [optional] 
**signerKeyName** | **String** | Signer key name | [optional] 
**storePrivateKey** | **Boolean** | Store private key | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL in time.Duration format (2160h / 129600m / etc...). When using sign-using-akeyless-pki certificates created will have this validity period, otherwise the user-ttl is taken from the Validity Period field of the Zone&#39;s&#39; Issuing Template. When using cert-manager it is advised to have a TTL of above 60 days (1440h). For more information - https://cert-manager.io/docs/usage/certificate/ | [optional] [default to &#39;2160h&#39;]
**venafiAccessToken** | **String** | Venafi Access Token to use to access the TPP environment (Relevant when using TPP) | [optional] 
**venafiApiKey** | **String** | Venafi API key | [optional] 
**venafiBaseurl** | **String** | Venafi Baseurl | [optional] 
**venafiClientId** | **String** | Venafi Client ID that was used when the access token was generated | [optional] [default to &#39;akeyless&#39;]
**venafiRefreshToken** | **String** | Venafi Refresh Token to use when the Access Token is expired (Relevant when using TPP) | [optional] 
**venafiUseTpp** | **Boolean** | Venafi using TPP | [optional] 
**venafiZone** | **String** | Venafi Zone | [optional] 


