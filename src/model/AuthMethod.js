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
import AuthMethodAccessInfo from './AuthMethodAccessInfo';
import AuthMethodRoleAssociation from './AuthMethodRoleAssociation';

/**
 * The AuthMethod model module.
 * @module model/AuthMethod
 * @version 3.2.0
 */
class AuthMethod {
    /**
     * Constructs a new <code>AuthMethod</code>.
     * @alias module:model/AuthMethod
     */
    constructor() { 
        
        AuthMethod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethod} obj Optional instance to populate.
     * @return {module:model/AuthMethod} The populated <code>AuthMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethod();

            if (data.hasOwnProperty('access_date')) {
                obj['access_date'] = ApiClient.convertToType(data['access_date'], 'Date');
            }
            if (data.hasOwnProperty('access_info')) {
                obj['access_info'] = AuthMethodAccessInfo.constructFromObject(data['access_info']);
            }
            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('auth_method_access_id')) {
                obj['auth_method_access_id'] = ApiClient.convertToType(data['auth_method_access_id'], 'String');
            }
            if (data.hasOwnProperty('auth_method_name')) {
                obj['auth_method_name'] = ApiClient.convertToType(data['auth_method_name'], 'String');
            }
            if (data.hasOwnProperty('auth_method_roles_assoc')) {
                obj['auth_method_roles_assoc'] = ApiClient.convertToType(data['auth_method_roles_assoc'], [AuthMethodRoleAssociation]);
            }
            if (data.hasOwnProperty('client_permissions')) {
                obj['client_permissions'] = ApiClient.convertToType(data['client_permissions'], ['String']);
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} access_date
 */
AuthMethod.prototype['access_date'] = undefined;

/**
 * @member {module:model/AuthMethodAccessInfo} access_info
 */
AuthMethod.prototype['access_info'] = undefined;

/**
 * @member {String} account_id
 */
AuthMethod.prototype['account_id'] = undefined;

/**
 * @member {String} auth_method_access_id
 */
AuthMethod.prototype['auth_method_access_id'] = undefined;

/**
 * @member {String} auth_method_name
 */
AuthMethod.prototype['auth_method_name'] = undefined;

/**
 * @member {Array.<module:model/AuthMethodRoleAssociation>} auth_method_roles_assoc
 */
AuthMethod.prototype['auth_method_roles_assoc'] = undefined;

/**
 * @member {Array.<String>} client_permissions
 */
AuthMethod.prototype['client_permissions'] = undefined;

/**
 * @member {Date} creation_date
 */
AuthMethod.prototype['creation_date'] = undefined;

/**
 * @member {Date} modification_date
 */
AuthMethod.prototype['modification_date'] = undefined;






export default AuthMethod;

