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
import PathRule from './PathRule';

/**
 * The KMIPClient model module.
 * @module model/KMIPClient
 * @version 5.0.3
 */
class KMIPClient {
    /**
     * Constructs a new <code>KMIPClient</code>.
     * @alias module:model/KMIPClient
     */
    constructor() { 
        
        KMIPClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KMIPClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KMIPClient} obj Optional instance to populate.
     * @return {module:model/KMIPClient} The populated <code>KMIPClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KMIPClient();

            if (data.hasOwnProperty('activate_keys_on_creation')) {
                obj['activate_keys_on_creation'] = ApiClient.convertToType(data['activate_keys_on_creation'], 'Boolean');
            }
            if (data.hasOwnProperty('certificate_issue_date')) {
                obj['certificate_issue_date'] = ApiClient.convertToType(data['certificate_issue_date'], 'Date');
            }
            if (data.hasOwnProperty('certificate_ttl_in_seconds')) {
                obj['certificate_ttl_in_seconds'] = ApiClient.convertToType(data['certificate_ttl_in_seconds'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [PathRule]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KMIPClient</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KMIPClient</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['rules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rules'])) {
                throw new Error("Expected the field `rules` to be an array in the JSON data but got " + data['rules']);
            }
            // validate the optional field `rules` (array)
            for (const item of data['rules']) {
                PathRule.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Boolean} activate_keys_on_creation
 */
KMIPClient.prototype['activate_keys_on_creation'] = undefined;

/**
 * @member {Date} certificate_issue_date
 */
KMIPClient.prototype['certificate_issue_date'] = undefined;

/**
 * @member {Number} certificate_ttl_in_seconds
 */
KMIPClient.prototype['certificate_ttl_in_seconds'] = undefined;

/**
 * @member {String} id
 */
KMIPClient.prototype['id'] = undefined;

/**
 * @member {String} name
 */
KMIPClient.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/PathRule>} rules
 */
KMIPClient.prototype['rules'] = undefined;






export default KMIPClient;

