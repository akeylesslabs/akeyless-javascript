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
import KMIPClient from './KMIPClient';
import KMIPServer from './KMIPServer';

/**
 * The KMIPConfigPart model module.
 * @module model/KMIPConfigPart
 * @version 2.16.2
 */
class KMIPConfigPart {
    /**
     * Constructs a new <code>KMIPConfigPart</code>.
     * @alias module:model/KMIPConfigPart
     */
    constructor() { 
        
        KMIPConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KMIPConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KMIPConfigPart} obj Optional instance to populate.
     * @return {module:model/KMIPConfigPart} The populated <code>KMIPConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KMIPConfigPart();

            if (data.hasOwnProperty('clients')) {
                obj['clients'] = ApiClient.convertToType(data['clients'], {'String': KMIPClient});
            }
            if (data.hasOwnProperty('key_enc')) {
                obj['key_enc'] = ApiClient.convertToType(data['key_enc'], ['Number']);
            }
            if (data.hasOwnProperty('server')) {
                obj['server'] = KMIPServer.constructFromObject(data['server']);
            }
            if (data.hasOwnProperty('server_enc')) {
                obj['server_enc'] = ApiClient.convertToType(data['server_enc'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, module:model/KMIPClient>} clients
 */
KMIPConfigPart.prototype['clients'] = undefined;

/**
 * Saves the private key of the cert issuer in encypted form
 * @member {Array.<Number>} key_enc
 */
KMIPConfigPart.prototype['key_enc'] = undefined;

/**
 * @member {module:model/KMIPServer} server
 */
KMIPConfigPart.prototype['server'] = undefined;

/**
 * Saved for backward compatibility TODO: remove this after all clients upgrade
 * @member {Array.<Number>} server_enc
 */
KMIPConfigPart.prototype['server_enc'] = undefined;






export default KMIPConfigPart;

