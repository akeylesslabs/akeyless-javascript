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
 * The ItemTargetAssociation model module.
 * @module model/ItemTargetAssociation
 * @version 2.16.11
 */
class ItemTargetAssociation {
    /**
     * Constructs a new <code>ItemTargetAssociation</code>.
     * ItemTargetAssociation includes details of an association between an item and a target.
     * @alias module:model/ItemTargetAssociation
     */
    constructor() { 
        
        ItemTargetAssociation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemTargetAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemTargetAssociation} obj Optional instance to populate.
     * @return {module:model/ItemTargetAssociation} The populated <code>ItemTargetAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemTargetAssociation();

            if (data.hasOwnProperty('assoc_id')) {
                obj['assoc_id'] = ApiClient.convertToType(data['assoc_id'], 'String');
            }
            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'Number');
            }
            if (data.hasOwnProperty('target_name')) {
                obj['target_name'] = ApiClient.convertToType(data['target_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} assoc_id
 */
ItemTargetAssociation.prototype['assoc_id'] = undefined;

/**
 * @member {Number} target_id
 */
ItemTargetAssociation.prototype['target_id'] = undefined;

/**
 * @member {String} target_name
 */
ItemTargetAssociation.prototype['target_name'] = undefined;






export default ItemTargetAssociation;

