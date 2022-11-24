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
 * The EmailTokenizerInfo model module.
 * @module model/EmailTokenizerInfo
 * @version 2.20.2
 */
class EmailTokenizerInfo {
    /**
     * Constructs a new <code>EmailTokenizerInfo</code>.
     * EmailTokenizerInfo represents a tokenizer that specifically tokenizes emails
     * @alias module:model/EmailTokenizerInfo
     */
    constructor() { 
        
        EmailTokenizerInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailTokenizerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailTokenizerInfo} obj Optional instance to populate.
     * @return {module:model/EmailTokenizerInfo} The populated <code>EmailTokenizerInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailTokenizerInfo();

            if (data.hasOwnProperty('domain_suffix_length')) {
                obj['domain_suffix_length'] = ApiClient.convertToType(data['domain_suffix_length'], 'Number');
            }
            if (data.hasOwnProperty('fixed_domain_suffix')) {
                obj['fixed_domain_suffix'] = ApiClient.convertToType(data['fixed_domain_suffix'], 'String');
            }
            if (data.hasOwnProperty('keep_prefix_length')) {
                obj['keep_prefix_length'] = ApiClient.convertToType(data['keep_prefix_length'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * What length of a random domain suffix to generate used only if FixedDomainSuffix is empty
 * @member {Number} domain_suffix_length
 */
EmailTokenizerInfo.prototype['domain_suffix_length'] = undefined;

/**
 * if FixedDomainSuffix isn't empty, it will be appended to the output
 * @member {String} fixed_domain_suffix
 */
EmailTokenizerInfo.prototype['fixed_domain_suffix'] = undefined;

/**
 * How many letters of the plaintext to keep in the output
 * @member {Number} keep_prefix_length
 */
EmailTokenizerInfo.prototype['keep_prefix_length'] = undefined;






export default EmailTokenizerInfo;

