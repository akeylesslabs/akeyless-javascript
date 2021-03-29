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
import TargetItemAssociation from './TargetItemAssociation';

/**
 * The Target model module.
 * @module model/Target
 * @version 2.0.14
 */
class Target {
    /**
     * Constructs a new <code>Target</code>.
     * @alias module:model/Target
     */
    constructor() { 
        
        Target.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Target</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Target} obj Optional instance to populate.
     * @return {module:model/Target} The populated <code>Target</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Target();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('protection_key_name')) {
                obj['protection_key_name'] = ApiClient.convertToType(data['protection_key_name'], 'String');
            }
            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'Number');
            }
            if (data.hasOwnProperty('target_items_assoc')) {
                obj['target_items_assoc'] = ApiClient.convertToType(data['target_items_assoc'], [TargetItemAssociation]);
            }
            if (data.hasOwnProperty('target_name')) {
                obj['target_name'] = ApiClient.convertToType(data['target_name'], 'String');
            }
            if (data.hasOwnProperty('target_type')) {
                obj['target_type'] = ApiClient.convertToType(data['target_type'], 'String');
            }
            if (data.hasOwnProperty('with_customer_fragment')) {
                obj['with_customer_fragment'] = ApiClient.convertToType(data['with_customer_fragment'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} comment
 */
Target.prototype['comment'] = undefined;

/**
 * @member {String} protection_key_name
 */
Target.prototype['protection_key_name'] = undefined;

/**
 * @member {Number} target_id
 */
Target.prototype['target_id'] = undefined;

/**
 * @member {Array.<module:model/TargetItemAssociation>} target_items_assoc
 */
Target.prototype['target_items_assoc'] = undefined;

/**
 * @member {String} target_name
 */
Target.prototype['target_name'] = undefined;

/**
 * @member {String} target_type
 */
Target.prototype['target_type'] = undefined;

/**
 * @member {Boolean} with_customer_fragment
 */
Target.prototype['with_customer_fragment'] = undefined;






export default Target;

