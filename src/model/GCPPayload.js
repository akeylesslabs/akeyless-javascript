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
 * The GCPPayload model module.
 * @module model/GCPPayload
 * @version 3.3.17
 */
class GCPPayload {
    /**
     * Constructs a new <code>GCPPayload</code>.
     * @alias module:model/GCPPayload
     */
    constructor() { 
        
        GCPPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GCPPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GCPPayload} obj Optional instance to populate.
     * @return {module:model/GCPPayload} The populated <code>GCPPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GCPPayload();

            if (data.hasOwnProperty('gcp_credentials_json')) {
                obj['gcp_credentials_json'] = ApiClient.convertToType(data['gcp_credentials_json'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} gcp_credentials_json
 */
GCPPayload.prototype['gcp_credentials_json'] = undefined;






export default GCPPayload;

