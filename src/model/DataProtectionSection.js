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
 * The DataProtectionSection model module.
 * @module model/DataProtectionSection
 * @version 3.0.1
 */
class DataProtectionSection {
    /**
     * Constructs a new <code>DataProtectionSection</code>.
     * We need the fields to be pointers as we use the same struct for partial updates as well
     * @alias module:model/DataProtectionSection
     */
    constructor() { 
        
        DataProtectionSection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataProtectionSection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataProtectionSection} obj Optional instance to populate.
     * @return {module:model/DataProtectionSection} The populated <code>DataProtectionSection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataProtectionSection();

            if (data.hasOwnProperty('enable_classic_key_protection')) {
                obj['enable_classic_key_protection'] = ApiClient.convertToType(data['enable_classic_key_protection'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enable_classic_key_protection
 */
DataProtectionSection.prototype['enable_classic_key_protection'] = undefined;






export default DataProtectionSection;

