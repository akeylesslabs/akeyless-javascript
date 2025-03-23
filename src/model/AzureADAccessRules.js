/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AzureADAccessRules model module.
 * @module model/AzureADAccessRules
 * @version 5.0.1
 */
class AzureADAccessRules {
    /**
     * Constructs a new <code>AzureADAccessRules</code>.
     * AzureADAccessRules contains access rules specific to Azure Active Directory authentication.
     * @alias module:model/AzureADAccessRules
     */
    constructor() { 
        
        AzureADAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AzureADAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AzureADAccessRules} obj Optional instance to populate.
     * @return {module:model/AzureADAccessRules} The populated <code>AzureADAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AzureADAccessRules();

            if (data.hasOwnProperty('ad_endpoint')) {
                obj['ad_endpoint'] = ApiClient.convertToType(data['ad_endpoint'], 'String');
            }
            if (data.hasOwnProperty('bound_group_ids')) {
                obj['bound_group_ids'] = ApiClient.convertToType(data['bound_group_ids'], ['String']);
            }
            if (data.hasOwnProperty('bound_resource_groups')) {
                obj['bound_resource_groups'] = ApiClient.convertToType(data['bound_resource_groups'], ['String']);
            }
            if (data.hasOwnProperty('bound_resource_ids')) {
                obj['bound_resource_ids'] = ApiClient.convertToType(data['bound_resource_ids'], ['String']);
            }
            if (data.hasOwnProperty('bound_resource_names')) {
                obj['bound_resource_names'] = ApiClient.convertToType(data['bound_resource_names'], ['String']);
            }
            if (data.hasOwnProperty('bound_resource_providers')) {
                obj['bound_resource_providers'] = ApiClient.convertToType(data['bound_resource_providers'], ['String']);
            }
            if (data.hasOwnProperty('bound_resource_types')) {
                obj['bound_resource_types'] = ApiClient.convertToType(data['bound_resource_types'], ['String']);
            }
            if (data.hasOwnProperty('bound_service_principal_ids')) {
                obj['bound_service_principal_ids'] = ApiClient.convertToType(data['bound_service_principal_ids'], ['String']);
            }
            if (data.hasOwnProperty('bound_subscription_ids')) {
                obj['bound_subscription_ids'] = ApiClient.convertToType(data['bound_subscription_ids'], ['String']);
            }
            if (data.hasOwnProperty('bound_tenant_id')) {
                obj['bound_tenant_id'] = ApiClient.convertToType(data['bound_tenant_id'], 'String');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('jwks_uri')) {
                obj['jwks_uri'] = ApiClient.convertToType(data['jwks_uri'], 'String');
            }
            if (data.hasOwnProperty('unique_identifier')) {
                obj['unique_identifier'] = ApiClient.convertToType(data['unique_identifier'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AzureADAccessRules</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AzureADAccessRules</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ad_endpoint'] && !(typeof data['ad_endpoint'] === 'string' || data['ad_endpoint'] instanceof String)) {
            throw new Error("Expected the field `ad_endpoint` to be a primitive type in the JSON string but got " + data['ad_endpoint']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_group_ids'])) {
            throw new Error("Expected the field `bound_group_ids` to be an array in the JSON data but got " + data['bound_group_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_resource_groups'])) {
            throw new Error("Expected the field `bound_resource_groups` to be an array in the JSON data but got " + data['bound_resource_groups']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_resource_ids'])) {
            throw new Error("Expected the field `bound_resource_ids` to be an array in the JSON data but got " + data['bound_resource_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_resource_names'])) {
            throw new Error("Expected the field `bound_resource_names` to be an array in the JSON data but got " + data['bound_resource_names']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_resource_providers'])) {
            throw new Error("Expected the field `bound_resource_providers` to be an array in the JSON data but got " + data['bound_resource_providers']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_resource_types'])) {
            throw new Error("Expected the field `bound_resource_types` to be an array in the JSON data but got " + data['bound_resource_types']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_service_principal_ids'])) {
            throw new Error("Expected the field `bound_service_principal_ids` to be an array in the JSON data but got " + data['bound_service_principal_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_subscription_ids'])) {
            throw new Error("Expected the field `bound_subscription_ids` to be an array in the JSON data but got " + data['bound_subscription_ids']);
        }
        // ensure the json data is a string
        if (data['bound_tenant_id'] && !(typeof data['bound_tenant_id'] === 'string' || data['bound_tenant_id'] instanceof String)) {
            throw new Error("Expected the field `bound_tenant_id` to be a primitive type in the JSON string but got " + data['bound_tenant_id']);
        }
        // ensure the json data is a string
        if (data['issuer'] && !(typeof data['issuer'] === 'string' || data['issuer'] instanceof String)) {
            throw new Error("Expected the field `issuer` to be a primitive type in the JSON string but got " + data['issuer']);
        }
        // ensure the json data is a string
        if (data['jwks_uri'] && !(typeof data['jwks_uri'] === 'string' || data['jwks_uri'] instanceof String)) {
            throw new Error("Expected the field `jwks_uri` to be a primitive type in the JSON string but got " + data['jwks_uri']);
        }
        // ensure the json data is a string
        if (data['unique_identifier'] && !(typeof data['unique_identifier'] === 'string' || data['unique_identifier'] instanceof String)) {
            throw new Error("Expected the field `unique_identifier` to be a primitive type in the JSON string but got " + data['unique_identifier']);
        }

        return true;
    }


}



/**
 * The audience in the JWT.
 * @member {String} ad_endpoint
 */
AzureADAccessRules.prototype['ad_endpoint'] = undefined;

/**
 * The list of group ids that login is restricted to.
 * @member {Array.<String>} bound_group_ids
 */
AzureADAccessRules.prototype['bound_group_ids'] = undefined;

/**
 * The list of resource groups that login is restricted to.
 * @member {Array.<String>} bound_resource_groups
 */
AzureADAccessRules.prototype['bound_resource_groups'] = undefined;

/**
 * The list of full resource ids that the login is restricted to.
 * @member {Array.<String>} bound_resource_ids
 */
AzureADAccessRules.prototype['bound_resource_ids'] = undefined;

/**
 * The list of resource names that the login is restricted to (e.g, a virtual machine name, scale set name, etc).
 * @member {Array.<String>} bound_resource_names
 */
AzureADAccessRules.prototype['bound_resource_names'] = undefined;

/**
 * The list of resource providers that login is restricted to (e.g, Microsoft.Compute, Microsoft.ManagedIdentity, etc).
 * @member {Array.<String>} bound_resource_providers
 */
AzureADAccessRules.prototype['bound_resource_providers'] = undefined;

/**
 * The list of resource types that login is restricted to  (e.g, virtualMachines, userAssignedIdentities, etc).
 * @member {Array.<String>} bound_resource_types
 */
AzureADAccessRules.prototype['bound_resource_types'] = undefined;

/**
 * The list of service principal IDs that login is restricted to.
 * @member {Array.<String>} bound_service_principal_ids
 */
AzureADAccessRules.prototype['bound_service_principal_ids'] = undefined;

/**
 * The list of subscription IDs that login is restricted to.
 * @member {Array.<String>} bound_subscription_ids
 */
AzureADAccessRules.prototype['bound_subscription_ids'] = undefined;

/**
 * The tenants id for the Azure Active Directory organization.
 * @member {String} bound_tenant_id
 */
AzureADAccessRules.prototype['bound_tenant_id'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
AzureADAccessRules.prototype['issuer'] = undefined;

/**
 * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
 * @member {String} jwks_uri
 */
AzureADAccessRules.prototype['jwks_uri'] = undefined;

/**
 * A unique identifier to distinguish different users
 * @member {String} unique_identifier
 */
AzureADAccessRules.prototype['unique_identifier'] = undefined;






export default AzureADAccessRules;

