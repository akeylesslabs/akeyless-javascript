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
 * The CreateTokenizer model module.
 * @module model/CreateTokenizer
 * @version 3.5.4
 */
class CreateTokenizer {
    /**
     * Constructs a new <code>CreateTokenizer</code>.
     * createTokenizer is a command that creates a tokenizer item
     * @alias module:model/CreateTokenizer
     * @param name {String} Tokenizer name
     * @param templateType {String} Which template type this tokenizer is used for [SSN,CreditCard,USPhoneNumber,Email,Regexp]
     * @param tokenizerType {String} Tokenizer type
     */
    constructor(name, templateType, tokenizerType) { 
        
        CreateTokenizer.initialize(this, name, templateType, tokenizerType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, templateType, tokenizerType) { 
        obj['name'] = name;
        obj['template-type'] = templateType;
        obj['tokenizer-type'] = tokenizerType;
    }

    /**
     * Constructs a <code>CreateTokenizer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokenizer} obj Optional instance to populate.
     * @return {module:model/CreateTokenizer} The populated <code>CreateTokenizer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTokenizer();

            if (data.hasOwnProperty('alphabet')) {
                obj['alphabet'] = ApiClient.convertToType(data['alphabet'], 'String');
            }
            if (data.hasOwnProperty('decoding-template')) {
                obj['decoding-template'] = ApiClient.convertToType(data['decoding-template'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('encoding-template')) {
                obj['encoding-template'] = ApiClient.convertToType(data['encoding-template'], 'String');
            }
            if (data.hasOwnProperty('encryption-key-name')) {
                obj['encryption-key-name'] = ApiClient.convertToType(data['encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], ['String']);
            }
            if (data.hasOwnProperty('template-type')) {
                obj['template-type'] = ApiClient.convertToType(data['template-type'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('tokenizer-type')) {
                obj['tokenizer-type'] = ApiClient.convertToType(data['tokenizer-type'], 'String');
            }
            if (data.hasOwnProperty('tweak-type')) {
                obj['tweak-type'] = ApiClient.convertToType(data['tweak-type'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Alphabet to use in regexp vaultless tokenization
 * @member {String} alphabet
 */
CreateTokenizer.prototype['alphabet'] = undefined;

/**
 * The Decoding output template to use in regexp vaultless tokenization
 * @member {String} decoding-template
 */
CreateTokenizer.prototype['decoding-template'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
CreateTokenizer.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateTokenizer.prototype['description'] = undefined;

/**
 * The Encoding output template to use in regexp vaultless tokenization
 * @member {String} encoding-template
 */
CreateTokenizer.prototype['encoding-template'] = undefined;

/**
 * AES key name to use in vaultless tokenization
 * @member {String} encryption-key-name
 */
CreateTokenizer.prototype['encryption-key-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateTokenizer.prototype['json'] = false;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
CreateTokenizer.prototype['metadata'] = undefined;

/**
 * Tokenizer name
 * @member {String} name
 */
CreateTokenizer.prototype['name'] = undefined;

/**
 * Pattern to use in regexp vaultless tokenization
 * @member {String} pattern
 */
CreateTokenizer.prototype['pattern'] = undefined;

/**
 * List of the tags attached to this key
 * @member {Array.<String>} tag
 */
CreateTokenizer.prototype['tag'] = undefined;

/**
 * Which template type this tokenizer is used for [SSN,CreditCard,USPhoneNumber,Email,Regexp]
 * @member {String} template-type
 */
CreateTokenizer.prototype['template-type'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateTokenizer.prototype['token'] = undefined;

/**
 * Tokenizer type
 * @member {String} tokenizer-type
 * @default 'vaultless'
 */
CreateTokenizer.prototype['tokenizer-type'] = 'vaultless';

/**
 * The tweak type to use in vaultless tokenization [Supplied, Generated, Internal, Masking]
 * @member {String} tweak-type
 */
CreateTokenizer.prototype['tweak-type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateTokenizer.prototype['uid-token'] = undefined;






export default CreateTokenizer;

