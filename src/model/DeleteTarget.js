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
 * The DeleteTarget model module.
 * @module model/DeleteTarget
 * @version 4.2.0
 */
class DeleteTarget {
    /**
     * Constructs a new <code>DeleteTarget</code>.
     * deleteTarget is a command that deletes a target. [Deprecated: Use target-delete command]
     * @alias module:model/DeleteTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        DeleteTarget.initialize(this, name);
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
     * Constructs a <code>DeleteTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTarget} obj Optional instance to populate.
     * @return {module:model/DeleteTarget} The populated <code>DeleteTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteTarget();

            if (data.hasOwnProperty('force-deletion')) {
                obj['force-deletion'] = ApiClient.convertToType(data['force-deletion'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('target-version')) {
                obj['target-version'] = ApiClient.convertToType(data['target-version'], 'Number');
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
DeleteTarget.prototype['force-deletion'] = false;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DeleteTarget.prototype['json'] = false;

/**
 * Target name
 * @member {String} name
 */
DeleteTarget.prototype['name'] = undefined;

/**
 * Target version
 * @member {Number} target-version
 */
DeleteTarget.prototype['target-version'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeleteTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeleteTarget.prototype['uid-token'] = undefined;






export default DeleteTarget;

