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
 * The KMIPClientGetResponse model module.
 * @module model/KMIPClientGetResponse
 * @version 2.4.5
 */
class KMIPClientGetResponse {
    /**
     * Constructs a new <code>KMIPClientGetResponse</code>.
     * @alias module:model/KMIPClientGetResponse
     */
    constructor() { 
        
        KMIPClientGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KMIPClientGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KMIPClientGetResponse} obj Optional instance to populate.
     * @return {module:model/KMIPClientGetResponse} The populated <code>KMIPClientGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KMIPClientGetResponse();

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
KMIPClientGetResponse.prototype['client'] = undefined;






export default KMIPClientGetResponse;
