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
import KubeconfigNamedCluster from './KubeconfigNamedCluster';
import KubeconfigNamedContext from './KubeconfigNamedContext';
import KubeconfigUser from './KubeconfigUser';

/**
 * The KubeConfigValue model module.
 * @module model/KubeConfigValue
 * @version 4.3.0
 */
class KubeConfigValue {
    /**
     * Constructs a new <code>KubeConfigValue</code>.
     * @alias module:model/KubeConfigValue
     */
    constructor() { 
        
        KubeConfigValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KubeConfigValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KubeConfigValue} obj Optional instance to populate.
     * @return {module:model/KubeConfigValue} The populated <code>KubeConfigValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KubeConfigValue();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('clusters')) {
                obj['clusters'] = ApiClient.convertToType(data['clusters'], [KubeconfigNamedCluster]);
            }
            if (data.hasOwnProperty('contexts')) {
                obj['contexts'] = ApiClient.convertToType(data['contexts'], [KubeconfigNamedContext]);
            }
            if (data.hasOwnProperty('current-context')) {
                obj['current-context'] = ApiClient.convertToType(data['current-context'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [KubeconfigUser]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} apiVersion
 */
KubeConfigValue.prototype['apiVersion'] = undefined;

/**
 * @member {Array.<module:model/KubeconfigNamedCluster>} clusters
 */
KubeConfigValue.prototype['clusters'] = undefined;

/**
 * @member {Array.<module:model/KubeconfigNamedContext>} contexts
 */
KubeConfigValue.prototype['contexts'] = undefined;

/**
 * @member {String} current-context
 */
KubeConfigValue.prototype['current-context'] = undefined;

/**
 * @member {String} kind
 */
KubeConfigValue.prototype['kind'] = undefined;

/**
 * @member {Array.<module:model/KubeconfigUser>} users
 */
KubeConfigValue.prototype['users'] = undefined;






export default KubeConfigValue;

