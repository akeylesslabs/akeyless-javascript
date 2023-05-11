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
 * The CreateZeroSSLTarget model module.
 * @module model/CreateZeroSSLTarget
 * @version 3.3.4
 */
class CreateZeroSSLTarget {
    /**
     * Constructs a new <code>CreateZeroSSLTarget</code>.
     * @alias module:model/CreateZeroSSLTarget
     * @param apiKey {String} API Key of the ZeroSSLTarget account
     * @param imapFqdn {String} ImapFQDN of the IMAP service, FQDN or IPv4 address. Must be FQDN if the IMAP is using TLS
     * @param imapPassword {String} ImapPassword to access the IMAP service
     * @param imapUsername {String} ImapUsername to access the IMAP service
     * @param name {String} Target name
     */
    constructor(apiKey, imapFqdn, imapPassword, imapUsername, name) { 
        
        CreateZeroSSLTarget.initialize(this, apiKey, imapFqdn, imapPassword, imapUsername, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiKey, imapFqdn, imapPassword, imapUsername, name) { 
        obj['api-key'] = apiKey;
        obj['imap-fqdn'] = imapFqdn;
        obj['imap-password'] = imapPassword;
        obj['imap-username'] = imapUsername;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateZeroSSLTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateZeroSSLTarget} obj Optional instance to populate.
     * @return {module:model/CreateZeroSSLTarget} The populated <code>CreateZeroSSLTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateZeroSSLTarget();

            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('imap-fqdn')) {
                obj['imap-fqdn'] = ApiClient.convertToType(data['imap-fqdn'], 'String');
            }
            if (data.hasOwnProperty('imap-password')) {
                obj['imap-password'] = ApiClient.convertToType(data['imap-password'], 'String');
            }
            if (data.hasOwnProperty('imap-port')) {
                obj['imap-port'] = ApiClient.convertToType(data['imap-port'], 'String');
            }
            if (data.hasOwnProperty('imap-target-email')) {
                obj['imap-target-email'] = ApiClient.convertToType(data['imap-target-email'], 'String');
            }
            if (data.hasOwnProperty('imap-username')) {
                obj['imap-username'] = ApiClient.convertToType(data['imap-username'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'String');
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
 * API Key of the ZeroSSLTarget account
 * @member {String} api-key
 */
CreateZeroSSLTarget.prototype['api-key'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
CreateZeroSSLTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateZeroSSLTarget.prototype['description'] = undefined;

/**
 * ImapFQDN of the IMAP service, FQDN or IPv4 address. Must be FQDN if the IMAP is using TLS
 * @member {String} imap-fqdn
 */
CreateZeroSSLTarget.prototype['imap-fqdn'] = undefined;

/**
 * ImapPassword to access the IMAP service
 * @member {String} imap-password
 */
CreateZeroSSLTarget.prototype['imap-password'] = undefined;

/**
 * ImapPort of the IMAP service
 * @member {String} imap-port
 * @default '993'
 */
CreateZeroSSLTarget.prototype['imap-port'] = '993';

/**
 * ImapValidationEmail to use when asking ZeroSSL to send a validation email, if empty will user imap-username
 * @member {String} imap-target-email
 */
CreateZeroSSLTarget.prototype['imap-target-email'] = undefined;

/**
 * ImapUsername to access the IMAP service
 * @member {String} imap-username
 */
CreateZeroSSLTarget.prototype['imap-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateZeroSSLTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateZeroSSLTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateZeroSSLTarget.prototype['name'] = undefined;

/**
 * Timeout waiting for certificate validation in Duration format (1h - 1 Hour, 20m - 20 Minutes, 33m3s - 33 Minutes and 3 Seconds), maximum 1h.
 * @member {String} timeout
 * @default '5m'
 */
CreateZeroSSLTarget.prototype['timeout'] = '5m';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateZeroSSLTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateZeroSSLTarget.prototype['uid-token'] = undefined;






export default CreateZeroSSLTarget;

