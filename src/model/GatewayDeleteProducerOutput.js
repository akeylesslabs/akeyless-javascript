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
 * The GatewayDeleteProducerOutput model module.
 * @module model/GatewayDeleteProducerOutput
 * @version 3.3.18
 */
class GatewayDeleteProducerOutput {
    /**
     * Constructs a new <code>GatewayDeleteProducerOutput</code>.
     * @alias module:model/GatewayDeleteProducerOutput
     */
    constructor() { 
        
        GatewayDeleteProducerOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayDeleteProducerOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayDeleteProducerOutput} obj Optional instance to populate.
     * @return {module:model/GatewayDeleteProducerOutput} The populated <code>GatewayDeleteProducerOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayDeleteProducerOutput();

            if (data.hasOwnProperty('producer_name')) {
                obj['producer_name'] = ApiClient.convertToType(data['producer_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} producer_name
 */
GatewayDeleteProducerOutput.prototype['producer_name'] = undefined;






export default GatewayDeleteProducerOutput;

