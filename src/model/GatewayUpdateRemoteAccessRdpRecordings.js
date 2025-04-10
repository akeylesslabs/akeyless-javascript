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
 * The GatewayUpdateRemoteAccessRdpRecordings model module.
 * @module model/GatewayUpdateRemoteAccessRdpRecordings
 * @version 5.0.2
 */
class GatewayUpdateRemoteAccessRdpRecordings {
    /**
     * Constructs a new <code>GatewayUpdateRemoteAccessRdpRecordings</code>.
     * gatewayUpdateRemoteAccessRdpRecordings is a command that update remote access rdp recording config
     * @alias module:model/GatewayUpdateRemoteAccessRdpRecordings
     */
    constructor() { 
        
        GatewayUpdateRemoteAccessRdpRecordings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['json'] = false;
    }

    /**
     * Constructs a <code>GatewayUpdateRemoteAccessRdpRecordings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateRemoteAccessRdpRecordings} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateRemoteAccessRdpRecordings} The populated <code>GatewayUpdateRemoteAccessRdpRecordings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateRemoteAccessRdpRecordings();

            if (data.hasOwnProperty('aws-storage-access-key-id')) {
                obj['aws-storage-access-key-id'] = ApiClient.convertToType(data['aws-storage-access-key-id'], 'String');
            }
            if (data.hasOwnProperty('aws-storage-bucket-name')) {
                obj['aws-storage-bucket-name'] = ApiClient.convertToType(data['aws-storage-bucket-name'], 'String');
            }
            if (data.hasOwnProperty('aws-storage-bucket-prefix')) {
                obj['aws-storage-bucket-prefix'] = ApiClient.convertToType(data['aws-storage-bucket-prefix'], 'String');
            }
            if (data.hasOwnProperty('aws-storage-region')) {
                obj['aws-storage-region'] = ApiClient.convertToType(data['aws-storage-region'], 'String');
            }
            if (data.hasOwnProperty('aws-storage-secret-access-key')) {
                obj['aws-storage-secret-access-key'] = ApiClient.convertToType(data['aws-storage-secret-access-key'], 'String');
            }
            if (data.hasOwnProperty('azure-storage-account-name')) {
                obj['azure-storage-account-name'] = ApiClient.convertToType(data['azure-storage-account-name'], 'String');
            }
            if (data.hasOwnProperty('azure-storage-client-id')) {
                obj['azure-storage-client-id'] = ApiClient.convertToType(data['azure-storage-client-id'], 'String');
            }
            if (data.hasOwnProperty('azure-storage-client-secret')) {
                obj['azure-storage-client-secret'] = ApiClient.convertToType(data['azure-storage-client-secret'], 'String');
            }
            if (data.hasOwnProperty('azure-storage-container-name')) {
                obj['azure-storage-container-name'] = ApiClient.convertToType(data['azure-storage-container-name'], 'String');
            }
            if (data.hasOwnProperty('azure-storage-tenant-id')) {
                obj['azure-storage-tenant-id'] = ApiClient.convertToType(data['azure-storage-tenant-id'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('rdp-session-recording')) {
                obj['rdp-session-recording'] = ApiClient.convertToType(data['rdp-session-recording'], 'String');
            }
            if (data.hasOwnProperty('rdp-session-storage')) {
                obj['rdp-session-storage'] = ApiClient.convertToType(data['rdp-session-storage'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>GatewayUpdateRemoteAccessRdpRecordings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayUpdateRemoteAccessRdpRecordings</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['aws-storage-access-key-id'] && !(typeof data['aws-storage-access-key-id'] === 'string' || data['aws-storage-access-key-id'] instanceof String)) {
            throw new Error("Expected the field `aws-storage-access-key-id` to be a primitive type in the JSON string but got " + data['aws-storage-access-key-id']);
        }
        // ensure the json data is a string
        if (data['aws-storage-bucket-name'] && !(typeof data['aws-storage-bucket-name'] === 'string' || data['aws-storage-bucket-name'] instanceof String)) {
            throw new Error("Expected the field `aws-storage-bucket-name` to be a primitive type in the JSON string but got " + data['aws-storage-bucket-name']);
        }
        // ensure the json data is a string
        if (data['aws-storage-bucket-prefix'] && !(typeof data['aws-storage-bucket-prefix'] === 'string' || data['aws-storage-bucket-prefix'] instanceof String)) {
            throw new Error("Expected the field `aws-storage-bucket-prefix` to be a primitive type in the JSON string but got " + data['aws-storage-bucket-prefix']);
        }
        // ensure the json data is a string
        if (data['aws-storage-region'] && !(typeof data['aws-storage-region'] === 'string' || data['aws-storage-region'] instanceof String)) {
            throw new Error("Expected the field `aws-storage-region` to be a primitive type in the JSON string but got " + data['aws-storage-region']);
        }
        // ensure the json data is a string
        if (data['aws-storage-secret-access-key'] && !(typeof data['aws-storage-secret-access-key'] === 'string' || data['aws-storage-secret-access-key'] instanceof String)) {
            throw new Error("Expected the field `aws-storage-secret-access-key` to be a primitive type in the JSON string but got " + data['aws-storage-secret-access-key']);
        }
        // ensure the json data is a string
        if (data['azure-storage-account-name'] && !(typeof data['azure-storage-account-name'] === 'string' || data['azure-storage-account-name'] instanceof String)) {
            throw new Error("Expected the field `azure-storage-account-name` to be a primitive type in the JSON string but got " + data['azure-storage-account-name']);
        }
        // ensure the json data is a string
        if (data['azure-storage-client-id'] && !(typeof data['azure-storage-client-id'] === 'string' || data['azure-storage-client-id'] instanceof String)) {
            throw new Error("Expected the field `azure-storage-client-id` to be a primitive type in the JSON string but got " + data['azure-storage-client-id']);
        }
        // ensure the json data is a string
        if (data['azure-storage-client-secret'] && !(typeof data['azure-storage-client-secret'] === 'string' || data['azure-storage-client-secret'] instanceof String)) {
            throw new Error("Expected the field `azure-storage-client-secret` to be a primitive type in the JSON string but got " + data['azure-storage-client-secret']);
        }
        // ensure the json data is a string
        if (data['azure-storage-container-name'] && !(typeof data['azure-storage-container-name'] === 'string' || data['azure-storage-container-name'] instanceof String)) {
            throw new Error("Expected the field `azure-storage-container-name` to be a primitive type in the JSON string but got " + data['azure-storage-container-name']);
        }
        // ensure the json data is a string
        if (data['azure-storage-tenant-id'] && !(typeof data['azure-storage-tenant-id'] === 'string' || data['azure-storage-tenant-id'] instanceof String)) {
            throw new Error("Expected the field `azure-storage-tenant-id` to be a primitive type in the JSON string but got " + data['azure-storage-tenant-id']);
        }
        // ensure the json data is a string
        if (data['rdp-session-recording'] && !(typeof data['rdp-session-recording'] === 'string' || data['rdp-session-recording'] instanceof String)) {
            throw new Error("Expected the field `rdp-session-recording` to be a primitive type in the JSON string but got " + data['rdp-session-recording']);
        }
        // ensure the json data is a string
        if (data['rdp-session-storage'] && !(typeof data['rdp-session-storage'] === 'string' || data['rdp-session-storage'] instanceof String)) {
            throw new Error("Expected the field `rdp-session-storage` to be a primitive type in the JSON string but got " + data['rdp-session-storage']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}



/**
 * AWS access key id. For more information refer to https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
 * @member {String} aws-storage-access-key-id
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['aws-storage-access-key-id'] = undefined;

/**
 * The AWS bucket name. For more information refer to https://docs.aws.amazon.com/s3/
 * @member {String} aws-storage-bucket-name
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['aws-storage-bucket-name'] = undefined;

/**
 * The folder name in S3 bucket. For more information refer to https://docs.aws.amazon.com/s3/
 * @member {String} aws-storage-bucket-prefix
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['aws-storage-bucket-prefix'] = undefined;

/**
 * The region where the storage is located
 * @member {String} aws-storage-region
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['aws-storage-region'] = undefined;

/**
 * AWS secret access key. For more information refer to https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
 * @member {String} aws-storage-secret-access-key
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['aws-storage-secret-access-key'] = undefined;

/**
 * Azure account name. For more information refer to https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview
 * @member {String} azure-storage-account-name
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['azure-storage-account-name'] = undefined;

/**
 * Azure client id. For more information refer to https://learn.microsoft.com/en-us/azure/storage/common/storage-account-get-info?tabs=portal
 * @member {String} azure-storage-client-id
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['azure-storage-client-id'] = undefined;

/**
 * Azure client secret. For more information refer to https://learn.microsoft.com/en-us/azure/storage/common/storage-account-get-info?tabs=portal
 * @member {String} azure-storage-client-secret
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['azure-storage-client-secret'] = undefined;

/**
 * Azure container name. For more information refer to https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata
 * @member {String} azure-storage-container-name
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['azure-storage-container-name'] = undefined;

/**
 * Azure tenant id. For more information refer to https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant
 * @member {String} azure-storage-tenant-id
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['azure-storage-tenant-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['json'] = false;

/**
 * Enable recording of rdp session [true/false]
 * @member {String} rdp-session-recording
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['rdp-session-recording'] = undefined;

/**
 * Rdp session recording storage destination [local/aws/azure]
 * @member {String} rdp-session-storage
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['rdp-session-storage'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateRemoteAccessRdpRecordings.prototype['uid-token'] = undefined;






export default GatewayUpdateRemoteAccessRdpRecordings;

