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
 * The GatewayRevokeTmpUsers model module.
 * @module model/GatewayRevokeTmpUsers
 * @version 3.3.6
 */
class GatewayRevokeTmpUsers {
    /**
     * Constructs a new <code>GatewayRevokeTmpUsers</code>.
     * gatewayRevokeTmpUsers is a command that revoke producer tmp user
     * @alias module:model/GatewayRevokeTmpUsers
     * @param name {String} Producer Name
     * @param tmpCredsId {String} Tmp Creds ID
     */
    constructor(name, tmpCredsId) { 
        
        GatewayRevokeTmpUsers.initialize(this, name, tmpCredsId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, tmpCredsId) { 
        obj['name'] = name;
        obj['tmp-creds-id'] = tmpCredsId;
    }

    /**
     * Constructs a <code>GatewayRevokeTmpUsers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayRevokeTmpUsers} obj Optional instance to populate.
     * @return {module:model/GatewayRevokeTmpUsers} The populated <code>GatewayRevokeTmpUsers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayRevokeTmpUsers();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('revoke-all')) {
                obj['revoke-all'] = ApiClient.convertToType(data['revoke-all'], 'Boolean');
            }
            if (data.hasOwnProperty('soft-delete')) {
                obj['soft-delete'] = ApiClient.convertToType(data['soft-delete'], 'Boolean');
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
 * Deprecated: has no effect
 * @member {String} host
 */
GatewayRevokeTmpUsers.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayRevokeTmpUsers.prototype['json'] = false;

/**
 * Producer Name
 * @member {String} name
 */
GatewayRevokeTmpUsers.prototype['name'] = undefined;

/**
 * Revoke All Temp Creds
 * @member {Boolean} revoke-all
 */
GatewayRevokeTmpUsers.prototype['revoke-all'] = undefined;

/**
 * Soft Delete
 * @member {Boolean} soft-delete
 */
GatewayRevokeTmpUsers.prototype['soft-delete'] = undefined;

/**
 * Tmp Creds ID
 * @member {String} tmp-creds-id
 * @default 'demo_default_tmp_creds_id_for_sdk_bc'
 */
GatewayRevokeTmpUsers.prototype['tmp-creds-id'] = 'demo_default_tmp_creds_id_for_sdk_bc';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayRevokeTmpUsers.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayRevokeTmpUsers.prototype['uid-token'] = undefined;






export default GatewayRevokeTmpUsers;

