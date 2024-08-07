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
 * The GatewayUpdateLogForwardingAwsS3 model module.
 * @module model/GatewayUpdateLogForwardingAwsS3
 * @version 4.2.2
 */
class GatewayUpdateLogForwardingAwsS3 {
    /**
     * Constructs a new <code>GatewayUpdateLogForwardingAwsS3</code>.
     * gatewayUpdateLogForwardingAwsS3 is a command that updates log forwarding config (aws-s3 target)
     * @alias module:model/GatewayUpdateLogForwardingAwsS3
     */
    constructor() { 
        
        GatewayUpdateLogForwardingAwsS3.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateLogForwardingAwsS3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateLogForwardingAwsS3} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateLogForwardingAwsS3} The populated <code>GatewayUpdateLogForwardingAwsS3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateLogForwardingAwsS3();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('access-key')) {
                obj['access-key'] = ApiClient.convertToType(data['access-key'], 'String');
            }
            if (data.hasOwnProperty('auth-type')) {
                obj['auth-type'] = ApiClient.convertToType(data['auth-type'], 'String');
            }
            if (data.hasOwnProperty('bucket-name')) {
                obj['bucket-name'] = ApiClient.convertToType(data['bucket-name'], 'String');
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('log-folder')) {
                obj['log-folder'] = ApiClient.convertToType(data['log-folder'], 'String');
            }
            if (data.hasOwnProperty('output-format')) {
                obj['output-format'] = ApiClient.convertToType(data['output-format'], 'String');
            }
            if (data.hasOwnProperty('pull-interval')) {
                obj['pull-interval'] = ApiClient.convertToType(data['pull-interval'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('role-arn')) {
                obj['role-arn'] = ApiClient.convertToType(data['role-arn'], 'String');
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
 * AWS access id relevant for access_key auth-type
 * @member {String} access-id
 */
GatewayUpdateLogForwardingAwsS3.prototype['access-id'] = undefined;

/**
 * AWS access key relevant for access_key auth-type
 * @member {String} access-key
 */
GatewayUpdateLogForwardingAwsS3.prototype['access-key'] = undefined;

/**
 * AWS auth type [access_key/cloud_id/assume_role]
 * @member {String} auth-type
 */
GatewayUpdateLogForwardingAwsS3.prototype['auth-type'] = undefined;

/**
 * AWS S3 bucket name
 * @member {String} bucket-name
 */
GatewayUpdateLogForwardingAwsS3.prototype['bucket-name'] = undefined;

/**
 * Enable Log Forwarding [true/false]
 * @member {String} enable
 * @default 'true'
 */
GatewayUpdateLogForwardingAwsS3.prototype['enable'] = 'true';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateLogForwardingAwsS3.prototype['json'] = false;

/**
 * AWS S3 destination folder for logs
 * @member {String} log-folder
 * @default 'use-existing'
 */
GatewayUpdateLogForwardingAwsS3.prototype['log-folder'] = 'use-existing';

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GatewayUpdateLogForwardingAwsS3.prototype['output-format'] = 'text';

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GatewayUpdateLogForwardingAwsS3.prototype['pull-interval'] = '10';

/**
 * AWS region
 * @member {String} region
 */
GatewayUpdateLogForwardingAwsS3.prototype['region'] = undefined;

/**
 * AWS role arn relevant for assume_role auth-type
 * @member {String} role-arn
 */
GatewayUpdateLogForwardingAwsS3.prototype['role-arn'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateLogForwardingAwsS3.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateLogForwardingAwsS3.prototype['uid-token'] = undefined;






export default GatewayUpdateLogForwardingAwsS3;

