# akeyless.GatewayUpdateProducerNativeK8S

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteProtection** | **String** | Protection from accidental deletion of this item [true/false] | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**k8sClusterCaCert** | **String** | K8S cluster CA certificate | [optional] 
**k8sClusterEndpoint** | **String** | K8S cluster URL endpoint | [optional] 
**k8sClusterToken** | **String** | K8S cluster Bearer token | [optional] 
**k8sNamespace** | **String** | K8S namespace | [optional] [default to &#39;default&#39;]
**k8sServiceAccount** | **String** | K8S service account | [optional] 
**name** | **String** | Producer name | 
**newName** | **String** | Producer name | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessAllowPortForwading** | **Boolean** | Enable Port forwarding while using CLI access | [optional] 
**secureAccessBastionIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Bastion | [optional] 
**secureAccessClusterEndpoint** | **String** | The K8s cluster endpoint URL | [optional] 
**secureAccessDashboardUrl** | **String** | The K8s dashboard url | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless Web Access Bastion | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless Web Access Bastion | [optional] [default to false]
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


