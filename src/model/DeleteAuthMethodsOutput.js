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
 * The DeleteAuthMethodsOutput model module.
 * @module model/DeleteAuthMethodsOutput
 * @version 3.5.4
 */
class DeleteAuthMethodsOutput {
    /**
     * Constructs a new <code>DeleteAuthMethodsOutput</code>.
     * @alias module:model/DeleteAuthMethodsOutput
     */
    constructor() { 
        
        DeleteAuthMethodsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteAuthMethodsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAuthMethodsOutput} obj Optional instance to populate.
     * @return {module:model/DeleteAuthMethodsOutput} The populated <code>DeleteAuthMethodsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAuthMethodsOutput();

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
DeleteAuthMethodsOutput.prototype['path'] = undefined;






export default DeleteAuthMethodsOutput;

