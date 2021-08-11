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
 * The KMIPClientUpdateResponse model module.
 * @module model/KMIPClientUpdateResponse
 * @version 2.4.5
 */
class KMIPClientUpdateResponse {
    /**
     * Constructs a new <code>KMIPClientUpdateResponse</code>.
     * @alias module:model/KMIPClientUpdateResponse
     */
    constructor() { 
        
        KMIPClientUpdateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KMIPClientUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KMIPClientUpdateResponse} obj Optional instance to populate.
     * @return {module:model/KMIPClientUpdateResponse} The populated <code>KMIPClientUpdateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KMIPClientUpdateResponse();

            if (data.hasOwnProperty('client')) {
                obj['client'] = KMIPClient.constructFromObject(data['client']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/KMIPClient} client
 */
KMIPClientUpdateResponse.prototype['client'] = undefined;






export default KMIPClientUpdateResponse;
