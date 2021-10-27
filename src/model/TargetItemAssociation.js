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
 * The TargetItemAssociation model module.
 * @module model/TargetItemAssociation
 * @version 2.5.11
 */
class TargetItemAssociation {
    /**
     * Constructs a new <code>TargetItemAssociation</code>.
     * TargetItemAssociation includes details of an association between a target and an item.
     * @alias module:model/TargetItemAssociation
     */
    constructor() { 
        
        TargetItemAssociation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TargetItemAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetItemAssociation} obj Optional instance to populate.
     * @return {module:model/TargetItemAssociation} The populated <code>TargetItemAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetItemAssociation();

            if (data.hasOwnProperty('assoc_id')) {
                obj['assoc_id'] = ApiClient.convertToType(data['assoc_id'], 'String');
            }
            if (data.hasOwnProperty('item_name')) {
                obj['item_name'] = ApiClient.convertToType(data['item_name'], 'String');
            }
            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} assoc_id
 */
TargetItemAssociation.prototype['assoc_id'] = undefined;

/**
 * @member {String} item_name
 */
TargetItemAssociation.prototype['item_name'] = undefined;

/**
 * @member {String} item_type
 */
TargetItemAssociation.prototype['item_type'] = undefined;






export default TargetItemAssociation;

