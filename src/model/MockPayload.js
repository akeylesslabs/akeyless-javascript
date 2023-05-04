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
 * The MockPayload model module.
 * @module model/MockPayload
 * @version 3.3.2
 */
class MockPayload {
    /**
     * Constructs a new <code>MockPayload</code>.
     * @alias module:model/MockPayload
     */
    constructor() { 
        
        MockPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MockPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MockPayload} obj Optional instance to populate.
     * @return {module:model/MockPayload} The populated <code>MockPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MockPayload();

            if (data.hasOwnProperty('vaults')) {
                obj['vaults'] = ApiClient.convertToType(data['vaults'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} vaults
 */
MockPayload.prototype['vaults'] = undefined;






export default MockPayload;

