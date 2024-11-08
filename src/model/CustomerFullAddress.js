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
 * The CustomerFullAddress model module.
 * @module model/CustomerFullAddress
 * @version 4.3.0
 */
class CustomerFullAddress {
    /**
     * Constructs a new <code>CustomerFullAddress</code>.
     * @alias module:model/CustomerFullAddress
     */
    constructor() { 
        
        CustomerFullAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerFullAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerFullAddress} obj Optional instance to populate.
     * @return {module:model/CustomerFullAddress} The populated <code>CustomerFullAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerFullAddress();

            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} city
 */
CustomerFullAddress.prototype['city'] = undefined;

/**
 * @member {String} country
 */
CustomerFullAddress.prototype['country'] = undefined;

/**
 * @member {String} postal_code
 */
CustomerFullAddress.prototype['postal_code'] = undefined;

/**
 * @member {String} street
 */
CustomerFullAddress.prototype['street'] = undefined;






export default CustomerFullAddress;

