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
 * The OCIAccessRules model module.
 * @module model/OCIAccessRules
 * @version 3.6.2
 */
class OCIAccessRules {
    /**
     * Constructs a new <code>OCIAccessRules</code>.
     * OCIAccessRules contains access rules specific to Oracle cloud instance / user authentication
     * @alias module:model/OCIAccessRules
     */
    constructor() { 
        
        OCIAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OCIAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OCIAccessRules} obj Optional instance to populate.
     * @return {module:model/OCIAccessRules} The populated <code>OCIAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OCIAccessRules();

            if (data.hasOwnProperty('group_ocids')) {
                obj['group_ocids'] = ApiClient.convertToType(data['group_ocids'], ['String']);
            }
            if (data.hasOwnProperty('tenant_ocid')) {
                obj['tenant_ocid'] = ApiClient.convertToType(data['tenant_ocid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} group_ocids
 */
OCIAccessRules.prototype['group_ocids'] = undefined;

/**
 * @member {String} tenant_ocid
 */
OCIAccessRules.prototype['tenant_ocid'] = undefined;






export default OCIAccessRules;

