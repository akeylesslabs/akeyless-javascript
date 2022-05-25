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
import VaultlessTokenizerInfo from './VaultlessTokenizerInfo';

/**
 * The TokenizerInfo model module.
 * @module model/TokenizerInfo
 * @version 2.16.7
 */
class TokenizerInfo {
    /**
     * Constructs a new <code>TokenizerInfo</code>.
     * @alias module:model/TokenizerInfo
     */
    constructor() { 
        
        TokenizerInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenizerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenizerInfo} obj Optional instance to populate.
     * @return {module:model/TokenizerInfo} The populated <code>TokenizerInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenizerInfo();

            if (data.hasOwnProperty('vaultless_tokenizer_info')) {
                obj['vaultless_tokenizer_info'] = VaultlessTokenizerInfo.constructFromObject(data['vaultless_tokenizer_info']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VaultlessTokenizerInfo} vaultless_tokenizer_info
 */
TokenizerInfo.prototype['vaultless_tokenizer_info'] = undefined;






export default TokenizerInfo;

