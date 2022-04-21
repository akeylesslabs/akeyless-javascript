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
 * The AssocRoleAuthMethod model module.
 * @module model/AssocRoleAuthMethod
 * @version 2.16.3
 */
class AssocRoleAuthMethod {
    /**
     * Constructs a new <code>AssocRoleAuthMethod</code>.
     * assocRoleAuthMethod is a command that creates an association between role and auth method.
     * @alias module:model/AssocRoleAuthMethod
     * @param amName {String} The auth method to associate
     * @param roleName {String} The role to associate
     */
    constructor(amName, roleName) { 
        
        AssocRoleAuthMethod.initialize(this, amName, roleName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amName, roleName) { 
        obj['am-name'] = amName;
        obj['role-name'] = roleName;
    }

    /**
     * Constructs a <code>AssocRoleAuthMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssocRoleAuthMethod} obj Optional instance to populate.
     * @return {module:model/AssocRoleAuthMethod} The populated <code>AssocRoleAuthMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssocRoleAuthMethod();

            if (data.hasOwnProperty('am-name')) {
                obj['am-name'] = ApiClient.convertToType(data['am-name'], 'String');
            }
            if (data.hasOwnProperty('case-sensitive')) {
                obj['case-sensitive'] = ApiClient.convertToType(data['case-sensitive'], 'String');
            }
            if (data.hasOwnProperty('role-name')) {
                obj['role-name'] = ApiClient.convertToType(data['role-name'], 'String');
            }
            if (data.hasOwnProperty('sub-claims')) {
                obj['sub-claims'] = ApiClient.convertToType(data['sub-claims'], {'String': 'String'});
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
 * The auth method to associate
 * @member {String} am-name
 */
AssocRoleAuthMethod.prototype['am-name'] = undefined;

/**
 * @member {String} case-sensitive
 */
AssocRoleAuthMethod.prototype['case-sensitive'] = undefined;

/**
 * The role to associate
 * @member {String} role-name
 */
AssocRoleAuthMethod.prototype['role-name'] = undefined;

/**
 * key/val of sub claims, e.g group=admins,developers
 * @member {Object.<String, String>} sub-claims
 */
AssocRoleAuthMethod.prototype['sub-claims'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AssocRoleAuthMethod.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AssocRoleAuthMethod.prototype['uid-token'] = undefined;






export default AssocRoleAuthMethod;

