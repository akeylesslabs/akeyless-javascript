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
 * The ElasticsearchLogForwardingConfig model module.
 * @module model/ElasticsearchLogForwardingConfig
 * @version 4.3.0
 */
class ElasticsearchLogForwardingConfig {
    /**
     * Constructs a new <code>ElasticsearchLogForwardingConfig</code>.
     * @alias module:model/ElasticsearchLogForwardingConfig
     */
    constructor() { 
        
        ElasticsearchLogForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ElasticsearchLogForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElasticsearchLogForwardingConfig} obj Optional instance to populate.
     * @return {module:model/ElasticsearchLogForwardingConfig} The populated <code>ElasticsearchLogForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ElasticsearchLogForwardingConfig();

            if (data.hasOwnProperty('elasticsearch_api_key')) {
                obj['elasticsearch_api_key'] = ApiClient.convertToType(data['elasticsearch_api_key'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_auth_type')) {
                obj['elasticsearch_auth_type'] = ApiClient.convertToType(data['elasticsearch_auth_type'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_cloud_id')) {
                obj['elasticsearch_cloud_id'] = ApiClient.convertToType(data['elasticsearch_cloud_id'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_enable_tls')) {
                obj['elasticsearch_enable_tls'] = ApiClient.convertToType(data['elasticsearch_enable_tls'], 'Boolean');
            }
            if (data.hasOwnProperty('elasticsearch_index')) {
                obj['elasticsearch_index'] = ApiClient.convertToType(data['elasticsearch_index'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_nodes')) {
                obj['elasticsearch_nodes'] = ApiClient.convertToType(data['elasticsearch_nodes'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_password')) {
                obj['elasticsearch_password'] = ApiClient.convertToType(data['elasticsearch_password'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_server_type')) {
                obj['elasticsearch_server_type'] = ApiClient.convertToType(data['elasticsearch_server_type'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_tls_certificate')) {
                obj['elasticsearch_tls_certificate'] = ApiClient.convertToType(data['elasticsearch_tls_certificate'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_user_name')) {
                obj['elasticsearch_user_name'] = ApiClient.convertToType(data['elasticsearch_user_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} elasticsearch_api_key
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_api_key'] = undefined;

/**
 * @member {String} elasticsearch_auth_type
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_auth_type'] = undefined;

/**
 * @member {String} elasticsearch_cloud_id
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_cloud_id'] = undefined;

/**
 * @member {Boolean} elasticsearch_enable_tls
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_enable_tls'] = undefined;

/**
 * @member {String} elasticsearch_index
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_index'] = undefined;

/**
 * @member {String} elasticsearch_nodes
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_nodes'] = undefined;

/**
 * @member {String} elasticsearch_password
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_password'] = undefined;

/**
 * @member {String} elasticsearch_server_type
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_server_type'] = undefined;

/**
 * @member {String} elasticsearch_tls_certificate
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_tls_certificate'] = undefined;

/**
 * @member {String} elasticsearch_user_name
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_user_name'] = undefined;






export default ElasticsearchLogForwardingConfig;

