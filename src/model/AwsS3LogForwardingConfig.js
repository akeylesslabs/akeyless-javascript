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
 * The AwsS3LogForwardingConfig model module.
 * @module model/AwsS3LogForwardingConfig
 * @version 4.3.0
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

