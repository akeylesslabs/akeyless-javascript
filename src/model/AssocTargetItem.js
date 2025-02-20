/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
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
 * @version 5.0.0
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
        obj['disable-previous-key-version'] = false;
        obj['json'] = false;
        obj['multi-region'] = 'false';
        obj['name'] = name;
        obj['protection-level'] = 'software';
        obj['sra-association'] = false;
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

            if (data.hasOwnProperty('certificate-path')) {
                obj['certificate-path'] = ApiClient.convertToType(data['certificate-path'], 'String');
            }
            if (data.hasOwnProperty('chain-path')) {
                obj['chain-path'] = ApiClient.convertToType(data['chain-path'], 'String');
            }
            if (data.hasOwnProperty('disable-previous-key-version')) {
                obj['disable-previous-key-version'] = ApiClient.convertToType(data['disable-previous-key-version'], 'Boolean');
            }
            if (data.hasOwnProperty('external-key-name')) {
                obj['external-key-name'] = ApiClient.convertToType(data['external-key-name'], 'String');
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
            if (data.hasOwnProperty('post-provision-command')) {
                obj['post-provision-command'] = ApiClient.convertToType(data['post-provision-command'], 'String');
            }
            if (data.hasOwnProperty('private-key-path')) {
                obj['private-key-path'] = ApiClient.convertToType(data['private-key-path'], 'String');
            }
            if (data.hasOwnProperty('project-id')) {
                obj['project-id'] = ApiClient.convertToType(data['project-id'], 'String');
            }
            if (data.hasOwnProperty('protection-level')) {
                obj['protection-level'] = ApiClient.convertToType(data['protection-level'], 'String');
            }
            if (data.hasOwnProperty('purpose')) {
                obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
            }
            if (data.hasOwnProperty('regions')) {
                obj['regions'] = ApiClient.convertToType(data['regions'], ['String']);
            }
            if (data.hasOwnProperty('sra-association')) {
                obj['sra-association'] = ApiClient.convertToType(data['sra-association'], 'Boolean');
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

    /**
     * Validates the JSON data with respect to <code>AssocTargetItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssocTargetItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AssocTargetItem.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['certificate-path'] && !(typeof data['certificate-path'] === 'string' || data['certificate-path'] instanceof String)) {
            throw new Error("Expected the field `certificate-path` to be a primitive type in the JSON string but got " + data['certificate-path']);
        }
        // ensure the json data is a string
        if (data['chain-path'] && !(typeof data['chain-path'] === 'string' || data['chain-path'] instanceof String)) {
            throw new Error("Expected the field `chain-path` to be a primitive type in the JSON string but got " + data['chain-path']);
        }
        // ensure the json data is a string
        if (data['external-key-name'] && !(typeof data['external-key-name'] === 'string' || data['external-key-name'] instanceof String)) {
            throw new Error("Expected the field `external-key-name` to be a primitive type in the JSON string but got " + data['external-key-name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['key-operations'])) {
            throw new Error("Expected the field `key-operations` to be an array in the JSON data but got " + data['key-operations']);
        }
        // ensure the json data is a string
        if (data['keyring-name'] && !(typeof data['keyring-name'] === 'string' || data['keyring-name'] instanceof String)) {
            throw new Error("Expected the field `keyring-name` to be a primitive type in the JSON string but got " + data['keyring-name']);
        }
        // ensure the json data is a string
        if (data['kms-algorithm'] && !(typeof data['kms-algorithm'] === 'string' || data['kms-algorithm'] instanceof String)) {
            throw new Error("Expected the field `kms-algorithm` to be a primitive type in the JSON string but got " + data['kms-algorithm']);
        }
        // ensure the json data is a string
        if (data['location-id'] && !(typeof data['location-id'] === 'string' || data['location-id'] instanceof String)) {
            throw new Error("Expected the field `location-id` to be a primitive type in the JSON string but got " + data['location-id']);
        }
        // ensure the json data is a string
        if (data['multi-region'] && !(typeof data['multi-region'] === 'string' || data['multi-region'] instanceof String)) {
            throw new Error("Expected the field `multi-region` to be a primitive type in the JSON string but got " + data['multi-region']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['post-provision-command'] && !(typeof data['post-provision-command'] === 'string' || data['post-provision-command'] instanceof String)) {
            throw new Error("Expected the field `post-provision-command` to be a primitive type in the JSON string but got " + data['post-provision-command']);
        }
        // ensure the json data is a string
        if (data['private-key-path'] && !(typeof data['private-key-path'] === 'string' || data['private-key-path'] instanceof String)) {
            throw new Error("Expected the field `private-key-path` to be a primitive type in the JSON string but got " + data['private-key-path']);
        }
        // ensure the json data is a string
        if (data['project-id'] && !(typeof data['project-id'] === 'string' || data['project-id'] instanceof String)) {
            throw new Error("Expected the field `project-id` to be a primitive type in the JSON string but got " + data['project-id']);
        }
        // ensure the json data is a string
        if (data['protection-level'] && !(typeof data['protection-level'] === 'string' || data['protection-level'] instanceof String)) {
            throw new Error("Expected the field `protection-level` to be a primitive type in the JSON string but got " + data['protection-level']);
        }
        // ensure the json data is a string
        if (data['purpose'] && !(typeof data['purpose'] === 'string' || data['purpose'] instanceof String)) {
            throw new Error("Expected the field `purpose` to be a primitive type in the JSON string but got " + data['purpose']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['regions'])) {
            throw new Error("Expected the field `regions` to be an array in the JSON data but got " + data['regions']);
        }
        // ensure the json data is a string
        if (data['target-name'] && !(typeof data['target-name'] === 'string' || data['target-name'] instanceof String)) {
            throw new Error("Expected the field `target-name` to be a primitive type in the JSON string but got " + data['target-name']);
        }
        // ensure the json data is a string
        if (data['tenant-secret-type'] && !(typeof data['tenant-secret-type'] === 'string' || data['tenant-secret-type'] instanceof String)) {
            throw new Error("Expected the field `tenant-secret-type` to be a primitive type in the JSON string but got " + data['tenant-secret-type']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['vault-name'] && !(typeof data['vault-name'] === 'string' || data['vault-name'] instanceof String)) {
            throw new Error("Expected the field `vault-name` to be a primitive type in the JSON string but got " + data['vault-name']);
        }

        return true;
    }


}

AssocTargetItem.RequiredProperties = ["name", "target-name"];

/**
 * A path on the target to store the certificate pem file (relevant only for certificate provisioning)
 * @member {String} certificate-path
 */
AssocTargetItem.prototype['certificate-path'] = undefined;

/**
 * A path on the target to store the full chain pem file (relevant only for certificate provisioning)
 * @member {String} chain-path
 */
AssocTargetItem.prototype['chain-path'] = undefined;

/**
 * Automatically disable previous key version (required for azure targets)
 * @member {Boolean} disable-previous-key-version
 * @default false
 */
AssocTargetItem.prototype['disable-previous-key-version'] = false;

/**
 * The external key name to associate with the classic key (Relevant only for Classic Key AWS/Azure/GCP targets)
 * @member {String} external-key-name
 */
AssocTargetItem.prototype['external-key-name'] = undefined;

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
 * A custom command to run on the remote target after successful provisioning (relevant only for certificate provisioning)
 * @member {String} post-provision-command
 */
AssocTargetItem.prototype['post-provision-command'] = undefined;

/**
 * A path on the target to store the private key (relevant only for certificate provisioning)
 * @member {String} private-key-path
 */
AssocTargetItem.prototype['private-key-path'] = undefined;

/**
 * Project id of the GCP KMS (required for gcp targets)
 * @member {String} project-id
 */
AssocTargetItem.prototype['project-id'] = undefined;

/**
 * Protection level of the key [software/hardware] (relevant for gcp targets)
 * @member {String} protection-level
 * @default 'software'
 */
AssocTargetItem.prototype['protection-level'] = 'software';

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
 * Is the target to associate is for sra, relevant only for linked target association for ldap rotated secret
 * @member {Boolean} sra-association
 * @default false
 */
AssocTargetItem.prototype['sra-association'] = false;

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

