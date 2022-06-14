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
 * The UpdateSalesforceTarget model module.
 * @module model/UpdateSalesforceTarget
 * @version 2.16.8
 */
class UpdateSalesforceTarget {
    /**
     * Constructs a new <code>UpdateSalesforceTarget</code>.
     * @alias module:model/UpdateSalesforceTarget
     * @param clientId {String} Client ID of the oauth2 app to use for connecting to Salesforce
     * @param clientSecret {String} Client secret of the oauth2 app to use for connecting to Salesforce
     * @param email {String} The email of the user attached to the oauth2 app used for connecting to Salesforce
     * @param name {String} Target name
     * @param password {String} The password of the user attached to the oauth2 app used for connecting to Salesforce
     * @param securityToken {String} The security token of the user attached to the oauth2 app used for connecting to Salesforce
     * @param tenantUrl {String} Url of the Salesforce tenant
     */
    constructor(clientId, clientSecret, email, name, password, securityToken, tenantUrl) { 
        
        UpdateSalesforceTarget.initialize(this, clientId, clientSecret, email, name, password, securityToken, tenantUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientId, clientSecret, email, name, password, securityToken, tenantUrl) { 
        obj['client-id'] = clientId;
        obj['client-secret'] = clientSecret;
        obj['email'] = email;
        obj['name'] = name;
        obj['password'] = password;
        obj['security-token'] = securityToken;
        obj['tenant-url'] = tenantUrl;
    }

    /**
     * Constructs a <code>UpdateSalesforceTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSalesforceTarget} obj Optional instance to populate.
     * @return {module:model/UpdateSalesforceTarget} The populated <code>UpdateSalesforceTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSalesforceTarget();

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
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
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
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Base64 encoded PEM cert to use when uploading a new key to Salesforce
 * @member {String} ca-cert-data
 */
UpdateSalesforceTarget.prototype['ca-cert-data'] = undefined;

/**
 * name of the certificate in Salesforce tenant to use when uploading new key
 * @member {String} ca-cert-name
 */
UpdateSalesforceTarget.prototype['ca-cert-name'] = undefined;

/**
 * Client ID of the oauth2 app to use for connecting to Salesforce
 * @member {String} client-id
 */
UpdateSalesforceTarget.prototype['client-id'] = undefined;

/**
 * Client secret of the oauth2 app to use for connecting to Salesforce
 * @member {String} client-secret
 */
UpdateSalesforceTarget.prototype['client-secret'] = undefined;

/**
 * Comment about the target
 * @member {String} comment
 */
UpdateSalesforceTarget.prototype['comment'] = undefined;

/**
 * The email of the user attached to the oauth2 app used for connecting to Salesforce
 * @member {String} email
 */
UpdateSalesforceTarget.prototype['email'] = undefined;

/**
 * @member {String} keep-prev-version
 */
UpdateSalesforceTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateSalesforceTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateSalesforceTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateSalesforceTarget.prototype['new-name'] = undefined;

/**
 * The password of the user attached to the oauth2 app used for connecting to Salesforce
 * @member {String} password
 */
UpdateSalesforceTarget.prototype['password'] = undefined;

/**
 * The security token of the user attached to the oauth2 app used for connecting to Salesforce
 * @member {String} security-token
 */
UpdateSalesforceTarget.prototype['security-token'] = undefined;

/**
 * Url of the Salesforce tenant
 * @member {String} tenant-url
 */
UpdateSalesforceTarget.prototype['tenant-url'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateSalesforceTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateSalesforceTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateSalesforceTarget.prototype['update-version'] = undefined;






export default UpdateSalesforceTarget;

