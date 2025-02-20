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
 * The GlobalSignAtlasTargetDetails model module.
 * @module model/GlobalSignAtlasTargetDetails
 * @version 5.0.0
 */
class GlobalSignAtlasTargetDetails {
    /**
     * Constructs a new <code>GlobalSignAtlasTargetDetails</code>.
     * GlobalSignAtlasTargetDetails
     * @alias module:model/GlobalSignAtlasTargetDetails
     */
    constructor() { 
        
        GlobalSignAtlasTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GlobalSignAtlasTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalSignAtlasTargetDetails} obj Optional instance to populate.
     * @return {module:model/GlobalSignAtlasTargetDetails} The populated <code>GlobalSignAtlasTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalSignAtlasTargetDetails();

            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
            }
            if (data.hasOwnProperty('api_secret')) {
                obj['api_secret'] = ApiClient.convertToType(data['api_secret'], 'String');
            }
            if (data.hasOwnProperty('mtls_cert')) {
                obj['mtls_cert'] = ApiClient.convertToType(data['mtls_cert'], 'String');
            }
            if (data.hasOwnProperty('mtls_key')) {
                obj['mtls_key'] = ApiClient.convertToType(data['mtls_key'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GlobalSignAtlasTargetDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalSignAtlasTargetDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['api_key'] && !(typeof data['api_key'] === 'string' || data['api_key'] instanceof String)) {
            throw new Error("Expected the field `api_key` to be a primitive type in the JSON string but got " + data['api_key']);
        }
        // ensure the json data is a string
        if (data['api_secret'] && !(typeof data['api_secret'] === 'string' || data['api_secret'] instanceof String)) {
            throw new Error("Expected the field `api_secret` to be a primitive type in the JSON string but got " + data['api_secret']);
        }
        // ensure the json data is a string
        if (data['mtls_cert'] && !(typeof data['mtls_cert'] === 'string' || data['mtls_cert'] instanceof String)) {
            throw new Error("Expected the field `mtls_cert` to be a primitive type in the JSON string but got " + data['mtls_cert']);
        }
        // ensure the json data is a string
        if (data['mtls_key'] && !(typeof data['mtls_key'] === 'string' || data['mtls_key'] instanceof String)) {
            throw new Error("Expected the field `mtls_key` to be a primitive type in the JSON string but got " + data['mtls_key']);
        }

        return true;
    }


}



/**
 * @member {String} api_key
 */
GlobalSignAtlasTargetDetails.prototype['api_key'] = undefined;

/**
 * @member {String} api_secret
 */
GlobalSignAtlasTargetDetails.prototype['api_secret'] = undefined;

/**
 * @member {String} mtls_cert
 */
GlobalSignAtlasTargetDetails.prototype['mtls_cert'] = undefined;

/**
 * @member {String} mtls_key
 */
GlobalSignAtlasTargetDetails.prototype['mtls_key'] = undefined;

/**
 * A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
 * @member {Number} timeout
 */
GlobalSignAtlasTargetDetails.prototype['timeout'] = undefined;






export default GlobalSignAtlasTargetDetails;

