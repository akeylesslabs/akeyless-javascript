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
 * The GatewayAddSubAdminsOutput model module.
 * @module model/GatewayAddSubAdminsOutput
 * @version 2.0.12
 */
class GatewayAddSubAdminsOutput {
    /**
     * Constructs a new <code>GatewayAddSubAdminsOutput</code>.
     * @alias module:model/GatewayAddSubAdminsOutput
     */
    constructor() { 
        
        GatewayAddSubAdminsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayAddSubAdminsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayAddSubAdminsOutput} obj Optional instance to populate.
     * @return {module:model/GatewayAddSubAdminsOutput} The populated <code>GatewayAddSubAdminsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayAddSubAdminsOutput();

            if (data.hasOwnProperty('sub-admins')) {
                obj['sub-admins'] = ApiClient.convertToType(data['sub-admins'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} sub-admins
 */
GatewayAddSubAdminsOutput.prototype['sub-admins'] = undefined;






export default GatewayAddSubAdminsOutput;

