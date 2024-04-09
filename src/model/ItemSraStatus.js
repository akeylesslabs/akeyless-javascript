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
 * The ItemSraStatus model module.
 * @module model/ItemSraStatus
 * @version 3.6.3
 */
class ItemSraStatus {
    /**
     * Constructs a new <code>ItemSraStatus</code>.
     * @alias module:model/ItemSraStatus
     */
    constructor() { 
        
        ItemSraStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemSraStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemSraStatus} obj Optional instance to populate.
     * @return {module:model/ItemSraStatus} The populated <code>ItemSraStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemSraStatus();

            if (data.hasOwnProperty('bastion_access_id')) {
                obj['bastion_access_id'] = ApiClient.convertToType(data['bastion_access_id'], 'String');
            }
            if (data.hasOwnProperty('bastion_cluster_name')) {
                obj['bastion_cluster_name'] = ApiClient.convertToType(data['bastion_cluster_name'], 'String');
            }
            if (data.hasOwnProperty('bastion_instance_id')) {
                obj['bastion_instance_id'] = ApiClient.convertToType(data['bastion_instance_id'], 'String');
            }
            if (data.hasOwnProperty('is_in_used')) {
                obj['is_in_used'] = ApiClient.convertToType(data['is_in_used'], 'Boolean');
            }
            if (data.hasOwnProperty('session_id')) {
                obj['session_id'] = ApiClient.convertToType(data['session_id'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} bastion_access_id
 */
ItemSraStatus.prototype['bastion_access_id'] = undefined;

/**
 * @member {String} bastion_cluster_name
 */
ItemSraStatus.prototype['bastion_cluster_name'] = undefined;

/**
 * @member {String} bastion_instance_id
 */
ItemSraStatus.prototype['bastion_instance_id'] = undefined;

/**
 * @member {Boolean} is_in_used
 */
ItemSraStatus.prototype['is_in_used'] = undefined;

/**
 * @member {String} session_id
 */
ItemSraStatus.prototype['session_id'] = undefined;

/**
 * @member {Date} time
 */
ItemSraStatus.prototype['time'] = undefined;






export default ItemSraStatus;

