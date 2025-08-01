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
import EmailTokenizerInfo from './EmailTokenizerInfo';
import RegexpTokenizerInfo from './RegexpTokenizerInfo';

/**
 * The VaultlessTokenizerInfo model module.
 * @module model/VaultlessTokenizerInfo
 * @version 5.0.6
 */
class VaultlessTokenizerInfo {
    /**
     * Constructs a new <code>VaultlessTokenizerInfo</code>.
     * @alias module:model/VaultlessTokenizerInfo
     */
    constructor() { 
        
        VaultlessTokenizerInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VaultlessTokenizerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultlessTokenizerInfo} obj Optional instance to populate.
     * @return {module:model/VaultlessTokenizerInfo} The populated <code>VaultlessTokenizerInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultlessTokenizerInfo();

            if (data.hasOwnProperty('email_tokenizer_info')) {
                obj['email_tokenizer_info'] = EmailTokenizerInfo.constructFromObject(data['email_tokenizer_info']);
            }
            if (data.hasOwnProperty('key_name')) {
                obj['key_name'] = ApiClient.convertToType(data['key_name'], 'String');
            }
            if (data.hasOwnProperty('regexp_tokenizer_info')) {
                obj['regexp_tokenizer_info'] = RegexpTokenizerInfo.constructFromObject(data['regexp_tokenizer_info']);
            }
            if (data.hasOwnProperty('template_type')) {
                obj['template_type'] = ApiClient.convertToType(data['template_type'], 'String');
            }
            if (data.hasOwnProperty('tweak')) {
                obj['tweak'] = ApiClient.convertToType(data['tweak'], 'String');
            }
            if (data.hasOwnProperty('tweak_type')) {
                obj['tweak_type'] = ApiClient.convertToType(data['tweak_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VaultlessTokenizerInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VaultlessTokenizerInfo</code>.
     */
    static validateJSON(data) {
        // validate the optional field `email_tokenizer_info`
        if (data['email_tokenizer_info']) { // data not null
          EmailTokenizerInfo.validateJSON(data['email_tokenizer_info']);
        }
        // ensure the json data is a string
        if (data['key_name'] && !(typeof data['key_name'] === 'string' || data['key_name'] instanceof String)) {
            throw new Error("Expected the field `key_name` to be a primitive type in the JSON string but got " + data['key_name']);
        }
        // validate the optional field `regexp_tokenizer_info`
        if (data['regexp_tokenizer_info']) { // data not null
          RegexpTokenizerInfo.validateJSON(data['regexp_tokenizer_info']);
        }
        // ensure the json data is a string
        if (data['template_type'] && !(typeof data['template_type'] === 'string' || data['template_type'] instanceof String)) {
            throw new Error("Expected the field `template_type` to be a primitive type in the JSON string but got " + data['template_type']);
        }
        // ensure the json data is a string
        if (data['tweak'] && !(typeof data['tweak'] === 'string' || data['tweak'] instanceof String)) {
            throw new Error("Expected the field `tweak` to be a primitive type in the JSON string but got " + data['tweak']);
        }
        // ensure the json data is a string
        if (data['tweak_type'] && !(typeof data['tweak_type'] === 'string' || data['tweak_type'] instanceof String)) {
            throw new Error("Expected the field `tweak_type` to be a primitive type in the JSON string but got " + data['tweak_type']);
        }

        return true;
    }


}



/**
 * @member {module:model/EmailTokenizerInfo} email_tokenizer_info
 */
VaultlessTokenizerInfo.prototype['email_tokenizer_info'] = undefined;

/**
 * @member {String} key_name
 */
VaultlessTokenizerInfo.prototype['key_name'] = undefined;

/**
 * @member {module:model/RegexpTokenizerInfo} regexp_tokenizer_info
 */
VaultlessTokenizerInfo.prototype['regexp_tokenizer_info'] = undefined;

/**
 * @member {String} template_type
 */
VaultlessTokenizerInfo.prototype['template_type'] = undefined;

/**
 * Tweak used in the case of internal tweak type
 * @member {String} tweak
 */
VaultlessTokenizerInfo.prototype['tweak'] = undefined;

/**
 * @member {String} tweak_type
 */
VaultlessTokenizerInfo.prototype['tweak_type'] = undefined;






export default VaultlessTokenizerInfo;

