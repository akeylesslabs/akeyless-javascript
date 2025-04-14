/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateTargetDetails model module.
 * @module model/UpdateTargetDetails
 * @version 5.0.3
 */
class UpdateTargetDetails {
    /**
     * Constructs a new <code>UpdateTargetDetails</code>.
     * updateTargetDetails is a command that updates an existing target. [Deprecated]
     * @alias module:model/UpdateTargetDetails
     */
    constructor() { 
        
        UpdateTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['json'] = false;
    }

    /**
     * Constructs a <code>UpdateTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTargetDetails} obj Optional instance to populate.
     * @return {module:model/UpdateTargetDetails} The populated <code>UpdateTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTargetDetails();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateTargetDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTargetDetails</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateTargetDetails.prototype['json'] = false;






export default UpdateTargetDetails;

