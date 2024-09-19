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
 * The UpdateZeroSSLTarget model module.
 * @module model/UpdateZeroSSLTarget
 * @version 4.2.4
 */
class UpdateZeroSSLTarget {
    /**
     * Constructs a new <code>UpdateZeroSSLTarget</code>.
     * updateZeroSSLTarget is a command that updates an existing target. [Deprecated: Use target-update-zerossl command]
     * @alias module:model/UpdateZeroSSLTarget
     * @param apiKey {String} API Key of the ZeroSSLTarget account
     * @param imapFqdn {String} ImapFQDN of the IMAP service, FQDN or IPv4 address. Must be FQDN if the IMAP is using TLS
     * @param imapPassword {String} ImapPassword to access the IMAP service
     * @param imapUsername {String} ImapUsername to access the IMAP service
     * @param name {String} Target name
     */
    constructor(apiKey, imapFqdn, imapPassword, imapUsername, name) { 
        
        UpdateZeroSSLTarget.initialize(this, apiKey, imapFqdn, imapPassword, imapUsername, name);
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
     * Constructs a <code>UpdateZeroSSLTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateZeroSSLTarget} obj Optional instance to populate.
     * @return {module:model/UpdateZeroSSLTarget} The populated <code>UpdateZeroSSLTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateZeroSSLTarget();

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
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * API Key of the ZeroSSLTarget account
 * @member {String} api-key
 */
UpdateZeroSSLTarget.prototype['api-key'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateZeroSSLTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateZeroSSLTarget.prototype['description'] = undefined;

/**
 * ImapFQDN of the IMAP service, FQDN or IPv4 address. Must be FQDN if the IMAP is using TLS
 * @member {String} imap-fqdn
 */
UpdateZeroSSLTarget.prototype['imap-fqdn'] = undefined;

/**
 * ImapPassword to access the IMAP service
 * @member {String} imap-password
 */
UpdateZeroSSLTarget.prototype['imap-password'] = undefined;

/**
 * ImapPort of the IMAP service
 * @member {String} imap-port
 * @default '993'
 */
UpdateZeroSSLTarget.prototype['imap-port'] = '993';

/**
 * ImapValidationEmail to use when asking ZeroSSL to send a validation email, if empty will user imap-username
 * @member {String} imap-target-email
 */
UpdateZeroSSLTarget.prototype['imap-target-email'] = undefined;

/**
 * ImapUsername to access the IMAP service
 * @member {String} imap-username
 */
UpdateZeroSSLTarget.prototype['imap-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateZeroSSLTarget.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateZeroSSLTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateZeroSSLTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
UpdateZeroSSLTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateZeroSSLTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateZeroSSLTarget.prototype['new-name'] = undefined;

/**
 * Timeout waiting for certificate validation in Duration format (1h - 1 Hour, 20m - 20 Minutes, 33m3s - 33 Minutes and 3 Seconds), maximum 1h.
 * @member {String} timeout
 * @default '5m'
 */
UpdateZeroSSLTarget.prototype['timeout'] = '5m';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateZeroSSLTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateZeroSSLTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateZeroSSLTarget.prototype['update-version'] = undefined;






export default UpdateZeroSSLTarget;

