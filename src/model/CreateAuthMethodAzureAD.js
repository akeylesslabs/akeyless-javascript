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
 * The CreateAuthMethodAzureAD model module.
 * @module model/CreateAuthMethodAzureAD
 * @version 3.2.0
 */
class CreateAuthMethodAzureAD {
    /**
     * Constructs a new <code>CreateAuthMethodAzureAD</code>.
     * createAuthMethodAzureAD is a command that creates a new auth method that will be able to authenticate using Azure Active Directory credentials.
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
        obj['bound-tenant-id'] = boundTenantId;
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
CreateAuthMethodAzureAD.prototype['access-expires'] = 0;

/**
 * The audience in the JWT
 * @member {String} audience
 * @default 'https://management.azure.com/'
 */
CreateAuthMethodAzureAD.prototype['audience'] = 'https://management.azure.com/';

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
 */
CreateAuthMethodAzureAD.prototype['json'] = undefined;

/**
 * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
 * @member {String} jwks-uri
 * @default 'https://login.microsoftonline.com/common/discovery/keys'
 */
CreateAuthMethodAzureAD.prototype['jwks-uri'] = 'https://login.microsoftonline.com/common/discovery/keys';

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 */
CreateAuthMethodAzureAD.prototype['jwt-ttl'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodAzureAD.prototype['name'] = undefined;

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






export default CreateAuthMethodAzureAD;

