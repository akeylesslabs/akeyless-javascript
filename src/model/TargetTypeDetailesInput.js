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
 * The TargetTypeDetailesInput model module.
 * @module model/TargetTypeDetailesInput
 * @version 2.4.0
 */
class TargetTypeDetailesInput {
    /**
     * Constructs a new <code>TargetTypeDetailesInput</code>.
     * @alias module:model/TargetTypeDetailesInput
     */
    constructor() { 
        
        TargetTypeDetailesInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TargetTypeDetailesInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetTypeDetailesInput} obj Optional instance to populate.
     * @return {module:model/TargetTypeDetailesInput} The populated <code>TargetTypeDetailesInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetTypeDetailesInput();

            if (data.hasOwnProperty('aws_access_key_id')) {
                obj['aws_access_key_id'] = ApiClient.convertToType(data['aws_access_key_id'], 'String');
            }
            if (data.hasOwnProperty('aws_region')) {
                obj['aws_region'] = ApiClient.convertToType(data['aws_region'], 'String');
            }
            if (data.hasOwnProperty('aws_secret_access_key')) {
                obj['aws_secret_access_key'] = ApiClient.convertToType(data['aws_secret_access_key'], 'String');
            }
            if (data.hasOwnProperty('aws_session_token')) {
                obj['aws_session_token'] = ApiClient.convertToType(data['aws_session_token'], 'String');
            }
            if (data.hasOwnProperty('db_host_name')) {
                obj['db_host_name'] = ApiClient.convertToType(data['db_host_name'], 'String');
            }
            if (data.hasOwnProperty('db_name')) {
                obj['db_name'] = ApiClient.convertToType(data['db_name'], 'String');
            }
            if (data.hasOwnProperty('db_port')) {
                obj['db_port'] = ApiClient.convertToType(data['db_port'], 'String');
            }
            if (data.hasOwnProperty('db_pwd')) {
                obj['db_pwd'] = ApiClient.convertToType(data['db_pwd'], 'String');
            }
            if (data.hasOwnProperty('db_server_certificates')) {
                obj['db_server_certificates'] = ApiClient.convertToType(data['db_server_certificates'], 'String');
            }
            if (data.hasOwnProperty('db_server_name')) {
                obj['db_server_name'] = ApiClient.convertToType(data['db_server_name'], 'String');
            }
            if (data.hasOwnProperty('db_user_name')) {
                obj['db_user_name'] = ApiClient.convertToType(data['db_user_name'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('mongodb_db_name')) {
                obj['mongodb_db_name'] = ApiClient.convertToType(data['mongodb_db_name'], 'String');
            }
            if (data.hasOwnProperty('mongodb_uri_connection')) {
                obj['mongodb_uri_connection'] = ApiClient.convertToType(data['mongodb_uri_connection'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('private_key')) {
                obj['private_key'] = ApiClient.convertToType(data['private_key'], 'String');
            }
            if (data.hasOwnProperty('private_key_password')) {
                obj['private_key_password'] = ApiClient.convertToType(data['private_key_password'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_password')) {
                obj['rabbitmq_server_password'] = ApiClient.convertToType(data['rabbitmq_server_password'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_uri')) {
                obj['rabbitmq_server_uri'] = ApiClient.convertToType(data['rabbitmq_server_uri'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_user')) {
                obj['rabbitmq_server_user'] = ApiClient.convertToType(data['rabbitmq_server_user'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} aws_access_key_id
 */
TargetTypeDetailesInput.prototype['aws_access_key_id'] = undefined;

/**
 * @member {String} aws_region
 */
TargetTypeDetailesInput.prototype['aws_region'] = undefined;

/**
 * @member {String} aws_secret_access_key
 */
TargetTypeDetailesInput.prototype['aws_secret_access_key'] = undefined;

/**
 * @member {String} aws_session_token
 */
TargetTypeDetailesInput.prototype['aws_session_token'] = undefined;

/**
 * @member {String} db_host_name
 */
TargetTypeDetailesInput.prototype['db_host_name'] = undefined;

/**
 * @member {String} db_name
 */
TargetTypeDetailesInput.prototype['db_name'] = undefined;

/**
 * @member {String} db_port
 */
TargetTypeDetailesInput.prototype['db_port'] = undefined;

/**
 * @member {String} db_pwd
 */
TargetTypeDetailesInput.prototype['db_pwd'] = undefined;

/**
 * (Optional) DBServerCertificates defines the set of root certificate authorities that clients use when verifying server certificates. If DBServerCertificates is empty, TLS uses the host's root CA set.
 * @member {String} db_server_certificates
 */
TargetTypeDetailesInput.prototype['db_server_certificates'] = undefined;

/**
 * (Optional) ServerName is used to verify the hostname on the returned certificates unless InsecureSkipVerify is given. It is also included in the client's handshake to support virtual hosting unless it is an IP address.
 * @member {String} db_server_name
 */
TargetTypeDetailesInput.prototype['db_server_name'] = undefined;

/**
 * @member {String} db_user_name
 */
TargetTypeDetailesInput.prototype['db_user_name'] = undefined;

/**
 * @member {String} host
 */
TargetTypeDetailesInput.prototype['host'] = undefined;

/**
 * @member {String} mongodb_db_name
 */
TargetTypeDetailesInput.prototype['mongodb_db_name'] = undefined;

/**
 * @member {String} mongodb_uri_connection
 */
TargetTypeDetailesInput.prototype['mongodb_uri_connection'] = undefined;

/**
 * @member {String} password
 */
TargetTypeDetailesInput.prototype['password'] = undefined;

/**
 * @member {String} port
 */
TargetTypeDetailesInput.prototype['port'] = undefined;

/**
 * @member {String} private_key
 */
TargetTypeDetailesInput.prototype['private_key'] = undefined;

/**
 * @member {String} private_key_password
 */
TargetTypeDetailesInput.prototype['private_key_password'] = undefined;

/**
 * @member {String} rabbitmq_server_password
 */
TargetTypeDetailesInput.prototype['rabbitmq_server_password'] = undefined;

/**
 * @member {String} rabbitmq_server_uri
 */
TargetTypeDetailesInput.prototype['rabbitmq_server_uri'] = undefined;

/**
 * @member {String} rabbitmq_server_user
 */
TargetTypeDetailesInput.prototype['rabbitmq_server_user'] = undefined;

/**
 * @member {String} url
 */
TargetTypeDetailesInput.prototype['url'] = undefined;

/**
 * @member {String} username
 */
TargetTypeDetailesInput.prototype['username'] = undefined;






export default TargetTypeDetailesInput;

