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
 * The TargetCreateGodaddy model module.
 * @module model/TargetCreateGodaddy
 * @version 4.2.4
 */
class TargetCreateGodaddy {
    /**
     * Constructs a new <code>TargetCreateGodaddy</code>.
     * @alias module:model/TargetCreateGodaddy
     * @param apiKey {String} Key of the api credentials to the Godaddy account
     * @param imapFqdn {String} ImapFQDN of the IMAP service, FQDN or IPv4 address. Must be FQDN if the IMAP is using TLS
     * @param imapPassword {String} ImapPassword to access the IMAP service
     * @param imapUsername {String} ImapUsername to access the IMAP service
     * @param name {String} Target name
     * @param secret {String} Secret of the api credentials to the Godaddy account
     */
    constructor(apiKey, imapFqdn, imapPassword, imapUsername, name, secret) { 
        
        TargetCreateGodaddy.initialize(this, apiKey, imapFqdn, imapPassword, imapUsername, name, secret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiKey, imapFqdn, imapPassword, imapUsername, name, secret) { 
        obj['api-key'] = apiKey;
        obj['imap-fqdn'] = imapFqdn;
        obj['imap-password'] = imapPassword;
        obj['imap-username'] = imapUsername;
        obj['name'] = name;
        obj['secret'] = secret;
    }

    /**
     * Constructs a <code>TargetCreateGodaddy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateGodaddy} obj Optional instance to populate.
     * @return {module:model/TargetCreateGodaddy} The populated <code>TargetCreateGodaddy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateGodaddy();

            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
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
            if (data.hasOwnProperty('imap-username')) {
                obj['imap-username'] = ApiClient.convertToType(data['imap-username'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
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
 * Key of the api credentials to the Godaddy account
 * @member {String} api-key
 */
TargetCreateGodaddy.prototype['api-key'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetCreateGodaddy.prototype['description'] = undefined;

/**
 * ImapFQDN of the IMAP service, FQDN or IPv4 address. Must be FQDN if the IMAP is using TLS
 * @member {String} imap-fqdn
 */
TargetCreateGodaddy.prototype['imap-fqdn'] = undefined;

/**
 * ImapPassword to access the IMAP service
 * @member {String} imap-password
 */
TargetCreateGodaddy.prototype['imap-password'] = undefined;

/**
 * ImapPort of the IMAP service
 * @member {String} imap-port
 * @default '993'
 */
TargetCreateGodaddy.prototype['imap-port'] = '993';

/**
 * ImapUsername to access the IMAP service
 * @member {String} imap-username
 */
TargetCreateGodaddy.prototype['imap-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateGodaddy.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateGodaddy.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateGodaddy.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateGodaddy.prototype['name'] = undefined;

/**
 * Secret of the api credentials to the Godaddy account
 * @member {String} secret
 */
TargetCreateGodaddy.prototype['secret'] = undefined;

/**
 * Timeout waiting for certificate validation in Duration format (1h - 1 Hour, 20m - 20 Minutes, 33m3s - 33 Minutes and 3 Seconds), maximum 1h.
 * @member {String} timeout
 * @default '5m'
 */
TargetCreateGodaddy.prototype['timeout'] = '5m';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateGodaddy.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateGodaddy.prototype['uid-token'] = undefined;






export default TargetCreateGodaddy;

