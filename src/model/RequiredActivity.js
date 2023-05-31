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
 * The RequiredActivity model module.
 * @module model/RequiredActivity
 * @version 3.3.6
 */
class RequiredActivity {
    /**
     * Constructs a new <code>RequiredActivity</code>.
     * @alias module:model/RequiredActivity
     */
    constructor() { 
        
        RequiredActivity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequiredActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequiredActivity} obj Optional instance to populate.
     * @return {module:model/RequiredActivity} The populated <code>RequiredActivity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequiredActivity();

            if (data.hasOwnProperty('migrations_required_activity')) {
                obj['migrations_required_activity'] = ApiClient.convertToType(data['migrations_required_activity'], {'String': 'Boolean'});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Boolean>} migrations_required_activity
 */
RequiredActivity.prototype['migrations_required_activity'] = undefined;






export default RequiredActivity;

