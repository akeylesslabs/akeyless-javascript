/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetPKICertificateOutput model module.
 * @module model/GetPKICertificateOutput
 * @version 0.0.1
 */
class GetPKICertificateOutput {
    /**
     * Constructs a new <code>GetPKICertificateOutput</code>.
     * @alias module:model/GetPKICertificateOutput
     */
    constructor() { 
        
        GetPKICertificateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPKICertificateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPKICertificateOutput} obj Optional instance to populate.
     * @return {module:model/GetPKICertificateOutput} The populated <code>GetPKICertificateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPKICertificateOutput();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 */
GetPKICertificateOutput.prototype['path'] = undefined;






export default GetPKICertificateOutput;

