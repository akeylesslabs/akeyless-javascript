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
import Rules from './Rules';

/**
 * The AuthMethodRoleAssociation model module.
 * @module model/AuthMethodRoleAssociation
 * @version 2.16.7
 */
class AuthMethodRoleAssociation {
    /**
     * Constructs a new <code>AuthMethodRoleAssociation</code>.
     * AuthMethodRoleAssociation includes details of an association between an auth method and a role.
     * @alias module:model/AuthMethodRoleAssociation
     */
    constructor() { 
        
        AuthMethodRoleAssociation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthMethodRoleAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodRoleAssociation} obj Optional instance to populate.
     * @return {module:model/AuthMethodRoleAssociation} The populated <code>AuthMethodRoleAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodRoleAssociation();

            if (data.hasOwnProperty('assoc_id')) {
                obj['assoc_id'] = ApiClient.convertToType(data['assoc_id'], 'String');
            }
            if (data.hasOwnProperty('auth_method_sub_claims')) {
                obj['auth_method_sub_claims'] = ApiClient.convertToType(data['auth_method_sub_claims'], {'String': ['String']});
            }
            if (data.hasOwnProperty('role_name')) {
                obj['role_name'] = ApiClient.convertToType(data['role_name'], 'String');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = Rules.constructFromObject(data['rules']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} assoc_id
 */
AuthMethodRoleAssociation.prototype['assoc_id'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} auth_method_sub_claims
 */
AuthMethodRoleAssociation.prototype['auth_method_sub_claims'] = undefined;

/**
 * @member {String} role_name
 */
AuthMethodRoleAssociation.prototype['role_name'] = undefined;

/**
 * @member {module:model/Rules} rules
 */
AuthMethodRoleAssociation.prototype['rules'] = undefined;






export default AuthMethodRoleAssociation;

