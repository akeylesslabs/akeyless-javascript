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
 * The UpdatePKICertIssuerOutput model module.
 * @module model/UpdatePKICertIssuerOutput
 * @version 2.16.7
 */
class UpdatePKICertIssuerOutput {
    /**
     * Constructs a new <code>UpdatePKICertIssuerOutput</code>.
     * @alias module:model/UpdatePKICertIssuerOutput
     */
    constructor() { 
        
        UpdatePKICertIssuerOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePKICertIssuerOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePKICertIssuerOutput} obj Optional instance to populate.
     * @return {module:model/UpdatePKICertIssuerOutput} The populated <code>UpdatePKICertIssuerOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePKICertIssuerOutput();

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
UpdatePKICertIssuerOutput.prototype['name'] = undefined;






export default UpdatePKICertIssuerOutput;

