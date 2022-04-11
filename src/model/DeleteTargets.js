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
 * The DeleteTargets model module.
 * @module model/DeleteTargets
 * @version 2.15.31
 */
class DeleteTargets {
    /**
     * Constructs a new <code>DeleteTargets</code>.
     * @alias module:model/DeleteTargets
     * @param path {String} Path to delete the targets from
     */
    constructor(path) { 
        
        DeleteTargets.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>DeleteTargets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTargets} obj Optional instance to populate.
     * @return {module:model/DeleteTargets} The populated <code>DeleteTargets</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteTargets();

            if (data.hasOwnProperty('force-deletion')) {
                obj['force-deletion'] = ApiClient.convertToType(data['force-deletion'], 'Boolean');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
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
 * Enforce deletion
 * @member {Boolean} force-deletion
 * @default false
 */
DeleteTargets.prototype['force-deletion'] = false;

/**
 * Path to delete the targets from
 * @member {String} path
 */
DeleteTargets.prototype['path'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeleteTargets.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeleteTargets.prototype['uid-token'] = undefined;






export default DeleteTargets;

