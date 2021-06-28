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
 * The AssocTargetItem model module.
 * @module model/AssocTargetItem
 * @version 2.4.5
 */
class AssocTargetItem {
    /**
     * Constructs a new <code>AssocTargetItem</code>.
     * assocTargetItem is a command that creates an association between target and item.
     * @alias module:model/AssocTargetItem
     * @param name {String} The item to associate
     * @param targetName {String} The target to associate
     */
    constructor(name, targetName) { 
        
        AssocTargetItem.initialize(this, name, targetName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, targetName) { 
        obj['name'] = name;
        obj['target-name'] = targetName;
    }

    /**
     * Constructs a <code>AssocTargetItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssocTargetItem} obj Optional instance to populate.
     * @return {module:model/AssocTargetItem} The populated <code>AssocTargetItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssocTargetItem();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
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
 * The item to associate
 * @member {String} name
 */
AssocTargetItem.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
AssocTargetItem.prototype['password'] = undefined;

/**
 * The target to associate
 * @member {String} target-name
 */
AssocTargetItem.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AssocTargetItem.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AssocTargetItem.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
AssocTargetItem.prototype['username'] = undefined;






export default AssocTargetItem;

