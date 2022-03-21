# akeyless.CreateAuthMethodGCP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**audience** | **String** | The audience to verify in the JWT received by the client | [default to &#39;akeyless.io&#39;]
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**boundLabels** | **[String]** | A comma-separated list of GCP labels formatted as \&quot;key:value\&quot; strings that must be set on authorized GCE instances. TODO: Because GCP labels are not currently ACL&#39;d .... | [optional] 
**boundProjects** | **[String]** | &#x3D;&#x3D;&#x3D; Human and Machine authentication section &#x3D;&#x3D;&#x3D; Array of GCP project IDs. Only entities belonging to any of the provided projects can authenticate. | [optional] 
**boundRegions** | **[String]** | List of regions that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a regional group and the group must belong to this region. If bound_zones are provided, this attribute is ignored. | [optional] 
**boundServiceAccounts** | **[String]** | List of service accounts the service account must be part of in order to be authenticated. | [optional] 
**boundZones** | **[String]** | &#x3D;&#x3D;&#x3D; Machine authentication section &#x3D;&#x3D;&#x3D; List of zones that a GCE instance must belong to in order to be authenticated. TODO: If bound_instance_groups is provided, it is assumed to be a zonal group and the group must belong to this zone. | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**name** | **String** | Auth Method name | 
**serviceAccountCredsData** | **String** | ServiceAccount credentials data instead of giving a file path, base64 encoded | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**type** | **String** | Type of the GCP Access Rules | 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


