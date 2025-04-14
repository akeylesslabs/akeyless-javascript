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
 * The SecretInfo model module.
 * @module model/SecretInfo
 * @version 5.0.3
 */
class SecretInfo {
    /**
     * Constructs a new <code>SecretInfo</code>.
     * @alias module:model/SecretInfo
     */
    constructor() { 
        
        SecretInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecretInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretInfo} obj Optional instance to populate.
     * @return {module:model/SecretInfo} The populated <code>SecretInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretInfo();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expiration')) {
                obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Date');
            }
            if (data.hasOwnProperty('last_retrieved')) {
                obj['last_retrieved'] = ApiClient.convertToType(data['last_retrieved'], 'Date');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('secret_id')) {
                obj['secret_id'] = ApiClient.convertToType(data['secret_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('thumbprint')) {
                obj['thumbprint'] = ApiClient.convertToType(data['thumbprint'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecretInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecretInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['secret_id'] && !(typeof data['secret_id'] === 'string' || data['secret_id'] instanceof String)) {
            throw new Error("Expected the field `secret_id` to be a primitive type in the JSON string but got " + data['secret_id']);
        }
        // ensure the json data is a string
        if (data['thumbprint'] && !(typeof data['thumbprint'] === 'string' || data['thumbprint'] instanceof String)) {
            throw new Error("Expected the field `thumbprint` to be a primitive type in the JSON string but got " + data['thumbprint']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {Date} created
 */
SecretInfo.prototype['created'] = undefined;

/**
 * @member {String} description
 */
SecretInfo.prototype['description'] = undefined;

/**
 * @member {Date} expiration
 */
SecretInfo.prototype['expiration'] = undefined;

/**
 * @member {Date} last_retrieved
 */
SecretInfo.prototype['last_retrieved'] = undefined;

/**
 * @member {Object} location
 */
SecretInfo.prototype['location'] = undefined;

/**
 * @member {String} name
 */
SecretInfo.prototype['name'] = undefined;

/**
 * @member {String} secret_id
 */
SecretInfo.prototype['secret_id'] = undefined;

/**
 * @member {Boolean} status
 */
SecretInfo.prototype['status'] = undefined;

/**
 * @member {Object.<String, String>} tags
 */
SecretInfo.prototype['tags'] = undefined;

/**
 * @member {String} thumbprint
 */
SecretInfo.prototype['thumbprint'] = undefined;

/**
 * @member {String} type
 */
SecretInfo.prototype['type'] = undefined;

/**
 * @member {Number} version
 */
SecretInfo.prototype['version'] = undefined;






export default SecretInfo;

