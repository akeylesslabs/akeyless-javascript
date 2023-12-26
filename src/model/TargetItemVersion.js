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
 * The TargetItemVersion model module.
 * @module model/TargetItemVersion
 * @version 3.5.4
 */
class TargetItemVersion {
    /**
     * Constructs a new <code>TargetItemVersion</code>.
     * @alias module:model/TargetItemVersion
     */
    constructor() { 
        
        TargetItemVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TargetItemVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetItemVersion} obj Optional instance to populate.
     * @return {module:model/TargetItemVersion} The populated <code>TargetItemVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetItemVersion();

            if (data.hasOwnProperty('access_date')) {
                obj['access_date'] = ApiClient.convertToType(data['access_date'], 'Date');
            }
            if (data.hasOwnProperty('access_date_display')) {
                obj['access_date_display'] = ApiClient.convertToType(data['access_date_display'], 'String');
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('customer_fragment_id')) {
                obj['customer_fragment_id'] = ApiClient.convertToType(data['customer_fragment_id'], 'String');
            }
            if (data.hasOwnProperty('deletion_date')) {
                obj['deletion_date'] = ApiClient.convertToType(data['deletion_date'], 'Date');
            }
            if (data.hasOwnProperty('item_version_state')) {
                obj['item_version_state'] = ApiClient.convertToType(data['item_version_state'], 'String');
            }
            if (data.hasOwnProperty('latest_version')) {
                obj['latest_version'] = ApiClient.convertToType(data['latest_version'], 'Boolean');
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'Date');
            }
            if (data.hasOwnProperty('protection_key_name')) {
                obj['protection_key_name'] = ApiClient.convertToType(data['protection_key_name'], 'String');
            }
            if (data.hasOwnProperty('target_name')) {
                obj['target_name'] = ApiClient.convertToType(data['target_name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('with_customer_fragment')) {
                obj['with_customer_fragment'] = ApiClient.convertToType(data['with_customer_fragment'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} access_date
 */
TargetItemVersion.prototype['access_date'] = undefined;

/**
 * @member {String} access_date_display
 */
TargetItemVersion.prototype['access_date_display'] = undefined;

/**
 * @member {Date} creation_date
 */
TargetItemVersion.prototype['creation_date'] = undefined;

/**
 * @member {String} customer_fragment_id
 */
TargetItemVersion.prototype['customer_fragment_id'] = undefined;

/**
 * @member {Date} deletion_date
 */
TargetItemVersion.prototype['deletion_date'] = undefined;

/**
 * ItemState defines the different states an Item can be in
 * @member {String} item_version_state
 */
TargetItemVersion.prototype['item_version_state'] = undefined;

/**
 * @member {Boolean} latest_version
 */
TargetItemVersion.prototype['latest_version'] = undefined;

/**
 * @member {Date} modification_date
 */
TargetItemVersion.prototype['modification_date'] = undefined;

/**
 * @member {String} protection_key_name
 */
TargetItemVersion.prototype['protection_key_name'] = undefined;

/**
 * @member {String} target_name
 */
TargetItemVersion.prototype['target_name'] = undefined;

/**
 * @member {Number} version
 */
TargetItemVersion.prototype['version'] = undefined;

/**
 * @member {Boolean} with_customer_fragment
 */
TargetItemVersion.prototype['with_customer_fragment'] = undefined;






export default TargetItemVersion;

