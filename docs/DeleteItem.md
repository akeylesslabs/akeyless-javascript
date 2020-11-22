# akeyless.DeleteItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteImmediately** | **Boolean** | When delete-in-days&#x3D;-1, must be set | [optional] [default to false]
**deleteInDays** | **Number** | The number of days to wait before deleting the item (relevant for keys only) | [optional] [default to 7]
**name** | **String** | Item name | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**version** | **Number** | The specific version you want to delete - 0&#x3D;last version, -1&#x3D;entire item with all versions (default) | [optional] [default to -1]


