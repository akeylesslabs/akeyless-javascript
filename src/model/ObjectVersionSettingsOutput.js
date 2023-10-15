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
 * The ObjectVersionSettingsOutput model module.
 * @module model/ObjectVersionSettingsOutput
 * @version 3.5.0
 */
class ObjectVersionSettingsOutput {
    /**
     * Constructs a new <code>ObjectVersionSettingsOutput</code>.
     * @alias module:model/ObjectVersionSettingsOutput
     */
    constructor() { 
        
        ObjectVersionSettingsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ObjectVersionSettingsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectVersionSettingsOutput} obj Optional instance to populate.
     * @return {module:model/ObjectVersionSettingsOutput} The populated <code>ObjectVersionSettingsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectVersionSettingsOutput();

            if (data.hasOwnProperty('item-type')) {
                obj['item-type'] = ApiClient.convertToType(data['item-type'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
        }
        return obj;
    }


}

/**
 * VersionSettingsObjectType defines object types for account version settings
 * @member {String} item-type
 */
ObjectVersionSettingsOutput.prototype['item-type'] = undefined;

/**
 * @member {String} max-versions
 */
ObjectVersionSettingsOutput.prototype['max-versions'] = undefined;






export default ObjectVersionSettingsOutput;

