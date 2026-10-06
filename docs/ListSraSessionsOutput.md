# akeyless.ListSraSessionsOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedGateways** | [**[GatewayNameInfo]**](GatewayNameInfo.md) | Gateways whose sessions the caller may see in full. Omitted when the request asks for own sessions only, and when it carries a pagination token | [optional] 
**nextPage** | **String** | Cursor for the following page, sent back as the pagination token. Empty when the result set is exhausted, so stop when it is empty rather than waiting for the field to disappear | [optional] 
**sessions** | [**[SraSessionEntryOut]**](SraSessionEntryOut.md) | The requested page of sessions, newest first by start time then session id | [optional] 


