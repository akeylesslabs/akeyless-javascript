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
 * The GwClusterIdentity model module.
 * @module model/GwClusterIdentity
 * @version 3.3.13
 */
class GwClusterIdentity {
    /**
     * Constructs a new <code>GwClusterIdentity</code>.
     * @alias module:model/GwClusterIdentity
     */
    constructor() { 
        
        GwClusterIdentity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GwClusterIdentity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GwClusterIdentity} obj Optional instance to populate.
     * @return {module:model/GwClusterIdentity} The populated <code>GwClusterIdentity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GwClusterIdentity();

            if (data.hasOwnProperty('allowed')) {
                obj['allowed'] = ApiClient.convertToType(data['allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('allowed_access_ids')) {
                obj['allowed_access_ids'] = ApiClient.convertToType(data['allowed_access_ids'], ['String']);
            }
            if (data.hasOwnProperty('cluster_name')) {
                obj['cluster_name'] = ApiClient.convertToType(data['cluster_name'], 'String');
            }
            if (data.hasOwnProperty('cluster_url')) {
                obj['cluster_url'] = ApiClient.convertToType(data['cluster_url'], 'String');
            }
            if (data.hasOwnProperty('current_gw')) {
                obj['current_gw'] = ApiClient.convertToType(data['current_gw'], 'Boolean');
            }
            if (data.hasOwnProperty('customer_fragment_ids')) {
                obj['customer_fragment_ids'] = ApiClient.convertToType(data['customer_fragment_ids'], ['String']);
            }
            if (data.hasOwnProperty('default_protection_key_id')) {
                obj['default_protection_key_id'] = ApiClient.convertToType(data['default_protection_key_id'], 'Number');
            }
            if (data.hasOwnProperty('default_secret_location')) {
                obj['default_secret_location'] = ApiClient.convertToType(data['default_secret_location'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('status_description')) {
                obj['status_description'] = ApiClient.convertToType(data['status_description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} allowed
 */
GwClusterIdentity.prototype['allowed'] = undefined;

/**
 * @member {Array.<String>} allowed_access_ids
 */
GwClusterIdentity.prototype['allowed_access_ids'] = undefined;

/**
 * @member {String} cluster_name
 */
GwClusterIdentity.prototype['cluster_name'] = undefined;

/**
 * @member {String} cluster_url
 */
GwClusterIdentity.prototype['cluster_url'] = undefined;

/**
 * @member {Boolean} current_gw
 */
GwClusterIdentity.prototype['current_gw'] = undefined;

/**
 * @member {Array.<String>} customer_fragment_ids
 */
GwClusterIdentity.prototype['customer_fragment_ids'] = undefined;

/**
 * @member {Number} default_protection_key_id
 */
GwClusterIdentity.prototype['default_protection_key_id'] = undefined;

/**
 * @member {String} default_secret_location
 */
GwClusterIdentity.prototype['default_secret_location'] = undefined;

/**
 * @member {String} display_name
 */
GwClusterIdentity.prototype['display_name'] = undefined;

/**
 * @member {Number} id
 */
GwClusterIdentity.prototype['id'] = undefined;

/**
 * @member {String} status
 */
GwClusterIdentity.prototype['status'] = undefined;

/**
 * @member {String} status_description
 */
GwClusterIdentity.prototype['status_description'] = undefined;






export default GwClusterIdentity;

