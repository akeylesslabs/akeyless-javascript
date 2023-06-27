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
 * The CreateLinkedTargetOutput model module.
 * @module model/CreateLinkedTargetOutput
 * @version 3.3.12
 */
class CreateLinkedTargetOutput {
    /**
     * Constructs a new <code>CreateLinkedTargetOutput</code>.
     * @alias module:model/CreateLinkedTargetOutput
     */
    constructor() { 
        
        CreateLinkedTargetOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateLinkedTargetOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLinkedTargetOutput} obj Optional instance to populate.
     * @return {module:model/CreateLinkedTargetOutput} The populated <code>CreateLinkedTargetOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLinkedTargetOutput();

            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} target_id
 */
CreateLinkedTargetOutput.prototype['target_id'] = undefined;






export default CreateLinkedTargetOutput;

