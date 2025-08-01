# akeyless.GatewayUpdateProducerNativeK8S

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customUsernameTemplate** | **String** | Customize how temporary usernames are generated using go template | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**k8sAllowedNamespaces** | **String** | Comma-separated list of allowed K8S namespaces for the generated ServiceAccount (relevant only for k8s-service-account-type&#x3D;dynamic) | [optional] 
**k8sClusterCaCert** | **String** | K8S cluster CA certificate | [optional] 
**k8sClusterEndpoint** | **String** | K8S cluster URL endpoint | [optional] 
**k8sClusterName** | **String** | K8S cluster name | [optional] 
**k8sClusterToken** | **String** | K8S cluster Bearer token | [optional] 
**k8sNamespace** | **String** | K8S Namespace where the ServiceAccount exists. | [optional] 
**k8sPredefinedRoleName** | **String** | The pre-existing Role or ClusterRole name to bind the generated ServiceAccount to (relevant only for k8s-service-account-type&#x3D;dynamic) | [optional] 
**k8sPredefinedRoleType** | **String** | Specifies the type of the pre-existing K8S role [Role, ClusterRole] (relevant only for k8s-service-account-type&#x3D;dynamic) | [optional] 
**k8sRolebindingYamlData** | **String** | Content of the yaml in a Base64 format. | [optional] 
**k8sRolebindingYamlDef** | **String** | Path to yaml file that contains definitions of K8S role and role binding (relevant only for k8s-service-account-type&#x3D;dynamic) | [optional] 
**k8sServiceAccount** | **String** | K8S ServiceAccount to extract token from. | [optional] 
**k8sServiceAccountType** | **String** | K8S ServiceAccount type [fixed, dynamic]. | [optional] 
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessAllowPortForwading** | **Boolean** | Enable Port forwarding while using CLI access | [optional] 
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessClusterEndpoint** | **String** | The K8s cluster endpoint URL | [optional] 
**secureAccessDashboardUrl** | **String** | The K8s dashboard url | [optional] 
**secureAccessDelay** | **Number** | The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**useGwServiceAccount** | **Boolean** | Use the GW&#39;s service account | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


