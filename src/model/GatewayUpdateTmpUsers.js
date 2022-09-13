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
 * The GatewayUpdateTmpUsers model module.
 * @module model/GatewayUpdateTmpUsers
 * @version 2.19.0
 */
class GatewayUpdateTmpUsers {
    /**
     * Constructs a new <code>GatewayUpdateTmpUsers</code>.
     * gatewayUpdateTmpUsers is a command that returns gateway configuration
     * @alias module:model/GatewayUpdateTmpUsers
     * @param name {String} Producer Name
     * @param newTtlMin {Number} New TTL in Minutes
     * @param tmpCredsId {String} Tmp Creds ID
     */
    constructor(name, newTtlMin, tmpCredsId) { 
        
        GatewayUpdateTmpUsers.initialize(this, name, newTtlMin, tmpCredsId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, newTtlMin, tmpCredsId) { 
        obj['name'] = name;
        obj['new-ttl-min'] = newTtlMin;
        obj['tmp-creds-id'] = tmpCredsId;
    }

    /**
     * Constructs a <code>GatewayUpdateTmpUsers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateTmpUsers} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateTmpUsers} The populated <code>GatewayUpdateTmpUsers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateTmpUsers();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-ttl-min')) {
                obj['new-ttl-min'] = ApiClient.convertToType(data['new-ttl-min'], 'Number');
            }
            if (data.hasOwnProperty('tmp-creds-id')) {
                obj['tmp-creds-id'] = ApiClient.convertToType(data['tmp-creds-id'], 'String');
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
 * Set output format to JSON
 * @member {Boolean} json
 */
GatewayUpdateTmpUsers.prototype['json'] = undefined;

/**
 * Producer Name
 * @member {String} name
 */
GatewayUpdateTmpUsers.prototype['name'] = undefined;

/**
 * New TTL in Minutes
 * @member {Number} new-ttl-min
 */
GatewayUpdateTmpUsers.prototype['new-ttl-min'] = undefined;

/**
 * Tmp Creds ID
 * @member {String} tmp-creds-id
 */
GatewayUpdateTmpUsers.prototype['tmp-creds-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateTmpUsers.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateTmpUsers.prototype['uid-token'] = undefined;






export default GatewayUpdateTmpUsers;

