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
 * The KubeconfigCluster model module.
 * @module model/KubeconfigCluster
 * @version 4.3.0
 */
class KubeconfigCluster {
    /**
     * Constructs a new <code>KubeconfigCluster</code>.
     * @alias module:model/KubeconfigCluster
     */
    constructor() { 
        
        KubeconfigCluster.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KubeconfigCluster</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KubeconfigCluster} obj Optional instance to populate.
     * @return {module:model/KubeconfigCluster} The populated <code>KubeconfigCluster</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KubeconfigCluster();

            if (data.hasOwnProperty('certificate-authority')) {
                obj['certificate-authority'] = ApiClient.convertToType(data['certificate-authority'], 'String');
            }
            if (data.hasOwnProperty('certificate-authority-data')) {
                obj['certificate-authority-data'] = ApiClient.convertToType(data['certificate-authority-data'], 'String');
            }
            if (data.hasOwnProperty('server')) {
                obj['server'] = ApiClient.convertToType(data['server'], 'String');
            }
        }
        return obj;
    }


}

/**
 * CertificateAuthority is optional and can be omitted if not used.
 * @member {String} certificate-authority
 */
KubeconfigCluster.prototype['certificate-authority'] = undefined;

/**
 * @member {String} certificate-authority-data
 */
KubeconfigCluster.prototype['certificate-authority-data'] = undefined;

/**
 * @member {String} server
 */
KubeconfigCluster.prototype['server'] = undefined;






export default KubeconfigCluster;
