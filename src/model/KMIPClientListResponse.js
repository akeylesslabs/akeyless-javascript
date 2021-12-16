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
import KMIPClient from './KMIPClient';

/**
 * The KMIPClientListResponse model module.
 * @module model/KMIPClientListResponse
 * @version 2.5.21
 */
class KMIPClientListResponse {
    /**
     * Constructs a new <code>KMIPClientListResponse</code>.
     * @alias module:model/KMIPClientListResponse
     */
    constructor() { 
        
        KMIPClientListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KMIPClientListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KMIPClientListResponse} obj Optional instance to populate.
     * @return {module:model/KMIPClientListResponse} The populated <code>KMIPClientListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KMIPClientListResponse();

            if (data.hasOwnProperty('clients')) {
                obj['clients'] = ApiClient.convertToType(data['clients'], [KMIPClient]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/KMIPClient>} clients
 */
KMIPClientListResponse.prototype['clients'] = undefined;






export default KMIPClientListResponse;

