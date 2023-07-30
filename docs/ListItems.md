# akeyless.ListItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;regular&#39;]
**autoPagination** | **String** | Retrieve all items using pagination, when disabled retrieving only first 1000 items | [optional] [default to &#39;enabled&#39;]
**filter** | **String** | Filter by item name or part of it | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**minimalView** | **Boolean** |  | [optional] 
**paginationToken** | **String** | Next page reference | [optional] 
**path** | **String** | Path to folder | [optional] 
**sraOnly** | **Boolean** | Filter by items with SRA functionality enabled | [optional] [default to false]
**subTypes** | **[String]** |  | [optional] 
**tag** | **String** | Filter by item tag | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**type** | **[String]** | The item types list of the requested items. In case it is empty, all types of items will be returned. options: [key, static-secret, dynamic-secret, classic-key] | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


