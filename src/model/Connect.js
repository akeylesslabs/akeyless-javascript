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
 * The Connect model module.
 * @module model/Connect
 * @version 2.15.27
 */
class Connect {
    /**
     * Constructs a new <code>Connect</code>.
     * Connect is a command that performs secure remote access
     * @alias module:model/Connect
     */
    constructor() { 
        
        Connect.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Connect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Connect} obj Optional instance to populate.
     * @return {module:model/Connect} The populated <code>Connect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Connect();

            if (data.hasOwnProperty('RcFileOverride')) {
                obj['RcFileOverride'] = ApiClient.convertToType(data['RcFileOverride'], 'String');
            }
            if (data.hasOwnProperty('bastion-ctrl-path')) {
                obj['bastion-ctrl-path'] = ApiClient.convertToType(data['bastion-ctrl-path'], 'String');
            }
            if (data.hasOwnProperty('bastion-ctrl-port')) {
                obj['bastion-ctrl-port'] = ApiClient.convertToType(data['bastion-ctrl-port'], 'String');
            }
            if (data.hasOwnProperty('bastion-ctrl-proto')) {
                obj['bastion-ctrl-proto'] = ApiClient.convertToType(data['bastion-ctrl-proto'], 'String');
            }
            if (data.hasOwnProperty('bastion-ctrl-subdomain')) {
                obj['bastion-ctrl-subdomain'] = ApiClient.convertToType(data['bastion-ctrl-subdomain'], 'String');
            }
            if (data.hasOwnProperty('cert-issuer-name')) {
                obj['cert-issuer-name'] = ApiClient.convertToType(data['cert-issuer-name'], 'String');
            }
            if (data.hasOwnProperty('identity-file')) {
                obj['identity-file'] = ApiClient.convertToType(data['identity-file'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('ssh-extra-args')) {
                obj['ssh-extra-args'] = ApiClient.convertToType(data['ssh-extra-args'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('via-bastion')) {
                obj['via-bastion'] = ApiClient.convertToType(data['via-bastion'], 'String');
            }
        }
        return obj;
    }


}

/**
 * used to override .akeyless-connect.rc in tests
 * @member {String} RcFileOverride
 */
Connect.prototype['RcFileOverride'] = undefined;

/**
 * The Bastion API path
 * @member {String} bastion-ctrl-path
 */
Connect.prototype['bastion-ctrl-path'] = undefined;

/**
 * The Bastion API Port
 * @member {String} bastion-ctrl-port
 * @default '9900'
 */
Connect.prototype['bastion-ctrl-port'] = '9900';

/**
 * The Bastion API protocol
 * @member {String} bastion-ctrl-proto
 * @default 'http'
 */
Connect.prototype['bastion-ctrl-proto'] = 'http';

/**
 * The Bastion API prefix
 * @member {String} bastion-ctrl-subdomain
 */
Connect.prototype['bastion-ctrl-subdomain'] = undefined;

/**
 * The Akeyless certificate issuer name
 * @member {String} cert-issuer-name
 */
Connect.prototype['cert-issuer-name'] = undefined;

/**
 * The file from which the identity (private key) for public key authentication is read
 * @member {String} identity-file
 */
Connect.prototype['identity-file'] = undefined;

/**
 * The Secret name (for database and AWS producers - producer name)
 * @member {String} name
 */
Connect.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
Connect.prototype['password'] = undefined;

/**
 * The Use to add offical SSH arguments (except -i)
 * @member {String} ssh-extra-args
 */
Connect.prototype['ssh-extra-args'] = undefined;

/**
 * The target
 * @member {String} target
 */
Connect.prototype['target'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
Connect.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
Connect.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
Connect.prototype['username'] = undefined;

/**
 * The jump box server
 * @member {String} via-bastion
 */
Connect.prototype['via-bastion'] = undefined;






export default Connect;

