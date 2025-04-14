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
 * The RotateSecret model module.
 * @module model/RotateSecret
 * @version 5.0.3
 */
class RotateSecret {
    /**
     * Constructs a new <code>RotateSecret</code>.
     * @alias module:model/RotateSecret
     * @param name {String} Secret name (Rotated Secret or Custom Dynamic Secret)
     */
    constructor(name) { 
        
        RotateSecret.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['json'] = false;
        obj['name'] = name;
        obj['rotate-all-services'] = 'false';
    }

    /**
     * Constructs a <code>RotateSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotateSecret} obj Optional instance to populate.
     * @return {module:model/RotateSecret} The populated <code>RotateSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotateSecret();

            if (data.hasOwnProperty('RotateAllServicesBoolean')) {
                obj['RotateAllServicesBoolean'] = ApiClient.convertToType(data['RotateAllServicesBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rotate-all-services')) {
                obj['rotate-all-services'] = ApiClient.convertToType(data['rotate-all-services'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>RotateSecret</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RotateSecret</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RotateSecret.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['rotate-all-services'] && !(typeof data['rotate-all-services'] === 'string' || data['rotate-all-services'] instanceof String)) {
            throw new Error("Expected the field `rotate-all-services` to be a primitive type in the JSON string but got " + data['rotate-all-services']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

RotateSecret.RequiredProperties = ["name"];

/**
 * @member {Boolean} RotateAllServicesBoolean
 */
RotateSecret.prototype['RotateAllServicesBoolean'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotateSecret.prototype['json'] = false;

/**
 * Secret name (Rotated Secret or Custom Dynamic Secret)
 * @member {String} name
 */
RotateSecret.prototype['name'] = undefined;

/**
 * Rotate all associated services
 * @member {String} rotate-all-services
 * @default 'false'
 */
RotateSecret.prototype['rotate-all-services'] = 'false';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotateSecret.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotateSecret.prototype['uid-token'] = undefined;






export default RotateSecret;

