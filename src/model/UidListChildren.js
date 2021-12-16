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
 * The UidListChildren model module.
 * @module model/UidListChildren
 * @version 2.5.21
 */
class UidListChildren {
    /**
     * Constructs a new <code>UidListChildren</code>.
     * uidListChildren is a command that lists child token ids of Akeyless Universal Identity.
     * @alias module:model/UidListChildren
     */
    constructor() { 
        
        UidListChildren.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UidListChildren</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UidListChildren} obj Optional instance to populate.
     * @return {module:model/UidListChildren} The populated <code>UidListChildren</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UidListChildren();

            if (data.hasOwnProperty('auth-method-name')) {
                obj['auth-method-name'] = ApiClient.convertToType(data['auth-method-name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The universal identity auth method name, required only when uid-token is not provided
 * @member {String} auth-method-name
 */
UidListChildren.prototype['auth-method-name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UidListChildren.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UidListChildren.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UidListChildren.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UidListChildren.prototype['username'] = undefined;






export default UidListChildren;

