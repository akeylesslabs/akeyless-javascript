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
 * The CreateAuthMethodUniversalIdentity model module.
 * @module model/CreateAuthMethodUniversalIdentity
 * @version 3.3.6
 */
class CreateAuthMethodUniversalIdentity {
    /**
     * Constructs a new <code>CreateAuthMethodUniversalIdentity</code>.
     * createAuthMethodUniversalIdentity is a command that creates a new auth method that will be able to authenticate using Akeyless Universal Identity.
     * @alias module:model/CreateAuthMethodUniversalIdentity
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        CreateAuthMethodUniversalIdentity.initialize(this, name);
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
     * Constructs a <code>CreateAuthMethodUniversalIdentity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodUniversalIdentity} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodUniversalIdentity} The populated <code>CreateAuthMethodUniversalIdentity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodUniversalIdentity();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('deny-inheritance')) {
                obj['deny-inheritance'] = ApiClient.convertToType(data['deny-inheritance'], 'Boolean');
            }
            if (data.hasOwnProperty('deny-rotate')) {
                obj['deny-rotate'] = ApiClient.convertToType(data['deny-rotate'], 'Boolean');
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
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
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
CreateAuthMethodUniversalIdentity.prototype['access-expires'] = 0;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodUniversalIdentity.prototype['bound-ips'] = undefined;

/**
 * Deny from root to create children
 * @member {Boolean} deny-inheritance
 */
CreateAuthMethodUniversalIdentity.prototype['deny-inheritance'] = undefined;

/**
 * Deny from the token to rotate
 * @member {Boolean} deny-rotate
 */
CreateAuthMethodUniversalIdentity.prototype['deny-rotate'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodUniversalIdentity.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodUniversalIdentity.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethodUniversalIdentity.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethodUniversalIdentity.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodUniversalIdentity.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodUniversalIdentity.prototype['token'] = undefined;

/**
 * Token ttl
 * @member {Number} ttl
 * @default 60
 */
CreateAuthMethodUniversalIdentity.prototype['ttl'] = 60;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodUniversalIdentity.prototype['uid-token'] = undefined;






export default CreateAuthMethodUniversalIdentity;

