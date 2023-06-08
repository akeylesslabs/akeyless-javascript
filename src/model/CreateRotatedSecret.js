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
 * The CreateRotatedSecret model module.
 * @module model/CreateRotatedSecret
 * @version 3.3.7
 */
class CreateRotatedSecret {
    /**
     * Constructs a new <code>CreateRotatedSecret</code>.
     * @alias module:model/CreateRotatedSecret
     * @param name {String} Secret name
     * @param rotatorType {String} Rotator Type
     * @param targetName {String} Target name
     */
    constructor(name, rotatorType, targetName) { 
        
        CreateRotatedSecret.initialize(this, name, rotatorType, targetName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, rotatorType, targetName) { 
        obj['name'] = name;
        obj['rotator-type'] = rotatorType;
        obj['target-name'] = targetName;
    }

    /**
     * Constructs a <code>CreateRotatedSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRotatedSecret} obj Optional instance to populate.
     * @return {module:model/CreateRotatedSecret} The populated <code>CreateRotatedSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRotatedSecret();

            if (data.hasOwnProperty('api-id')) {
                obj['api-id'] = ApiClient.convertToType(data['api-id'], 'String');
            }
            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('application-id')) {
                obj['application-id'] = ApiClient.convertToType(data['application-id'], 'String');
            }
            if (data.hasOwnProperty('authentication-credentials')) {
                obj['authentication-credentials'] = ApiClient.convertToType(data['authentication-credentials'], 'String');
            }
            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('aws-region')) {
                obj['aws-region'] = ApiClient.convertToType(data['aws-region'], 'String');
            }
            if (data.hasOwnProperty('custom-payload')) {
                obj['custom-payload'] = ApiClient.convertToType(data['custom-payload'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rotate-after-disconnect')) {
                obj['rotate-after-disconnect'] = ApiClient.convertToType(data['rotate-after-disconnect'], 'String');
            }
            if (data.hasOwnProperty('rotated-password')) {
                obj['rotated-password'] = ApiClient.convertToType(data['rotated-password'], 'String');
            }
            if (data.hasOwnProperty('rotated-username')) {
                obj['rotated-username'] = ApiClient.convertToType(data['rotated-username'], 'String');
            }
            if (data.hasOwnProperty('rotation-hour')) {
                obj['rotation-hour'] = ApiClient.convertToType(data['rotation-hour'], 'Number');
            }
            if (data.hasOwnProperty('rotation-interval')) {
                obj['rotation-interval'] = ApiClient.convertToType(data['rotation-interval'], 'String');
            }
            if (data.hasOwnProperty('rotator-creds-type')) {
                obj['rotator-creds-type'] = ApiClient.convertToType(data['rotator-creds-type'], 'String');
            }
            if (data.hasOwnProperty('rotator-custom-cmd')) {
                obj['rotator-custom-cmd'] = ApiClient.convertToType(data['rotator-custom-cmd'], 'String');
            }
            if (data.hasOwnProperty('rotator-type')) {
                obj['rotator-type'] = ApiClient.convertToType(data['rotator-type'], 'String');
            }
            if (data.hasOwnProperty('secure-access-allow-external-user')) {
                obj['secure-access-allow-external-user'] = ApiClient.convertToType(data['secure-access-allow-external-user'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-aws-account-id')) {
                obj['secure-access-aws-account-id'] = ApiClient.convertToType(data['secure-access-aws-account-id'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-native-cli')) {
                obj['secure-access-aws-native-cli'] = ApiClient.convertToType(data['secure-access-aws-native-cli'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-db-name')) {
                obj['secure-access-db-name'] = ApiClient.convertToType(data['secure-access-db-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-db-schema')) {
                obj['secure-access-db-schema'] = ApiClient.convertToType(data['secure-access-db-schema'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-rdp-domain')) {
                obj['secure-access-rdp-domain'] = ApiClient.convertToType(data['secure-access-rdp-domain'], 'String');
            }
            if (data.hasOwnProperty('secure-access-rdp-user')) {
                obj['secure-access-rdp-user'] = ApiClient.convertToType(data['secure-access-rdp-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
            }
            if (data.hasOwnProperty('ssh-password')) {
                obj['ssh-password'] = ApiClient.convertToType(data['ssh-password'], 'String');
            }
            if (data.hasOwnProperty('ssh-username')) {
                obj['ssh-username'] = ApiClient.convertToType(data['ssh-username'], 'String');
            }
            if (data.hasOwnProperty('storage-account-key-name')) {
                obj['storage-account-key-name'] = ApiClient.convertToType(data['storage-account-key-name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-attribute')) {
                obj['user-attribute'] = ApiClient.convertToType(data['user-attribute'], 'String');
            }
            if (data.hasOwnProperty('user-dn')) {
                obj['user-dn'] = ApiClient.convertToType(data['user-dn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * API ID to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-id
 */
CreateRotatedSecret.prototype['api-id'] = undefined;

/**
 * API key to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-key
 */
CreateRotatedSecret.prototype['api-key'] = undefined;

/**
 * ApplicationId (used in azure)
 * @member {String} application-id
 */
CreateRotatedSecret.prototype['application-id'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
CreateRotatedSecret.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
CreateRotatedSecret.prototype['auto-rotate'] = undefined;

/**
 * Region (used in aws)
 * @member {String} aws-region
 * @default 'us-east-2'
 */
CreateRotatedSecret.prototype['aws-region'] = 'us-east-2';

/**
 * Secret payload to be sent with rotation request (relevant only for rotator-type=custom)
 * @member {String} custom-payload
 */
CreateRotatedSecret.prototype['custom-payload'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
CreateRotatedSecret.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateRotatedSecret.prototype['description'] = undefined;

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
CreateRotatedSecret.prototype['gcp-key'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateRotatedSecret.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateRotatedSecret.prototype['key'] = undefined;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
CreateRotatedSecret.prototype['metadata'] = undefined;

/**
 * Secret name
 * @member {String} name
 */
CreateRotatedSecret.prototype['name'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
CreateRotatedSecret.prototype['rotate-after-disconnect'] = 'false';

/**
 * rotated-username password (relevant only for rotator-type=password)
 * @member {String} rotated-password
 */
CreateRotatedSecret.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=password)
 * @member {String} rotated-username
 */
CreateRotatedSecret.prototype['rotated-username'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
CreateRotatedSecret.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
CreateRotatedSecret.prototype['rotation-interval'] = undefined;

/**
 * @member {String} rotator-creds-type
 */
CreateRotatedSecret.prototype['rotator-creds-type'] = undefined;

/**
 * Custom rotation command (relevant only for ssh target)
 * @member {String} rotator-custom-cmd
 */
CreateRotatedSecret.prototype['rotator-custom-cmd'] = undefined;

/**
 * Rotator Type
 * @member {String} rotator-type
 */
CreateRotatedSecret.prototype['rotator-type'] = undefined;

/**
 * Allow providing external user for a domain users (relevant only for rdp)
 * @member {Boolean} secure-access-allow-external-user
 * @default false
 */
CreateRotatedSecret.prototype['secure-access-allow-external-user'] = false;

/**
 * The AWS account id (relevant only for aws)
 * @member {String} secure-access-aws-account-id
 */
CreateRotatedSecret.prototype['secure-access-aws-account-id'] = undefined;

/**
 * The AWS native cli
 * @member {Boolean} secure-access-aws-native-cli
 */
CreateRotatedSecret.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
CreateRotatedSecret.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * The DB name (relevant only for DB Dynamic-Secret)
 * @member {String} secure-access-db-name
 */
CreateRotatedSecret.prototype['secure-access-db-name'] = undefined;

/**
 * The db schema (relevant only for mssql or postgresql)
 * @member {String} secure-access-db-schema
 */
CreateRotatedSecret.prototype['secure-access-db-schema'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
CreateRotatedSecret.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
CreateRotatedSecret.prototype['secure-access-host'] = undefined;

/**
 * Required when the Dynamic Secret is used for a domain user (relevant only for RDP Dynamic-Secret)
 * @member {String} secure-access-rdp-domain
 */
CreateRotatedSecret.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Override the RDP Domain username (relevant only for rdp)
 * @member {String} secure-access-rdp-user
 */
CreateRotatedSecret.prototype['secure-access-rdp-user'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
CreateRotatedSecret.prototype['secure-access-web'] = false;

/**
 * Secure browser via Akeyless Web Access Bastion (relevant only for aws or azure)
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
CreateRotatedSecret.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless Web Access Bastion (relevant only for aws or azure)
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
CreateRotatedSecret.prototype['secure-access-web-proxy'] = false;

/**
 * Deprecated: use RotatedPassword
 * @member {String} ssh-password
 */
CreateRotatedSecret.prototype['ssh-password'] = undefined;

/**
 * Deprecated: use RotatedUser
 * @member {String} ssh-username
 */
CreateRotatedSecret.prototype['ssh-username'] = undefined;

/**
 * The name of the storage account key to rotate [key1/key2/kerb1/kerb2] (relevat to azure-storage-account)
 * @member {String} storage-account-key-name
 */
CreateRotatedSecret.prototype['storage-account-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
CreateRotatedSecret.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
CreateRotatedSecret.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateRotatedSecret.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateRotatedSecret.prototype['uid-token'] = undefined;

/**
 * LDAP User Attribute, Default value \"cn\"
 * @member {String} user-attribute
 */
CreateRotatedSecret.prototype['user-attribute'] = undefined;

/**
 * LDAP User Base DN
 * @member {String} user-dn
 */
CreateRotatedSecret.prototype['user-dn'] = undefined;






export default CreateRotatedSecret;

