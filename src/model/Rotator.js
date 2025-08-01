/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Rotator model module.
 * @module model/Rotator
 * @version 5.0.6
 */
class Rotator {
    /**
     * Constructs a new <code>Rotator</code>.
     * @alias module:model/Rotator
     */
    constructor() { 
        
        Rotator.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Rotator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rotator} obj Optional instance to populate.
     * @return {module:model/Rotator} The populated <code>Rotator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rotator();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('last_error')) {
                obj['last_error'] = ApiClient.convertToType(data['last_error'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rotation_interval')) {
                obj['rotation_interval'] = ApiClient.convertToType(data['rotation_interval'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Rotator</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Rotator</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['last_error'] && !(typeof data['last_error'] === 'string' || data['last_error'] instanceof String)) {
            throw new Error("Expected the field `last_error` to be a primitive type in the JSON string but got " + data['last_error']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Rotator.prototype['id'] = undefined;

/**
 * @member {String} last_error
 */
Rotator.prototype['last_error'] = undefined;

/**
 * @member {String} name
 */
Rotator.prototype['name'] = undefined;

/**
 * @member {Number} rotation_interval
 */
Rotator.prototype['rotation_interval'] = undefined;

/**
 * @member {String} type
 */
Rotator.prototype['type'] = undefined;






export default Rotator;

