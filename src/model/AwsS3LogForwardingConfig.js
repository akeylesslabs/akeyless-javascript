/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AwsS3LogForwardingConfig model module.
 * @module model/AwsS3LogForwardingConfig
 * @version 5.0.0
 */
class AwsS3LogForwardingConfig {
    /**
     * Constructs a new <code>AwsS3LogForwardingConfig</code>.
     * @alias module:model/AwsS3LogForwardingConfig
     */
    constructor() { 
        
        AwsS3LogForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AwsS3LogForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwsS3LogForwardingConfig} obj Optional instance to populate.
     * @return {module:model/AwsS3LogForwardingConfig} The populated <code>AwsS3LogForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AwsS3LogForwardingConfig();

            if (data.hasOwnProperty('aws_access_id')) {
                obj['aws_access_id'] = ApiClient.convertToType(data['aws_access_id'], 'String');
            }
            if (data.hasOwnProperty('aws_access_key')) {
                obj['aws_access_key'] = ApiClient.convertToType(data['aws_access_key'], 'String');
            }
            if (data.hasOwnProperty('aws_auth_type')) {
                obj['aws_auth_type'] = ApiClient.convertToType(data['aws_auth_type'], 'String');
            }
            if (data.hasOwnProperty('aws_region')) {
                obj['aws_region'] = ApiClient.convertToType(data['aws_region'], 'String');
            }
            if (data.hasOwnProperty('aws_role_arn')) {
                obj['aws_role_arn'] = ApiClient.convertToType(data['aws_role_arn'], 'String');
            }
            if (data.hasOwnProperty('aws_use_gateway_cloud_identity')) {
                obj['aws_use_gateway_cloud_identity'] = ApiClient.convertToType(data['aws_use_gateway_cloud_identity'], 'Boolean');
            }
            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('log_folder')) {
                obj['log_folder'] = ApiClient.convertToType(data['log_folder'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AwsS3LogForwardingConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AwsS3LogForwardingConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['aws_access_id'] && !(typeof data['aws_access_id'] === 'string' || data['aws_access_id'] instanceof String)) {
            throw new Error("Expected the field `aws_access_id` to be a primitive type in the JSON string but got " + data['aws_access_id']);
        }
        // ensure the json data is a string
        if (data['aws_access_key'] && !(typeof data['aws_access_key'] === 'string' || data['aws_access_key'] instanceof String)) {
            throw new Error("Expected the field `aws_access_key` to be a primitive type in the JSON string but got " + data['aws_access_key']);
        }
        // ensure the json data is a string
        if (data['aws_auth_type'] && !(typeof data['aws_auth_type'] === 'string' || data['aws_auth_type'] instanceof String)) {
            throw new Error("Expected the field `aws_auth_type` to be a primitive type in the JSON string but got " + data['aws_auth_type']);
        }
        // ensure the json data is a string
        if (data['aws_region'] && !(typeof data['aws_region'] === 'string' || data['aws_region'] instanceof String)) {
            throw new Error("Expected the field `aws_region` to be a primitive type in the JSON string but got " + data['aws_region']);
        }
        // ensure the json data is a string
        if (data['aws_role_arn'] && !(typeof data['aws_role_arn'] === 'string' || data['aws_role_arn'] instanceof String)) {
            throw new Error("Expected the field `aws_role_arn` to be a primitive type in the JSON string but got " + data['aws_role_arn']);
        }
        // ensure the json data is a string
        if (data['bucket_name'] && !(typeof data['bucket_name'] === 'string' || data['bucket_name'] instanceof String)) {
            throw new Error("Expected the field `bucket_name` to be a primitive type in the JSON string but got " + data['bucket_name']);
        }
        // ensure the json data is a string
        if (data['log_folder'] && !(typeof data['log_folder'] === 'string' || data['log_folder'] instanceof String)) {
            throw new Error("Expected the field `log_folder` to be a primitive type in the JSON string but got " + data['log_folder']);
        }

        return true;
    }


}



/**
 * @member {String} aws_access_id
 */
AwsS3LogForwardingConfig.prototype['aws_access_id'] = undefined;

/**
 * @member {String} aws_access_key
 */
AwsS3LogForwardingConfig.prototype['aws_access_key'] = undefined;

/**
 * @member {String} aws_auth_type
 */
AwsS3LogForwardingConfig.prototype['aws_auth_type'] = undefined;

/**
 * @member {String} aws_region
 */
AwsS3LogForwardingConfig.prototype['aws_region'] = undefined;

/**
 * @member {String} aws_role_arn
 */
AwsS3LogForwardingConfig.prototype['aws_role_arn'] = undefined;

/**
 * deprecated
 * @member {Boolean} aws_use_gateway_cloud_identity
 */
AwsS3LogForwardingConfig.prototype['aws_use_gateway_cloud_identity'] = undefined;

/**
 * @member {String} bucket_name
 */
AwsS3LogForwardingConfig.prototype['bucket_name'] = undefined;

/**
 * @member {String} log_folder
 */
AwsS3LogForwardingConfig.prototype['log_folder'] = undefined;






export default AwsS3LogForwardingConfig;

