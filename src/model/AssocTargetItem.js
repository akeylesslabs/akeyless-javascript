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
 * The AssocTargetItem model module.
 * @module model/AssocTargetItem
 * @version 3.3.17
 */
class AssocTargetItem {
    /**
     * Constructs a new <code>AssocTargetItem</code>.
     * assocTargetItem is a command that creates an association between target and item.
     * @alias module:model/AssocTargetItem
     * @param name {String} The item to associate
     * @param targetName {String} The target to associate
     */
    constructor(name, targetName) { 
        
        AssocTargetItem.initialize(this, name, targetName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, targetName) { 
        obj['name'] = name;
        obj['target-name'] = targetName;
    }

    /**
     * Constructs a <code>AssocTargetItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssocTargetItem} obj Optional instance to populate.
     * @return {module:model/AssocTargetItem} The populated <code>AssocTargetItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssocTargetItem();

            if (data.hasOwnProperty('disable-previous-key-version')) {
                obj['disable-previous-key-version'] = ApiClient.convertToType(data['disable-previous-key-version'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key-operations')) {
                obj['key-operations'] = ApiClient.convertToType(data['key-operations'], ['String']);
            }
            if (data.hasOwnProperty('keyring-name')) {
                obj['keyring-name'] = ApiClient.convertToType(data['keyring-name'], 'String');
            }
            if (data.hasOwnProperty('kms-algorithm')) {
                obj['kms-algorithm'] = ApiClient.convertToType(data['kms-algorithm'], 'String');
            }
            if (data.hasOwnProperty('location-id')) {
                obj['location-id'] = ApiClient.convertToType(data['location-id'], 'String');
            }
            if (data.hasOwnProperty('multi-region')) {
                obj['multi-region'] = ApiClient.convertToType(data['multi-region'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('project-id')) {
                obj['project-id'] = ApiClient.convertToType(data['project-id'], 'String');
            }
            if (data.hasOwnProperty('purpose')) {
                obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
            }
            if (data.hasOwnProperty('regions')) {
                obj['regions'] = ApiClient.convertToType(data['regions'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('tenant-secret-type')) {
                obj['tenant-secret-type'] = ApiClient.convertToType(data['tenant-secret-type'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('vault-name')) {
                obj['vault-name'] = ApiClient.convertToType(data['vault-name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Automatically disable previous key version (required for azure targets)
 * @member {Boolean} disable-previous-key-version
 * @default false
 */
AssocTargetItem.prototype['disable-previous-key-version'] = false;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AssocTargetItem.prototype['json'] = false;

/**
 * A list of allowed operations for the key (required for azure targets)
 * @member {Array.<String>} key-operations
 */
AssocTargetItem.prototype['key-operations'] = undefined;

/**
 * Keyring name of the GCP KMS (required for gcp targets)
 * @member {String} keyring-name
 */
AssocTargetItem.prototype['keyring-name'] = undefined;

/**
 * Algorithm of the key in GCP KMS (required for gcp targets)
 * @member {String} kms-algorithm
 */
AssocTargetItem.prototype['kms-algorithm'] = undefined;

/**
 * Location id of the GCP KMS (required for gcp targets)
 * @member {String} location-id
 */
AssocTargetItem.prototype['location-id'] = undefined;

/**
 * Set to 'true' to create a multi-region managed key. (Relevant only for Classic Key AWS targets)
 * @member {String} multi-region
 * @default 'false'
 */
AssocTargetItem.prototype['multi-region'] = 'false';

/**
 * The item to associate
 * @member {String} name
 */
AssocTargetItem.prototype['name'] = undefined;

/**
 * Project id of the GCP KMS (required for gcp targets)
 * @member {String} project-id
 */
AssocTargetItem.prototype['project-id'] = undefined;

/**
 * Purpose of the key in GCP KMS (required for gcp targets)
 * @member {String} purpose
 */
AssocTargetItem.prototype['purpose'] = undefined;

/**
 * The list of regions to create a copy of the key in (relevant for aws targets)
 * @member {Array.<String>} regions
 */
AssocTargetItem.prototype['regions'] = undefined;

/**
 * The target to associate
 * @member {String} target-name
 */
AssocTargetItem.prototype['target-name'] = undefined;

/**
 * The tenant secret type [Data/SearchIndex/Analytics] (required for salesforce targets)
 * @member {String} tenant-secret-type
 */
AssocTargetItem.prototype['tenant-secret-type'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AssocTargetItem.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AssocTargetItem.prototype['uid-token'] = undefined;

/**
 * Name of the vault used (required for azure targets)
 * @member {String} vault-name
 */
AssocTargetItem.prototype['vault-name'] = undefined;






export default AssocTargetItem;

