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
 * The DeleteTargetAssociation model module.
 * @module model/DeleteTargetAssociation
 * @version 2.5.16
 */
class DeleteTargetAssociation {
    /**
     * Constructs a new <code>DeleteTargetAssociation</code>.
     * deleteTargetAssociation is a command that deletes an association between target and item.
     * @alias module:model/DeleteTargetAssociation
     * @param name {String} Item name
     */
    constructor(name) { 
        
        DeleteTargetAssociation.initialize(this, name);
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
     * Constructs a <code>DeleteTargetAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTargetAssociation} obj Optional instance to populate.
     * @return {module:model/DeleteTargetAssociation} The populated <code>DeleteTargetAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteTargetAssociation();

            if (data.hasOwnProperty('assoc-id')) {
                obj['assoc-id'] = ApiClient.convertToType(data['assoc-id'], 'String');
            }
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
 * The association id to be deleted
 * @member {String} assoc-id
 */
DeleteTargetAssociation.prototype['assoc-id'] = undefined;

/**
 * Item name
 * @member {String} name
 */
DeleteTargetAssociation.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
DeleteTargetAssociation.prototype['password'] = undefined;

/**
 * The target to associate
 * @member {String} target-name
 */
DeleteTargetAssociation.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeleteTargetAssociation.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeleteTargetAssociation.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
DeleteTargetAssociation.prototype['username'] = undefined;






export default DeleteTargetAssociation;

