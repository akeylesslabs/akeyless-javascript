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
 * The DeleteRoleRule model module.
 * @module model/DeleteRoleRule
 * @version 2.0.14
 */
class DeleteRoleRule {
    /**
     * Constructs a new <code>DeleteRoleRule</code>.
     * @alias module:model/DeleteRoleRule
     * @param path {String} The path the rule refers to
     * @param roleName {String} The role name to be updated
     */
    constructor(path, roleName) { 
        
        DeleteRoleRule.initialize(this, path, roleName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path, roleName) { 
        obj['path'] = path;
        obj['role-name'] = roleName;
    }

    /**
     * Constructs a <code>DeleteRoleRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRoleRule} obj Optional instance to populate.
     * @return {module:model/DeleteRoleRule} The populated <code>DeleteRoleRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRoleRule();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('role-name')) {
                obj['role-name'] = ApiClient.convertToType(data['role-name'], 'String');
            }
            if (data.hasOwnProperty('rule-type')) {
                obj['rule-type'] = ApiClient.convertToType(data['rule-type'], 'String');
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
 * The path the rule refers to
 * @member {String} path
 */
DeleteRoleRule.prototype['path'] = undefined;

/**
 * The role name to be updated
 * @member {String} role-name
 */
DeleteRoleRule.prototype['role-name'] = undefined;

/**
 * item-rule, role-rule or auth-method-rule
 * @member {String} rule-type
 * @default 'item-rule'
 */
DeleteRoleRule.prototype['rule-type'] = 'item-rule';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeleteRoleRule.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeleteRoleRule.prototype['uid-token'] = undefined;






export default DeleteRoleRule;

