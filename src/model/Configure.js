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
 * The Configure model module.
 * @module model/Configure
 * @version 5.0.1
 */
class Configure {
    /**
     * Constructs a new <code>Configure</code>.
     * @alias module:model/Configure
     */
    constructor() { 
        
        Configure.initialize(this);
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
     * Constructs a <code>Configure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Configure} obj Optional instance to populate.
     * @return {module:model/Configure} The populated <code>Configure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Configure();

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
            if (data.hasOwnProperty('azure-ad-object-id')) {
                obj['azure-ad-object-id'] = ApiClient.convertToType(data['azure-ad-object-id'], 'String');
            }
            if (data.hasOwnProperty('cert-data')) {
                obj['cert-data'] = ApiClient.convertToType(data['cert-data'], 'String');
            }
            if (data.hasOwnProperty('cert-issuer-name')) {
                obj['cert-issuer-name'] = ApiClient.convertToType(data['cert-issuer-name'], 'String');
            }
            if (data.hasOwnProperty('cert-username')) {
                obj['cert-username'] = ApiClient.convertToType(data['cert-username'], 'String');
            }
            if (data.hasOwnProperty('default-location-prefix')) {
                obj['default-location-prefix'] = ApiClient.convertToType(data['default-location-prefix'], 'String');
            }
            if (data.hasOwnProperty('disable-pafxfast')) {
                obj['disable-pafxfast'] = ApiClient.convertToType(data['disable-pafxfast'], 'String');
            }
            if (data.hasOwnProperty('gateway-spn')) {
                obj['gateway-spn'] = ApiClient.convertToType(data['gateway-spn'], 'String');
            }
            if (data.hasOwnProperty('gcp-audience')) {
                obj['gcp-audience'] = ApiClient.convertToType(data['gcp-audience'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('k8s-auth-config-name')) {
                obj['k8s-auth-config-name'] = ApiClient.convertToType(data['k8s-auth-config-name'], 'String');
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
            if (data.hasOwnProperty('legacy-signing-alg-name')) {
                obj['legacy-signing-alg-name'] = ApiClient.convertToType(data['legacy-signing-alg-name'], 'Boolean');
            }
            if (data.hasOwnProperty('oci-auth-type')) {
                obj['oci-auth-type'] = ApiClient.convertToType(data['oci-auth-type'], 'String');
            }
            if (data.hasOwnProperty('oci-group-ocid')) {
                obj['oci-group-ocid'] = ApiClient.convertToType(data['oci-group-ocid'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Configure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Configure</code>.
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
        if (data['azure-ad-object-id'] && !(typeof data['azure-ad-object-id'] === 'string' || data['azure-ad-object-id'] instanceof String)) {
            throw new Error("Expected the field `azure-ad-object-id` to be a primitive type in the JSON string but got " + data['azure-ad-object-id']);
        }
        // ensure the json data is a string
        if (data['cert-data'] && !(typeof data['cert-data'] === 'string' || data['cert-data'] instanceof String)) {
            throw new Error("Expected the field `cert-data` to be a primitive type in the JSON string but got " + data['cert-data']);
        }
        // ensure the json data is a string
        if (data['cert-issuer-name'] && !(typeof data['cert-issuer-name'] === 'string' || data['cert-issuer-name'] instanceof String)) {
            throw new Error("Expected the field `cert-issuer-name` to be a primitive type in the JSON string but got " + data['cert-issuer-name']);
        }
        // ensure the json data is a string
        if (data['cert-username'] && !(typeof data['cert-username'] === 'string' || data['cert-username'] instanceof String)) {
            throw new Error("Expected the field `cert-username` to be a primitive type in the JSON string but got " + data['cert-username']);
        }
        // ensure the json data is a string
        if (data['default-location-prefix'] && !(typeof data['default-location-prefix'] === 'string' || data['default-location-prefix'] instanceof String)) {
            throw new Error("Expected the field `default-location-prefix` to be a primitive type in the JSON string but got " + data['default-location-prefix']);
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
        if (data['gcp-audience'] && !(typeof data['gcp-audience'] === 'string' || data['gcp-audience'] instanceof String)) {
            throw new Error("Expected the field `gcp-audience` to be a primitive type in the JSON string but got " + data['gcp-audience']);
        }
        // ensure the json data is a string
        if (data['k8s-auth-config-name'] && !(typeof data['k8s-auth-config-name'] === 'string' || data['k8s-auth-config-name'] instanceof String)) {
            throw new Error("Expected the field `k8s-auth-config-name` to be a primitive type in the JSON string but got " + data['k8s-auth-config-name']);
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
        if (data['oci-auth-type'] && !(typeof data['oci-auth-type'] === 'string' || data['oci-auth-type'] instanceof String)) {
            throw new Error("Expected the field `oci-auth-type` to be a primitive type in the JSON string but got " + data['oci-auth-type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['oci-group-ocid'])) {
            throw new Error("Expected the field `oci-group-ocid` to be an array in the JSON data but got " + data['oci-group-ocid']);
        }

        return true;
    }


}



/**
 * Access ID
 * @member {String} access-id
 */
Configure.prototype['access-id'] = undefined;

/**
 * Access Key
 * @member {String} access-key
 */
Configure.prototype['access-key'] = undefined;

/**
 * Access Type (access_key/password/azure_ad/saml/oidc/aws_iam/gcp/k8s/cert)
 * @member {String} access-type
 * @default 'access_key'
 */
Configure.prototype['access-type'] = 'access_key';

/**
 * Account id (relevant only for access-type=password where the email address is associated with more than one account)
 * @member {String} account-id
 */
Configure.prototype['account-id'] = undefined;

/**
 * Email (relevant only for access-type=password)
 * @member {String} admin-email
 */
Configure.prototype['admin-email'] = undefined;

/**
 * Password (relevant only for access-type=password)
 * @member {String} admin-password
 */
Configure.prototype['admin-password'] = undefined;

/**
 * Azure Active Directory ObjectId (relevant only for access-type=azure_ad)
 * @member {String} azure-ad-object-id
 */
Configure.prototype['azure-ad-object-id'] = undefined;

/**
 * Certificate data encoded in base64. Used if file was not provided. (relevant only for access-type=cert in Curl Context)
 * @member {String} cert-data
 */
Configure.prototype['cert-data'] = undefined;

/**
 * Certificate Issuer Name
 * @member {String} cert-issuer-name
 */
Configure.prototype['cert-issuer-name'] = undefined;

/**
 * The username to sign in the SSH certificate (use a comma-separated list for more than one username)
 * @member {String} cert-username
 */
Configure.prototype['cert-username'] = undefined;

/**
 * Default path prefix for name of items, targets and auth methods
 * @member {String} default-location-prefix
 */
Configure.prototype['default-location-prefix'] = undefined;

/**
 * Disable the FAST negotiation in the Kerberos authentication method
 * @member {String} disable-pafxfast
 */
Configure.prototype['disable-pafxfast'] = undefined;

/**
 * The service principal name of the gateway as registered in LDAP (i.e., HTTP/gateway)
 * @member {String} gateway-spn
 */
Configure.prototype['gateway-spn'] = undefined;

/**
 * GCP JWT audience
 * @member {String} gcp-audience
 * @default 'akeyless.io'
 */
Configure.prototype['gcp-audience'] = 'akeyless.io';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
Configure.prototype['json'] = false;

/**
 * The K8S Auth config name (relevant only for access-type=k8s)
 * @member {String} k8s-auth-config-name
 */
Configure.prototype['k8s-auth-config-name'] = undefined;

/**
 * KerberosToken represents a Kerberos token generated for the gateway SPN (Service Principal Name).
 * @member {String} kerberos-token
 */
Configure.prototype['kerberos-token'] = undefined;

/**
 * TThe username for the entry within the keytab to authenticate via Kerberos
 * @member {String} kerberos-username
 */
Configure.prototype['kerberos-username'] = undefined;

/**
 * Private key data encoded in base64. Used if file was not provided.(relevant only for access-type=cert in Curl Context)
 * @member {String} key-data
 */
Configure.prototype['key-data'] = undefined;

/**
 * Base64-encoded content of a valid keytab file, containing the service account's entry.
 * @member {String} keytab-data
 */
Configure.prototype['keytab-data'] = undefined;

/**
 * Base64-encoded content of a valid krb5.conf file, specifying the settings and parameters required for Kerberos authentication.
 * @member {String} krb5-conf-data
 */
Configure.prototype['krb5-conf-data'] = undefined;

/**
 * Set this option to output legacy ('ssh-rsa-cert-v01@openssh.com') signing algorithm name in the certificate.
 * @member {Boolean} legacy-signing-alg-name
 */
Configure.prototype['legacy-signing-alg-name'] = undefined;

/**
 * The type of the OCI configuration to use [instance/apikey/resource] (relevant only for access-type=oci)
 * @member {String} oci-auth-type
 * @default 'apikey'
 */
Configure.prototype['oci-auth-type'] = 'apikey';

/**
 * A list of Oracle Cloud IDs groups (relevant only for access-type=oci)
 * @member {Array.<String>} oci-group-ocid
 */
Configure.prototype['oci-group-ocid'] = undefined;






export default Configure;

