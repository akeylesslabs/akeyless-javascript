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
 * The DeleteItemOutput model module.
 * @module model/DeleteItemOutput
 * @version 3.3.14
 */
class DeleteItemOutput {
    /**
     * Constructs a new <code>DeleteItemOutput</code>.
     * @alias module:model/DeleteItemOutput
     */
    constructor() { 
        
        DeleteItemOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteItemOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteItemOutput} obj Optional instance to populate.
     * @return {module:model/DeleteItemOutput} The populated <code>DeleteItemOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteItemOutput();

            if (data.hasOwnProperty('deletion_date')) {
                obj['deletion_date'] = ApiClient.convertToType(data['deletion_date'], 'Date');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
            }
            if (data.hasOwnProperty('item_name')) {
                obj['item_name'] = ApiClient.convertToType(data['item_name'], 'String');
            }
            if (data.hasOwnProperty('version_deleted')) {
                obj['version_deleted'] = ApiClient.convertToType(data['version_deleted'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} deletion_date
 */
DeleteItemOutput.prototype['deletion_date'] = undefined;

/**
 * @member {Number} item_id
 */
DeleteItemOutput.prototype['item_id'] = undefined;

/**
 * @member {String} item_name
 */
DeleteItemOutput.prototype['item_name'] = undefined;

/**
 * @member {Number} version_deleted
 */
DeleteItemOutput.prototype['version_deleted'] = undefined;






export default DeleteItemOutput;

