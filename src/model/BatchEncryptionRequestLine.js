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
 * The BatchEncryptionRequestLine model module.
 * @module model/BatchEncryptionRequestLine
 * @version 4.2.4
 */
class BatchEncryptionRequestLine {
    /**
     * Constructs a new <code>BatchEncryptionRequestLine</code>.
     * @alias module:model/BatchEncryptionRequestLine
     */
    constructor() { 
        
        BatchEncryptionRequestLine.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchEncryptionRequestLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchEncryptionRequestLine} obj Optional instance to populate.
     * @return {module:model/BatchEncryptionRequestLine} The populated <code>BatchEncryptionRequestLine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchEncryptionRequestLine();

            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], {'String': 'String'});
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
            }
            if (data.hasOwnProperty('item_version')) {
                obj['item_version'] = ApiClient.convertToType(data['item_version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} context
 */
BatchEncryptionRequestLine.prototype['context'] = undefined;

/**
 * @member {String} data
 */
BatchEncryptionRequestLine.prototype['data'] = undefined;

/**
 * @member {Number} item_id
 */
BatchEncryptionRequestLine.prototype['item_id'] = undefined;

/**
 * @member {Number} item_version
 */
BatchEncryptionRequestLine.prototype['item_version'] = undefined;






export default BatchEncryptionRequestLine;

