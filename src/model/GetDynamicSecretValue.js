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
 * The GetDynamicSecretValue model module.
 * @module model/GetDynamicSecretValue
 * @version 2.15.29
 */
class GetDynamicSecretValue {
    /**
     * Constructs a new <code>GetDynamicSecretValue</code>.
     * @alias module:model/GetDynamicSecretValue
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GetDynamicSecretValue.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GetDynamicSecretValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDynamicSecretValue} obj Optional instance to populate.
     * @return {module:model/GetDynamicSecretValue} The populated <code>GetDynamicSecretValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDynamicSecretValue();

            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], ['String']);
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
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
 * Optional arguments as key=value pairs or JSON strings, e.g - \\\"--args=csr=base64_encoded_csr --args=common_name=bar\\\" or args='{\\\"csr\\\":\\\"base64_encoded_csr\\\"}. It is possible to combine both formats.'
 * @member {Array.<String>} args
 */
GetDynamicSecretValue.prototype['args'] = undefined;

/**
 * Host
 * @member {String} host
 */
GetDynamicSecretValue.prototype['host'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
GetDynamicSecretValue.prototype['name'] = undefined;

/**
 * Target Name
 * @member {String} target
 */
GetDynamicSecretValue.prototype['target'] = undefined;

/**
 * Timeout in seconds
 * @member {Number} timeout
 * @default 15
 */
GetDynamicSecretValue.prototype['timeout'] = 15;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetDynamicSecretValue.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetDynamicSecretValue.prototype['uid-token'] = undefined;






export default GetDynamicSecretValue;

