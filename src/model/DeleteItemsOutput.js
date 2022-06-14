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
 * The DeleteItemsOutput model module.
 * @module model/DeleteItemsOutput
 * @version 2.16.8
 */
class DeleteItemsOutput {
    /**
     * Constructs a new <code>DeleteItemsOutput</code>.
     * @alias module:model/DeleteItemsOutput
     */
    constructor() { 
        
        DeleteItemsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteItemsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteItemsOutput} obj Optional instance to populate.
     * @return {module:model/DeleteItemsOutput} The populated <code>DeleteItemsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteItemsOutput();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 */
DeleteItemsOutput.prototype['path'] = undefined;






export default DeleteItemsOutput;

