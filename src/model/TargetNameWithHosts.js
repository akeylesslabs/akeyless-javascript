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
 * The TargetNameWithHosts model module.
 * @module model/TargetNameWithHosts
 * @version 5.0.1
 */
class TargetNameWithHosts {
    /**
     * Constructs a new <code>TargetNameWithHosts</code>.
     * @alias module:model/TargetNameWithHosts
     */
    constructor() { 
        
        TargetNameWithHosts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TargetNameWithHosts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetNameWithHosts} obj Optional instance to populate.
     * @return {module:model/TargetNameWithHosts} The populated <code>TargetNameWithHosts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetNameWithHosts();

            if (data.hasOwnProperty('hosts')) {
                obj['hosts'] = ApiClient.convertToType(data['hosts'], ['String']);
            }
            if (data.hasOwnProperty('target_name')) {
                obj['target_name'] = ApiClient.convertToType(data['target_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TargetNameWithHosts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetNameWithHosts</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['hosts'])) {
            throw new Error("Expected the field `hosts` to be an array in the JSON data but got " + data['hosts']);
        }
        // ensure the json data is a string
        if (data['target_name'] && !(typeof data['target_name'] === 'string' || data['target_name'] instanceof String)) {
            throw new Error("Expected the field `target_name` to be a primitive type in the JSON string but got " + data['target_name']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} hosts
 */
TargetNameWithHosts.prototype['hosts'] = undefined;

/**
 * @member {String} target_name
 */
TargetNameWithHosts.prototype['target_name'] = undefined;






export default TargetNameWithHosts;

