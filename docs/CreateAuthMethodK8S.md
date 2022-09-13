# akeyless.CreateAuthMethodK8S

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**audience** | **String** | The audience in the Kubernetes JWT that the access is restricted to | [optional] 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**boundNamespaces** | **[String]** | A list of namespaces that the access is restricted to | [optional] 
**boundPodNames** | **[String]** | A list of pod names that the access is restricted to | [optional] 
**boundSaNames** | **[String]** | A list of service account names that the access is restricted to | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**genKey** | **String** | Automatically generate key-pair for K8S configuration. If set to false, a public key needs to be provided | [optional] [default to &#39;true&#39;]
**gwBoundIps** | **[String]** | A CIDR whitelist with the GW IPs that the access is restricted to | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] 
**jwtTtl** | **Number** | Jwt TTL | [optional] 
**name** | **String** | Auth Method name | 
**publicKey** | **String** | Base64-encoded or PEM formatted public key data for K8S authentication method is required [RSA2048] | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


