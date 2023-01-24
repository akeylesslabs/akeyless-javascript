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
 * The GatewayUpdateTlsCertOutput model module.
 * @module model/GatewayUpdateTlsCertOutput
 * @version 3.2.0
 */
class GatewayUpdateTlsCertOutput {
    /**
     * Constructs a new <code>GatewayUpdateTlsCertOutput</code>.
     * @alias module:model/GatewayUpdateTlsCertOutput
     */
    constructor() { 
        
        GatewayUpdateTlsCertOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateTlsCertOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateTlsCertOutput} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateTlsCertOutput} The populated <code>GatewayUpdateTlsCertOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateTlsCertOutput();

            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} updated
 */
GatewayUpdateTlsCertOutput.prototype['updated'] = undefined;






export default GatewayUpdateTlsCertOutput;
