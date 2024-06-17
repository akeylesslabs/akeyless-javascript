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
 * The UpdateAzureTarget model module.
 * @module model/UpdateAzureTarget
 * @version 4.1.0
 */
class UpdateAzureTarget {
    /**
     * Constructs a new <code>UpdateAzureTarget</code>.
     * @alias module:model/UpdateAzureTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateAzureTarget.initialize(this, name);
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
     * Constructs a <code>UpdateAzureTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAzureTarget} obj Optional instance to populate.
     * @return {module:model/UpdateAzureTarget} The populated <code>UpdateAzureTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAzureTarget();

            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('client-secret')) {
                obj['client-secret'] = ApiClient.convertToType(data['client-secret'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('resource-group-name')) {
                obj['resource-group-name'] = ApiClient.convertToType(data['resource-group-name'], 'String');
            }
            if (data.hasOwnProperty('resource-name')) {
                obj['resource-name'] = ApiClient.convertToType(data['resource-name'], 'String');
            }
            if (data.hasOwnProperty('subscription-id')) {
                obj['subscription-id'] = ApiClient.convertToType(data['subscription-id'], 'String');
            }
            if (data.hasOwnProperty('tenant-id')) {
                obj['tenant-id'] = ApiClient.convertToType(data['tenant-id'], 'String');
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
            if (data.hasOwnProperty('use-gw-cloud-identity')) {
                obj['use-gw-cloud-identity'] = ApiClient.convertToType(data['use-gw-cloud-identity'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} client-id
 */
UpdateAzureTarget.prototype['client-id'] = undefined;

/**
 * @member {String} client-secret
 */
UpdateAzureTarget.prototype['client-secret'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateAzureTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateAzureTarget.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateAzureTarget.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateAzureTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateAzureTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
UpdateAzureTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateAzureTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateAzureTarget.prototype['new-name'] = undefined;

/**
 * The Resource Group name in your Azure subscription
 * @member {String} resource-group-name
 */
UpdateAzureTarget.prototype['resource-group-name'] = undefined;

/**
 * The name of the relevant Resource
 * @member {String} resource-name
 */
UpdateAzureTarget.prototype['resource-name'] = undefined;

/**
 * Azure Subscription Id
 * @member {String} subscription-id
 */
UpdateAzureTarget.prototype['subscription-id'] = undefined;

/**
 * @member {String} tenant-id
 */
UpdateAzureTarget.prototype['tenant-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAzureTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAzureTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateAzureTarget.prototype['update-version'] = undefined;

/**
 * @member {Boolean} use-gw-cloud-identity
 */
UpdateAzureTarget.prototype['use-gw-cloud-identity'] = undefined;






export default UpdateAzureTarget;

