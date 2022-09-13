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
import Producer from './Producer';

/**
 * The GetProducersListReplyObj model module.
 * @module model/GetProducersListReplyObj
 * @version 2.19.0
 */
class GetProducersListReplyObj {
    /**
     * Constructs a new <code>GetProducersListReplyObj</code>.
     * @alias module:model/GetProducersListReplyObj
     */
    constructor() { 
        
        GetProducersListReplyObj.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProducersListReplyObj</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProducersListReplyObj} obj Optional instance to populate.
     * @return {module:model/GetProducersListReplyObj} The populated <code>GetProducersListReplyObj</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProducersListReplyObj();

            if (data.hasOwnProperty('producers')) {
                obj['producers'] = ApiClient.convertToType(data['producers'], [Producer]);
            }
            if (data.hasOwnProperty('producers_errors')) {
                obj['producers_errors'] = ApiClient.convertToType(data['producers_errors'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Producer>} producers
 */
GetProducersListReplyObj.prototype['producers'] = undefined;

/**
 * @member {Object} producers_errors
 */
GetProducersListReplyObj.prototype['producers_errors'] = undefined;






export default GetProducersListReplyObj;

