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
 * The SystemAccessCredsSettings model module.
 * @module model/SystemAccessCredsSettings
 * @version 1.57.0
 */
class SystemAccessCredsSettings {
    /**
     * Constructs a new <code>SystemAccessCredsSettings</code>.
     * SystemAccessCredsSettings describes system access credential settings for account by minutes
     * @alias module:model/SystemAccessCredsSettings
     */
    constructor() { 
        
        SystemAccessCredsSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SystemAccessCredsSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemAccessCredsSettings} obj Optional instance to populate.
     * @return {module:model/SystemAccessCredsSettings} The populated <code>SystemAccessCredsSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SystemAccessCredsSettings();

            if (data.hasOwnProperty('jwt_ttl_default')) {
                obj['jwt_ttl_default'] = ApiClient.convertToType(data['jwt_ttl_default'], 'Number');
            }
            if (data.hasOwnProperty('jwt_ttl_maximum')) {
                obj['jwt_ttl_maximum'] = ApiClient.convertToType(data['jwt_ttl_maximum'], 'Number');
            }
            if (data.hasOwnProperty('jwt_ttl_minimum')) {
                obj['jwt_ttl_minimum'] = ApiClient.convertToType(data['jwt_ttl_minimum'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} jwt_ttl_default
 */
SystemAccessCredsSettings.prototype['jwt_ttl_default'] = undefined;

/**
 * @member {Number} jwt_ttl_maximum
 */
SystemAccessCredsSettings.prototype['jwt_ttl_maximum'] = undefined;

/**
 * @member {Number} jwt_ttl_minimum
 */
SystemAccessCredsSettings.prototype['jwt_ttl_minimum'] = undefined;






export default SystemAccessCredsSettings;

