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
 * The TargetObjectAssociation model module.
 * @module model/TargetObjectAssociation
 * @version 2.19.0
 */
class TargetObjectAssociation {
    /**
     * Constructs a new <code>TargetObjectAssociation</code>.
     * TargetObjectAssociation includes details of an association between a target and an object (target, migration_id).
     * @alias module:model/TargetObjectAssociation
     */
    constructor() { 
        
        TargetObjectAssociation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TargetObjectAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetObjectAssociation} obj Optional instance to populate.
     * @return {module:model/TargetObjectAssociation} The populated <code>TargetObjectAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetObjectAssociation();

            if (data.hasOwnProperty('assoc_id')) {
                obj['assoc_id'] = ApiClient.convertToType(data['assoc_id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': 'String'});
            }
            if (data.hasOwnProperty('object_id')) {
                obj['object_id'] = ApiClient.convertToType(data['object_id'], 'String');
            }
            if (data.hasOwnProperty('object_name')) {
                obj['object_name'] = ApiClient.convertToType(data['object_name'], 'String');
            }
            if (data.hasOwnProperty('object_type')) {
                obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String');
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
TargetObjectAssociation.prototype['assoc_id'] = undefined;

/**
 * @member {Object.<String, String>} attributes
 */
TargetObjectAssociation.prototype['attributes'] = undefined;

/**
 * @member {String} object_id
 */
TargetObjectAssociation.prototype['object_id'] = undefined;

/**
 * @member {String} object_name
 */
TargetObjectAssociation.prototype['object_name'] = undefined;

/**
 * @member {String} object_type
 */
TargetObjectAssociation.prototype['object_type'] = undefined;

/**
 * @member {String} target_name
 */
TargetObjectAssociation.prototype['target_name'] = undefined;






export default TargetObjectAssociation;

