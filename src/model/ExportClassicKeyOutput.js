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
 * The ExportClassicKeyOutput model module.
 * @module model/ExportClassicKeyOutput
 * @version 4.1.0
 */
class ExportClassicKeyOutput {
    /**
     * Constructs a new <code>ExportClassicKeyOutput</code>.
     * @alias module:model/ExportClassicKeyOutput
     */
    constructor() { 
        
        ExportClassicKeyOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExportClassicKeyOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportClassicKeyOutput} obj Optional instance to populate.
     * @return {module:model/ExportClassicKeyOutput} The populated <code>ExportClassicKeyOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportClassicKeyOutput();

            if (data.hasOwnProperty('certificatePem')) {
                obj['certificatePem'] = ApiClient.convertToType(data['certificatePem'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} certificatePem
 */
ExportClassicKeyOutput.prototype['certificatePem'] = undefined;

/**
 * @member {String} key
 */
ExportClassicKeyOutput.prototype['key'] = undefined;






export default ExportClassicKeyOutput;

