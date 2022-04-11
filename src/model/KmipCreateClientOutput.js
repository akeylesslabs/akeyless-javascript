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
 * The KmipCreateClientOutput model module.
 * @module model/KmipCreateClientOutput
 * @version 2.15.31
 */
class KmipCreateClientOutput {
    /**
     * Constructs a new <code>KmipCreateClientOutput</code>.
     * @alias module:model/KmipCreateClientOutput
     */
    constructor() { 
        
        KmipCreateClientOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KmipCreateClientOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipCreateClientOutput} obj Optional instance to populate.
     * @return {module:model/KmipCreateClientOutput} The populated <code>KmipCreateClientOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipCreateClientOutput();

            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} certificate
 */
KmipCreateClientOutput.prototype['certificate'] = undefined;

/**
 * @member {String} id
 */
KmipCreateClientOutput.prototype['id'] = undefined;

/**
 * @member {String} key
 */
KmipCreateClientOutput.prototype['key'] = undefined;






export default KmipCreateClientOutput;

