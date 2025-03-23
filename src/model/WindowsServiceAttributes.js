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
 * The WindowsServiceAttributes model module.
 * @module model/WindowsServiceAttributes
 * @version 5.0.1
 */
class WindowsServiceAttributes {
    /**
     * Constructs a new <code>WindowsServiceAttributes</code>.
     * @alias module:model/WindowsServiceAttributes
     */
    constructor() { 
        
        WindowsServiceAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WindowsServiceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WindowsServiceAttributes} obj Optional instance to populate.
     * @return {module:model/WindowsServiceAttributes} The populated <code>WindowsServiceAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WindowsServiceAttributes();

            if (data.hasOwnProperty('connection_type')) {
                obj['connection_type'] = ApiClient.convertToType(data['connection_type'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = ApiClient.convertToType(data['use_tls'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WindowsServiceAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WindowsServiceAttributes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['connection_type'] && !(typeof data['connection_type'] === 'string' || data['connection_type'] instanceof String)) {
            throw new Error("Expected the field `connection_type` to be a primitive type in the JSON string but got " + data['connection_type']);
        }
        // ensure the json data is a string
        if (data['port'] && !(typeof data['port'] === 'string' || data['port'] instanceof String)) {
            throw new Error("Expected the field `port` to be a primitive type in the JSON string but got " + data['port']);
        }

        return true;
    }


}



/**
 * @member {String} connection_type
 */
WindowsServiceAttributes.prototype['connection_type'] = undefined;

/**
 * @member {String} port
 */
WindowsServiceAttributes.prototype['port'] = undefined;

/**
 * @member {Boolean} use_tls
 */
WindowsServiceAttributes.prototype['use_tls'] = undefined;






export default WindowsServiceAttributes;

