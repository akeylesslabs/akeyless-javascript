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
 * The SetRoleRule model module.
 * @module model/SetRoleRule
 * @version 2.15.30
 */
class SetRoleRule {
    /**
     * Constructs a new <code>SetRoleRule</code>.
     * @alias module:model/SetRoleRule
     * @param capability {Array.<String>} List of the approved/denied capabilities in the path options: [read, create, update, delete, list, deny]
     * @param path {String} The path the rule refers to
     * @param roleName {String} The role name to be updated
     */
    constructor(capability, path, roleName) { 
        
        SetRoleRule.initialize(this, capability, path, roleName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, capability, path, roleName) { 
        obj['capability'] = capability;
        obj['path'] = path;
        obj['role-name'] = roleName;
    }

    /**
     * Constructs a <code>SetRoleRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetRoleRule} obj Optional instance to populate.
     * @return {module:model/SetRoleRule} The populated <code>SetRoleRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetRoleRule();

            if (data.hasOwnProperty('capability')) {
                obj['capability'] = ApiClient.convertToType(data['capability'], ['String']);
            }
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
 * List of the approved/denied capabilities in the path options: [read, create, update, delete, list, deny]
 * @member {Array.<String>} capability
 */
SetRoleRule.prototype['capability'] = undefined;

/**
 * The path the rule refers to
 * @member {String} path
 */
SetRoleRule.prototype['path'] = undefined;

/**
 * The role name to be updated
 * @member {String} role-name
 */
SetRoleRule.prototype['role-name'] = undefined;

/**
 * item-rule, target-rule, role-rule, auth-method-rule, search-rule or reports-rule
 * @member {String} rule-type
 * @default 'item-rule'
 */
SetRoleRule.prototype['rule-type'] = 'item-rule';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
SetRoleRule.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
SetRoleRule.prototype['uid-token'] = undefined;






export default SetRoleRule;

