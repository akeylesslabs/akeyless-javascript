# akeyless.AtlassianTargetDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atlassianAuthType** | **String** |  | [optional] 
**atlassianAutomationKey** | **String** | AtlassianAutomationKey is an optional Automation REST API key (Jira settings &gt; System &gt; Automation &gt; API keys). Atlassian&#39;s automation API refuses an account API token, so without this key the scanner reports the automation rules as not read. | [optional] 
**atlassianCaCertificate** | **String** | AtlassianCACertificate is a base64-encoded PEM CA certificate for a Data Center site signed by a private CA. | [optional] 
**atlassianClientId** | **String** |  | [optional] 
**atlassianClientSecret** | **String** |  | [optional] 
**atlassianCloudId** | **String** |  | [optional] 
**atlassianConfluenceToken** | **String** |  | [optional] 
**atlassianConfluenceUrl** | **String** |  | [optional] 
**atlassianDeploymentType** | **String** | When empty, the deployment type, auth type and products are inferred from the fields above, so targets saved before these fields existed keep working. | [optional] 
**atlassianEmail** | **String** |  | [optional] 
**atlassianJiraToken** | **String** |  | [optional] 
**atlassianJiraUrl** | **String** |  | [optional] 
**atlassianProducts** | **[String]** |  | [optional] 
**atlassianToken** | **String** |  | [optional] 
**atlassianUrl** | **String** |  | [optional] 


