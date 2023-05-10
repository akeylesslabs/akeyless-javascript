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
 * The StaticSecretDetailsInfo model module.
 * @module model/StaticSecretDetailsInfo
 * @version 3.3.3
 */
class StaticSecretDetailsInfo {
    /**
     * Constructs a new <code>StaticSecretDetailsInfo</code>.
     * @alias module:model/StaticSecretDetailsInfo
     */
    constructor() { 
        
        StaticSecretDetailsInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StaticSecretDetailsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StaticSecretDetailsInfo} obj Optional instance to populate.
     * @return {module:model/StaticSecretDetailsInfo} The populated <code>StaticSecretDetailsInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StaticSecretDetailsInfo();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('websites')) {
                obj['websites'] = ApiClient.convertToType(data['websites'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
StaticSecretDetailsInfo.prototype['username'] = undefined;

/**
 * deprecated
 * @member {String} website
 */
StaticSecretDetailsInfo.prototype['website'] = undefined;

/**
 * @member {Array.<String>} websites
 */
StaticSecretDetailsInfo.prototype['websites'] = undefined;






export default StaticSecretDetailsInfo;

