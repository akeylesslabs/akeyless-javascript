/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
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
 * @version 5.0.3
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
        obj['access-type'] = 'access_key';
        obj['gcp-audience'] = 'akeyless.io';
        obj['json'] = false;
        obj['oci-auth-type'] = 'apikey';
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
            if (data.hasOwnProperty('disable-pafxfast')) {
                obj['disable-pafxfast'] = ApiClient.convertToType(data['disable-pafxfast'], 'String');
            }
            if (data.hasOwnProperty('gateway-spn')) {
                obj['gateway-spn'] = ApiClient.convertToType(data['gateway-spn'], 'String');
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
            if (data.hasOwnProperty('kerberos-token')) {
                obj['kerberos-token'] = ApiClient.convertToType(data['kerberos-token'], 'String');
            }
            if (data.hasOwnProperty('kerberos-username')) {
                obj['kerberos-username'] = ApiClient.convertToType(data['kerberos-username'], 'String');
            }
            if (data.hasOwnProperty('key-data')) {
                obj['key-data'] = ApiClient.convertToType(data['key-data'], 'String');
            }
            if (data.hasOwnProperty('keytab-data')) {
                obj['keytab-data'] = ApiClient.convertToType(data['keytab-data'], 'String');
            }
            if (data.hasOwnProperty('krb5-conf-data')) {
                obj['krb5-conf-data'] = ApiClient.convertToType(data['krb5-conf-data'], 'String');
            }
            if (data.hasOwnProperty('ldap-password')) {
                obj['ldap-password'] = ApiClient.convertToType(data['ldap-password'], 'String');
            }
            if (data.hasOwnProperty('oci-auth-type')) {
                obj['oci-auth-type'] = ApiClient.convertToType(data['oci-auth-type'], 'String');
            }
            if (data.hasOwnProperty('oci-group-ocid')) {
                obj['oci-group-ocid'] = ApiClient.convertToType(data['oci-group-ocid'], ['String']);
            }
            if (data.hasOwnProperty('otp')) {
                obj['otp'] = ApiClient.convertToType(data['otp'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('use-remote-browser')) {
                obj['use-remote-browser'] = ApiClient.convertToType(data['use-remote-browser'], 'Boolean');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Auth</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Auth</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access-id'] && !(typeof data['access-id'] === 'string' || data['access-id'] instanceof String)) {
            throw new Error("Expected the field `access-id` to be a primitive type in the JSON string but got " + data['access-id']);
        }
        // ensure the json data is a string
        if (data['access-key'] && !(typeof data['access-key'] === 'string' || data['access-key'] instanceof String)) {
            throw new Error("Expected the field `access-key` to be a primitive type in the JSON string but got " + data['access-key']);
        }
        // ensure the json data is a string
        if (data['access-type'] && !(typeof data['access-type'] === 'string' || data['access-type'] instanceof String)) {
            throw new Error("Expected the field `access-type` to be a primitive type in the JSON string but got " + data['access-type']);
        }
        // ensure the json data is a string
        if (data['account-id'] && !(typeof data['account-id'] === 'string' || data['account-id'] instanceof String)) {
            throw new Error("Expected the field `account-id` to be a primitive type in the JSON string but got " + data['account-id']);
        }
        // ensure the json data is a string
        if (data['admin-email'] && !(typeof data['admin-email'] === 'string' || data['admin-email'] instanceof String)) {
            throw new Error("Expected the field `admin-email` to be a primitive type in the JSON string but got " + data['admin-email']);
        }
        // ensure the json data is a string
        if (data['admin-password'] && !(typeof data['admin-password'] === 'string' || data['admin-password'] instanceof String)) {
            throw new Error("Expected the field `admin-password` to be a primitive type in the JSON string but got " + data['admin-password']);
        }
        // ensure the json data is a string
        if (data['cert-data'] && !(typeof data['cert-data'] === 'string' || data['cert-data'] instanceof String)) {
            throw new Error("Expected the field `cert-data` to be a primitive type in the JSON string but got " + data['cert-data']);
        }
        // ensure the json data is a string
        if (data['cloud-id'] && !(typeof data['cloud-id'] === 'string' || data['cloud-id'] instanceof String)) {
            throw new Error("Expected the field `cloud-id` to be a primitive type in the JSON string but got " + data['cloud-id']);
        }
        // ensure the json data is a string
        if (data['disable-pafxfast'] && !(typeof data['disable-pafxfast'] === 'string' || data['disable-pafxfast'] instanceof String)) {
            throw new Error("Expected the field `disable-pafxfast` to be a primitive type in the JSON string but got " + data['disable-pafxfast']);
        }
        // ensure the json data is a string
        if (data['gateway-spn'] && !(typeof data['gateway-spn'] === 'string' || data['gateway-spn'] instanceof String)) {
            throw new Error("Expected the field `gateway-spn` to be a primitive type in the JSON string but got " + data['gateway-spn']);
        }
        // ensure the json data is a string
        if (data['gateway-url'] && !(typeof data['gateway-url'] === 'string' || data['gateway-url'] instanceof String)) {
            throw new Error("Expected the field `gateway-url` to be a primitive type in the JSON string but got " + data['gateway-url']);
        }
        // ensure the json data is a string
        if (data['gcp-audience'] && !(typeof data['gcp-audience'] === 'string' || data['gcp-audience'] instanceof String)) {
            throw new Error("Expected the field `gcp-audience` to be a primitive type in the JSON string but got " + data['gcp-audience']);
        }
        // ensure the json data is a string
        if (data['jwt'] && !(typeof data['jwt'] === 'string' || data['jwt'] instanceof String)) {
            throw new Error("Expected the field `jwt` to be a primitive type in the JSON string but got " + data['jwt']);
        }
        // ensure the json data is a string
        if (data['k8s-auth-config-name'] && !(typeof data['k8s-auth-config-name'] === 'string' || data['k8s-auth-config-name'] instanceof String)) {
            throw new Error("Expected the field `k8s-auth-config-name` to be a primitive type in the JSON string but got " + data['k8s-auth-config-name']);
        }
        // ensure the json data is a string
        if (data['k8s-service-account-token'] && !(typeof data['k8s-service-account-token'] === 'string' || data['k8s-service-account-token'] instanceof String)) {
            throw new Error("Expected the field `k8s-service-account-token` to be a primitive type in the JSON string but got " + data['k8s-service-account-token']);
        }
        // ensure the json data is a string
        if (data['kerberos-token'] && !(typeof data['kerberos-token'] === 'string' || data['kerberos-token'] instanceof String)) {
            throw new Error("Expected the field `kerberos-token` to be a primitive type in the JSON string but got " + data['kerberos-token']);
        }
        // ensure the json data is a string
        if (data['kerberos-username'] && !(typeof data['kerberos-username'] === 'string' || data['kerberos-username'] instanceof String)) {
            throw new Error("Expected the field `kerberos-username` to be a primitive type in the JSON string but got " + data['kerberos-username']);
        }
        // ensure the json data is a string
        if (data['key-data'] && !(typeof data['key-data'] === 'string' || data['key-data'] instanceof String)) {
            throw new Error("Expected the field `key-data` to be a primitive type in the JSON string but got " + data['key-data']);
        }
        // ensure the json data is a string
        if (data['keytab-data'] && !(typeof data['keytab-data'] === 'string' || data['keytab-data'] instanceof String)) {
            throw new Error("Expected the field `keytab-data` to be a primitive type in the JSON string but got " + data['keytab-data']);
        }
        // ensure the json data is a string
        if (data['krb5-conf-data'] && !(typeof data['krb5-conf-data'] === 'string' || data['krb5-conf-data'] instanceof String)) {
            throw new Error("Expected the field `krb5-conf-data` to be a primitive type in the JSON string but got " + data['krb5-conf-data']);
        }
        // ensure the json data is a string
        if (data['ldap-password'] && !(typeof data['ldap-password'] === 'string' || data['ldap-password'] instanceof String)) {
            throw new Error("Expected the field `ldap-password` to be a primitive type in the JSON string but got " + data['ldap-password']);
        }
        // ensure the json data is a string
        if (data['oci-auth-type'] && !(typeof data['oci-auth-type'] === 'string' || data['oci-auth-type'] instanceof String)) {
            throw new Error("Expected the field `oci-auth-type` to be a primitive type in the JSON string but got " + data['oci-auth-type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['oci-group-ocid'])) {
            throw new Error("Expected the field `oci-group-ocid` to be an array in the JSON data but got " + data['oci-group-ocid']);
        }
        // ensure the json data is a string
        if (data['otp'] && !(typeof data['otp'] === 'string' || data['otp'] instanceof String)) {
            throw new Error("Expected the field `otp` to be a primitive type in the JSON string but got " + data['otp']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }

        return true;
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
 * Access Type (access_key/password/saml/ldap/k8s/azure_ad/oidc/aws_iam/universal_identity/jwt/gcp/cert/oci/kerberos)
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
 * Disable the FAST negotiation in the Kerberos authentication method
 * @member {String} disable-pafxfast
 */
Auth.prototype['disable-pafxfast'] = undefined;

/**
 * The service principal name of the gateway as registered in LDAP (i.e., HTTP/gateway)
 * @member {String} gateway-spn
 */
Auth.prototype['gateway-spn'] = undefined;

/**
 * Gateway URL relevant only for access-type=k8s/oauth2/saml/oidc
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
 * KerberosToken represents a Kerberos token generated for the gateway SPN (Service Principal Name).
 * @member {String} kerberos-token
 */
Auth.prototype['kerberos-token'] = undefined;

/**
 * TThe username for the entry within the keytab to authenticate via Kerberos
 * @member {String} kerberos-username
 */
Auth.prototype['kerberos-username'] = undefined;

/**
 * Private key data encoded in base64. Used if file was not provided.(relevant only for access-type=cert)
 * @member {String} key-data
 */
Auth.prototype['key-data'] = undefined;

/**
 * Base64-encoded content of a valid keytab file, containing the service account's entry.
 * @member {String} keytab-data
 */
Auth.prototype['keytab-data'] = undefined;

/**
 * Base64-encoded content of a valid krb5.conf file, specifying the settings and parameters required for Kerberos authentication.
 * @member {String} krb5-conf-data
 */
Auth.prototype['krb5-conf-data'] = undefined;

/**
 * LDAP password (relevant only for access-type=ldap)
 * @member {String} ldap-password
 */
Auth.prototype['ldap-password'] = undefined;

/**
 * The type of the OCI configuration to use [instance/apikey/resource] (relevant only for access-type=oci)
 * @member {String} oci-auth-type
 * @default 'apikey'
 */
Auth.prototype['oci-auth-type'] = 'apikey';

/**
 * A list of Oracle Cloud IDs groups (relevant only for access-type=oci)
 * @member {Array.<String>} oci-group-ocid
 */
Auth.prototype['oci-group-ocid'] = undefined;

/**
 * @member {String} otp
 */
Auth.prototype['otp'] = undefined;

/**
 * The universal_identity token (relevant only for access-type=universal_identity)
 * @member {String} uid-token
 */
Auth.prototype['uid-token'] = undefined;

/**
 * Returns a link to complete the authentication remotely (relevant only for access-type=saml/oidc)
 * @member {Boolean} use-remote-browser
 */
Auth.prototype['use-remote-browser'] = undefined;

/**
 * LDAP username (relevant only for access-type=ldap)
 * @member {String} username
 */
Auth.prototype['username'] = undefined;






export default Auth;

