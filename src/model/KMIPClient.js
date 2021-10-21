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
import PathRule from './PathRule';

/**
 * The KMIPClient model module.
 * @module model/KMIPClient
 * @version 2.5.10
 */
class KMIPClient {
    /**
     * Constructs a new <code>KMIPClient</code>.
     * @alias module:model/KMIPClient
     */
    constructor() { 
        
        KMIPClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KMIPClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KMIPClient} obj Optional instance to populate.
     * @return {module:model/KMIPClient} The populated <code>KMIPClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KMIPClient();

            if (data.hasOwnProperty('certificate_issue_date')) {
                obj['certificate_issue_date'] = ApiClient.convertToType(data['certificate_issue_date'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [PathRule]);
            }
        }
        return obj;
    }


}

/**
 * @member {Date} certificate_issue_date
 */
KMIPClient.prototype['certificate_issue_date'] = undefined;

/**
 * @member {String} id
 */
KMIPClient.prototype['id'] = undefined;

/**
 * @member {String} name
 */
KMIPClient.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/PathRule>} rules
 */
KMIPClient.prototype['rules'] = undefined;






export default KMIPClient;

