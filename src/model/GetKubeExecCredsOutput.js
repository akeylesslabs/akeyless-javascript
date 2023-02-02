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
import ClientData from './ClientData';

/**
 * The GetKubeExecCredsOutput model module.
 * @module model/GetKubeExecCredsOutput
 * @version 3.2.3
 */
class GetKubeExecCredsOutput {
    /**
     * Constructs a new <code>GetKubeExecCredsOutput</code>.
     * @alias module:model/GetKubeExecCredsOutput
     */
    constructor() { 
        
        GetKubeExecCredsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetKubeExecCredsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetKubeExecCredsOutput} obj Optional instance to populate.
     * @return {module:model/GetKubeExecCredsOutput} The populated <code>GetKubeExecCredsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetKubeExecCredsOutput();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ClientData.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} apiVersion
 */
GetKubeExecCredsOutput.prototype['apiVersion'] = undefined;

/**
 * @member {String} kind
 */
GetKubeExecCredsOutput.prototype['kind'] = undefined;

/**
 * @member {module:model/ClientData} status
 */
GetKubeExecCredsOutput.prototype['status'] = undefined;






export default GetKubeExecCredsOutput;

