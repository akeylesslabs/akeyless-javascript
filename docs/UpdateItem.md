# akeyless.UpdateItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;regular&#39;]
**addTag** | **[String]** | List of the new tags that will be attached to this item | [optional] 
**certFileData** | **String** | PEM Certificate in a Base64 format. Used for updating RSA keys&#39; certificates. | [optional] 
**deleteProtection** | **String** |  | [optional] 
**description** | **String** | Description of the object | [optional] [default to &#39;default_metadata&#39;]
**json** | **Boolean** | Set output format to JSON | [optional] 
**name** | **String** | Current item name | 
**newMetadata** | **String** | Deprecated - use description | [optional] [default to &#39;default_metadata&#39;]
**newName** | **String** | New item name | [optional] 
**rmTag** | **[String]** | List of the existent tags that will be removed from this item | [optional] 
**secureAccessAddHost** | **[String]** |  | [optional] 
**secureAccessAllowExternalUser** | **String** |  | [optional] 
**secureAccessAllowPortForwading** | **Boolean** |  | [optional] 
**secureAccessAwsAccountId** | **String** |  | [optional] 
**secureAccessAwsNativeCli** | **Boolean** |  | [optional] 
**secureAccessAwsRegion** | **String** |  | [optional] 
**secureAccessBastionApi** | **String** |  | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessBastionSsh** | **String** |  | [optional] 
**secureAccessClusterEndpoint** | **String** |  | [optional] 
**secureAccessDashboardUrl** | **String** |  | [optional] 
**secureAccessDbName** | **String** |  | [optional] 
**secureAccessDbSchema** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessHost** | **[String]** |  | [optional] 
**secureAccessRdpDomain** | **String** |  | [optional] 
**secureAccessRdpUser** | **String** |  | [optional] 
**secureAccessRmHost** | **[String]** |  | [optional] 
**secureAccessSshCreds** | **String** |  | [optional] 
**secureAccessSshCredsUser** | **String** |  | [optional] 
**secureAccessUrl** | **String** |  | [optional] 
**secureAccessUseInternalBastion** | **Boolean** |  | [optional] 
**secureAccessWebBrowsing** | **Boolean** |  | [optional] 
**secureAccessWebProxy** | **Boolean** |  | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


