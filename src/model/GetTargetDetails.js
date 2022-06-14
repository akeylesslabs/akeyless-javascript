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
 * The GetTargetDetails model module.
 * @module model/GetTargetDetails
 * @version 2.16.8
 */
class GetTargetDetails {
    /**
     * Constructs a new <code>GetTargetDetails</code>.
     * @alias module:model/GetTargetDetails
     * @param name {String} Target name
     */
    constructor(name) { 
        
        GetTargetDetails.initialize(this, name);
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
     * Constructs a <code>GetTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTargetDetails} obj Optional instance to populate.
     * @return {module:model/GetTargetDetails} The populated <code>GetTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTargetDetails();

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
 * Target name
 * @member {String} name
 */
GetTargetDetails.prototype['name'] = undefined;

/**
 * Include all target versions in reply
 * @member {Boolean} show-versions
 * @default false
 */
GetTargetDetails.prototype['show-versions'] = false;

/**
 * Target version
 * @member {Number} target-version
 */
GetTargetDetails.prototype['target-version'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetTargetDetails.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetTargetDetails.prototype['uid-token'] = undefined;






export default GetTargetDetails;

