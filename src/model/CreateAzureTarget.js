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
 * The CreateAzureTarget model module.
 * @module model/CreateAzureTarget
 * @version 4.2.5
 */
class CreateAzureTarget {
    /**
     * Constructs a new <code>CreateAzureTarget</code>.
     * createAzureTarget is a command that creates a new target. [Deprecated: Use target-create-azure command]
     * @alias module:model/CreateAzureTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        CreateAzureTarget.initialize(this, name);
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
     * Constructs a <code>CreateAzureTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAzureTarget} obj Optional instance to populate.
     * @return {module:model/CreateAzureTarget} The populated <code>CreateAzureTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAzureTarget();

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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
CreateAzureTarget.prototype['client-id'] = undefined;

/**
 * @member {String} client-secret
 */
CreateAzureTarget.prototype['client-secret'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
CreateAzureTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateAzureTarget.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAzureTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateAzureTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
CreateAzureTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateAzureTarget.prototype['name'] = undefined;

/**
 * The Resource Group name in your Azure subscription
 * @member {String} resource-group-name
 */
CreateAzureTarget.prototype['resource-group-name'] = undefined;

/**
 * The name of the relevant Resource
 * @member {String} resource-name
 */
CreateAzureTarget.prototype['resource-name'] = undefined;

/**
 * Azure Subscription Id
 * @member {String} subscription-id
 */
CreateAzureTarget.prototype['subscription-id'] = undefined;

/**
 * @member {String} tenant-id
 */
CreateAzureTarget.prototype['tenant-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAzureTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAzureTarget.prototype['uid-token'] = undefined;

/**
 * @member {Boolean} use-gw-cloud-identity
 */
CreateAzureTarget.prototype['use-gw-cloud-identity'] = undefined;






export default CreateAzureTarget;

