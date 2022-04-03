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
 * The UpdateAuthMethod model module.
 * @module model/UpdateAuthMethod
 * @version 2.15.29
 */
class UpdateAuthMethod {
    /**
     * Constructs a new <code>UpdateAuthMethod</code>.
     * @alias module:model/UpdateAuthMethod
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        UpdateAuthMethod.initialize(this, name);
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
     * Constructs a <code>UpdateAuthMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethod} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethod} The populated <code>UpdateAuthMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethod();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
UpdateAuthMethod.prototype['access-expires'] = 0;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethod.prototype['bound-ips'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethod.prototype['force-sub-claims'] = undefined;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
UpdateAuthMethod.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethod.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethod.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethod.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethod.prototype['uid-token'] = undefined;






export default UpdateAuthMethod;

