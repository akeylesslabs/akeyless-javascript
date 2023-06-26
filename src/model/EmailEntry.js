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
 * The EmailEntry model module.
 * @module model/EmailEntry
 * @version 3.3.10
 */
class EmailEntry {
    /**
     * Constructs a new <code>EmailEntry</code>.
     * @alias module:model/EmailEntry
     */
    constructor() { 
        
        EmailEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailEntry} obj Optional instance to populate.
     * @return {module:model/EmailEntry} The populated <code>EmailEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailEntry();

            if (data.hasOwnProperty('to_email')) {
                obj['to_email'] = ApiClient.convertToType(data['to_email'], 'String');
            }
            if (data.hasOwnProperty('to_name')) {
                obj['to_name'] = ApiClient.convertToType(data['to_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} to_email
 */
EmailEntry.prototype['to_email'] = undefined;

/**
 * @member {String} to_name
 */
EmailEntry.prototype['to_name'] = undefined;






export default EmailEntry;

