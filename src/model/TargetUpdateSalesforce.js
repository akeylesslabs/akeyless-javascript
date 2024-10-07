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
 * The TargetUpdateSalesforce model module.
 * @module model/TargetUpdateSalesforce
 * @version 4.2.5
 */
class TargetUpdateSalesforce {
    /**
     * Constructs a new <code>TargetUpdateSalesforce</code>.
     * targetUpdateSalesforce is a command that updates an existing Salesforce target
     * @alias module:model/TargetUpdateSalesforce
     * @param authFlow {String} type of the auth flow ('jwt' / 'user-password')
     * @param clientId {String} Client ID of the oauth2 app to use for connecting to Salesforce
     * @param email {String} The email of the user attached to the oauth2 app used for connecting to Salesforce
     * @param name {String} Target name
     * @param tenantUrl {String} Url of the Salesforce tenant
     */
    constructor(authFlow, clientId, email, name, tenantUrl) { 
        
        TargetUpdateSalesforce.initialize(this, authFlow, clientId, email, name, tenantUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, authFlow, clientId, email, name, tenantUrl) { 
        obj['auth-flow'] = authFlow;
        obj['client-id'] = clientId;
        obj['email'] = email;
        obj['name'] = name;
        obj['tenant-url'] = tenantUrl;
    }

    /**
     * Constructs a <code>TargetUpdateSalesforce</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetUpdateSalesforce} obj Optional instance to populate.
     * @return {module:model/TargetUpdateSalesforce} The populated <code>TargetUpdateSalesforce</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetUpdateSalesforce();

            if (data.hasOwnProperty('app-private-key-data')) {
                obj['app-private-key-data'] = ApiClient.convertToType(data['app-private-key-data'], 'String');
            }
            if (data.hasOwnProperty('auth-flow')) {
                obj['auth-flow'] = ApiClient.convertToType(data['auth-flow'], 'String');
            }
            if (data.hasOwnProperty('ca-cert-data')) {
                obj['ca-cert-data'] = ApiClient.convertToType(data['ca-cert-data'], 'String');
            }
            if (data.hasOwnProperty('ca-cert-name')) {
                obj['ca-cert-name'] = ApiClient.convertToType(data['ca-cert-name'], 'String');
            }
            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('client-secret')) {
                obj['client-secret'] = ApiClient.convertToType(data['client-secret'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
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
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('security-token')) {
                obj['security-token'] = ApiClient.convertToType(data['security-token'], 'String');
            }
            if (data.hasOwnProperty('tenant-url')) {
                obj['tenant-url'] = ApiClient.convertToType(data['tenant-url'], 'String');
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
 * Base64 encoded PEM of the connected app private key (relevant for JWT auth only)
 * @member {String} app-private-key-data
 */
TargetUpdateSalesforce.prototype['app-private-key-data'] = undefined;

/**
 * type of the auth flow ('jwt' / 'user-password')
 * @member {String} auth-flow
 */
TargetUpdateSalesforce.prototype['auth-flow'] = undefined;

/**
 * Base64 encoded PEM cert to use when uploading a new key to Salesforce
 * @member {String} ca-cert-data
 */
TargetUpdateSalesforce.prototype['ca-cert-data'] = undefined;

/**
 * name of the certificate in Salesforce tenant to use when uploading new key
 * @member {String} ca-cert-name
 */
TargetUpdateSalesforce.prototype['ca-cert-name'] = undefined;

/**
 * Client ID of the oauth2 app to use for connecting to Salesforce
 * @member {String} client-id
 */
TargetUpdateSalesforce.prototype['client-id'] = undefined;

/**
 * Client secret of the oauth2 app to use for connecting to Salesforce (required for password flow)
 * @member {String} client-secret
 */
TargetUpdateSalesforce.prototype['client-secret'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetUpdateSalesforce.prototype['description'] = undefined;

/**
 * The email of the user attached to the oauth2 app used for connecting to Salesforce
 * @member {String} email
 */
TargetUpdateSalesforce.prototype['email'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetUpdateSalesforce.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
TargetUpdateSalesforce.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetUpdateSalesforce.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetUpdateSalesforce.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetUpdateSalesforce.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
TargetUpdateSalesforce.prototype['new-name'] = undefined;

/**
 * The password of the user attached to the oauth2 app used for connecting to Salesforce (required for user-password flow)
 * @member {String} password
 */
TargetUpdateSalesforce.prototype['password'] = undefined;

/**
 * The security token of the user attached to the oauth2 app used for connecting to Salesforce  (required for user-password flow)
 * @member {String} security-token
 */
TargetUpdateSalesforce.prototype['security-token'] = undefined;

/**
 * Url of the Salesforce tenant
 * @member {String} tenant-url
 */
TargetUpdateSalesforce.prototype['tenant-url'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetUpdateSalesforce.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetUpdateSalesforce.prototype['uid-token'] = undefined;






export default TargetUpdateSalesforce;

