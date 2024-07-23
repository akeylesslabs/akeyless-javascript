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
 * The AuthMethodDelete model module.
 * @module model/AuthMethodDelete
 * @version 4.2.1
 */
class AuthMethodDelete {
    /**
     * Constructs a new <code>AuthMethodDelete</code>.
     * authMethodDelete is a command that deletes auth method
     * @alias module:model/AuthMethodDelete
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        AuthMethodDelete.initialize(this, name);
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
     * Constructs a <code>AuthMethodDelete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodDelete} obj Optional instance to populate.
     * @return {module:model/AuthMethodDelete} The populated <code>AuthMethodDelete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodDelete();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AuthMethodDelete.prototype['json'] = false;

/**
 * Auth Method name
 * @member {String} name
 */
AuthMethodDelete.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AuthMethodDelete.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AuthMethodDelete.prototype['uid-token'] = undefined;






export default AuthMethodDelete;

