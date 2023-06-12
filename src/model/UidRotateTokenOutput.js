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
 * The UidRotateTokenOutput model module.
 * @module model/UidRotateTokenOutput
 * @version 3.3.8
 */
class UidRotateTokenOutput {
    /**
     * Constructs a new <code>UidRotateTokenOutput</code>.
     * @alias module:model/UidRotateTokenOutput
     */
    constructor() { 
        
        UidRotateTokenOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UidRotateTokenOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UidRotateTokenOutput} obj Optional instance to populate.
     * @return {module:model/UidRotateTokenOutput} The populated <code>UidRotateTokenOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UidRotateTokenOutput();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
UidRotateTokenOutput.prototype['token'] = undefined;






export default UidRotateTokenOutput;

