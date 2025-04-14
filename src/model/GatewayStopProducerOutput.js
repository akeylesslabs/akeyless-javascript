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
 * The GatewayStopProducerOutput model module.
 * @module model/GatewayStopProducerOutput
 * @version 5.0.3
 */
class GatewayStopProducerOutput {
    /**
     * Constructs a new <code>GatewayStopProducerOutput</code>.
     * @alias module:model/GatewayStopProducerOutput
     */
    constructor() { 
        
        GatewayStopProducerOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayStopProducerOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayStopProducerOutput} obj Optional instance to populate.
     * @return {module:model/GatewayStopProducerOutput} The populated <code>GatewayStopProducerOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayStopProducerOutput();

            if (data.hasOwnProperty('producer_name')) {
                obj['producer_name'] = ApiClient.convertToType(data['producer_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayStopProducerOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayStopProducerOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['producer_name'] && !(typeof data['producer_name'] === 'string' || data['producer_name'] instanceof String)) {
            throw new Error("Expected the field `producer_name` to be a primitive type in the JSON string but got " + data['producer_name']);
        }

        return true;
    }


}



/**
 * @member {String} producer_name
 */
GatewayStopProducerOutput.prototype['producer_name'] = undefined;






export default GatewayStopProducerOutput;

