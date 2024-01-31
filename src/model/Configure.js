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
 * @version 3.6.0
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
            if (data.hasOwnProperty('azure_ad_object_id')) {
                obj['azure_ad_object_id'] = ApiClient.convertToType(data['azure_ad_object_id'], 'String');
            }
            if (data.hasOwnProperty('cert-data')) {
                obj['cert-data'] = ApiClient.convertToType(data['cert-data'], 'String');
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
            if (data.hasOwnProperty('key-data')) {
                obj['key-data'] = ApiClient.convertToType(data['key-data'], 'String');
            }
        }
        return obj;
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
 * @member {String} azure_ad_object_id
 */
Configure.prototype['azure_ad_object_id'] = undefined;

/**
 * Certificate data encoded in base64. Used if file was not provided. (relevant only for access-type=cert in Curl Context)
 * @member {String} cert-data
 */
Configure.prototype['cert-data'] = undefined;

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
 * Private key data encoded in base64. Used if file was not provided.(relevant only for access-type=cert in Curl Context)
 * @member {String} key-data
 */
Configure.prototype['key-data'] = undefined;






export default Configure;

