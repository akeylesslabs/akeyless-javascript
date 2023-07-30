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
 * The CreateAuthMethodHuawei model module.
 * @module model/CreateAuthMethodHuawei
 * @version 3.3.16
 */
class CreateAuthMethodHuawei {
    /**
     * Constructs a new <code>CreateAuthMethodHuawei</code>.
     * createAuthMethodHuawei is a command that creates a new auth method that will be able to authenticate using Huawei credentials.
     * @alias module:model/CreateAuthMethodHuawei
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        CreateAuthMethodHuawei.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateAuthMethodHuawei</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodHuawei} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodHuawei} The populated <code>CreateAuthMethodHuawei</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodHuawei();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('auth-url')) {
                obj['auth-url'] = ApiClient.convertToType(data['auth-url'], 'String');
            }
            if (data.hasOwnProperty('bound-domain-id')) {
                obj['bound-domain-id'] = ApiClient.convertToType(data['bound-domain-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-domain-name')) {
                obj['bound-domain-name'] = ApiClient.convertToType(data['bound-domain-name'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('bound-tenant-id')) {
                obj['bound-tenant-id'] = ApiClient.convertToType(data['bound-tenant-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-tenant-name')) {
                obj['bound-tenant-name'] = ApiClient.convertToType(data['bound-tenant-name'], ['String']);
            }
            if (data.hasOwnProperty('bound-user-id')) {
                obj['bound-user-id'] = ApiClient.convertToType(data['bound-user-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-user-name')) {
                obj['bound-user-name'] = ApiClient.convertToType(data['bound-user-name'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
CreateAuthMethodHuawei.prototype['access-expires'] = 0;

/**
 * sts URL
 * @member {String} auth-url
 * @default 'https://iam.myhwclouds.com:443/v3'
 */
CreateAuthMethodHuawei.prototype['auth-url'] = 'https://iam.myhwclouds.com:443/v3';

/**
 * A list of domain IDs that the access is restricted to
 * @member {Array.<String>} bound-domain-id
 */
CreateAuthMethodHuawei.prototype['bound-domain-id'] = undefined;

/**
 * A list of domain names that the access is restricted to
 * @member {Array.<String>} bound-domain-name
 */
CreateAuthMethodHuawei.prototype['bound-domain-name'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodHuawei.prototype['bound-ips'] = undefined;

/**
 * A list of full tenant ids that the access is restricted to
 * @member {Array.<String>} bound-tenant-id
 */
CreateAuthMethodHuawei.prototype['bound-tenant-id'] = undefined;

/**
 * A list of full tenant names that the access is restricted to
 * @member {Array.<String>} bound-tenant-name
 */
CreateAuthMethodHuawei.prototype['bound-tenant-name'] = undefined;

/**
 * A list of full user ids that the access is restricted to
 * @member {Array.<String>} bound-user-id
 */
CreateAuthMethodHuawei.prototype['bound-user-id'] = undefined;

/**
 * A list of full user-name that the access is restricted to
 * @member {Array.<String>} bound-user-name
 */
CreateAuthMethodHuawei.prototype['bound-user-name'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodHuawei.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodHuawei.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethodHuawei.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethodHuawei.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodHuawei.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodHuawei.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodHuawei.prototype['uid-token'] = undefined;






export default CreateAuthMethodHuawei;

