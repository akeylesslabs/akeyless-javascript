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
 * The AzurePayload model module.
 * @module model/AzurePayload
 * @version 3.3.16
 */
class AzurePayload {
    /**
     * Constructs a new <code>AzurePayload</code>.
     * @alias module:model/AzurePayload
     */
    constructor() { 
        
        AzurePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AzurePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AzurePayload} obj Optional instance to populate.
     * @return {module:model/AzurePayload} The populated <code>AzurePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AzurePayload();

            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = ApiClient.convertToType(data['tenant'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} client
 */
AzurePayload.prototype['client'] = undefined;

/**
 * @member {String} name
 */
AzurePayload.prototype['name'] = undefined;

/**
 * @member {String} secret
 */
AzurePayload.prototype['secret'] = undefined;

/**
 * @member {String} tenant
 */
AzurePayload.prototype['tenant'] = undefined;






export default AzurePayload;

