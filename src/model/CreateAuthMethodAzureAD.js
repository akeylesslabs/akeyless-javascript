/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateAuthMethodAzureAD model module.
 * @module model/CreateAuthMethodAzureAD
 * @version 5.0.0
 */
class CreateAuthMethodAzureAD {
    /**
     * Constructs a new <code>CreateAuthMethodAzureAD</code>.
     * createAuthMethodAzureAD is a command that creates a new auth method that will be able to authenticate using Azure Active Directory credentials. [Deprecated: Use auth-method-create-azure-ad command]
     * @alias module:model/CreateAuthMethodAzureAD
     * @param boundTenantId {String} The Azure tenant id that the access is restricted to
     * @param name {String} Auth Method name
     */
    constructor(boundTenantId, name) { 
        
        CreateAuthMethodAzureAD.initialize(this, boundTenantId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, boundTenantId, name) { 
        obj['access-expires'] = 0;
        obj['audience'] = 'https://management.azure.com/';
        obj['bound-tenant-id'] = boundTenantId;
        obj['issuer'] = 'https://sts.windows.net/---bound_tenant_id---';
        obj['json'] = false;
        obj['jwks-uri'] = 'https://login.microsoftonline.com/common/discovery/keys';
        obj['jwt-ttl'] = 0;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateAuthMethodAzureAD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodAzureAD} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodAzureAD} The populated <code>CreateAuthMethodAzureAD</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodAzureAD();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('audit-logs-claims')) {
                obj['audit-logs-claims'] = ApiClient.convertToType(data['audit-logs-claims'], ['String']);
            }
            if (data.hasOwnProperty('bound-group-id')) {
                obj['bound-group-id'] = ApiClient.convertToType(data['bound-group-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('bound-providers')) {
                obj['bound-providers'] = ApiClient.convertToType(data['bound-providers'], ['String']);
            }
            if (data.hasOwnProperty('bound-resource-id')) {
                obj['bound-resource-id'] = ApiClient.convertToType(data['bound-resource-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-resource-names')) {
                obj['bound-resource-names'] = ApiClient.convertToType(data['bound-resource-names'], ['String']);
            }
            if (data.hasOwnProperty('bound-resource-types')) {
                obj['bound-resource-types'] = ApiClient.convertToType(data['bound-resource-types'], ['String']);
            }
            if (data.hasOwnProperty('bound-rg-id')) {
                obj['bound-rg-id'] = ApiClient.convertToType(data['bound-rg-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-spid')) {
                obj['bound-spid'] = ApiClient.convertToType(data['bound-spid'], ['String']);
            }
            if (data.hasOwnProperty('bound-sub-id')) {
                obj['bound-sub-id'] = ApiClient.convertToType(data['bound-sub-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-tenant-id')) {
                obj['bound-tenant-id'] = ApiClient.convertToType(data['bound-tenant-id'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expiration-event-in')) {
                obj['expiration-event-in'] = ApiClient.convertToType(data['expiration-event-in'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwks-uri')) {
                obj['jwks-uri'] = ApiClient.convertToType(data['jwks-uri'], 'String');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product-type')) {
                obj['product-type'] = ApiClient.convertToType(data['product-type'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('unique-identifier')) {
                obj['unique-identifier'] = ApiClient.convertToType(data['unique-identifier'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAuthMethodAzureAD</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAuthMethodAzureAD</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateAuthMethodAzureAD.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['audience'] && !(typeof data['audience'] === 'string' || data['audience'] instanceof String)) {
            throw new Error("Expected the field `audience` to be a primitive type in the JSON string but got " + data['audience']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['audit-logs-claims'])) {
            throw new Error("Expected the field `audit-logs-claims` to be an array in the JSON data but got " + data['audit-logs-claims']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-group-id'])) {
            throw new Error("Expected the field `bound-group-id` to be an array in the JSON data but got " + data['bound-group-id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-ips'])) {
            throw new Error("Expected the field `bound-ips` to be an array in the JSON data but got " + data['bound-ips']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-providers'])) {
            throw new Error("Expected the field `bound-providers` to be an array in the JSON data but got " + data['bound-providers']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-resource-id'])) {
            throw new Error("Expected the field `bound-resource-id` to be an array in the JSON data but got " + data['bound-resource-id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-resource-names'])) {
            throw new Error("Expected the field `bound-resource-names` to be an array in the JSON data but got " + data['bound-resource-names']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-resource-types'])) {
            throw new Error("Expected the field `bound-resource-types` to be an array in the JSON data but got " + data['bound-resource-types']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-rg-id'])) {
            throw new Error("Expected the field `bound-rg-id` to be an array in the JSON data but got " + data['bound-rg-id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-spid'])) {
            throw new Error("Expected the field `bound-spid` to be an array in the JSON data but got " + data['bound-spid']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-sub-id'])) {
            throw new Error("Expected the field `bound-sub-id` to be an array in the JSON data but got " + data['bound-sub-id']);
        }
        // ensure the json data is a string
        if (data['bound-tenant-id'] && !(typeof data['bound-tenant-id'] === 'string' || data['bound-tenant-id'] instanceof String)) {
            throw new Error("Expected the field `bound-tenant-id` to be a primitive type in the JSON string but got " + data['bound-tenant-id']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['expiration-event-in'])) {
            throw new Error("Expected the field `expiration-event-in` to be an array in the JSON data but got " + data['expiration-event-in']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['gw-bound-ips'])) {
            throw new Error("Expected the field `gw-bound-ips` to be an array in the JSON data but got " + data['gw-bound-ips']);
        }
        // ensure the json data is a string
        if (data['issuer'] && !(typeof data['issuer'] === 'string' || data['issuer'] instanceof String)) {
            throw new Error("Expected the field `issuer` to be a primitive type in the JSON string but got " + data['issuer']);
        }
        // ensure the json data is a string
        if (data['jwks-uri'] && !(typeof data['jwks-uri'] === 'string' || data['jwks-uri'] instanceof String)) {
            throw new Error("Expected the field `jwks-uri` to be a primitive type in the JSON string but got " + data['jwks-uri']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product-type'])) {
            throw new Error("Expected the field `product-type` to be an array in the JSON data but got " + data['product-type']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['unique-identifier'] && !(typeof data['unique-identifier'] === 'string' || data['unique-identifier'] instanceof String)) {
            throw new Error("Expected the field `unique-identifier` to be a primitive type in the JSON string but got " + data['unique-identifier']);
        }

        return true;
    }


}

CreateAuthMethodAzureAD.RequiredProperties = ["bound-tenant-id", "name"];

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
CreateAuthMethodAzureAD.prototype['access-expires'] = 0;

/**
 * Deprecated (Deprecated) The audience in the JWT
 * @member {String} audience
 * @default 'https://management.azure.com/'
 */
CreateAuthMethodAzureAD.prototype['audience'] = 'https://management.azure.com/';

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
CreateAuthMethodAzureAD.prototype['audit-logs-claims'] = undefined;

/**
 * A list of group ids that the access is restricted to
 * @member {Array.<String>} bound-group-id
 */
CreateAuthMethodAzureAD.prototype['bound-group-id'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodAzureAD.prototype['bound-ips'] = undefined;

/**
 * A list of resource providers that the access is restricted to (e.g, Microsoft.Compute, Microsoft.ManagedIdentity, etc)
 * @member {Array.<String>} bound-providers
 */
CreateAuthMethodAzureAD.prototype['bound-providers'] = undefined;

/**
 * A list of full resource ids that the access is restricted to
 * @member {Array.<String>} bound-resource-id
 */
CreateAuthMethodAzureAD.prototype['bound-resource-id'] = undefined;

/**
 * A list of resource names that the access is restricted to (e.g, a virtual machine name, scale set name, etc).
 * @member {Array.<String>} bound-resource-names
 */
CreateAuthMethodAzureAD.prototype['bound-resource-names'] = undefined;

/**
 * A list of resource types that the access is restricted to (e.g, virtualMachines, userAssignedIdentities, etc)
 * @member {Array.<String>} bound-resource-types
 */
CreateAuthMethodAzureAD.prototype['bound-resource-types'] = undefined;

/**
 * A list of resource groups that the access is restricted to
 * @member {Array.<String>} bound-rg-id
 */
CreateAuthMethodAzureAD.prototype['bound-rg-id'] = undefined;

/**
 * A list of service principal IDs that the access is restricted to
 * @member {Array.<String>} bound-spid
 */
CreateAuthMethodAzureAD.prototype['bound-spid'] = undefined;

/**
 * A list of subscription ids that the access is restricted to
 * @member {Array.<String>} bound-sub-id
 */
CreateAuthMethodAzureAD.prototype['bound-sub-id'] = undefined;

/**
 * The Azure tenant id that the access is restricted to
 * @member {String} bound-tenant-id
 */
CreateAuthMethodAzureAD.prototype['bound-tenant-id'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreateAuthMethodAzureAD.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
CreateAuthMethodAzureAD.prototype['description'] = undefined;

/**
 * How many days before the expiration of the auth method would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
CreateAuthMethodAzureAD.prototype['expiration-event-in'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodAzureAD.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodAzureAD.prototype['gw-bound-ips'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 * @default 'https://sts.windows.net/---bound_tenant_id---'
 */
CreateAuthMethodAzureAD.prototype['issuer'] = 'https://sts.windows.net/---bound_tenant_id---';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethodAzureAD.prototype['json'] = false;

/**
 * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
 * @member {String} jwks-uri
 * @default 'https://login.microsoftonline.com/common/discovery/keys'
 */
CreateAuthMethodAzureAD.prototype['jwks-uri'] = 'https://login.microsoftonline.com/common/discovery/keys';

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethodAzureAD.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodAzureAD.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
CreateAuthMethodAzureAD.prototype['product-type'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodAzureAD.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodAzureAD.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value which is a \"sub claim\" name that contains details uniquely identifying that resource. This \"sub claim\" is used to distinguish between different identities.
 * @member {String} unique-identifier
 */
CreateAuthMethodAzureAD.prototype['unique-identifier'] = undefined;






export default CreateAuthMethodAzureAD;

