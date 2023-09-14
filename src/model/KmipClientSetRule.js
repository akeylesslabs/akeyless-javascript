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
 * The KmipClientSetRule model module.
 * @module model/KmipClientSetRule
 * @version 3.4.0
 */
class KmipClientSetRule {
    /**
     * Constructs a new <code>KmipClientSetRule</code>.
     * @alias module:model/KmipClientSetRule
     * @param capability {Array.<String>} Access capabilities
     * @param path {String} Access path
     */
    constructor(capability, path) { 
        
        KmipClientSetRule.initialize(this, capability, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, capability, path) { 
        obj['capability'] = capability;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>KmipClientSetRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipClientSetRule} obj Optional instance to populate.
     * @return {module:model/KmipClientSetRule} The populated <code>KmipClientSetRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipClientSetRule();

            if (data.hasOwnProperty('capability')) {
                obj['capability'] = ApiClient.convertToType(data['capability'], ['String']);
            }
            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access capabilities
 * @member {Array.<String>} capability
 */
KmipClientSetRule.prototype['capability'] = undefined;

/**
 * @member {String} client-id
 */
KmipClientSetRule.prototype['client-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
KmipClientSetRule.prototype['json'] = false;

/**
 * @member {String} name
 */
KmipClientSetRule.prototype['name'] = undefined;

/**
 * Access path
 * @member {String} path
 */
KmipClientSetRule.prototype['path'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
KmipClientSetRule.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
KmipClientSetRule.prototype['uid-token'] = undefined;






export default KmipClientSetRule;

