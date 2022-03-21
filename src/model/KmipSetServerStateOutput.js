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
 * The KmipSetServerStateOutput model module.
 * @module model/KmipSetServerStateOutput
 * @version 2.15.28
 */
class KmipSetServerStateOutput {
    /**
     * Constructs a new <code>KmipSetServerStateOutput</code>.
     * @alias module:model/KmipSetServerStateOutput
     */
    constructor() { 
        
        KmipSetServerStateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KmipSetServerStateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipSetServerStateOutput} obj Optional instance to populate.
     * @return {module:model/KmipSetServerStateOutput} The populated <code>KmipSetServerStateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipSetServerStateOutput();

            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} is_active
 */
KmipSetServerStateOutput.prototype['is_active'] = undefined;






export default KmipSetServerStateOutput;

