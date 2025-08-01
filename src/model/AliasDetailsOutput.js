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
 * The AliasDetailsOutput model module.
 * @module model/AliasDetailsOutput
 * @version 5.0.6
 */
class AliasDetailsOutput {
    /**
     * Constructs a new <code>AliasDetailsOutput</code>.
     * @alias module:model/AliasDetailsOutput
     */
    constructor() { 
        
        AliasDetailsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AliasDetailsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AliasDetailsOutput} obj Optional instance to populate.
     * @return {module:model/AliasDetailsOutput} The populated <code>AliasDetailsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AliasDetailsOutput();

            if (data.hasOwnProperty('access_type')) {
                obj['access_type'] = ApiClient.convertToType(data['access_type'], 'String');
            }
            if (data.hasOwnProperty('tenant_tag')) {
                obj['tenant_tag'] = ApiClient.convertToType(data['tenant_tag'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AliasDetailsOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AliasDetailsOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_type'] && !(typeof data['access_type'] === 'string' || data['access_type'] instanceof String)) {
            throw new Error("Expected the field `access_type` to be a primitive type in the JSON string but got " + data['access_type']);
        }
        // ensure the json data is a string
        if (data['tenant_tag'] && !(typeof data['tenant_tag'] === 'string' || data['tenant_tag'] instanceof String)) {
            throw new Error("Expected the field `tenant_tag` to be a primitive type in the JSON string but got " + data['tenant_tag']);
        }

        return true;
    }


}



/**
 * @member {String} access_type
 */
AliasDetailsOutput.prototype['access_type'] = undefined;

/**
 * @member {String} tenant_tag
 */
AliasDetailsOutput.prototype['tenant_tag'] = undefined;






export default AliasDetailsOutput;

