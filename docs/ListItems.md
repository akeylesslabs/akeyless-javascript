# akeyless.ListItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **String** | Filter by item name or part of it | [optional] 
**paginationToken** | **String** | Next page reference | [optional] 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**path** | **String** | Path to folder | [optional] 
**tag** | **String** | Filter by item tag | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**type** | **[String]** | The item types list of the requested items. In case it is empty, all types of items will be returned. options: [key, static-secret, dynamic-secret] | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


