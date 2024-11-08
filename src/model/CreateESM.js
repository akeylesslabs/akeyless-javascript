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
 * The CreateESM model module.
 * @module model/CreateESM
 * @version 4.3.0
 */
class CreateESM {
    /**
     * Constructs a new <code>CreateESM</code>.
     * CreateESM is a command that creates an External Secrets Manager. [Deprecated: Use command create-usc]
     * @alias module:model/CreateESM
     * @param name {String} External Secrets Manager name
     * @param targetToAssociate {String} Target External Secrets Manager to connect
     */
    constructor(name, targetToAssociate) { 
        
        CreateESM.initialize(this, name, targetToAssociate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, targetToAssociate) { 
        obj['name'] = name;
        obj['target-to-associate'] = targetToAssociate;
    }

    /**
     * Constructs a <code>CreateESM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateESM} obj Optional instance to populate.
     * @return {module:model/CreateESM} The populated <code>CreateESM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateESM();

            if (data.hasOwnProperty('azure-kv-name')) {
                obj['azure-kv-name'] = ApiClient.convertToType(data['azure-kv-name'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('k8s-namespace')) {
                obj['k8s-namespace'] = ApiClient.convertToType(data['k8s-namespace'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-to-associate')) {
                obj['target-to-associate'] = ApiClient.convertToType(data['target-to-associate'], 'String');
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
 * Azure Key Vault name (Relevant only for Azure targets)
 * @member {String} azure-kv-name
 */
CreateESM.prototype['azure-kv-name'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreateESM.prototype['delete_protection'] = undefined;

/**
 * Description of the External Secrets Manager
 * @member {String} description
 */
CreateESM.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateESM.prototype['json'] = false;

/**
 * K8s namespace (Relevant to Kubernetes targets)
 * @member {String} k8s-namespace
 */
CreateESM.prototype['k8s-namespace'] = undefined;

/**
 * External Secrets Manager name
 * @member {String} name
 */
CreateESM.prototype['name'] = undefined;

/**
 * List of the tags attached to this External Secrets Manager
 * @member {Array.<String>} tags
 */
CreateESM.prototype['tags'] = undefined;

/**
 * Target External Secrets Manager to connect
 * @member {String} target-to-associate
 */
CreateESM.prototype['target-to-associate'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateESM.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateESM.prototype['uid-token'] = undefined;






export default CreateESM;

