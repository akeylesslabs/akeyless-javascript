# akeyless.DSProducerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessTokenManagerId** | **String** |  | [optional] 
**aclRules** | **[String]** |  | [optional] 
**active** | **Boolean** |  | [optional] 
**adminName** | **String** |  | [optional] 
**adminPwd** | **String** |  | [optional] 
**adminRotationIntervalDays** | **Number** |  | [optional] 
**administrativePort** | **String** |  | [optional] 
**artifactoryAdminApikey** | **String** |  | [optional] 
**artifactoryAdminUsername** | **String** |  | [optional] 
**artifactoryBaseUrl** | **String** |  | [optional] 
**artifactoryTokenAudience** | **String** |  | [optional] 
**artifactoryTokenScope** | **String** |  | [optional] 
**authorizationPort** | **String** |  | [optional] 
**awsAccessKeyId** | **String** |  | [optional] 
**awsAccessMode** | **String** |  | [optional] 
**awsExternalId** | **String** |  | [optional] 
**awsRegion** | **String** |  | [optional] 
**awsRoleArns** | **String** |  | [optional] 
**awsSecretAccessKey** | **String** |  | [optional] 
**awsSessionTags** | **String** |  | [optional] 
**awsSessionToken** | **String** |  | [optional] 
**awsTransitiveTagKeys** | **String** |  | [optional] 
**awsUserConsoleAccess** | **Boolean** |  | [optional] 
**awsUserGroups** | **String** |  | [optional] 
**awsUserPolicies** | **String** |  | [optional] 
**awsUserProgrammaticAccess** | **Boolean** |  | [optional] 
**azureAdministrativeUnit** | **String** |  | [optional] 
**azureAppObjectId** | **String** |  | [optional] 
**azureClientId** | **String** |  | [optional] 
**azureClientSecret** | **String** |  | [optional] 
**azureFixedUserNameSubClaimKey** | **String** |  | [optional] 
**azureFixedUserOnly** | **Boolean** |  | [optional] 
**azureResourceGroupName** | **String** |  | [optional] 
**azureResourceName** | **String** |  | [optional] 
**azureSubscriptionId** | **String** |  | [optional] 
**azureTenantId** | **String** |  | [optional] 
**azureUserGroupsObjId** | **String** |  | [optional] 
**azureUserPortalAccess** | **Boolean** |  | [optional] 
**azureUserProgrammaticAccess** | **Boolean** |  | [optional] 
**azureUserRolesTemplateId** | **String** |  | [optional] 
**azureUsername** | **String** |  | [optional] 
**cassandraCreationStatements** | **String** |  | [optional] 
**chefOrganizations** | **String** |  | [optional] 
**chefServerAccessMode** | **String** |  | [optional] 
**chefServerHostName** | **String** |  | [optional] 
**chefServerKey** | **String** |  | [optional] 
**chefServerPort** | **String** |  | [optional] 
**chefServerUrl** | **String** |  | [optional] 
**chefServerUsername** | **String** |  | [optional] 
**chefSkipSsl** | **Boolean** |  | [optional] 
**clientAuthenticationType** | **String** |  | [optional] 
**cloudServiceProvider** | **String** |  | [optional] 
**clusterMode** | **Boolean** |  | [optional] 
**connectionType** | **String** |  | [optional] 
**createSyncUrl** | **String** |  | [optional] 
**dbClientId** | **String** |  | [optional] 
**dbClientSecret** | **String** |  | [optional] 
**dbHostName** | **String** |  | [optional] 
**dbIsolationLevel** | **String** |  | [optional] 
**dbMaxIdleConns** | **String** |  | [optional] 
**dbMaxOpenConns** | **String** |  | [optional] 
**dbName** | **String** |  | [optional] 
**dbPort** | **String** |  | [optional] 
**dbPrivateKey** | **String** | (Optional) Private Key in PEM format | [optional] 
**dbPrivateKeyPassphrase** | **String** |  | [optional] 
**dbPwd** | **String** |  | [optional] 
**dbServerCertificates** | **String** | (Optional) DBServerCertificates defines the set of root certificate authorities that clients use when verifying server certificates. If DBServerCertificates is empty, TLS uses the host&#39;s root CA set. | [optional] 
**dbServerName** | **String** | (Optional) ServerName is used to verify the hostname on the returned certificates unless InsecureSkipVerify is given. It is also included in the client&#39;s handshake to support virtual hosting unless it is an IP address. | [optional] 
**dbTenantId** | **String** |  | [optional] 
**dbUserName** | **String** |  | [optional] 
**deleteProtection** | **Boolean** |  | [optional] 
**dynamicSecretId** | **Number** |  | [optional] 
**dynamicSecretKey** | **String** |  | [optional] 
**dynamicSecretName** | **String** |  | [optional] 
**dynamicSecretType** | **String** |  | [optional] 
**eksAccessKeyId** | **String** |  | [optional] 
**eksAssumeRole** | **String** |  | [optional] 
**eksClusterCaCertificate** | **String** |  | [optional] 
**eksClusterEndpoint** | **String** |  | [optional] 
**eksClusterName** | **String** |  | [optional] 
**eksRegion** | **String** |  | [optional] 
**eksSecretAccessKey** | **String** |  | [optional] 
**enableAdminRotation** | **Boolean** |  | [optional] 
**enforceReplayPrevention** | **Boolean** | relevant for PRIVATE_KEY_JWT client authentication type | [optional] 
**expirationDate** | **Date** |  | [optional] 
**externallyProvidedUser** | **String** |  | [optional] 
**failureMessage** | **String** |  | [optional] 
**fixedUserOnly** | **String** |  | [optional] 
**gcpKeyAlgo** | **String** |  | [optional] 
**gcpRoleBindings** | **{String: [String]}** |  | [optional] 
**gcpServiceAccountEmail** | **String** | GCPServiceAccountEmail overrides the deprecated field from the target | [optional] 
**gcpServiceAccountKey** | **String** |  | [optional] 
**gcpServiceAccountKeyBase64** | **String** |  | [optional] 
**gcpServiceAccountKeyId** | **String** |  | [optional] 
**gcpServiceAccountType** | **String** |  | [optional] 
**gcpTmpServiceAccountName** | **String** |  | [optional] 
**gcpTokenLifetime** | **String** |  | [optional] 
**gcpTokenScope** | **String** |  | [optional] 
**gcpTokenType** | **String** |  | [optional] 
**githubAppId** | **Number** |  | [optional] 
**githubAppPrivateKey** | **String** |  | [optional] 
**githubBaseUrl** | **String** |  | [optional] 
**githubInstallationId** | **Number** |  | [optional] 
**githubInstallationTokenPermissions** | **{String: String}** |  | [optional] 
**githubInstallationTokenRepositories** | **[String]** |  | [optional] 
**githubInstallationTokenRepositoriesIds** | **[Number]** |  | [optional] 
**githubOrganizationName** | **String** |  | [optional] 
**githubRepositoryPath** | **String** |  | [optional] 
**gitlabAccessToken** | **String** |  | [optional] 
**gitlabAccessType** | **String** |  | [optional] 
**gitlabCertificate** | **String** |  | [optional] 
**gitlabGroupName** | **String** |  | [optional] 
**gitlabProjectName** | **String** |  | [optional] 
**gitlabRole** | **String** |  | [optional] 
**gitlabTokenScope** | **[String]** |  | [optional] 
**gitlabUrl** | **String** |  | [optional] 
**gkeClusterCaCertificate** | **String** |  | [optional] 
**gkeClusterEndpoint** | **String** |  | [optional] 
**gkeClusterName** | **String** |  | [optional] 
**gkeServiceAccountKey** | **String** |  | [optional] 
**gkeServiceAccountName** | **String** |  | [optional] 
**googleWorkspaceAccessMode** | **String** |  | [optional] 
**googleWorkspaceAdminName** | **String** |  | [optional] 
**googleWorkspaceFixedUserNameSubClaimKey** | **String** |  | [optional] 
**googleWorkspaceGroupName** | **String** |  | [optional] 
**googleWorkspaceGroupRole** | **String** |  | [optional] 
**googleWorkspaceRoleName** | **String** |  | [optional] 
**googleWorkspaceRoleScope** | **String** |  | [optional] 
**graceRotatedSecretKey** | **String** |  | [optional] 
**grantTypes** | **[String]** |  | [optional] 
**groups** | **String** |  | [optional] 
**gwCloudIdentityExternalIdOpt** | [**AWSGatewayCloudIdentityExternalIdOpt**](AWSGatewayCloudIdentityExternalIdOpt.md) |  | [optional] 
**hanadbCreationStatements** | **String** |  | [optional] 
**hanadbRevocationStatements** | **String** |  | [optional] 
**hostName** | **String** |  | [optional] 
**hostPort** | **String** |  | [optional] 
**implementationType** | **String** |  | [optional] 
**isFixedUser** | **String** |  | [optional] 
**issuer** | **String** | relevant for CLIENT_TLS_CERTIFICATE client authentication type | [optional] 
**itemTargetsAssoc** | [**[ItemTargetAssociation]**](ItemTargetAssociation.md) |  | [optional] 
**jwks** | **String** |  | [optional] 
**jwksUrl** | **String** |  | [optional] 
**k8sAllowedNamespaces** | **String** | comma-separated list of allowed namespaces. Can hold just * which signifies that any namespace is allowed | [optional] 
**k8sAuthType** | **String** |  | [optional] 
**k8sBearerToken** | **String** |  | [optional] 
**k8sClientCertData** | **String** | For K8s Client certificates authentication | [optional] 
**k8sClientKeyData** | **String** |  | [optional] 
**k8sClusterCaCertificate** | **String** |  | [optional] 
**k8sClusterEndpoint** | **String** |  | [optional] 
**k8sClusterName** | **String** |  | [optional] 
**k8sDynamicMode** | **Boolean** | when native k8s is in dynamic mode, user can define allowed namespaces, K8sServiceAccount doesn&#39;t exist from the start and will only be created at time of getting dynamic secret value By default dynamic mode is false and producer behaves like it did before | [optional] 
**k8sMultipleDocYamlTempDefinition** | **[Number]** | Yaml definition for creation of temporary objects. Field that can hold multiple docs from which following will be extracted: ServiceAccount, Role/ClusterRole and RoleBinding/ClusterRoleBinding. If ServiceAccount not specified - it will be generated automatically | [optional] 
**k8sNamespace** | **String** |  | [optional] 
**k8sRoleName** | **String** | Name of the pre-existing Role or ClusterRole to bind a generated service account to. | [optional] 
**k8sRoleType** | **String** |  | [optional] 
**k8sServiceAccount** | **String** |  | [optional] 
**lastAdminRotation** | **Number** |  | [optional] 
**ldapAudience** | **String** |  | [optional] 
**ldapBindDn** | **String** |  | [optional] 
**ldapBindPassword** | **String** |  | [optional] 
**ldapCertificate** | **String** |  | [optional] 
**ldapFixedUserNameSubClaimKey** | **String** |  | [optional] 
**ldapFixedUserType** | **String** |  | [optional] 
**ldapGroupDn** | **String** |  | [optional] 
**ldapTokenExpiration** | **String** |  | [optional] 
**ldapUrl** | **String** |  | [optional] 
**ldapUserAttr** | **String** |  | [optional] 
**ldapUserDn** | **String** |  | [optional] 
**metadata** | **String** |  | [optional] 
**mongodbAtlasApiPrivateKey** | **String** |  | [optional] 
**mongodbAtlasApiPublicKey** | **String** |  | [optional] 
**mongodbAtlasProjectId** | **String** | mongodb atlas fields | [optional] 
**mongodbCustomData** | **String** |  | [optional] 
**mongodbDbName** | **String** | common fields | [optional] 
**mongodbDefaultAuthDb** | **String** |  | [optional] 
**mongodbHostPort** | **String** |  | [optional] 
**mongodbIsAtlas** | **Boolean** |  | [optional] 
**mongodbPassword** | **String** |  | [optional] 
**mongodbRoles** | **String** | common fields | [optional] 
**mongodbUriConnection** | **String** | mongodb fields | [optional] 
**mongodbUriOptions** | **String** |  | [optional] 
**mongodbUsername** | **String** |  | [optional] 
**mssqlCreationStatements** | **String** |  | [optional] 
**mssqlRevocationStatements** | **String** |  | [optional] 
**mysqlCreationStatements** | **String** |  | [optional] 
**mysqlRevocationStatements** | **String** |  | [optional] 
**oracleCreationStatements** | **String** |  | [optional] 
**oracleRevocationStatements** | **String** |  | [optional] 
**oracleWalletDetails** | [**WalletDetails**](WalletDetails.md) |  | [optional] 
**password** | **String** |  | [optional] 
**passwordLength** | **Number** |  | [optional] 
**passwordPolicy** | **String** |  | [optional] 
**payload** | **String** |  | [optional] 
**pingUrl** | **String** |  | [optional] 
**postgresCreationStatements** | **String** |  | [optional] 
**postgresRevocationStatements** | **String** |  | [optional] 
**privilegedUser** | **String** |  | [optional] 
**rabbitmqServerPassword** | **String** |  | [optional] 
**rabbitmqServerUri** | **String** |  | [optional] 
**rabbitmqServerUser** | **String** |  | [optional] 
**rabbitmqUserConfPermission** | **String** |  | [optional] 
**rabbitmqUserReadPermission** | **String** |  | [optional] 
**rabbitmqUserTags** | **String** |  | [optional] 
**rabbitmqUserVhost** | **String** |  | [optional] 
**rabbitmqUserWritePermission** | **String** |  | [optional] 
**rdpFixedUserNameSubClaimKey** | **String** |  | [optional] 
**redirectUris** | **[String]** |  | [optional] 
**redshiftCreationStatements** | **String** |  | [optional] 
**restrictedScopes** | **[String]** |  | [optional] 
**revokeSyncUrl** | **String** |  | [optional] 
**rotateSyncUrl** | **String** |  | [optional] 
**scopes** | **[String]** |  | [optional] 
**secureRemoteAccessDetails** | [**SecureRemoteAccess**](SecureRemoteAccess.md) |  | [optional] 
**sessionExtensionWarnIntervalMin** | **Number** |  | [optional] 
**sfAccount** | **String** |  | [optional] 
**sfAuthMode** | **String** |  | [optional] 
**sfKeyAlgo** | **String** |  | [optional] 
**sfUserRole** | **String** | generated  users info | [optional] 
**sfWarehouseName** | **String** |  | [optional] 
**shouldStop** | **String** | TODO delete this after migration | [optional] 
**signingAlgorithm** | **String** |  | [optional] 
**sslConnectionCertificate** | **String** | (Optional) SSLConnectionCertificate defines the certificate for SSL connection. Must be base64 certificate loaded by UI using file loader field | [optional] 
**sslConnectionMode** | **Boolean** | (Optional) SSLConnectionMode defines if SSL mode will be used to connect to DB | [optional] 
**subjectDn** | **String** |  | [optional] 
**tags** | **[String]** |  | [optional] 
**timeoutSeconds** | **Number** |  | [optional] 
**useGwCloudIdentity** | **Boolean** |  | [optional] 
**useGwServiceAccount** | **Boolean** |  | [optional] 
**userName** | **String** |  | [optional] 
**userPassword** | **String** |  | [optional] 
**userPrincipalName** | **String** |  | [optional] 
**userTtl** | **String** |  | [optional] 
**usernameLength** | **Number** |  | [optional] 
**usernamePolicy** | **String** |  | [optional] 
**usernameTemplate** | **String** |  | [optional] 
**venafiAllowSubdomains** | **Boolean** |  | [optional] 
**venafiAllowedDomains** | **[String]** |  | [optional] 
**venafiApiKey** | **String** |  | [optional] 
**venafiAutoGeneratedFolder** | **String** |  | [optional] 
**venafiBaseUrl** | **String** |  | [optional] 
**venafiRootFirstInChain** | **Boolean** |  | [optional] 
**venafiSignUsingAkeylessPki** | **Boolean** |  | [optional] 
**venafiSignerKeyName** | **String** |  | [optional] 
**venafiStorePrivateKey** | **Boolean** |  | [optional] 
**venafiTppAccessToken** | **String** |  | [optional] 
**venafiTppClientId** | **String** |  | [optional] 
**venafiTppPassword** | **String** | Deprecated: VenafiAccessToken and VenafiRefreshToken should be used instead | [optional] 
**venafiTppRefreshToken** | **String** |  | [optional] 
**venafiTppUsername** | **String** | Deprecated: VenafiAccessToken and VenafiRefreshToken should be used instead | [optional] 
**venafiUseTpp** | **Boolean** |  | [optional] 
**venafiZone** | **String** |  | [optional] 
**warnBeforeUserExpirationMin** | **Number** |  | [optional] 


