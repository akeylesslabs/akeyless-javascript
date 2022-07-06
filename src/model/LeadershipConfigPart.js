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
 * The LeadershipConfigPart model module.
 * @module model/LeadershipConfigPart
 * @version 2.16.11
 */
class LeadershipConfigPart {
    /**
     * Constructs a new <code>LeadershipConfigPart</code>.
     * @alias module:model/LeadershipConfigPart
     */
    constructor() { 
        
        LeadershipConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeadershipConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeadershipConfigPart} obj Optional instance to populate.
     * @return {module:model/LeadershipConfigPart} The populated <code>LeadershipConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeadershipConfigPart();

            if (data.hasOwnProperty('open_leadership')) {
                obj['open_leadership'] = ApiClient.convertToType(data['open_leadership'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} open_leadership
 */
LeadershipConfigPart.prototype['open_leadership'] = undefined;






export default LeadershipConfigPart;

