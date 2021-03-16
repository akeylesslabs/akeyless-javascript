/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GeneralConfigPart model module.
 * @module model/GeneralConfigPart
 * @version 1.0
 */
class GeneralConfigPart {
    /**
     * Constructs a new <code>GeneralConfigPart</code>.
     * @alias module:model/GeneralConfigPart
     */
    constructor() { 
        
        GeneralConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GeneralConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralConfigPart} obj Optional instance to populate.
     * @return {module:model/GeneralConfigPart} The populated <code>GeneralConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralConfigPart();

            if (data.hasOwnProperty('akeyless_url')) {
                obj['akeyless_url'] = ApiClient.convertToType(data['akeyless_url'], 'String');
            }
            if (data.hasOwnProperty('api_token_ttl')) {
                obj['api_token_ttl'] = ApiClient.convertToType(data['api_token_ttl'], 'String');
            }
            if (data.hasOwnProperty('enable_tls')) {
                obj['enable_tls'] = ApiClient.convertToType(data['enable_tls'], 'Boolean');
            }
            if (data.hasOwnProperty('enable_tls_configure')) {
                obj['enable_tls_configure'] = ApiClient.convertToType(data['enable_tls_configure'], 'Boolean');
            }
            if (data.hasOwnProperty('enable_tls_curl')) {
                obj['enable_tls_curl'] = ApiClient.convertToType(data['enable_tls_curl'], 'Boolean');
            }
            if (data.hasOwnProperty('enable_tls_hvp')) {
                obj['enable_tls_hvp'] = ApiClient.convertToType(data['enable_tls_hvp'], 'Boolean');
            }
            if (data.hasOwnProperty('tcp_port')) {
                obj['tcp_port'] = ApiClient.convertToType(data['tcp_port'], 'String');
            }
            if (data.hasOwnProperty('tls_cert')) {
                obj['tls_cert'] = ApiClient.convertToType(data['tls_cert'], 'String');
            }
            if (data.hasOwnProperty('tls_key')) {
                obj['tls_key'] = ApiClient.convertToType(data['tls_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} akeyless_url
 */
GeneralConfigPart.prototype['akeyless_url'] = undefined;

/**
 * @member {String} api_token_ttl
 */
GeneralConfigPart.prototype['api_token_ttl'] = undefined;

/**
 * @member {Boolean} enable_tls
 */
GeneralConfigPart.prototype['enable_tls'] = undefined;

/**
 * @member {Boolean} enable_tls_configure
 */
GeneralConfigPart.prototype['enable_tls_configure'] = undefined;

/**
 * @member {Boolean} enable_tls_curl
 */
GeneralConfigPart.prototype['enable_tls_curl'] = undefined;

/**
 * @member {Boolean} enable_tls_hvp
 */
GeneralConfigPart.prototype['enable_tls_hvp'] = undefined;

/**
 * @member {String} tcp_port
 */
GeneralConfigPart.prototype['tcp_port'] = undefined;

/**
 * @member {String} tls_cert
 */
GeneralConfigPart.prototype['tls_cert'] = undefined;

/**
 * @member {String} tls_key
 */
GeneralConfigPart.prototype['tls_key'] = undefined;






export default GeneralConfigPart;

