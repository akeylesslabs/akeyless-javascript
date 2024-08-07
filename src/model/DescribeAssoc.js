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
 * The DescribeAssoc model module.
 * @module model/DescribeAssoc
 * @version 4.2.2
 */
class DescribeAssoc {
    /**
     * Constructs a new <code>DescribeAssoc</code>.
     * @alias module:model/DescribeAssoc
     * @param assocId {String} The association id
     */
    constructor(assocId) { 
        
        DescribeAssoc.initialize(this, assocId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assocId) { 
        obj['assoc-id'] = assocId;
    }

    /**
     * Constructs a <code>DescribeAssoc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeAssoc} obj Optional instance to populate.
     * @return {module:model/DescribeAssoc} The populated <code>DescribeAssoc</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribeAssoc();

            if (data.hasOwnProperty('assoc-id')) {
                obj['assoc-id'] = ApiClient.convertToType(data['assoc-id'], 'String');
            }
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
 * The association id
 * @member {String} assoc-id
 */
DescribeAssoc.prototype['assoc-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DescribeAssoc.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DescribeAssoc.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DescribeAssoc.prototype['uid-token'] = undefined;






export default DescribeAssoc;

