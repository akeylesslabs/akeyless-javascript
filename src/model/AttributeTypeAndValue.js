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
 * The AttributeTypeAndValue model module.
 * @module model/AttributeTypeAndValue
 * @version 5.0.6
 */
class AttributeTypeAndValue {
    /**
     * Constructs a new <code>AttributeTypeAndValue</code>.
     * AttributeTypeAndValue mirrors the ASN.1 structure of the same name in RFC 5280, Section 4.1.2.4.
     * @alias module:model/AttributeTypeAndValue
     */
    constructor() { 
        
        AttributeTypeAndValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttributeTypeAndValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributeTypeAndValue} obj Optional instance to populate.
     * @return {module:model/AttributeTypeAndValue} The populated <code>AttributeTypeAndValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributeTypeAndValue();

            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], ['Number']);
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttributeTypeAndValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttributeTypeAndValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['Type'])) {
            throw new Error("Expected the field `Type` to be an array in the JSON data but got " + data['Type']);
        }
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }

        return true;
    }


}



/**
 * @member {Array.<Number>} Type
 */
AttributeTypeAndValue.prototype['Type'] = undefined;

/**
 * @member {String} Value
 */
AttributeTypeAndValue.prototype['Value'] = undefined;






export default AttributeTypeAndValue;

