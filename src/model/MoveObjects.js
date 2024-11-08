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
 * The MoveObjects model module.
 * @module model/MoveObjects
 * @version 4.3.0
 */
class MoveObjects {
    /**
     * Constructs a new <code>MoveObjects</code>.
     * @alias module:model/MoveObjects
     * @param source {String} Source path to move the objects from
     * @param target {String} Target path to move the objects to
     */
    constructor(source, target) { 
        
        MoveObjects.initialize(this, source, target);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source, target) { 
        obj['source'] = source;
        obj['target'] = target;
    }

    /**
     * Constructs a <code>MoveObjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MoveObjects} obj Optional instance to populate.
     * @return {module:model/MoveObjects} The populated <code>MoveObjects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MoveObjects();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('objects-type')) {
                obj['objects-type'] = ApiClient.convertToType(data['objects-type'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
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
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
MoveObjects.prototype['json'] = false;

/**
 * The objects type to move (item/auth_method/role)
 * @member {String} objects-type
 * @default 'item'
 */
MoveObjects.prototype['objects-type'] = 'item';

/**
 * Source path to move the objects from
 * @member {String} source
 */
MoveObjects.prototype['source'] = undefined;

/**
 * Target path to move the objects to
 * @member {String} target
 */
MoveObjects.prototype['target'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
MoveObjects.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
MoveObjects.prototype['uid-token'] = undefined;






export default MoveObjects;

