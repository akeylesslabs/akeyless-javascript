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
 * The BastionGlobalConf model module.
 * @module model/BastionGlobalConf
 * @version 5.0.2
 */
class BastionGlobalConf {
    /**
     * Constructs a new <code>BastionGlobalConf</code>.
     * @alias module:model/BastionGlobalConf
     */
    constructor() { 
        
        BastionGlobalConf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BastionGlobalConf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BastionGlobalConf} obj Optional instance to populate.
     * @return {module:model/BastionGlobalConf} The populated <code>BastionGlobalConf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BastionGlobalConf();

            if (data.hasOwnProperty('allowed_bastion_urls')) {
                obj['allowed_bastion_urls'] = ApiClient.convertToType(data['allowed_bastion_urls'], ['String']);
            }
            if (data.hasOwnProperty('legacy_signing_alg')) {
                obj['legacy_signing_alg'] = ApiClient.convertToType(data['legacy_signing_alg'], 'Boolean');
            }
            if (data.hasOwnProperty('rdp_username_sub_claim')) {
                obj['rdp_username_sub_claim'] = ApiClient.convertToType(data['rdp_username_sub_claim'], 'String');
            }
            if (data.hasOwnProperty('ssh_username_sub_claim')) {
                obj['ssh_username_sub_claim'] = ApiClient.convertToType(data['ssh_username_sub_claim'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BastionGlobalConf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BastionGlobalConf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['allowed_bastion_urls'])) {
            throw new Error("Expected the field `allowed_bastion_urls` to be an array in the JSON data but got " + data['allowed_bastion_urls']);
        }
        // ensure the json data is a string
        if (data['rdp_username_sub_claim'] && !(typeof data['rdp_username_sub_claim'] === 'string' || data['rdp_username_sub_claim'] instanceof String)) {
            throw new Error("Expected the field `rdp_username_sub_claim` to be a primitive type in the JSON string but got " + data['rdp_username_sub_claim']);
        }
        // ensure the json data is a string
        if (data['ssh_username_sub_claim'] && !(typeof data['ssh_username_sub_claim'] === 'string' || data['ssh_username_sub_claim'] instanceof String)) {
            throw new Error("Expected the field `ssh_username_sub_claim` to be a primitive type in the JSON string but got " + data['ssh_username_sub_claim']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} allowed_bastion_urls
 */
BastionGlobalConf.prototype['allowed_bastion_urls'] = undefined;

/**
 * @member {Boolean} legacy_signing_alg
 */
BastionGlobalConf.prototype['legacy_signing_alg'] = undefined;

/**
 * @member {String} rdp_username_sub_claim
 */
BastionGlobalConf.prototype['rdp_username_sub_claim'] = undefined;

/**
 * @member {String} ssh_username_sub_claim
 */
BastionGlobalConf.prototype['ssh_username_sub_claim'] = undefined;






export default BastionGlobalConf;

