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
 * The CreateSecret model module.
 * @module model/CreateSecret
 * @version 5.0.1
 */
class CreateSecret {
    /**
     * Constructs a new <code>CreateSecret</code>.
     * @alias module:model/CreateSecret
     * @param name {String} Secret name
     * @param value {String} The secret value (relevant only for type 'generic')
     */
    constructor(name, value) { 
        
        CreateSecret.initialize(this, name, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value) { 
        obj['accessibility'] = 'regular';
        obj['format'] = 'text';
        obj['json'] = false;
        obj['name'] = name;
        obj['secure-access-web-browsing'] = false;
        obj['secure-access-web-proxy'] = false;
        obj['type'] = 'generic';
        obj['value'] = value;
    }

    /**
     * Constructs a <code>CreateSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSecret} obj Optional instance to populate.
     * @return {module:model/CreateSecret} The populated <code>CreateSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSecret();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('change-event')) {
                obj['change-event'] = ApiClient.convertToType(data['change-event'], 'String');
            }
            if (data.hasOwnProperty('custom-field')) {
                obj['custom-field'] = ApiClient.convertToType(data['custom-field'], {'String': 'String'});
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('inject-url')) {
                obj['inject-url'] = ApiClient.convertToType(data['inject-url'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('multiline_value')) {
                obj['multiline_value'] = ApiClient.convertToType(data['multiline_value'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
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
            if (data.hasOwnProperty('secure-access-gateway')) {
                obj['secure-access-gateway'] = ApiClient.convertToType(data['secure-access-gateway'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-rdp-user')) {
                obj['secure-access-rdp-user'] = ApiClient.convertToType(data['secure-access-rdp-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-ssh-creds')) {
                obj['secure-access-ssh-creds'] = ApiClient.convertToType(data['secure-access-ssh-creds'], 'String');
            }
            if (data.hasOwnProperty('secure-access-ssh-user')) {
                obj['secure-access-ssh-user'] = ApiClient.convertToType(data['secure-access-ssh-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-url')) {
                obj['secure-access-url'] = ApiClient.convertToType(data['secure-access-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSecret</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSecret</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateSecret.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accessibility'] && !(typeof data['accessibility'] === 'string' || data['accessibility'] instanceof String)) {
            throw new Error("Expected the field `accessibility` to be a primitive type in the JSON string but got " + data['accessibility']);
        }
        // ensure the json data is a string
        if (data['change-event'] && !(typeof data['change-event'] === 'string' || data['change-event'] instanceof String)) {
            throw new Error("Expected the field `change-event` to be a primitive type in the JSON string but got " + data['change-event']);
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
        if (data['format'] && !(typeof data['format'] === 'string' || data['format'] instanceof String)) {
            throw new Error("Expected the field `format` to be a primitive type in the JSON string but got " + data['format']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['inject-url'])) {
            throw new Error("Expected the field `inject-url` to be an array in the JSON data but got " + data['inject-url']);
        }
        // ensure the json data is a string
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
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
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['protection_key'] && !(typeof data['protection_key'] === 'string' || data['protection_key'] instanceof String)) {
            throw new Error("Expected the field `protection_key` to be a primitive type in the JSON string but got " + data['protection_key']);
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
        if (data['secure-access-gateway'] && !(typeof data['secure-access-gateway'] === 'string' || data['secure-access-gateway'] instanceof String)) {
            throw new Error("Expected the field `secure-access-gateway` to be a primitive type in the JSON string but got " + data['secure-access-gateway']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['secure-access-host'])) {
            throw new Error("Expected the field `secure-access-host` to be an array in the JSON data but got " + data['secure-access-host']);
        }
        // ensure the json data is a string
        if (data['secure-access-rdp-user'] && !(typeof data['secure-access-rdp-user'] === 'string' || data['secure-access-rdp-user'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-user` to be a primitive type in the JSON string but got " + data['secure-access-rdp-user']);
        }
        // ensure the json data is a string
        if (data['secure-access-ssh-creds'] && !(typeof data['secure-access-ssh-creds'] === 'string' || data['secure-access-ssh-creds'] instanceof String)) {
            throw new Error("Expected the field `secure-access-ssh-creds` to be a primitive type in the JSON string but got " + data['secure-access-ssh-creds']);
        }
        // ensure the json data is a string
        if (data['secure-access-ssh-user'] && !(typeof data['secure-access-ssh-user'] === 'string' || data['secure-access-ssh-user'] instanceof String)) {
            throw new Error("Expected the field `secure-access-ssh-user` to be a primitive type in the JSON string but got " + data['secure-access-ssh-user']);
        }
        // ensure the json data is a string
        if (data['secure-access-url'] && !(typeof data['secure-access-url'] === 'string' || data['secure-access-url'] instanceof String)) {
            throw new Error("Expected the field `secure-access-url` to be a primitive type in the JSON string but got " + data['secure-access-url']);
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
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

CreateSecret.RequiredProperties = ["name", "value"];

/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
CreateSecret.prototype['accessibility'] = 'regular';

/**
 * Trigger an event when a secret value changed [true/false] (Relevant only for Static Secret)
 * @member {String} change-event
 */
CreateSecret.prototype['change-event'] = undefined;

/**
 * For Password Management use, additional fields
 * @member {Object.<String, String>} custom-field
 */
CreateSecret.prototype['custom-field'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreateSecret.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateSecret.prototype['description'] = undefined;

/**
 * Secret format [text/json/key-value] (relevant only for type 'generic')
 * @member {String} format
 * @default 'text'
 */
CreateSecret.prototype['format'] = 'text';

/**
 * For Password Management use, reflect the website context
 * @member {Array.<String>} inject-url
 */
CreateSecret.prototype['inject-url'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateSecret.prototype['json'] = false;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
CreateSecret.prototype['max-versions'] = undefined;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
CreateSecret.prototype['metadata'] = undefined;

/**
 * The provided value is a multiline value (separated by '\\n')
 * @member {Boolean} multiline_value
 */
CreateSecret.prototype['multiline_value'] = undefined;

/**
 * Secret name
 * @member {String} name
 */
CreateSecret.prototype['name'] = undefined;

/**
 * For Password Management use, additional fields
 * @member {String} password
 */
CreateSecret.prototype['password'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
CreateSecret.prototype['protection_key'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
CreateSecret.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
CreateSecret.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
CreateSecret.prototype['secure-access-enable'] = undefined;

/**
 * @member {String} secure-access-gateway
 */
CreateSecret.prototype['secure-access-gateway'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
CreateSecret.prototype['secure-access-host'] = undefined;

/**
 * Remote Desktop Username
 * @member {String} secure-access-rdp-user
 */
CreateSecret.prototype['secure-access-rdp-user'] = undefined;

/**
 * Static-Secret values contains SSH Credentials, either Private Key or Password [password/private-key]
 * @member {String} secure-access-ssh-creds
 */
CreateSecret.prototype['secure-access-ssh-creds'] = undefined;

/**
 * Override the SSH username as indicated in SSH Certificate Issuer
 * @member {String} secure-access-ssh-user
 */
CreateSecret.prototype['secure-access-ssh-user'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
CreateSecret.prototype['secure-access-url'] = undefined;

/**
 * Secure browser via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
CreateSecret.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
CreateSecret.prototype['secure-access-web-proxy'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
CreateSecret.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateSecret.prototype['token'] = undefined;

/**
 * The secret sub type [generic/password]
 * @member {String} type
 * @default 'generic'
 */
CreateSecret.prototype['type'] = 'generic';

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateSecret.prototype['uid-token'] = undefined;

/**
 * For Password Management use
 * @member {String} username
 */
CreateSecret.prototype['username'] = undefined;

/**
 * The secret value (relevant only for type 'generic')
 * @member {String} value
 */
CreateSecret.prototype['value'] = undefined;






export default CreateSecret;

