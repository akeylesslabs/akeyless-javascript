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
 * The DeleteAuthMethodOutput model module.
 * @module model/DeleteAuthMethodOutput
 * @version 2.0.14
 */
class DeleteAuthMethodOutput {
    /**
     * Constructs a new <code>DeleteAuthMethodOutput</code>.
     * @alias module:model/DeleteAuthMethodOutput
     */
    constructor() { 
        
        DeleteAuthMethodOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteAuthMethodOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAuthMethodOutput} obj Optional instance to populate.
     * @return {module:model/DeleteAuthMethodOutput} The populated <code>DeleteAuthMethodOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAuthMethodOutput();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
DeleteAuthMethodOutput.prototype['name'] = undefined;






export default DeleteAuthMethodOutput;

