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
 * The DescribeSubClaims model module.
 * @module model/DescribeSubClaims
 * @version 3.2.7
 */
class DescribeSubClaims {
    /**
     * Constructs a new <code>DescribeSubClaims</code>.
     * describe-sub-claims Get the sub-claims associated with the provided token or authentication profile
     * @alias module:model/DescribeSubClaims
     */
    constructor() { 
        
        DescribeSubClaims.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DescribeSubClaims</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSubClaims} obj Optional instance to populate.
     * @return {module:model/DescribeSubClaims} The populated <code>DescribeSubClaims</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribeSubClaims();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DescribeSubClaims.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DescribeSubClaims.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DescribeSubClaims.prototype['uid-token'] = undefined;






export default DescribeSubClaims;

