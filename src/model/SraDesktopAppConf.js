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
 * The SraDesktopAppConf model module.
 * @module model/SraDesktopAppConf
 * @version 5.0.3
 */
class SraDesktopAppConf {
    /**
     * Constructs a new <code>SraDesktopAppConf</code>.
     * @alias module:model/SraDesktopAppConf
     */
    constructor() { 
        
        SraDesktopAppConf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SraDesktopAppConf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SraDesktopAppConf} obj Optional instance to populate.
     * @return {module:model/SraDesktopAppConf} The populated <code>SraDesktopAppConf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SraDesktopAppConf();

            if (data.hasOwnProperty('default_cert_issuer_id')) {
                obj['default_cert_issuer_id'] = ApiClient.convertToType(data['default_cert_issuer_id'], 'Number');
            }
            if (data.hasOwnProperty('secure_web_access_url')) {
                obj['secure_web_access_url'] = ApiClient.convertToType(data['secure_web_access_url'], 'String');
            }
            if (data.hasOwnProperty('secure_web_proxy_url')) {
                obj['secure_web_proxy_url'] = ApiClient.convertToType(data['secure_web_proxy_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SraDesktopAppConf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SraDesktopAppConf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['secure_web_access_url'] && !(typeof data['secure_web_access_url'] === 'string' || data['secure_web_access_url'] instanceof String)) {
            throw new Error("Expected the field `secure_web_access_url` to be a primitive type in the JSON string but got " + data['secure_web_access_url']);
        }
        // ensure the json data is a string
        if (data['secure_web_proxy_url'] && !(typeof data['secure_web_proxy_url'] === 'string' || data['secure_web_proxy_url'] instanceof String)) {
            throw new Error("Expected the field `secure_web_proxy_url` to be a primitive type in the JSON string but got " + data['secure_web_proxy_url']);
        }

        return true;
    }


}



/**
 * @member {Number} default_cert_issuer_id
 */
SraDesktopAppConf.prototype['default_cert_issuer_id'] = undefined;

/**
 * @member {String} secure_web_access_url
 */
SraDesktopAppConf.prototype['secure_web_access_url'] = undefined;

/**
 * @member {String} secure_web_proxy_url
 */
SraDesktopAppConf.prototype['secure_web_proxy_url'] = undefined;






export default SraDesktopAppConf;

