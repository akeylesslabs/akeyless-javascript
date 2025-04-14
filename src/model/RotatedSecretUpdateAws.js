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
 * The RotatedSecretUpdateAws model module.
 * @module model/RotatedSecretUpdateAws
 * @version 5.0.3
 */
class RotatedSecretUpdateAws {
    /**
     * Constructs a new <code>RotatedSecretUpdateAws</code>.
     * @alias module:model/RotatedSecretUpdateAws
     * @param name {String} Rotated secret name
     */
    constructor(name) { 
        
        RotatedSecretUpdateAws.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['authentication-credentials'] = 'use-user-creds';
        obj['aws-region'] = 'us-east-2';
        obj['description'] = 'default_metadata';
        obj['json'] = false;
        obj['name'] = name;
        obj['rotate-after-disconnect'] = 'false';
    }

    /**
     * Constructs a <code>RotatedSecretUpdateAws</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretUpdateAws} obj Optional instance to populate.
     * @return {module:model/RotatedSecretUpdateAws} The populated <code>RotatedSecretUpdateAws</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretUpdateAws();

            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
            }
            if (data.hasOwnProperty('api-id')) {
                obj['api-id'] = ApiClient.convertToType(data['api-id'], 'String');
            }
            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('authentication-credentials')) {
                obj['authentication-credentials'] = ApiClient.convertToType(data['authentication-credentials'], 'String');
            }
            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('aws-region')) {
                obj['aws-region'] = ApiClient.convertToType(data['aws-region'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('grace-rotation')) {
                obj['grace-rotation'] = ApiClient.convertToType(data['grace-rotation'], 'String');
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
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
            }
            if (data.hasOwnProperty('rotate-after-disconnect')) {
                obj['rotate-after-disconnect'] = ApiClient.convertToType(data['rotate-after-disconnect'], 'String');
            }
            if (data.hasOwnProperty('rotation-event-in')) {
                obj['rotation-event-in'] = ApiClient.convertToType(data['rotation-event-in'], ['String']);
            }
            if (data.hasOwnProperty('rotation-hour')) {
                obj['rotation-hour'] = ApiClient.convertToType(data['rotation-hour'], 'Number');
            }
            if (data.hasOwnProperty('rotation-interval')) {
                obj['rotation-interval'] = ApiClient.convertToType(data['rotation-interval'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-account-id')) {
                obj['secure-access-aws-account-id'] = ApiClient.convertToType(data['secure-access-aws-account-id'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-native-cli')) {
                obj['secure-access-aws-native-cli'] = ApiClient.convertToType(data['secure-access-aws-native-cli'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-certificate-issuer')) {
                obj['secure-access-certificate-issuer'] = ApiClient.convertToType(data['secure-access-certificate-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>RotatedSecretUpdateAws</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RotatedSecretUpdateAws</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RotatedSecretUpdateAws.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['add-tag'])) {
            throw new Error("Expected the field `add-tag` to be an array in the JSON data but got " + data['add-tag']);
        }
        // ensure the json data is a string
        if (data['api-id'] && !(typeof data['api-id'] === 'string' || data['api-id'] instanceof String)) {
            throw new Error("Expected the field `api-id` to be a primitive type in the JSON string but got " + data['api-id']);
        }
        // ensure the json data is a string
        if (data['api-key'] && !(typeof data['api-key'] === 'string' || data['api-key'] instanceof String)) {
            throw new Error("Expected the field `api-key` to be a primitive type in the JSON string but got " + data['api-key']);
        }
        // ensure the json data is a string
        if (data['authentication-credentials'] && !(typeof data['authentication-credentials'] === 'string' || data['authentication-credentials'] instanceof String)) {
            throw new Error("Expected the field `authentication-credentials` to be a primitive type in the JSON string but got " + data['authentication-credentials']);
        }
        // ensure the json data is a string
        if (data['auto-rotate'] && !(typeof data['auto-rotate'] === 'string' || data['auto-rotate'] instanceof String)) {
            throw new Error("Expected the field `auto-rotate` to be a primitive type in the JSON string but got " + data['auto-rotate']);
        }
        // ensure the json data is a string
        if (data['aws-region'] && !(typeof data['aws-region'] === 'string' || data['aws-region'] instanceof String)) {
            throw new Error("Expected the field `aws-region` to be a primitive type in the JSON string but got " + data['aws-region']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['grace-rotation'] && !(typeof data['grace-rotation'] === 'string' || data['grace-rotation'] instanceof String)) {
            throw new Error("Expected the field `grace-rotation` to be a primitive type in the JSON string but got " + data['grace-rotation']);
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
        if (data['password-length'] && !(typeof data['password-length'] === 'string' || data['password-length'] instanceof String)) {
            throw new Error("Expected the field `password-length` to be a primitive type in the JSON string but got " + data['password-length']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rm-tag'])) {
            throw new Error("Expected the field `rm-tag` to be an array in the JSON data but got " + data['rm-tag']);
        }
        // ensure the json data is a string
        if (data['rotate-after-disconnect'] && !(typeof data['rotate-after-disconnect'] === 'string' || data['rotate-after-disconnect'] instanceof String)) {
            throw new Error("Expected the field `rotate-after-disconnect` to be a primitive type in the JSON string but got " + data['rotate-after-disconnect']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rotation-event-in'])) {
            throw new Error("Expected the field `rotation-event-in` to be an array in the JSON data but got " + data['rotation-event-in']);
        }
        // ensure the json data is a string
        if (data['rotation-interval'] && !(typeof data['rotation-interval'] === 'string' || data['rotation-interval'] instanceof String)) {
            throw new Error("Expected the field `rotation-interval` to be a primitive type in the JSON string but got " + data['rotation-interval']);
        }
        // ensure the json data is a string
        if (data['secure-access-aws-account-id'] && !(typeof data['secure-access-aws-account-id'] === 'string' || data['secure-access-aws-account-id'] instanceof String)) {
            throw new Error("Expected the field `secure-access-aws-account-id` to be a primitive type in the JSON string but got " + data['secure-access-aws-account-id']);
        }
        // ensure the json data is a string
        if (data['secure-access-bastion-issuer'] && !(typeof data['secure-access-bastion-issuer'] === 'string' || data['secure-access-bastion-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-bastion-issuer` to be a primitive type in the JSON string but got " + data['secure-access-bastion-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-certificate-issuer'] && !(typeof data['secure-access-certificate-issuer'] === 'string' || data['secure-access-certificate-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-certificate-issuer` to be a primitive type in the JSON string but got " + data['secure-access-certificate-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-enable'] && !(typeof data['secure-access-enable'] === 'string' || data['secure-access-enable'] instanceof String)) {
            throw new Error("Expected the field `secure-access-enable` to be a primitive type in the JSON string but got " + data['secure-access-enable']);
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

RotatedSecretUpdateAws.RequiredProperties = ["name"];

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
RotatedSecretUpdateAws.prototype['add-tag'] = undefined;

/**
 * API ID to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-id
 */
RotatedSecretUpdateAws.prototype['api-id'] = undefined;

/**
 * API key to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-key
 */
RotatedSecretUpdateAws.prototype['api-key'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretUpdateAws.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretUpdateAws.prototype['auto-rotate'] = undefined;

/**
 * Aws Region
 * @member {String} aws-region
 * @default 'us-east-2'
 */
RotatedSecretUpdateAws.prototype['aws-region'] = 'us-east-2';

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
RotatedSecretUpdateAws.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_metadata'
 */
RotatedSecretUpdateAws.prototype['description'] = 'default_metadata';

/**
 * Create a new access key without deleting the old key from AWS for backup (relevant only for AWS) [true/false]
 * @member {String} grace-rotation
 */
RotatedSecretUpdateAws.prototype['grace-rotation'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretUpdateAws.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
RotatedSecretUpdateAws.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretUpdateAws.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
RotatedSecretUpdateAws.prototype['max-versions'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretUpdateAws.prototype['name'] = undefined;

/**
 * New item name
 * @member {String} new-name
 */
RotatedSecretUpdateAws.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretUpdateAws.prototype['password-length'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
RotatedSecretUpdateAws.prototype['rm-tag'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
RotatedSecretUpdateAws.prototype['rotate-after-disconnect'] = 'false';

/**
 * How many days before the rotation of the item would you like to be notified
 * @member {Array.<String>} rotation-event-in
 */
RotatedSecretUpdateAws.prototype['rotation-event-in'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretUpdateAws.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretUpdateAws.prototype['rotation-interval'] = undefined;

/**
 * The AWS account id
 * @member {String} secure-access-aws-account-id
 */
RotatedSecretUpdateAws.prototype['secure-access-aws-account-id'] = undefined;

/**
 * The AWS native cli
 * @member {Boolean} secure-access-aws-native-cli
 */
RotatedSecretUpdateAws.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
RotatedSecretUpdateAws.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
RotatedSecretUpdateAws.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
RotatedSecretUpdateAws.prototype['secure-access-enable'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretUpdateAws.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretUpdateAws.prototype['uid-token'] = undefined;






export default RotatedSecretUpdateAws;

