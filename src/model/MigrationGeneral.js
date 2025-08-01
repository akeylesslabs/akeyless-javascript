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
 * The MigrationGeneral model module.
 * @module model/MigrationGeneral
 * @version 5.0.6
 */
class MigrationGeneral {
    /**
     * Constructs a new <code>MigrationGeneral</code>.
     * @alias module:model/MigrationGeneral
     */
    constructor() { 
        
        MigrationGeneral.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigrationGeneral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MigrationGeneral} obj Optional instance to populate.
     * @return {module:model/MigrationGeneral} The populated <code>MigrationGeneral</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationGeneral();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_migration')) {
                obj['last_migration'] = ApiClient.convertToType(data['last_migration'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new_name')) {
                obj['new_name'] = ApiClient.convertToType(data['new_name'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MigrationGeneral</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MigrationGeneral</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['last_migration'] && !(typeof data['last_migration'] === 'string' || data['last_migration'] instanceof String)) {
            throw new Error("Expected the field `last_migration` to be a primitive type in the JSON string but got " + data['last_migration']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new_name'] && !(typeof data['new_name'] === 'string' || data['new_name'] instanceof String)) {
            throw new Error("Expected the field `new_name` to be a primitive type in the JSON string but got " + data['new_name']);
        }
        // ensure the json data is a string
        if (data['prefix'] && !(typeof data['prefix'] === 'string' || data['prefix'] instanceof String)) {
            throw new Error("Expected the field `prefix` to be a primitive type in the JSON string but got " + data['prefix']);
        }
        // ensure the json data is a string
        if (data['protection_key'] && !(typeof data['protection_key'] === 'string' || data['protection_key'] instanceof String)) {
            throw new Error("Expected the field `protection_key` to be a primitive type in the JSON string but got " + data['protection_key']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
MigrationGeneral.prototype['id'] = undefined;

/**
 * @member {String} last_migration
 */
MigrationGeneral.prototype['last_migration'] = undefined;

/**
 * @member {String} name
 */
MigrationGeneral.prototype['name'] = undefined;

/**
 * @member {String} new_name
 */
MigrationGeneral.prototype['new_name'] = undefined;

/**
 * @member {String} prefix
 */
MigrationGeneral.prototype['prefix'] = undefined;

/**
 * @member {String} protection_key
 */
MigrationGeneral.prototype['protection_key'] = undefined;

/**
 * @member {String} status
 */
MigrationGeneral.prototype['status'] = undefined;

/**
 * @member {String} type
 */
MigrationGeneral.prototype['type'] = undefined;






export default MigrationGeneral;

