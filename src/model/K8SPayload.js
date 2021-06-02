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
 * The K8SPayload model module.
 * @module model/K8SPayload
 * @version 2.4.2
 */
class K8SPayload {
    /**
     * Constructs a new <code>K8SPayload</code>.
     * @alias module:model/K8SPayload
     */
    constructor() { 
        
        K8SPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>K8SPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/K8SPayload} obj Optional instance to populate.
     * @return {module:model/K8SPayload} The populated <code>K8SPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new K8SPayload();

            if (data.hasOwnProperty('ca')) {
                obj['ca'] = ApiClient.convertToType(data['ca'], ['Number']);
            }
            if (data.hasOwnProperty('client_cert')) {
                obj['client_cert'] = ApiClient.convertToType(data['client_cert'], ['Number']);
            }
            if (data.hasOwnProperty('client_key')) {
                obj['client_key'] = ApiClient.convertToType(data['client_key'], ['Number']);
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('server')) {
                obj['server'] = ApiClient.convertToType(data['server'], 'String');
            }
            if (data.hasOwnProperty('skip_system')) {
                obj['skip_system'] = ApiClient.convertToType(data['skip_system'], 'Boolean');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} ca
 */
K8SPayload.prototype['ca'] = undefined;

/**
 * @member {Array.<Number>} client_cert
 */
K8SPayload.prototype['client_cert'] = undefined;

/**
 * @member {Array.<Number>} client_key
 */
K8SPayload.prototype['client_key'] = undefined;

/**
 * @member {String} namespace
 */
K8SPayload.prototype['namespace'] = undefined;

/**
 * @member {String} password
 */
K8SPayload.prototype['password'] = undefined;

/**
 * @member {String} server
 */
K8SPayload.prototype['server'] = undefined;

/**
 * @member {Boolean} skip_system
 */
K8SPayload.prototype['skip_system'] = undefined;

/**
 * @member {String} token
 */
K8SPayload.prototype['token'] = undefined;

/**
 * @member {String} username
 */
K8SPayload.prototype['username'] = undefined;






export default K8SPayload;

