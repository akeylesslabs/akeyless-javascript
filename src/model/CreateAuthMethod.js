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
 * The CreateAuthMethod model module.
 * @module model/CreateAuthMethod
 * @version 3.3.11
 */
class CreateAuthMethod {
    /**
     * Constructs a new <code>CreateAuthMethod</code>.
     * @alias module:model/CreateAuthMethod
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        CreateAuthMethod.initialize(this, name);
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
     * Constructs a <code>CreateAuthMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethod} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethod} The populated <code>CreateAuthMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethod();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
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
CreateAuthMethod.prototype['access-expires'] = 0;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethod.prototype['bound-ips'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethod.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethod.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethod.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethod.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethod.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethod.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethod.prototype['uid-token'] = undefined;






export default CreateAuthMethod;

