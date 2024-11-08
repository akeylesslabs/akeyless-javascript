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
 * The TargetGetDetails model module.
 * @module model/TargetGetDetails
 * @version 4.3.0
 */
class TargetGetDetails {
    /**
     * Constructs a new <code>TargetGetDetails</code>.
     * @alias module:model/TargetGetDetails
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetGetDetails.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TargetGetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetGetDetails} obj Optional instance to populate.
     * @return {module:model/TargetGetDetails} The populated <code>TargetGetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetGetDetails();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('show-versions')) {
                obj['show-versions'] = ApiClient.convertToType(data['show-versions'], 'Boolean');
            }
            if (data.hasOwnProperty('target-version')) {
                obj['target-version'] = ApiClient.convertToType(data['target-version'], 'Number');
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
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetGetDetails.prototype['json'] = false;

/**
 * Target name
 * @member {String} name
 */
TargetGetDetails.prototype['name'] = undefined;

/**
 * Include all target versions in reply
 * @member {Boolean} show-versions
 * @default false
 */
TargetGetDetails.prototype['show-versions'] = false;

/**
 * Target version
 * @member {Number} target-version
 */
TargetGetDetails.prototype['target-version'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetGetDetails.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetGetDetails.prototype['uid-token'] = undefined;






export default TargetGetDetails;

