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
 * The ImporterInfo model module.
 * @module model/ImporterInfo
 * @version 3.6.3
 */
class ImporterInfo {
    /**
     * Constructs a new <code>ImporterInfo</code>.
     * @alias module:model/ImporterInfo
     */
    constructor() { 
        
        ImporterInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImporterInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImporterInfo} obj Optional instance to populate.
     * @return {module:model/ImporterInfo} The populated <code>ImporterInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImporterInfo();

            if (data.hasOwnProperty('external_item_id')) {
                obj['external_item_id'] = ApiClient.convertToType(data['external_item_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} external_item_id
 */
ImporterInfo.prototype['external_item_id'] = undefined;

/**
 * @member {Number} version
 */
ImporterInfo.prototype['version'] = undefined;






export default ImporterInfo;

