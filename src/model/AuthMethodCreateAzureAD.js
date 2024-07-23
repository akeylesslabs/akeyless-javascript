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
 * The AuthMethodCreateAzureAD model module.
 * @module model/AuthMethodCreateAzureAD
 * @version 4.2.1
 */
class AuthMethodCreateAzureAD {
    /**
     * Constructs a new <code>AuthMethodCreateAzureAD</code>.
     * authMethodCreateAzureAD is a command that creates a new auth method that will be able to authenticate using Azure Active Directory credentials.
     * @alias module:model/AuthMethodCreateAzureAD
     * @param boundTenantId {String} The Azure tenant id that the access is restricted to
     * @param name {String} Auth Method name
     */
    constructor(boundTenantId, name) { 
        
        AuthMethodCreateAzureAD.initialize(this, boundTenantId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, boundTenantId, name) { 
        obj['bound-tenant-id'] = boundTenantId;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AuthMethodCreateAzureAD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodCreateAzureAD} obj Optional instance to populate.
     * @return {module:model/AuthMethodCreateAzureAD} The populated <code>AuthMethodCreateAzureAD</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodCreateAzureAD();

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
        }
        return obj;
    }


}

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
AuthMethodCreateAzureAD.prototype['access-expires'] = 0;

/**
 * Deprecated (Deprecated) The audience in the JWT
 * @member {String} audience
 * @default 'https://management.azure.com/'
 */
AuthMethodCreateAzureAD.prototype['audience'] = 'https://management.azure.com/';

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
AuthMethodCreateAzureAD.prototype['audit-logs-claims'] = undefined;

/**
 * A list of group ids that the access is restricted to
 * @member {Array.<String>} bound-group-id
 */
AuthMethodCreateAzureAD.prototype['bound-group-id'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
AuthMethodCreateAzureAD.prototype['bound-ips'] = undefined;

/**
 * A list of resource providers that the access is restricted to (e.g, Microsoft.Compute, Microsoft.ManagedIdentity, etc)
 * @member {Array.<String>} bound-providers
 */
AuthMethodCreateAzureAD.prototype['bound-providers'] = undefined;

/**
 * A list of full resource ids that the access is restricted to
 * @member {Array.<String>} bound-resource-id
 */
AuthMethodCreateAzureAD.prototype['bound-resource-id'] = undefined;

/**
 * A list of resource names that the access is restricted to (e.g, a virtual machine name, scale set name, etc).
 * @member {Array.<String>} bound-resource-names
 */
AuthMethodCreateAzureAD.prototype['bound-resource-names'] = undefined;

/**
 * A list of resource types that the access is restricted to (e.g, virtualMachines, userAssignedIdentities, etc)
 * @member {Array.<String>} bound-resource-types
 */
AuthMethodCreateAzureAD.prototype['bound-resource-types'] = undefined;

/**
 * A list of resource groups that the access is restricted to
 * @member {Array.<String>} bound-rg-id
 */
AuthMethodCreateAzureAD.prototype['bound-rg-id'] = undefined;

/**
 * A list of service principal IDs that the access is restricted to
 * @member {Array.<String>} bound-spid
 */
AuthMethodCreateAzureAD.prototype['bound-spid'] = undefined;

/**
 * A list of subscription ids that the access is restricted to
 * @member {Array.<String>} bound-sub-id
 */
AuthMethodCreateAzureAD.prototype['bound-sub-id'] = undefined;

/**
 * The Azure tenant id that the access is restricted to
 * @member {String} bound-tenant-id
 */
AuthMethodCreateAzureAD.prototype['bound-tenant-id'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
AuthMethodCreateAzureAD.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
AuthMethodCreateAzureAD.prototype['description'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
AuthMethodCreateAzureAD.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
AuthMethodCreateAzureAD.prototype['gw-bound-ips'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 * @default 'https://sts.windows.net/---bound_tenant_id---'
 */
AuthMethodCreateAzureAD.prototype['issuer'] = 'https://sts.windows.net/---bound_tenant_id---';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AuthMethodCreateAzureAD.prototype['json'] = false;

/**
 * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
 * @member {String} jwks-uri
 * @default 'https://login.microsoftonline.com/common/discovery/keys'
 */
AuthMethodCreateAzureAD.prototype['jwks-uri'] = 'https://login.microsoftonline.com/common/discovery/keys';

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
AuthMethodCreateAzureAD.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
AuthMethodCreateAzureAD.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
AuthMethodCreateAzureAD.prototype['product-type'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AuthMethodCreateAzureAD.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AuthMethodCreateAzureAD.prototype['uid-token'] = undefined;






export default AuthMethodCreateAzureAD;

