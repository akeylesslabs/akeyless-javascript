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
import AuthMethod from './AuthMethod';

/**
 * The ListAuthMethodsOutput model module.
 * @module model/ListAuthMethodsOutput
 * @version 2.5.7
 */
class ListAuthMethodsOutput {
    /**
     * Constructs a new <code>ListAuthMethodsOutput</code>.
     * @alias module:model/ListAuthMethodsOutput
     */
    constructor() { 
        
        ListAuthMethodsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAuthMethodsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAuthMethodsOutput} obj Optional instance to populate.
     * @return {module:model/ListAuthMethodsOutput} The populated <code>ListAuthMethodsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAuthMethodsOutput();

            if (data.hasOwnProperty('auth_methods')) {
                obj['auth_methods'] = ApiClient.convertToType(data['auth_methods'], [AuthMethod]);
            }
            if (data.hasOwnProperty('next_page')) {
                obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AuthMethod>} auth_methods
 */
ListAuthMethodsOutput.prototype['auth_methods'] = undefined;

/**
 * @member {String} next_page
 */
ListAuthMethodsOutput.prototype['next_page'] = undefined;






export default ListAuthMethodsOutput;

