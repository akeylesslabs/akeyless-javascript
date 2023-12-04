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
 * The DbTargetDetails model module.
 * @module model/DbTargetDetails
 * @version 3.5.1
 */
class DbTargetDetails {
    /**
     * Constructs a new <code>DbTargetDetails</code>.
     * DbTargetDetails
     * @alias module:model/DbTargetDetails
     */
    constructor() { 
        
        DbTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DbTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DbTargetDetails} obj Optional instance to populate.
     * @return {module:model/DbTargetDetails} The populated <code>DbTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DbTargetDetails();

            if (data.hasOwnProperty('cloud_service_provider')) {
                obj['cloud_service_provider'] = ApiClient.convertToType(data['cloud_service_provider'], 'String');
            }
            if (data.hasOwnProperty('connection_type')) {
                obj['connection_type'] = ApiClient.convertToType(data['connection_type'], 'String');
            }
            if (data.hasOwnProperty('db_client_id')) {
                obj['db_client_id'] = ApiClient.convertToType(data['db_client_id'], 'String');
            }
            if (data.hasOwnProperty('db_client_secret')) {
                obj['db_client_secret'] = ApiClient.convertToType(data['db_client_secret'], 'String');
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
            if (data.hasOwnProperty('db_private_key')) {
                obj['db_private_key'] = ApiClient.convertToType(data['db_private_key'], 'String');
            }
            if (data.hasOwnProperty('db_private_key_passphrase')) {
                obj['db_private_key_passphrase'] = ApiClient.convertToType(data['db_private_key_passphrase'], 'String');
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
            if (data.hasOwnProperty('db_tenant_id')) {
                obj['db_tenant_id'] = ApiClient.convertToType(data['db_tenant_id'], 'String');
            }
            if (data.hasOwnProperty('db_user_name')) {
                obj['db_user_name'] = ApiClient.convertToType(data['db_user_name'], 'String');
            }
            if (data.hasOwnProperty('sf_account')) {
                obj['sf_account'] = ApiClient.convertToType(data['sf_account'], 'String');
            }
            if (data.hasOwnProperty('ssl_connection_certificate')) {
                obj['ssl_connection_certificate'] = ApiClient.convertToType(data['ssl_connection_certificate'], 'String');
            }
            if (data.hasOwnProperty('ssl_connection_mode')) {
                obj['ssl_connection_mode'] = ApiClient.convertToType(data['ssl_connection_mode'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cloud_service_provider
 */
DbTargetDetails.prototype['cloud_service_provider'] = undefined;

/**
 * @member {String} connection_type
 */
DbTargetDetails.prototype['connection_type'] = undefined;

/**
 * @member {String} db_client_id
 */
DbTargetDetails.prototype['db_client_id'] = undefined;

/**
 * @member {String} db_client_secret
 */
DbTargetDetails.prototype['db_client_secret'] = undefined;

/**
 * @member {String} db_host_name
 */
DbTargetDetails.prototype['db_host_name'] = undefined;

/**
 * @member {String} db_name
 */
DbTargetDetails.prototype['db_name'] = undefined;

/**
 * @member {String} db_port
 */
DbTargetDetails.prototype['db_port'] = undefined;

/**
 * (Optional) Private Key in PEM format
 * @member {String} db_private_key
 */
DbTargetDetails.prototype['db_private_key'] = undefined;

/**
 * @member {String} db_private_key_passphrase
 */
DbTargetDetails.prototype['db_private_key_passphrase'] = undefined;

/**
 * @member {String} db_pwd
 */
DbTargetDetails.prototype['db_pwd'] = undefined;

/**
 * (Optional) DBServerCertificates defines the set of root certificate authorities that clients use when verifying server certificates. If DBServerCertificates is empty, TLS uses the host's root CA set.
 * @member {String} db_server_certificates
 */
DbTargetDetails.prototype['db_server_certificates'] = undefined;

/**
 * (Optional) ServerName is used to verify the hostname on the returned certificates unless InsecureSkipVerify is given. It is also included in the client's handshake to support virtual hosting unless it is an IP address.
 * @member {String} db_server_name
 */
DbTargetDetails.prototype['db_server_name'] = undefined;

/**
 * @member {String} db_tenant_id
 */
DbTargetDetails.prototype['db_tenant_id'] = undefined;

/**
 * @member {String} db_user_name
 */
DbTargetDetails.prototype['db_user_name'] = undefined;

/**
 * @member {String} sf_account
 */
DbTargetDetails.prototype['sf_account'] = undefined;

/**
 * (Optional) SSLConnectionCertificate defines the certificate for SSL connection. Must be base64 certificate loaded by UI using file loader field
 * @member {String} ssl_connection_certificate
 */
DbTargetDetails.prototype['ssl_connection_certificate'] = undefined;

/**
 * (Optional) SSLConnectionMode defines if SSL mode will be used to connect to DB
 * @member {Boolean} ssl_connection_mode
 */
DbTargetDetails.prototype['ssl_connection_mode'] = undefined;






export default DbTargetDetails;

