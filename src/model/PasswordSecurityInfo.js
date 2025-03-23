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
import PasswordBreachInfo from './PasswordBreachInfo';
import PasswordScoreInfo from './PasswordScoreInfo';

/**
 * The PasswordSecurityInfo model module.
 * @module model/PasswordSecurityInfo
 * @version 5.0.1
 */
class PasswordSecurityInfo {
    /**
     * Constructs a new <code>PasswordSecurityInfo</code>.
     * @alias module:model/PasswordSecurityInfo
     */
    constructor() { 
        
        PasswordSecurityInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PasswordSecurityInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PasswordSecurityInfo} obj Optional instance to populate.
     * @return {module:model/PasswordSecurityInfo} The populated <code>PasswordSecurityInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordSecurityInfo();

            if (data.hasOwnProperty('breach_info')) {
                obj['breach_info'] = PasswordBreachInfo.constructFromObject(data['breach_info']);
            }
            if (data.hasOwnProperty('score_info')) {
                obj['score_info'] = PasswordScoreInfo.constructFromObject(data['score_info']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PasswordSecurityInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PasswordSecurityInfo</code>.
     */
    static validateJSON(data) {
        // validate the optional field `breach_info`
        if (data['breach_info']) { // data not null
          PasswordBreachInfo.validateJSON(data['breach_info']);
        }
        // validate the optional field `score_info`
        if (data['score_info']) { // data not null
          PasswordScoreInfo.validateJSON(data['score_info']);
        }

        return true;
    }


}



/**
 * @member {module:model/PasswordBreachInfo} breach_info
 */
PasswordSecurityInfo.prototype['breach_info'] = undefined;

/**
 * @member {module:model/PasswordScoreInfo} score_info
 */
PasswordSecurityInfo.prototype['score_info'] = undefined;






export default PasswordSecurityInfo;

