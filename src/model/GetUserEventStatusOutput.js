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
 * The GetUserEventStatusOutput model module.
 * @module model/GetUserEventStatusOutput
 * @version 4.1.0
 */
class GetUserEventStatusOutput {
    /**
     * Constructs a new <code>GetUserEventStatusOutput</code>.
     * @alias module:model/GetUserEventStatusOutput
     */
    constructor() { 
        
        GetUserEventStatusOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUserEventStatusOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUserEventStatusOutput} obj Optional instance to populate.
     * @return {module:model/GetUserEventStatusOutput} The populated <code>GetUserEventStatusOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUserEventStatusOutput();

            if (data.hasOwnProperty('access_status')) {
                obj['access_status'] = ApiClient.convertToType(data['access_status'], 'String');
            }
            if (data.hasOwnProperty('event_created_at')) {
                obj['event_created_at'] = ApiClient.convertToType(data['event_created_at'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_status
 */
GetUserEventStatusOutput.prototype['access_status'] = undefined;

/**
 * @member {Date} event_created_at
 */
GetUserEventStatusOutput.prototype['event_created_at'] = undefined;

/**
 * @member {String} status
 */
GetUserEventStatusOutput.prototype['status'] = undefined;






export default GetUserEventStatusOutput;

