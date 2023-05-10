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
import EmailTokenizerInfo from './EmailTokenizerInfo';
import RegexpTokenizerInfo from './RegexpTokenizerInfo';

/**
 * The VaultlessTokenizerInfo model module.
 * @module model/VaultlessTokenizerInfo
 * @version 3.3.3
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

