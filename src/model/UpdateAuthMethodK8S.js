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
 * The UpdateAuthMethodK8S model module.
 * @module model/UpdateAuthMethodK8S
 * @version 2.5.20
 */
class UpdateAuthMethodK8S {
    /**
     * Constructs a new <code>UpdateAuthMethodK8S</code>.
     * updateAuthMethodK8S is a command that updates a new auth method that will be able to authenticate using K8S.
     * @alias module:model/UpdateAuthMethodK8S
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        UpdateAuthMethodK8S.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateAuthMethodK8S</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodK8S} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodK8S} The populated <code>UpdateAuthMethodK8S</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodK8S();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('bound-namespaces')) {
                obj['bound-namespaces'] = ApiClient.convertToType(data['bound-namespaces'], ['String']);
            }
            if (data.hasOwnProperty('bound-pod-names')) {
                obj['bound-pod-names'] = ApiClient.convertToType(data['bound-pod-names'], ['String']);
            }
            if (data.hasOwnProperty('bound-sa-names')) {
                obj['bound-sa-names'] = ApiClient.convertToType(data['bound-sa-names'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gen-key')) {
                obj['gen-key'] = ApiClient.convertToType(data['gen-key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('public-key')) {
                obj['public-key'] = ApiClient.convertToType(data['public-key'], 'String');
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
        }
        return obj;
    }


}

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
UpdateAuthMethodK8S.prototype['access-expires'] = 0;

/**
 * The audience in the Kubernetes JWT that the access is restricted to
 * @member {String} audience
 */
UpdateAuthMethodK8S.prototype['audience'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethodK8S.prototype['bound-ips'] = undefined;

/**
 * A list of namespaces that the access is restricted to
 * @member {Array.<String>} bound-namespaces
 */
UpdateAuthMethodK8S.prototype['bound-namespaces'] = undefined;

/**
 * A list of pod names that the access is restricted to
 * @member {Array.<String>} bound-pod-names
 */
UpdateAuthMethodK8S.prototype['bound-pod-names'] = undefined;

/**
 * A list of service account names that the access is restricted to
 * @member {Array.<String>} bound-sa-names
 */
UpdateAuthMethodK8S.prototype['bound-sa-names'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethodK8S.prototype['force-sub-claims'] = undefined;

/**
 * If this flag is set to true, there is no need to manually provide a public key for the Kubernetes Auth Method, and instead, a key pair, will be generated as part of the command and the private part of the key will be returned (the private key is required for the K8S Auth Config in the Akeyless Gateway)
 * @member {String} gen-key
 * @default 'true'
 */
UpdateAuthMethodK8S.prototype['gen-key'] = 'true';

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethodK8S.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethodK8S.prototype['new-name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateAuthMethodK8S.prototype['password'] = undefined;

/**
 * Base64-encoded public key text for K8S authentication method is required [RSA2048]
 * @member {String} public-key
 */
UpdateAuthMethodK8S.prototype['public-key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethodK8S.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethodK8S.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateAuthMethodK8S.prototype['username'] = undefined;






export default UpdateAuthMethodK8S;

