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
 * The BastionListEntry model module.
 * @module model/BastionListEntry
 * @version 3.6.1
 */
class BastionListEntry {
    /**
     * Constructs a new <code>BastionListEntry</code>.
     * @alias module:model/BastionListEntry
     */
    constructor() { 
        
        BastionListEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BastionListEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BastionListEntry} obj Optional instance to populate.
     * @return {module:model/BastionListEntry} The populated <code>BastionListEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BastionListEntry();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('allowed_access_ids')) {
                obj['allowed_access_ids'] = ApiClient.convertToType(data['allowed_access_ids'], ['String']);
            }
            if (data.hasOwnProperty('allowed_urls')) {
                obj['allowed_urls'] = ApiClient.convertToType(data['allowed_urls'], ['String']);
            }
            if (data.hasOwnProperty('allowed_urls_per_instance')) {
                obj['allowed_urls_per_instance'] = ApiClient.convertToType(data['allowed_urls_per_instance'], {'String': ['String']});
            }
            if (data.hasOwnProperty('cluster_name')) {
                obj['cluster_name'] = ApiClient.convertToType(data['cluster_name'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('last_report')) {
                obj['last_report'] = ApiClient.convertToType(data['last_report'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_id
 */
BastionListEntry.prototype['access_id'] = undefined;

/**
 * @member {Array.<String>} allowed_access_ids
 */
BastionListEntry.prototype['allowed_access_ids'] = undefined;

/**
 * @member {Array.<String>} allowed_urls
 */
BastionListEntry.prototype['allowed_urls'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} allowed_urls_per_instance
 */
BastionListEntry.prototype['allowed_urls_per_instance'] = undefined;

/**
 * @member {String} cluster_name
 */
BastionListEntry.prototype['cluster_name'] = undefined;

/**
 * @member {String} display_name
 */
BastionListEntry.prototype['display_name'] = undefined;

/**
 * @member {Date} last_report
 */
BastionListEntry.prototype['last_report'] = undefined;






export default BastionListEntry;

