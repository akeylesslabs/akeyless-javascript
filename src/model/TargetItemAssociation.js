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
 * @version 5.0.1
 */
class TargetItemAssociation {
    /**
     * Constructs a new <code>TargetItemAssociation</code>.
     * TargetItemAssociation includes details of an association between a target and an item. Also, between targets in case of child target or Linked target.
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
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': 'String'});
            }
            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'Number');
            }
            if (data.hasOwnProperty('item_name')) {
                obj['item_name'] = ApiClient.convertToType(data['item_name'], 'String');
            }
            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = ApiClient.convertToType(data['relationship'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TargetItemAssociation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetItemAssociation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['assoc_id'] && !(typeof data['assoc_id'] === 'string' || data['assoc_id'] instanceof String)) {
            throw new Error("Expected the field `assoc_id` to be a primitive type in the JSON string but got " + data['assoc_id']);
        }
        // ensure the json data is a string
        if (data['item_name'] && !(typeof data['item_name'] === 'string' || data['item_name'] instanceof String)) {
            throw new Error("Expected the field `item_name` to be a primitive type in the JSON string but got " + data['item_name']);
        }
        // ensure the json data is a string
        if (data['item_type'] && !(typeof data['item_type'] === 'string' || data['item_type'] instanceof String)) {
            throw new Error("Expected the field `item_type` to be a primitive type in the JSON string but got " + data['item_type']);
        }
        // ensure the json data is a string
        if (data['relationship'] && !(typeof data['relationship'] === 'string' || data['relationship'] instanceof String)) {
            throw new Error("Expected the field `relationship` to be a primitive type in the JSON string but got " + data['relationship']);
        }

        return true;
    }


}



/**
 * @member {String} assoc_id
 */
TargetItemAssociation.prototype['assoc_id'] = undefined;

/**
 * @member {Object.<String, String>} attributes
 */
TargetItemAssociation.prototype['attributes'] = undefined;

/**
 * @member {Number} cluster_id
 */
TargetItemAssociation.prototype['cluster_id'] = undefined;

/**
 * @member {String} item_name
 */
TargetItemAssociation.prototype['item_name'] = undefined;

/**
 * @member {String} item_type
 */
TargetItemAssociation.prototype['item_type'] = undefined;

/**
 * @member {String} relationship
 */
TargetItemAssociation.prototype['relationship'] = undefined;






export default TargetItemAssociation;

