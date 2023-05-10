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
 * The GenCustomerFragment model module.
 * @module model/GenCustomerFragment
 * @version 3.3.3
 */
class GenCustomerFragment {
    /**
     * Constructs a new <code>GenCustomerFragment</code>.
     * @alias module:model/GenCustomerFragment
     */
    constructor() { 
        
        GenCustomerFragment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GenCustomerFragment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenCustomerFragment} obj Optional instance to populate.
     * @return {module:model/GenCustomerFragment} The populated <code>GenCustomerFragment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenCustomerFragment();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Description of the object
 * @member {String} description
 */
GenCustomerFragment.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GenCustomerFragment.prototype['json'] = false;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
GenCustomerFragment.prototype['metadata'] = undefined;






export default GenCustomerFragment;

