/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetRSAPublicOutput model module.
 * @module model/GetRSAPublicOutput
 * @version 5.0.6
 */
class GetRSAPublicOutput {
    /**
     * Constructs a new <code>GetRSAPublicOutput</code>.
     * @alias module:model/GetRSAPublicOutput
     */
    constructor() { 
        
        GetRSAPublicOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRSAPublicOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRSAPublicOutput} obj Optional instance to populate.
     * @return {module:model/GetRSAPublicOutput} The populated <code>GetRSAPublicOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRSAPublicOutput();

            if (data.hasOwnProperty('pem')) {
                obj['pem'] = ApiClient.convertToType(data['pem'], 'String');
            }
            if (data.hasOwnProperty('raw')) {
                obj['raw'] = ApiClient.convertToType(data['raw'], 'String');
            }
            if (data.hasOwnProperty('ssh')) {
                obj['ssh'] = ApiClient.convertToType(data['ssh'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetRSAPublicOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetRSAPublicOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['pem'] && !(typeof data['pem'] === 'string' || data['pem'] instanceof String)) {
            throw new Error("Expected the field `pem` to be a primitive type in the JSON string but got " + data['pem']);
        }
        // ensure the json data is a string
        if (data['raw'] && !(typeof data['raw'] === 'string' || data['raw'] instanceof String)) {
            throw new Error("Expected the field `raw` to be a primitive type in the JSON string but got " + data['raw']);
        }
        // ensure the json data is a string
        if (data['ssh'] && !(typeof data['ssh'] === 'string' || data['ssh'] instanceof String)) {
            throw new Error("Expected the field `ssh` to be a primitive type in the JSON string but got " + data['ssh']);
        }

        return true;
    }


}



/**
 * @member {String} pem
 */
GetRSAPublicOutput.prototype['pem'] = undefined;

/**
 * @member {String} raw
 */
GetRSAPublicOutput.prototype['raw'] = undefined;

/**
 * @member {String} ssh
 */
GetRSAPublicOutput.prototype['ssh'] = undefined;






export default GetRSAPublicOutput;

