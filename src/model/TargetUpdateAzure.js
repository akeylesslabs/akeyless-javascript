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
 * The TargetUpdateAzure model module.
 * @module model/TargetUpdateAzure
 * @version 5.0.1
 */
class TargetUpdateAzure {
    /**
     * Constructs a new <code>TargetUpdateAzure</code>.
     * @alias module:model/TargetUpdateAzure
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetUpdateAzure.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['connection-type'] = 'credentials';
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TargetUpdateAzure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetUpdateAzure} obj Optional instance to populate.
     * @return {module:model/TargetUpdateAzure} The populated <code>TargetUpdateAzure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetUpdateAzure();

            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('client-secret')) {
                obj['client-secret'] = ApiClient.convertToType(data['client-secret'], 'String');
            }
            if (data.hasOwnProperty('connection-type')) {
                obj['connection-type'] = ApiClient.convertToType(data['connection-type'], 'String');
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
            if (data.hasOwnProperty('use-gw-cloud-identity')) {
                obj['use-gw-cloud-identity'] = ApiClient.convertToType(data['use-gw-cloud-identity'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TargetUpdateAzure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetUpdateAzure</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TargetUpdateAzure.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['client-id'] && !(typeof data['client-id'] === 'string' || data['client-id'] instanceof String)) {
            throw new Error("Expected the field `client-id` to be a primitive type in the JSON string but got " + data['client-id']);
        }
        // ensure the json data is a string
        if (data['client-secret'] && !(typeof data['client-secret'] === 'string' || data['client-secret'] instanceof String)) {
            throw new Error("Expected the field `client-secret` to be a primitive type in the JSON string but got " + data['client-secret']);
        }
        // ensure the json data is a string
        if (data['connection-type'] && !(typeof data['connection-type'] === 'string' || data['connection-type'] instanceof String)) {
            throw new Error("Expected the field `connection-type` to be a primitive type in the JSON string but got " + data['connection-type']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['keep-prev-version'] && !(typeof data['keep-prev-version'] === 'string' || data['keep-prev-version'] instanceof String)) {
            throw new Error("Expected the field `keep-prev-version` to be a primitive type in the JSON string but got " + data['keep-prev-version']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['resource-group-name'] && !(typeof data['resource-group-name'] === 'string' || data['resource-group-name'] instanceof String)) {
            throw new Error("Expected the field `resource-group-name` to be a primitive type in the JSON string but got " + data['resource-group-name']);
        }
        // ensure the json data is a string
        if (data['resource-name'] && !(typeof data['resource-name'] === 'string' || data['resource-name'] instanceof String)) {
            throw new Error("Expected the field `resource-name` to be a primitive type in the JSON string but got " + data['resource-name']);
        }
        // ensure the json data is a string
        if (data['subscription-id'] && !(typeof data['subscription-id'] === 'string' || data['subscription-id'] instanceof String)) {
            throw new Error("Expected the field `subscription-id` to be a primitive type in the JSON string but got " + data['subscription-id']);
        }
        // ensure the json data is a string
        if (data['tenant-id'] && !(typeof data['tenant-id'] === 'string' || data['tenant-id'] instanceof String)) {
            throw new Error("Expected the field `tenant-id` to be a primitive type in the JSON string but got " + data['tenant-id']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

TargetUpdateAzure.RequiredProperties = ["name"];

/**
 * Azure client/application id
 * @member {String} client-id
 */
TargetUpdateAzure.prototype['client-id'] = undefined;

/**
 * Azure client secret
 * @member {String} client-secret
 */
TargetUpdateAzure.prototype['client-secret'] = undefined;

/**
 * Type of connection [credentials/cloud-identity]
 * @member {String} connection-type
 * @default 'credentials'
 */
TargetUpdateAzure.prototype['connection-type'] = 'credentials';

/**
 * Description of the object
 * @member {String} description
 */
TargetUpdateAzure.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetUpdateAzure.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
TargetUpdateAzure.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetUpdateAzure.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetUpdateAzure.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetUpdateAzure.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
TargetUpdateAzure.prototype['new-name'] = undefined;

/**
 * The Resource Group name in your Azure subscription
 * @member {String} resource-group-name
 */
TargetUpdateAzure.prototype['resource-group-name'] = undefined;

/**
 * The name of the relevant Resource
 * @member {String} resource-name
 */
TargetUpdateAzure.prototype['resource-name'] = undefined;

/**
 * Azure Subscription Id
 * @member {String} subscription-id
 */
TargetUpdateAzure.prototype['subscription-id'] = undefined;

/**
 * Azure tenant id
 * @member {String} tenant-id
 */
TargetUpdateAzure.prototype['tenant-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetUpdateAzure.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetUpdateAzure.prototype['uid-token'] = undefined;

/**
 * Use the GW's Cloud IAM [Deprecated: Use connection-type=cloud-identity]
 * @member {Boolean} use-gw-cloud-identity
 */
TargetUpdateAzure.prototype['use-gw-cloud-identity'] = undefined;






export default TargetUpdateAzure;

