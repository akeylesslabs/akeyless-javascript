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
 * The ChangeAdminAccountPassword model module.
 * @module model/ChangeAdminAccountPassword
 * @version 4.3.0
 */
class ChangeAdminAccountPassword {
    /**
     * Constructs a new <code>ChangeAdminAccountPassword</code>.
     * @alias module:model/ChangeAdminAccountPassword
     * @param currentPassword {String} Current password
     * @param newPassword {String} New password
     */
    constructor(currentPassword, newPassword) { 
        
        ChangeAdminAccountPassword.initialize(this, currentPassword, newPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, currentPassword, newPassword) { 
        obj['current-password'] = currentPassword;
        obj['new-password'] = newPassword;
    }

    /**
     * Constructs a <code>ChangeAdminAccountPassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeAdminAccountPassword} obj Optional instance to populate.
     * @return {module:model/ChangeAdminAccountPassword} The populated <code>ChangeAdminAccountPassword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeAdminAccountPassword();

            if (data.hasOwnProperty('current-password')) {
                obj['current-password'] = ApiClient.convertToType(data['current-password'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('new-password')) {
                obj['new-password'] = ApiClient.convertToType(data['new-password'], 'String');
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
 * Current password
 * @member {String} current-password
 */
ChangeAdminAccountPassword.prototype['current-password'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ChangeAdminAccountPassword.prototype['json'] = false;

/**
 * New password
 * @member {String} new-password
 */
ChangeAdminAccountPassword.prototype['new-password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ChangeAdminAccountPassword.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ChangeAdminAccountPassword.prototype['uid-token'] = undefined;






export default ChangeAdminAccountPassword;

