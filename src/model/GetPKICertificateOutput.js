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
 * The GetPKICertificateOutput model module.
 * @module model/GetPKICertificateOutput
 * @version 5.0.0
 */
class GetPKICertificateOutput {
    /**
     * Constructs a new <code>GetPKICertificateOutput</code>.
     * @alias module:model/GetPKICertificateOutput
     */
    constructor() { 
        
        GetPKICertificateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPKICertificateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPKICertificateOutput} obj Optional instance to populate.
     * @return {module:model/GetPKICertificateOutput} The populated <code>GetPKICertificateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPKICertificateOutput();

            if (data.hasOwnProperty('cert_display_id')) {
                obj['cert_display_id'] = ApiClient.convertToType(data['cert_display_id'], 'String');
            }
            if (data.hasOwnProperty('cert_item_id')) {
                obj['cert_item_id'] = ApiClient.convertToType(data['cert_item_id'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('parent_cert')) {
                obj['parent_cert'] = ApiClient.convertToType(data['parent_cert'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('reading_token')) {
                obj['reading_token'] = ApiClient.convertToType(data['reading_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetPKICertificateOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetPKICertificateOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cert_display_id'] && !(typeof data['cert_display_id'] === 'string' || data['cert_display_id'] instanceof String)) {
            throw new Error("Expected the field `cert_display_id` to be a primitive type in the JSON string but got " + data['cert_display_id']);
        }
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }
        // ensure the json data is a string
        if (data['parent_cert'] && !(typeof data['parent_cert'] === 'string' || data['parent_cert'] instanceof String)) {
            throw new Error("Expected the field `parent_cert` to be a primitive type in the JSON string but got " + data['parent_cert']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['reading_token'] && !(typeof data['reading_token'] === 'string' || data['reading_token'] instanceof String)) {
            throw new Error("Expected the field `reading_token` to be a primitive type in the JSON string but got " + data['reading_token']);
        }

        return true;
    }


}



/**
 * @member {String} cert_display_id
 */
GetPKICertificateOutput.prototype['cert_display_id'] = undefined;

/**
 * @member {Number} cert_item_id
 */
GetPKICertificateOutput.prototype['cert_item_id'] = undefined;

/**
 * @member {String} data
 */
GetPKICertificateOutput.prototype['data'] = undefined;

/**
 * @member {String} parent_cert
 */
GetPKICertificateOutput.prototype['parent_cert'] = undefined;

/**
 * @member {String} path
 */
GetPKICertificateOutput.prototype['path'] = undefined;

/**
 * @member {String} reading_token
 */
GetPKICertificateOutput.prototype['reading_token'] = undefined;






export default GetPKICertificateOutput;

