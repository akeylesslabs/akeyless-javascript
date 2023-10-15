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
 * The LinkedDetails model module.
 * @module model/LinkedDetails
 * @version 3.5.0
 */
class LinkedDetails {
    /**
     * Constructs a new <code>LinkedDetails</code>.
     * @alias module:model/LinkedDetails
     */
    constructor() { 
        
        LinkedDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedDetails} obj Optional instance to populate.
     * @return {module:model/LinkedDetails} The populated <code>LinkedDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedDetails();

            if (data.hasOwnProperty('hosts')) {
                obj['hosts'] = ApiClient.convertToType(data['hosts'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} hosts
 */
LinkedDetails.prototype['hosts'] = undefined;






export default LinkedDetails;

