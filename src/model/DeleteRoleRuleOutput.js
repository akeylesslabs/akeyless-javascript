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
 * The DeleteRoleRuleOutput model module.
 * @module model/DeleteRoleRuleOutput
 * @version 2.5.1
 */
class DeleteRoleRuleOutput {
    /**
     * Constructs a new <code>DeleteRoleRuleOutput</code>.
     * @alias module:model/DeleteRoleRuleOutput
     */
    constructor() { 
        
        DeleteRoleRuleOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteRoleRuleOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRoleRuleOutput} obj Optional instance to populate.
     * @return {module:model/DeleteRoleRuleOutput} The populated <code>DeleteRoleRuleOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRoleRuleOutput();

            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} deleted
 */
DeleteRoleRuleOutput.prototype['deleted'] = undefined;

/**
 * @member {String} result
 */
DeleteRoleRuleOutput.prototype['result'] = undefined;






export default DeleteRoleRuleOutput;

