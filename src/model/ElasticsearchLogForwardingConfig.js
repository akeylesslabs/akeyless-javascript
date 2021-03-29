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
 * @version 2.0.14
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

            if (data.hasOwnProperty('elasticsearch_host')) {
                obj['elasticsearch_host'] = ApiClient.convertToType(data['elasticsearch_host'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_index')) {
                obj['elasticsearch_index'] = ApiClient.convertToType(data['elasticsearch_index'], 'String');
            }
            if (data.hasOwnProperty('elasticsearch_nodes')) {
                obj['elasticsearch_nodes'] = ApiClient.convertToType(data['elasticsearch_nodes'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} elasticsearch_host
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_host'] = undefined;

/**
 * @member {String} elasticsearch_index
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_index'] = undefined;

/**
 * @member {String} elasticsearch_nodes
 */
ElasticsearchLogForwardingConfig.prototype['elasticsearch_nodes'] = undefined;






export default ElasticsearchLogForwardingConfig;

