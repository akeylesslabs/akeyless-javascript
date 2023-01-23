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
 * The GeneralConfigPart model module.
 * @module model/GeneralConfigPart
 * @version 3.2.0
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
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
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
            if (data.hasOwnProperty('gw_cluster_url')) {
                obj['gw_cluster_url'] = ApiClient.convertToType(data['gw_cluster_url'], 'String');
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
 * AkeylessUrl is here for BC only. Gator will still return it if it exists in the configuration, but new clients (>=2.34.0) will ignore it and override it with what exists in their local file. It will no longer be sent to Gator for update, so new clusters will only have the default value saved in the DB.
 * @member {String} akeyless_url
 */
GeneralConfigPart.prototype['akeyless_url'] = undefined;

/**
 * @member {String} api_token_ttl
 */
GeneralConfigPart.prototype['api_token_ttl'] = undefined;

/**
 * @member {String} display_name
 */
GeneralConfigPart.prototype['display_name'] = undefined;

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
 * @member {String} gw_cluster_url
 */
GeneralConfigPart.prototype['gw_cluster_url'] = undefined;

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

