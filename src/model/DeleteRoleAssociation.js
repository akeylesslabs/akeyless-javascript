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
 * The DeleteRoleAssociation model module.
 * @module model/DeleteRoleAssociation
 * @version 2.16.6
 */
class DeleteRoleAssociation {
    /**
     * Constructs a new <code>DeleteRoleAssociation</code>.
     * deleteRoleAssociation is a command that deletes an association between role and auth method.
     * @alias module:model/DeleteRoleAssociation
     * @param assocId {String} The association id to be deleted
     */
    constructor(assocId) { 
        
        DeleteRoleAssociation.initialize(this, assocId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assocId) { 
        obj['assoc-id'] = assocId;
    }

    /**
     * Constructs a <code>DeleteRoleAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRoleAssociation} obj Optional instance to populate.
     * @return {module:model/DeleteRoleAssociation} The populated <code>DeleteRoleAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRoleAssociation();

            if (data.hasOwnProperty('assoc-id')) {
                obj['assoc-id'] = ApiClient.convertToType(data['assoc-id'], 'String');
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
 * The association id to be deleted
 * @member {String} assoc-id
 */
DeleteRoleAssociation.prototype['assoc-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeleteRoleAssociation.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeleteRoleAssociation.prototype['uid-token'] = undefined;






export default DeleteRoleAssociation;

