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
 * The ClientData model module.
 * @module model/ClientData
 * @version 3.3.2
 */
class ClientData {
    /**
     * Constructs a new <code>ClientData</code>.
     * @alias module:model/ClientData
     */
    constructor() { 
        
        ClientData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientData} obj Optional instance to populate.
     * @return {module:model/ClientData} The populated <code>ClientData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientData();

            if (data.hasOwnProperty('clientCertificateData')) {
                obj['clientCertificateData'] = ApiClient.convertToType(data['clientCertificateData'], 'String');
            }
            if (data.hasOwnProperty('clientKeyData')) {
                obj['clientKeyData'] = ApiClient.convertToType(data['clientKeyData'], 'String');
            }
            if (data.hasOwnProperty('parentCertificateData')) {
                obj['parentCertificateData'] = ApiClient.convertToType(data['parentCertificateData'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} clientCertificateData
 */
ClientData.prototype['clientCertificateData'] = undefined;

/**
 * @member {String} clientKeyData
 */
ClientData.prototype['clientKeyData'] = undefined;

/**
 * @member {String} parentCertificateData
 */
ClientData.prototype['parentCertificateData'] = undefined;






export default ClientData;

