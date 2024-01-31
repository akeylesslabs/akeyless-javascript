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
 * The LinkedTargetDetails model module.
 * @module model/LinkedTargetDetails
 * @version 3.6.0
 */
class LinkedTargetDetails {
    /**
     * Constructs a new <code>LinkedTargetDetails</code>.
     * LinkedTargetDetails
     * @alias module:model/LinkedTargetDetails
     */
    constructor() { 
        
        LinkedTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedTargetDetails} obj Optional instance to populate.
     * @return {module:model/LinkedTargetDetails} The populated <code>LinkedTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedTargetDetails();

            if (data.hasOwnProperty('hosts')) {
                obj['hosts'] = ApiClient.convertToType(data['hosts'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * key hostname, value description
 * @member {Object.<String, String>} hosts
 */
LinkedTargetDetails.prototype['hosts'] = undefined;






export default LinkedTargetDetails;

