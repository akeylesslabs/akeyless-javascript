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
 * The KmipMoveServerOutput model module.
 * @module model/KmipMoveServerOutput
 * @version 2.16.11
 */
class KmipMoveServerOutput {
    /**
     * Constructs a new <code>KmipMoveServerOutput</code>.
     * @alias module:model/KmipMoveServerOutput
     */
    constructor() { 
        
        KmipMoveServerOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KmipMoveServerOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipMoveServerOutput} obj Optional instance to populate.
     * @return {module:model/KmipMoveServerOutput} The populated <code>KmipMoveServerOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipMoveServerOutput();

            if (data.hasOwnProperty('new_root')) {
                obj['new_root'] = ApiClient.convertToType(data['new_root'], 'String');
            }
            if (data.hasOwnProperty('old_root')) {
                obj['old_root'] = ApiClient.convertToType(data['old_root'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} new_root
 */
KmipMoveServerOutput.prototype['new_root'] = undefined;

/**
 * @member {String} old_root
 */
KmipMoveServerOutput.prototype['old_root'] = undefined;






export default KmipMoveServerOutput;

