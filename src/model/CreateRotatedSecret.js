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
 * The CreateRotatedSecret model module.
 * @module model/CreateRotatedSecret
 * @version 5.0.3
 */
class CreateRotatedSecret {
    /**
     * Constructs a new <code>CreateRotatedSecret</code>.
     * createRotatedSecret is a command that creates a rotated secret [Deprecated: Use rotated-secret-create commands]
     * @alias module:model/CreateRotatedSecret
     * @param name {String} Secret name
     * @param rotatorType {String} Rotator Type
     * @param targetName {String} Target name
     */
    constructor(name, rotatorType, targetName) { 
        
        CreateRotatedSecret.initialize(this, name, rotatorType, targetName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, rotatorType, targetName) { 
        obj['authentication-credentials'] = 'use-user-creds';
        obj['aws-region'] = 'us-east-2';
        obj['json'] = false;
        obj['name'] = name;
        obj['rotate-after-disconnect'] = 'false';
        obj['rotator-type'] = rotatorType;
        obj['secure-access-allow-external-user'] = false;
        obj['secure-access-web'] = false;
        obj['secure-access-web-browsing'] = false;
        obj['secure-access-web-proxy'] = false;
        obj['target-name'] = targetName;
        obj['user-attribute'] = 'cn';
    }

    /**
     * Constructs a <code>CreateRotatedSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRotatedSecret} obj Optional instance to populate.
     * @return {module:model/CreateRotatedSecret} The populated <code>CreateRotatedSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRotatedSecret();

            if (data.hasOwnProperty('ProviderType')) {
                obj['ProviderType'] = ApiClient.convertToType(data['ProviderType'], 'String');
            }
            if (data.hasOwnProperty('api-id')) {
                obj['api-id'] = ApiClient.convertToType(data['api-id'], 'String');
            }
            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('application-id')) {
                obj['application-id'] = ApiClient.convertToType(data['application-id'], 'String');
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
            if (data.hasOwnProperty('custom-payload')) {
                obj['custom-payload'] = ApiClient.convertToType(data['custom-payload'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('gcp-service-account-email')) {
                obj['gcp-service-account-email'] = ApiClient.convertToType(data['gcp-service-account-email'], 'String');
            }
            if (data.hasOwnProperty('gcp-service-account-key-id')) {
                obj['gcp-service-account-key-id'] = ApiClient.convertToType(data['gcp-service-account-key-id'], 'String');
            }
            if (data.hasOwnProperty('grace-rotation')) {
                obj['grace-rotation'] = ApiClient.convertToType(data['grace-rotation'], 'String');
            }
            if (data.hasOwnProperty('host-provider')) {
                obj['host-provider'] = ApiClient.convertToType(data['host-provider'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('rotate-after-disconnect')) {
                obj['rotate-after-disconnect'] = ApiClient.convertToType(data['rotate-after-disconnect'], 'String');
            }
            if (data.hasOwnProperty('rotated-password')) {
                obj['rotated-password'] = ApiClient.convertToType(data['rotated-password'], 'String');
            }
            if (data.hasOwnProperty('rotated-username')) {
                obj['rotated-username'] = ApiClient.convertToType(data['rotated-username'], 'String');
            }
            if (data.hasOwnProperty('rotation-hour')) {
                obj['rotation-hour'] = ApiClient.convertToType(data['rotation-hour'], 'Number');
            }
            if (data.hasOwnProperty('rotation-interval')) {
                obj['rotation-interval'] = ApiClient.convertToType(data['rotation-interval'], 'String');
            }
            if (data.hasOwnProperty('rotator-creds-type')) {
                obj['rotator-creds-type'] = ApiClient.convertToType(data['rotator-creds-type'], 'String');
            }
            if (data.hasOwnProperty('rotator-custom-cmd')) {
                obj['rotator-custom-cmd'] = ApiClient.convertToType(data['rotator-custom-cmd'], 'String');
            }
            if (data.hasOwnProperty('rotator-type')) {
                obj['rotator-type'] = ApiClient.convertToType(data['rotator-type'], 'String');
            }
            if (data.hasOwnProperty('same-password')) {
                obj['same-password'] = ApiClient.convertToType(data['same-password'], 'String');
            }
            if (data.hasOwnProperty('secure-access-allow-external-user')) {
                obj['secure-access-allow-external-user'] = ApiClient.convertToType(data['secure-access-allow-external-user'], 'Boolean');
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
            if (data.hasOwnProperty('secure-access-db-name')) {
                obj['secure-access-db-name'] = ApiClient.convertToType(data['secure-access-db-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-db-schema')) {
                obj['secure-access-db-schema'] = ApiClient.convertToType(data['secure-access-db-schema'], 'String');
            }
            if (data.hasOwnProperty('secure-access-disable-concurrent-connections')) {
                obj['secure-access-disable-concurrent-connections'] = ApiClient.convertToType(data['secure-access-disable-concurrent-connections'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-rdp-domain')) {
                obj['secure-access-rdp-domain'] = ApiClient.convertToType(data['secure-access-rdp-domain'], 'String');
            }
            if (data.hasOwnProperty('secure-access-rdp-user')) {
                obj['secure-access-rdp-user'] = ApiClient.convertToType(data['secure-access-rdp-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-url')) {
                obj['secure-access-url'] = ApiClient.convertToType(data['secure-access-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
            }
            if (data.hasOwnProperty('ssh-password')) {
                obj['ssh-password'] = ApiClient.convertToType(data['ssh-password'], 'String');
            }
            if (data.hasOwnProperty('ssh-username')) {
                obj['ssh-username'] = ApiClient.convertToType(data['ssh-username'], 'String');
            }
            if (data.hasOwnProperty('storage-account-key-name')) {
                obj['storage-account-key-name'] = ApiClient.convertToType(data['storage-account-key-name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-attribute')) {
                obj['user-attribute'] = ApiClient.convertToType(data['user-attribute'], 'String');
            }
            if (data.hasOwnProperty('user-dn')) {
                obj['user-dn'] = ApiClient.convertToType(data['user-dn'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateRotatedSecret</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateRotatedSecret</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateRotatedSecret.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ProviderType'] && !(typeof data['ProviderType'] === 'string' || data['ProviderType'] instanceof String)) {
            throw new Error("Expected the field `ProviderType` to be a primitive type in the JSON string but got " + data['ProviderType']);
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
        if (data['application-id'] && !(typeof data['application-id'] === 'string' || data['application-id'] instanceof String)) {
            throw new Error("Expected the field `application-id` to be a primitive type in the JSON string but got " + data['application-id']);
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
        if (data['custom-payload'] && !(typeof data['custom-payload'] === 'string' || data['custom-payload'] instanceof String)) {
            throw new Error("Expected the field `custom-payload` to be a primitive type in the JSON string but got " + data['custom-payload']);
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
        if (data['gcp-key'] && !(typeof data['gcp-key'] === 'string' || data['gcp-key'] instanceof String)) {
            throw new Error("Expected the field `gcp-key` to be a primitive type in the JSON string but got " + data['gcp-key']);
        }
        // ensure the json data is a string
        if (data['gcp-service-account-email'] && !(typeof data['gcp-service-account-email'] === 'string' || data['gcp-service-account-email'] instanceof String)) {
            throw new Error("Expected the field `gcp-service-account-email` to be a primitive type in the JSON string but got " + data['gcp-service-account-email']);
        }
        // ensure the json data is a string
        if (data['gcp-service-account-key-id'] && !(typeof data['gcp-service-account-key-id'] === 'string' || data['gcp-service-account-key-id'] instanceof String)) {
            throw new Error("Expected the field `gcp-service-account-key-id` to be a primitive type in the JSON string but got " + data['gcp-service-account-key-id']);
        }
        // ensure the json data is a string
        if (data['grace-rotation'] && !(typeof data['grace-rotation'] === 'string' || data['grace-rotation'] instanceof String)) {
            throw new Error("Expected the field `grace-rotation` to be a primitive type in the JSON string but got " + data['grace-rotation']);
        }
        // ensure the json data is a string
        if (data['host-provider'] && !(typeof data['host-provider'] === 'string' || data['host-provider'] instanceof String)) {
            throw new Error("Expected the field `host-provider` to be a primitive type in the JSON string but got " + data['host-provider']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['metadata'] && !(typeof data['metadata'] === 'string' || data['metadata'] instanceof String)) {
            throw new Error("Expected the field `metadata` to be a primitive type in the JSON string but got " + data['metadata']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['password-length'] && !(typeof data['password-length'] === 'string' || data['password-length'] instanceof String)) {
            throw new Error("Expected the field `password-length` to be a primitive type in the JSON string but got " + data['password-length']);
        }
        // ensure the json data is a string
        if (data['rotate-after-disconnect'] && !(typeof data['rotate-after-disconnect'] === 'string' || data['rotate-after-disconnect'] instanceof String)) {
            throw new Error("Expected the field `rotate-after-disconnect` to be a primitive type in the JSON string but got " + data['rotate-after-disconnect']);
        }
        // ensure the json data is a string
        if (data['rotated-password'] && !(typeof data['rotated-password'] === 'string' || data['rotated-password'] instanceof String)) {
            throw new Error("Expected the field `rotated-password` to be a primitive type in the JSON string but got " + data['rotated-password']);
        }
        // ensure the json data is a string
        if (data['rotated-username'] && !(typeof data['rotated-username'] === 'string' || data['rotated-username'] instanceof String)) {
            throw new Error("Expected the field `rotated-username` to be a primitive type in the JSON string but got " + data['rotated-username']);
        }
        // ensure the json data is a string
        if (data['rotation-interval'] && !(typeof data['rotation-interval'] === 'string' || data['rotation-interval'] instanceof String)) {
            throw new Error("Expected the field `rotation-interval` to be a primitive type in the JSON string but got " + data['rotation-interval']);
        }
        // ensure the json data is a string
        if (data['rotator-creds-type'] && !(typeof data['rotator-creds-type'] === 'string' || data['rotator-creds-type'] instanceof String)) {
            throw new Error("Expected the field `rotator-creds-type` to be a primitive type in the JSON string but got " + data['rotator-creds-type']);
        }
        // ensure the json data is a string
        if (data['rotator-custom-cmd'] && !(typeof data['rotator-custom-cmd'] === 'string' || data['rotator-custom-cmd'] instanceof String)) {
            throw new Error("Expected the field `rotator-custom-cmd` to be a primitive type in the JSON string but got " + data['rotator-custom-cmd']);
        }
        // ensure the json data is a string
        if (data['rotator-type'] && !(typeof data['rotator-type'] === 'string' || data['rotator-type'] instanceof String)) {
            throw new Error("Expected the field `rotator-type` to be a primitive type in the JSON string but got " + data['rotator-type']);
        }
        // ensure the json data is a string
        if (data['same-password'] && !(typeof data['same-password'] === 'string' || data['same-password'] instanceof String)) {
            throw new Error("Expected the field `same-password` to be a primitive type in the JSON string but got " + data['same-password']);
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
        if (data['secure-access-db-name'] && !(typeof data['secure-access-db-name'] === 'string' || data['secure-access-db-name'] instanceof String)) {
            throw new Error("Expected the field `secure-access-db-name` to be a primitive type in the JSON string but got " + data['secure-access-db-name']);
        }
        // ensure the json data is a string
        if (data['secure-access-db-schema'] && !(typeof data['secure-access-db-schema'] === 'string' || data['secure-access-db-schema'] instanceof String)) {
            throw new Error("Expected the field `secure-access-db-schema` to be a primitive type in the JSON string but got " + data['secure-access-db-schema']);
        }
        // ensure the json data is a string
        if (data['secure-access-enable'] && !(typeof data['secure-access-enable'] === 'string' || data['secure-access-enable'] instanceof String)) {
            throw new Error("Expected the field `secure-access-enable` to be a primitive type in the JSON string but got " + data['secure-access-enable']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['secure-access-host'])) {
            throw new Error("Expected the field `secure-access-host` to be an array in the JSON data but got " + data['secure-access-host']);
        }
        // ensure the json data is a string
        if (data['secure-access-rdp-domain'] && !(typeof data['secure-access-rdp-domain'] === 'string' || data['secure-access-rdp-domain'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-domain` to be a primitive type in the JSON string but got " + data['secure-access-rdp-domain']);
        }
        // ensure the json data is a string
        if (data['secure-access-rdp-user'] && !(typeof data['secure-access-rdp-user'] === 'string' || data['secure-access-rdp-user'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-user` to be a primitive type in the JSON string but got " + data['secure-access-rdp-user']);
        }
        // ensure the json data is a string
        if (data['secure-access-url'] && !(typeof data['secure-access-url'] === 'string' || data['secure-access-url'] instanceof String)) {
            throw new Error("Expected the field `secure-access-url` to be a primitive type in the JSON string but got " + data['secure-access-url']);
        }
        // ensure the json data is a string
        if (data['ssh-password'] && !(typeof data['ssh-password'] === 'string' || data['ssh-password'] instanceof String)) {
            throw new Error("Expected the field `ssh-password` to be a primitive type in the JSON string but got " + data['ssh-password']);
        }
        // ensure the json data is a string
        if (data['ssh-username'] && !(typeof data['ssh-username'] === 'string' || data['ssh-username'] instanceof String)) {
            throw new Error("Expected the field `ssh-username` to be a primitive type in the JSON string but got " + data['ssh-username']);
        }
        // ensure the json data is a string
        if (data['storage-account-key-name'] && !(typeof data['storage-account-key-name'] === 'string' || data['storage-account-key-name'] instanceof String)) {
            throw new Error("Expected the field `storage-account-key-name` to be a primitive type in the JSON string but got " + data['storage-account-key-name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['target'])) {
            throw new Error("Expected the field `target` to be an array in the JSON data but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['target-name'] && !(typeof data['target-name'] === 'string' || data['target-name'] instanceof String)) {
            throw new Error("Expected the field `target-name` to be a primitive type in the JSON string but got " + data['target-name']);
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
        if (data['user-attribute'] && !(typeof data['user-attribute'] === 'string' || data['user-attribute'] instanceof String)) {
            throw new Error("Expected the field `user-attribute` to be a primitive type in the JSON string but got " + data['user-attribute']);
        }
        // ensure the json data is a string
        if (data['user-dn'] && !(typeof data['user-dn'] === 'string' || data['user-dn'] instanceof String)) {
            throw new Error("Expected the field `user-dn` to be a primitive type in the JSON string but got " + data['user-dn']);
        }

        return true;
    }


}

CreateRotatedSecret.RequiredProperties = ["name", "rotator-type", "target-name"];

/**
 * @member {String} ProviderType
 */
CreateRotatedSecret.prototype['ProviderType'] = undefined;

/**
 * API ID to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-id
 */
CreateRotatedSecret.prototype['api-id'] = undefined;

/**
 * API key to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-key
 */
CreateRotatedSecret.prototype['api-key'] = undefined;

/**
 * ApplicationId (used in azure)
 * @member {String} application-id
 */
CreateRotatedSecret.prototype['application-id'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
CreateRotatedSecret.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
CreateRotatedSecret.prototype['auto-rotate'] = undefined;

/**
 * Aws Region (relevant only for aws)
 * @member {String} aws-region
 * @default 'us-east-2'
 */
CreateRotatedSecret.prototype['aws-region'] = 'us-east-2';

/**
 * Secret payload to be sent with rotation request (relevant only for rotator-type=custom)
 * @member {String} custom-payload
 */
CreateRotatedSecret.prototype['custom-payload'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreateRotatedSecret.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateRotatedSecret.prototype['description'] = undefined;

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
CreateRotatedSecret.prototype['gcp-key'] = undefined;

/**
 * The email of the gcp service account to rotate
 * @member {String} gcp-service-account-email
 */
CreateRotatedSecret.prototype['gcp-service-account-email'] = undefined;

/**
 * The key id of the gcp service account to rotate
 * @member {String} gcp-service-account-key-id
 */
CreateRotatedSecret.prototype['gcp-service-account-key-id'] = undefined;

/**
 * Create a new access key without deleting the old key from AWS for backup (relevant only for AWS) [true/false]
 * @member {String} grace-rotation
 */
CreateRotatedSecret.prototype['grace-rotation'] = undefined;

/**
 * Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret
 * @member {String} host-provider
 */
CreateRotatedSecret.prototype['host-provider'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateRotatedSecret.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateRotatedSecret.prototype['key'] = undefined;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
CreateRotatedSecret.prototype['metadata'] = undefined;

/**
 * Secret name
 * @member {String} name
 */
CreateRotatedSecret.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
CreateRotatedSecret.prototype['password-length'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
CreateRotatedSecret.prototype['rotate-after-disconnect'] = 'false';

/**
 * rotated-username password (relevant only for rotator-type=password)
 * @member {String} rotated-password
 */
CreateRotatedSecret.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=password)
 * @member {String} rotated-username
 */
CreateRotatedSecret.prototype['rotated-username'] = undefined;

/**
 * The Hour of the rotation in UTC. Default rotation-hour is 14:00
 * @member {Number} rotation-hour
 */
CreateRotatedSecret.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
CreateRotatedSecret.prototype['rotation-interval'] = undefined;

/**
 * @member {String} rotator-creds-type
 */
CreateRotatedSecret.prototype['rotator-creds-type'] = undefined;

/**
 * Custom rotation command (relevant only for ssh target)
 * @member {String} rotator-custom-cmd
 */
CreateRotatedSecret.prototype['rotator-custom-cmd'] = undefined;

/**
 * Rotator Type
 * @member {String} rotator-type
 */
CreateRotatedSecret.prototype['rotator-type'] = undefined;

/**
 * Rotate same password for each host from the Linked Target (relevant only for Linked Target)
 * @member {String} same-password
 */
CreateRotatedSecret.prototype['same-password'] = undefined;

/**
 * Allow providing external user for a domain users (relevant only for rdp)
 * @member {Boolean} secure-access-allow-external-user
 * @default false
 */
CreateRotatedSecret.prototype['secure-access-allow-external-user'] = false;

/**
 * The AWS account id (relevant only for aws)
 * @member {String} secure-access-aws-account-id
 */
CreateRotatedSecret.prototype['secure-access-aws-account-id'] = undefined;

/**
 * The AWS native cli
 * @member {Boolean} secure-access-aws-native-cli
 */
CreateRotatedSecret.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
CreateRotatedSecret.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
CreateRotatedSecret.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The DB name (relevant only for DB Dynamic-Secret)
 * @member {String} secure-access-db-name
 */
CreateRotatedSecret.prototype['secure-access-db-name'] = undefined;

/**
 * The db schema (relevant only for mssql or postgresql)
 * @member {String} secure-access-db-schema
 */
CreateRotatedSecret.prototype['secure-access-db-schema'] = undefined;

/**
 * Enable this flag to prevent simultaneous use of the same secret
 * @member {Boolean} secure-access-disable-concurrent-connections
 */
CreateRotatedSecret.prototype['secure-access-disable-concurrent-connections'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
CreateRotatedSecret.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
CreateRotatedSecret.prototype['secure-access-host'] = undefined;

/**
 * Required when the Dynamic Secret is used for a domain user (relevant only for RDP Dynamic-Secret)
 * @member {String} secure-access-rdp-domain
 */
CreateRotatedSecret.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Override the RDP Domain username (relevant only for rdp)
 * @member {String} secure-access-rdp-user
 */
CreateRotatedSecret.prototype['secure-access-rdp-user'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
CreateRotatedSecret.prototype['secure-access-url'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
CreateRotatedSecret.prototype['secure-access-web'] = false;

/**
 * Secure browser viaAkeyless's Secure Remote Access (SRA) (relevant only for aws or azure)
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
CreateRotatedSecret.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless's Secure Remote Access (SRA) (relevant only for aws or azure)
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
CreateRotatedSecret.prototype['secure-access-web-proxy'] = false;

/**
 * Deprecated: use RotatedPassword
 * @member {String} ssh-password
 */
CreateRotatedSecret.prototype['ssh-password'] = undefined;

/**
 * Deprecated: use RotatedUser
 * @member {String} ssh-username
 */
CreateRotatedSecret.prototype['ssh-username'] = undefined;

/**
 * The name of the storage account key to rotate [key1/key2/kerb1/kerb2] (relevat to azure-storage-account)
 * @member {String} storage-account-key-name
 */
CreateRotatedSecret.prototype['storage-account-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
CreateRotatedSecret.prototype['tags'] = undefined;

/**
 * A list of linked targets to be associated, Relevant only for Secure Remote Access for ssh cert issuer, ldap rotated secret and ldap dynamic secret, To specify multiple targets use argument multiple times
 * @member {Array.<String>} target
 */
CreateRotatedSecret.prototype['target'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
CreateRotatedSecret.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateRotatedSecret.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateRotatedSecret.prototype['uid-token'] = undefined;

/**
 * LDAP User Attribute, Default value \"cn\"
 * @member {String} user-attribute
 * @default 'cn'
 */
CreateRotatedSecret.prototype['user-attribute'] = 'cn';

/**
 * LDAP User Base DN
 * @member {String} user-dn
 */
CreateRotatedSecret.prototype['user-dn'] = undefined;






export default CreateRotatedSecret;

