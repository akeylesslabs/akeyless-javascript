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
import CustomerFragment from './CustomerFragment';

/**
 * The CustomerFragmentsJson model module.
 * @module model/CustomerFragmentsJson
 * @version 2.4.0
 */
class CustomerFragmentsJson {
    /**
     * Constructs a new <code>CustomerFragmentsJson</code>.
     * @alias module:model/CustomerFragmentsJson
     */
    constructor() { 
        
        CustomerFragmentsJson.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerFragmentsJson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerFragmentsJson} obj Optional instance to populate.
     * @return {module:model/CustomerFragmentsJson} The populated <code>CustomerFragmentsJson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerFragmentsJson();

            if (data.hasOwnProperty('customer_fragments')) {
                obj['customer_fragments'] = ApiClient.convertToType(data['customer_fragments'], [CustomerFragment]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CustomerFragment>} customer_fragments
 */
CustomerFragmentsJson.prototype['customer_fragments'] = undefined;






export default CustomerFragmentsJson;

