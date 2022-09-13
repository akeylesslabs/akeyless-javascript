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
import BastionListEntry from './BastionListEntry';

/**
 * The BastionsList model module.
 * @module model/BastionsList
 * @version 2.19.0
 */
class BastionsList {
    /**
     * Constructs a new <code>BastionsList</code>.
     * @alias module:model/BastionsList
     */
    constructor() { 
        
        BastionsList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BastionsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BastionsList} obj Optional instance to populate.
     * @return {module:model/BastionsList} The populated <code>BastionsList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BastionsList();

            if (data.hasOwnProperty('clusters')) {
                obj['clusters'] = ApiClient.convertToType(data['clusters'], [BastionListEntry]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/BastionListEntry>} clusters
 */
BastionsList.prototype['clusters'] = undefined;






export default BastionsList;

