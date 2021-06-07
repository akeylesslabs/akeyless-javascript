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
 * The GatewayUpdateItemOutput model module.
 * @module model/GatewayUpdateItemOutput
 * @version 2.4.3
 */
class GatewayUpdateItemOutput {
    /**
     * Constructs a new <code>GatewayUpdateItemOutput</code>.
     * @alias module:model/GatewayUpdateItemOutput
     */
    constructor() { 
        
        GatewayUpdateItemOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateItemOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateItemOutput} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateItemOutput} The populated <code>GatewayUpdateItemOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateItemOutput();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
GatewayUpdateItemOutput.prototype['name'] = undefined;






export default GatewayUpdateItemOutput;

