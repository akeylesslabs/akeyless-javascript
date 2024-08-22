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
 * The TargetCreateAzure model module.
 * @module model/TargetCreateAzure
 * @version 4.2.3
 */
class TargetCreateAzure {
    /**
     * Constructs a new <code>TargetCreateAzure</code>.
     * @alias module:model/TargetCreateAzure
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetCreateAzure.initialize(this, name);
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
     * Constructs a <code>TargetCreateAzure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateAzure} obj Optional instance to populate.
     * @return {module:model/TargetCreateAzure} The populated <code>TargetCreateAzure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateAzure();

            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('client-secret')) {
                obj['client-secret'] = ApiClient.convertToType(data['client-secret'], 'String');
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
TargetCreateAzure.prototype['client-id'] = undefined;

/**
 * @member {String} client-secret
 */
TargetCreateAzure.prototype['client-secret'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetCreateAzure.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateAzure.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateAzure.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateAzure.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateAzure.prototype['name'] = undefined;

/**
 * The Resource Group name in your Azure subscription
 * @member {String} resource-group-name
 */
TargetCreateAzure.prototype['resource-group-name'] = undefined;

/**
 * The name of the relevant Resource
 * @member {String} resource-name
 */
TargetCreateAzure.prototype['resource-name'] = undefined;

/**
 * Azure Subscription Id
 * @member {String} subscription-id
 */
TargetCreateAzure.prototype['subscription-id'] = undefined;

/**
 * @member {String} tenant-id
 */
TargetCreateAzure.prototype['tenant-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateAzure.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateAzure.prototype['uid-token'] = undefined;

/**
 * @member {Boolean} use-gw-cloud-identity
 */
TargetCreateAzure.prototype['use-gw-cloud-identity'] = undefined;






export default TargetCreateAzure;

