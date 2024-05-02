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
 * @version 4.0.0
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
            if (data.hasOwnProperty('hsm-key-label')) {
                obj['hsm-key-label'] = ApiClient.convertToType(data['hsm-key-label'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
 * The label of the hsm key to use for customer fragment operations (relevant for hsm_wrapped/hsm_protected customer fragments)
 * @member {String} hsm-key-label
 */
GenCustomerFragment.prototype['hsm-key-label'] = undefined;

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

/**
 * Customer fragment name
 * @member {String} name
 */
GenCustomerFragment.prototype['name'] = undefined;

/**
 * Customer fragment type [standard/hsm_wrapped/hsm_secured]
 * @member {String} type
 * @default 'standard'
 */
GenCustomerFragment.prototype['type'] = 'standard';






export default GenCustomerFragment;

