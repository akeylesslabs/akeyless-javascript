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
 * The Producer model module.
 * @module model/Producer
 * @version 2.5.4
 */
class Producer {
    /**
     * Constructs a new <code>Producer</code>.
     * @alias module:model/Producer
     */
    constructor() { 
        
        Producer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Producer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Producer} obj Optional instance to populate.
     * @return {module:model/Producer} The populated <code>Producer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Producer();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
Producer.prototype['active'] = undefined;

/**
 * @member {Number} id
 */
Producer.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Producer.prototype['name'] = undefined;

/**
 * @member {String} type
 */
Producer.prototype['type'] = undefined;






export default Producer;

