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
 * The GenerateCA model module.
 * @module model/GenerateCA
 * @version 5.0.0
 */
class GenerateCA {
    /**
     * Constructs a new <code>GenerateCA</code>.
     * GenerateCA is a command that creates a new PKI CA and Intermediate issuers
     * @alias module:model/GenerateCA
     * @param allowedDomains {String} A list of the allowed domains that clients can request to be included in the certificate (in a comma-delimited list)
     * @param pkiChainName {String} PKI chain name
     * @param ttl {String} The maximum requested Time To Live for issued certificate by default in seconds, supported formats are s,m,h,d
     */
    constructor(allowedDomains, pkiChainName, ttl) { 
        
        GenerateCA.initialize(this, allowedDomains, pkiChainName, ttl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, allowedDomains, pkiChainName, ttl) { 
        obj['allowed-domains'] = allowedDomains;
        obj['extended-key-usage'] = 'serverauth,clientauth';
        obj['json'] = false;
        obj['max-path-len'] = 1;
        obj['pki-chain-name'] = pkiChainName;
        obj['split-level'] = 3;
        obj['ttl'] = ttl;
    }

    /**
     * Constructs a <code>GenerateCA</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateCA} obj Optional instance to populate.
     * @return {module:model/GenerateCA} The populated <code>GenerateCA</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateCA();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('allowed-domains')) {
                obj['allowed-domains'] = ApiClient.convertToType(data['allowed-domains'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('extended-key-usage')) {
                obj['extended-key-usage'] = ApiClient.convertToType(data['extended-key-usage'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key-type')) {
                obj['key-type'] = ApiClient.convertToType(data['key-type'], 'String');
            }
            if (data.hasOwnProperty('max-path-len')) {
                obj['max-path-len'] = ApiClient.convertToType(data['max-path-len'], 'Number');
            }
            if (data.hasOwnProperty('pki-chain-name')) {
                obj['pki-chain-name'] = ApiClient.convertToType(data['pki-chain-name'], 'String');
            }
            if (data.hasOwnProperty('protection-key-name')) {
                obj['protection-key-name'] = ApiClient.convertToType(data['protection-key-name'], 'String');
            }
            if (data.hasOwnProperty('split-level')) {
                obj['split-level'] = ApiClient.convertToType(data['split-level'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GenerateCA</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenerateCA</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GenerateCA.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['alg'] && !(typeof data['alg'] === 'string' || data['alg'] instanceof String)) {
            throw new Error("Expected the field `alg` to be a primitive type in the JSON string but got " + data['alg']);
        }
        // ensure the json data is a string
        if (data['allowed-domains'] && !(typeof data['allowed-domains'] === 'string' || data['allowed-domains'] instanceof String)) {
            throw new Error("Expected the field `allowed-domains` to be a primitive type in the JSON string but got " + data['allowed-domains']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['extended-key-usage'] && !(typeof data['extended-key-usage'] === 'string' || data['extended-key-usage'] instanceof String)) {
            throw new Error("Expected the field `extended-key-usage` to be a primitive type in the JSON string but got " + data['extended-key-usage']);
        }
        // ensure the json data is a string
        if (data['key-type'] && !(typeof data['key-type'] === 'string' || data['key-type'] instanceof String)) {
            throw new Error("Expected the field `key-type` to be a primitive type in the JSON string but got " + data['key-type']);
        }
        // ensure the json data is a string
        if (data['pki-chain-name'] && !(typeof data['pki-chain-name'] === 'string' || data['pki-chain-name'] instanceof String)) {
            throw new Error("Expected the field `pki-chain-name` to be a primitive type in the JSON string but got " + data['pki-chain-name']);
        }
        // ensure the json data is a string
        if (data['protection-key-name'] && !(typeof data['protection-key-name'] === 'string' || data['protection-key-name'] instanceof String)) {
            throw new Error("Expected the field `protection-key-name` to be a primitive type in the JSON string but got " + data['protection-key-name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['ttl'] && !(typeof data['ttl'] === 'string' || data['ttl'] instanceof String)) {
            throw new Error("Expected the field `ttl` to be a primitive type in the JSON string but got " + data['ttl']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

GenerateCA.RequiredProperties = ["allowed-domains", "pki-chain-name", "ttl"];

/**
 * @member {String} alg
 */
GenerateCA.prototype['alg'] = undefined;

/**
 * A list of the allowed domains that clients can request to be included in the certificate (in a comma-delimited list)
 * @member {String} allowed-domains
 */
GenerateCA.prototype['allowed-domains'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GenerateCA.prototype['delete_protection'] = undefined;

/**
 * A comma sepereted list of extended key usage for the intermediate (serverauth / clientauth / codesigning)
 * @member {String} extended-key-usage
 * @default 'serverauth,clientauth'
 */
GenerateCA.prototype['extended-key-usage'] = 'serverauth,clientauth';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GenerateCA.prototype['json'] = false;

/**
 * @member {String} key-type
 */
GenerateCA.prototype['key-type'] = undefined;

/**
 * The maximum number of intermediate certificates that can appear in a certification path
 * @member {Number} max-path-len
 * @default 1
 */
GenerateCA.prototype['max-path-len'] = 1;

/**
 * PKI chain name
 * @member {String} pki-chain-name
 */
GenerateCA.prototype['pki-chain-name'] = undefined;

/**
 * The name of a key that used to encrypt the secrets values (if empty, the account default protectionKey key will be used)
 * @member {String} protection-key-name
 */
GenerateCA.prototype['protection-key-name'] = undefined;

/**
 * The number of fragments that the item will be split into
 * @member {Number} split-level
 * @default 3
 */
GenerateCA.prototype['split-level'] = 3;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GenerateCA.prototype['token'] = undefined;

/**
 * The maximum requested Time To Live for issued certificate by default in seconds, supported formats are s,m,h,d
 * @member {String} ttl
 */
GenerateCA.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GenerateCA.prototype['uid-token'] = undefined;






export default GenerateCA;

