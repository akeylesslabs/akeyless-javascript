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
 * The CustomerFragmentConfig model module.
 * @module model/CustomerFragmentConfig
 * @version 4.2.4
 */
class CustomerFragmentConfig {
    /**
     * Constructs a new <code>CustomerFragmentConfig</code>.
     * @alias module:model/CustomerFragmentConfig
     */
    constructor() { 
        
        CustomerFragmentConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerFragmentConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerFragmentConfig} obj Optional instance to populate.
     * @return {module:model/CustomerFragmentConfig} The populated <code>CustomerFragmentConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerFragmentConfig();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fragment_type')) {
                obj['fragment_type'] = ApiClient.convertToType(data['fragment_type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key_label')) {
                obj['key_label'] = ApiClient.convertToType(data['key_label'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
CustomerFragmentConfig.prototype['description'] = undefined;

/**
 * @member {String} fragment_type
 */
CustomerFragmentConfig.prototype['fragment_type'] = undefined;

/**
 * @member {String} id
 */
CustomerFragmentConfig.prototype['id'] = undefined;

/**
 * @member {String} key_label
 */
CustomerFragmentConfig.prototype['key_label'] = undefined;

/**
 * @member {String} name
 */
CustomerFragmentConfig.prototype['name'] = undefined;

/**
 * @member {String} value
 */
CustomerFragmentConfig.prototype['value'] = undefined;






export default CustomerFragmentConfig;

