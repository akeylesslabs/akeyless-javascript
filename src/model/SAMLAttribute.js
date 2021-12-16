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
 * The SAMLAttribute model module.
 * @module model/SAMLAttribute
 * @version 2.5.22
 */
class SAMLAttribute {
    /**
     * Constructs a new <code>SAMLAttribute</code>.
     * @alias module:model/SAMLAttribute
     */
    constructor() { 
        
        SAMLAttribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SAMLAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SAMLAttribute} obj Optional instance to populate.
     * @return {module:model/SAMLAttribute} The populated <code>SAMLAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SAMLAttribute();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
SAMLAttribute.prototype['name'] = undefined;

/**
 * @member {Array.<String>} values
 */
SAMLAttribute.prototype['values'] = undefined;






export default SAMLAttribute;

