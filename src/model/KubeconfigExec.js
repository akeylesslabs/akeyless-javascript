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
 * The KubeconfigExec model module.
 * @module model/KubeconfigExec
 * @version 4.3.0
 */
class KubeconfigExec {
    /**
     * Constructs a new <code>KubeconfigExec</code>.
     * @alias module:model/KubeconfigExec
     */
    constructor() { 
        
        KubeconfigExec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KubeconfigExec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KubeconfigExec} obj Optional instance to populate.
     * @return {module:model/KubeconfigExec} The populated <code>KubeconfigExec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KubeconfigExec();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], ['String']);
            }
            if (data.hasOwnProperty('command')) {
                obj['command'] = ApiClient.convertToType(data['command'], 'String');
            }
            if (data.hasOwnProperty('interactiveMode')) {
                obj['interactiveMode'] = ApiClient.convertToType(data['interactiveMode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} apiVersion
 */
KubeconfigExec.prototype['apiVersion'] = undefined;

/**
 * @member {Array.<String>} args
 */
KubeconfigExec.prototype['args'] = undefined;

/**
 * @member {String} command
 */
KubeconfigExec.prototype['command'] = undefined;

/**
 * @member {String} interactiveMode
 */
KubeconfigExec.prototype['interactiveMode'] = undefined;






export default KubeconfigExec;

