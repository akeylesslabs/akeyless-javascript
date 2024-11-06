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
 * The KubeconfigContext model module.
 * @module model/KubeconfigContext
 * @version 4.3.0
 */
class KubeconfigContext {
    /**
     * Constructs a new <code>KubeconfigContext</code>.
     * @alias module:model/KubeconfigContext
     */
    constructor() { 
        
        KubeconfigContext.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KubeconfigContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KubeconfigContext} obj Optional instance to populate.
     * @return {module:model/KubeconfigContext} The populated <code>KubeconfigContext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KubeconfigContext();

            if (data.hasOwnProperty('cluster')) {
                obj['cluster'] = ApiClient.convertToType(data['cluster'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cluster
 */
KubeconfigContext.prototype['cluster'] = undefined;

/**
 * @member {String} namespace
 */
KubeconfigContext.prototype['namespace'] = undefined;

/**
 * @member {String} user
 */
KubeconfigContext.prototype['user'] = undefined;






export default KubeconfigContext;
