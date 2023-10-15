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
 * The SharingPolicyInfo model module.
 * @module model/SharingPolicyInfo
 * @version 3.5.0
 */
class SharingPolicyInfo {
    /**
     * Constructs a new <code>SharingPolicyInfo</code>.
     * @alias module:model/SharingPolicyInfo
     */
    constructor() { 
        
        SharingPolicyInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SharingPolicyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SharingPolicyInfo} obj Optional instance to populate.
     * @return {module:model/SharingPolicyInfo} The populated <code>SharingPolicyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SharingPolicyInfo();

            if (data.hasOwnProperty('default_share_link_ttl')) {
                obj['default_share_link_ttl'] = ApiClient.convertToType(data['default_share_link_ttl'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} default_share_link_ttl
 */
SharingPolicyInfo.prototype['default_share_link_ttl'] = undefined;






export default SharingPolicyInfo;

