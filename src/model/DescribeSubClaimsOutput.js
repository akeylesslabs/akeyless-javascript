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
 * The DescribeSubClaimsOutput model module.
 * @module model/DescribeSubClaimsOutput
 * @version 2.19.0
 */
class DescribeSubClaimsOutput {
    /**
     * Constructs a new <code>DescribeSubClaimsOutput</code>.
     * @alias module:model/DescribeSubClaimsOutput
     */
    constructor() { 
        
        DescribeSubClaimsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DescribeSubClaimsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSubClaimsOutput} obj Optional instance to populate.
     * @return {module:model/DescribeSubClaimsOutput} The populated <code>DescribeSubClaimsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribeSubClaimsOutput();

            if (data.hasOwnProperty('sub_claims')) {
                obj['sub_claims'] = ApiClient.convertToType(data['sub_claims'], {'String': ['String']});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Array.<String>>} sub_claims
 */
DescribeSubClaimsOutput.prototype['sub_claims'] = undefined;






export default DescribeSubClaimsOutput;

