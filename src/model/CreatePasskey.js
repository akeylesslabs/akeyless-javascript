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
 * The CreatePasskey model module.
 * @module model/CreatePasskey
 * @version 5.0.3
 */
class CreatePasskey {
    /**
     * Constructs a new <code>CreatePasskey</code>.
     * CreatePasskey is a command that creates a new passkey
     * @alias module:model/CreatePasskey
     * @param alg {String} Passkey type; options: [EC256, EC384, EC512]
     * @param name {String} ClassicKey name
     */
    constructor(alg, name) { 
        
        CreatePasskey.initialize(this, alg, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, alg, name) { 
        obj['accessibility'] = 'regular';
        obj['alg'] = alg || 'EC256';
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreatePasskey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePasskey} obj Optional instance to populate.
     * @return {module:model/CreatePasskey} The populated <code>CreatePasskey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePasskey();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('origin-url')) {
                obj['origin-url'] = ApiClient.convertToType(data['origin-url'], ['String']);
            }
            if (data.hasOwnProperty('protection-key-name')) {
                obj['protection-key-name'] = ApiClient.convertToType(data['protection-key-name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePasskey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePasskey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreatePasskey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accessibility'] && !(typeof data['accessibility'] === 'string' || data['accessibility'] instanceof String)) {
            throw new Error("Expected the field `accessibility` to be a primitive type in the JSON string but got " + data['accessibility']);
        }
        // ensure the json data is a string
        if (data['alg'] && !(typeof data['alg'] === 'string' || data['alg'] instanceof String)) {
            throw new Error("Expected the field `alg` to be a primitive type in the JSON string but got " + data['alg']);
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['origin-url'])) {
            throw new Error("Expected the field `origin-url` to be an array in the JSON data but got " + data['origin-url']);
        }
        // ensure the json data is a string
        if (data['protection-key-name'] && !(typeof data['protection-key-name'] === 'string' || data['protection-key-name'] instanceof String)) {
            throw new Error("Expected the field `protection-key-name` to be a primitive type in the JSON string but got " + data['protection-key-name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
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
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }

        return true;
    }


}

CreatePasskey.RequiredProperties = ["alg", "name"];

/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
CreatePasskey.prototype['accessibility'] = 'regular';

/**
 * Passkey type; options: [EC256, EC384, EC512]
 * @member {String} alg
 * @default 'EC256'
 */
CreatePasskey.prototype['alg'] = 'EC256';

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreatePasskey.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreatePasskey.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreatePasskey.prototype['json'] = false;

/**
 * ClassicKey name
 * @member {String} name
 */
CreatePasskey.prototype['name'] = undefined;

/**
 * Originating websites for this passkey
 * @member {Array.<String>} origin-url
 */
CreatePasskey.prototype['origin-url'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection-key-name
 */
CreatePasskey.prototype['protection-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
CreatePasskey.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreatePasskey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreatePasskey.prototype['uid-token'] = undefined;

/**
 * For Password Management use
 * @member {String} username
 */
CreatePasskey.prototype['username'] = undefined;






export default CreatePasskey;

