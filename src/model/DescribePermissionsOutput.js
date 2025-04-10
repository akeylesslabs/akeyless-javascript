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
 * The DescribePermissionsOutput model module.
 * @module model/DescribePermissionsOutput
 * @version 5.0.2
 */
class DescribePermissionsOutput {
    /**
     * Constructs a new <code>DescribePermissionsOutput</code>.
     * @alias module:model/DescribePermissionsOutput
     */
    constructor() { 
        
        DescribePermissionsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DescribePermissionsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribePermissionsOutput} obj Optional instance to populate.
     * @return {module:model/DescribePermissionsOutput} The populated <code>DescribePermissionsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribePermissionsOutput();

            if (data.hasOwnProperty('client_permissions')) {
                obj['client_permissions'] = ApiClient.convertToType(data['client_permissions'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DescribePermissionsOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DescribePermissionsOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['client_permissions'])) {
            throw new Error("Expected the field `client_permissions` to be an array in the JSON data but got " + data['client_permissions']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} client_permissions
 */
DescribePermissionsOutput.prototype['client_permissions'] = undefined;






export default DescribePermissionsOutput;

