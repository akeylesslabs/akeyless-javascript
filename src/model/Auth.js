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
 * The Auth model module.
 * @module model/Auth
 * @version 3.3.8
 */
class Auth {
    /**
     * Constructs a new <code>Auth</code>.
     * @alias module:model/Auth
     */
    constructor() { 
        
        Auth.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Auth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Auth} obj Optional instance to populate.
     * @return {module:model/Auth} The populated <code>Auth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Auth();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('access-key')) {
                obj['access-key'] = ApiClient.convertToType(data['access-key'], 'String');
            }
            if (data.hasOwnProperty('access-type')) {
                obj['access-type'] = ApiClient.convertToType(data['access-type'], 'String');
            }
            if (data.hasOwnProperty('account-id')) {
                obj['account-id'] = ApiClient.convertToType(data['account-id'], 'String');
            }
            if (data.hasOwnProperty('admin-email')) {
                obj['admin-email'] = ApiClient.convertToType(data['admin-email'], 'String');
            }
            if (data.hasOwnProperty('admin-password')) {
                obj['admin-password'] = ApiClient.convertToType(data['admin-password'], 'String');
            }
            if (data.hasOwnProperty('cert-data')) {
                obj['cert-data'] = ApiClient.convertToType(data['cert-data'], 'String');
            }
            if (data.hasOwnProperty('cloud-id')) {
                obj['cloud-id'] = ApiClient.convertToType(data['cloud-id'], 'String');
            }
            if (data.hasOwnProperty('debug')) {
                obj['debug'] = ApiClient.convertToType(data['debug'], 'Boolean');
            }
            if (data.hasOwnProperty('gateway-url')) {
                obj['gateway-url'] = ApiClient.convertToType(data['gateway-url'], 'String');
            }
            if (data.hasOwnProperty('gcp-audience')) {
                obj['gcp-audience'] = ApiClient.convertToType(data['gcp-audience'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt')) {
                obj['jwt'] = ApiClient.convertToType(data['jwt'], 'String');
            }
            if (data.hasOwnProperty('k8s-auth-config-name')) {
                obj['k8s-auth-config-name'] = ApiClient.convertToType(data['k8s-auth-config-name'], 'String');
            }
            if (data.hasOwnProperty('k8s-service-account-token')) {
                obj['k8s-service-account-token'] = ApiClient.convertToType(data['k8s-service-account-token'], 'String');
            }
            if (data.hasOwnProperty('key-data')) {
                obj['key-data'] = ApiClient.convertToType(data['key-data'], 'String');
            }
            if (data.hasOwnProperty('ldap_password')) {
                obj['ldap_password'] = ApiClient.convertToType(data['ldap_password'], 'String');
            }
            if (data.hasOwnProperty('ldap_username')) {
                obj['ldap_username'] = ApiClient.convertToType(data['ldap_username'], 'String');
            }
            if (data.hasOwnProperty('uid_token')) {
                obj['uid_token'] = ApiClient.convertToType(data['uid_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access ID
 * @member {String} access-id
 */
Auth.prototype['access-id'] = undefined;

/**
 * Access key (relevant only for access-type=access_key)
 * @member {String} access-key
 */
Auth.prototype['access-key'] = undefined;

/**
 * Access Type (access_key/password/saml/ldap/k8s/azure_ad/oidc/aws_iam/universal_identity/jwt/gcp/cert)
 * @member {String} access-type
 * @default 'access_key'
 */
Auth.prototype['access-type'] = 'access_key';

/**
 * Account id (relevant only for access-type=password where the email address is associated with more than one account)
 * @member {String} account-id
 */
Auth.prototype['account-id'] = undefined;

/**
 * Email (relevant only for access-type=password)
 * @member {String} admin-email
 */
Auth.prototype['admin-email'] = undefined;

/**
 * Password (relevant only for access-type=password)
 * @member {String} admin-password
 */
Auth.prototype['admin-password'] = undefined;

/**
 * Certificate data encoded in base64. Used if file was not provided. (relevant only for access-type=cert)
 * @member {String} cert-data
 */
Auth.prototype['cert-data'] = undefined;

/**
 * The cloud identity (relevant only for access-type=azure_ad,aws_iam,gcp)
 * @member {String} cloud-id
 */
Auth.prototype['cloud-id'] = undefined;

/**
 * @member {Boolean} debug
 */
Auth.prototype['debug'] = undefined;

/**
 * Gateway URL for the K8S authenticated (relevant only for access-type=k8s)
 * @member {String} gateway-url
 */
Auth.prototype['gateway-url'] = undefined;

/**
 * GCP JWT audience
 * @member {String} gcp-audience
 * @default 'akeyless.io'
 */
Auth.prototype['gcp-audience'] = 'akeyless.io';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
Auth.prototype['json'] = false;

/**
 * The Json Web Token (relevant only for access-type=jwt/oidc)
 * @member {String} jwt
 */
Auth.prototype['jwt'] = undefined;

/**
 * The K8S Auth config name (relevant only for access-type=k8s)
 * @member {String} k8s-auth-config-name
 */
Auth.prototype['k8s-auth-config-name'] = undefined;

/**
 * The K8S service account token. (relevant only for access-type=k8s)
 * @member {String} k8s-service-account-token
 */
Auth.prototype['k8s-service-account-token'] = undefined;

/**
 * Private key data encoded in base64. Used if file was not provided.(relevant only for access-type=cert)
 * @member {String} key-data
 */
Auth.prototype['key-data'] = undefined;

/**
 * LDAP password (relevant only for access-type=ldap)
 * @member {String} ldap_password
 */
Auth.prototype['ldap_password'] = undefined;

/**
 * LDAP username (relevant only for access-type=ldap)
 * @member {String} ldap_username
 */
Auth.prototype['ldap_username'] = undefined;

/**
 * The universal_identity token (relevant only for access-type=universal_identity)
 * @member {String} uid_token
 */
Auth.prototype['uid_token'] = undefined;






export default Auth;

