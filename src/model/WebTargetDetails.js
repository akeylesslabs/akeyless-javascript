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
 * The WebTargetDetails model module.
 * @module model/WebTargetDetails
 * @version 4.1.0
 */
class WebTargetDetails {
    /**
     * Constructs a new <code>WebTargetDetails</code>.
     * @alias module:model/WebTargetDetails
     */
    constructor() { 
        
        WebTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebTargetDetails} obj Optional instance to populate.
     * @return {module:model/WebTargetDetails} The populated <code>WebTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebTargetDetails();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
WebTargetDetails.prototype['url'] = undefined;






export default WebTargetDetails;

