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
import BastionsList from './BastionsList';
import CertificateIssueInfo from './CertificateIssueInfo';
import GatewayDetailsForItemReplyObj from './GatewayDetailsForItemReplyObj';
import ItemGeneralInfo from './ItemGeneralInfo';
import ItemTargetAssociation from './ItemTargetAssociation';
import ItemUSCSyncAssociation from './ItemUSCSyncAssociation';
import ItemVersion from './ItemVersion';
import LinkedDetails from './LinkedDetails';
import RuleAssigner from './RuleAssigner';
import TargetItemVersion from './TargetItemVersion';

/**
 * The Item model module.
 * @module model/Item
 * @version 5.0.2
 */
class Item {
    /**
     * Constructs a new <code>Item</code>.
     * @alias module:model/Item
     */
    constructor() { 
        
        Item.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Item} obj Optional instance to populate.
     * @return {module:model/Item} The populated <code>Item</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Item();

            if (data.hasOwnProperty('access_date')) {
                obj['access_date'] = ApiClient.convertToType(data['access_date'], 'Date');
            }
            if (data.hasOwnProperty('access_date_display')) {
                obj['access_date_display'] = ApiClient.convertToType(data['access_date_display'], 'String');
            }
            if (data.hasOwnProperty('access_request_status')) {
                obj['access_request_status'] = ApiClient.convertToType(data['access_request_status'], 'String');
            }
            if (data.hasOwnProperty('auto_rotate')) {
                obj['auto_rotate'] = ApiClient.convertToType(data['auto_rotate'], 'Boolean');
            }
            if (data.hasOwnProperty('bastion_details')) {
                obj['bastion_details'] = BastionsList.constructFromObject(data['bastion_details']);
            }
            if (data.hasOwnProperty('cert_issuer_signer_key_name')) {
                obj['cert_issuer_signer_key_name'] = ApiClient.convertToType(data['cert_issuer_signer_key_name'], 'String');
            }
            if (data.hasOwnProperty('certificate_issue_details')) {
                obj['certificate_issue_details'] = CertificateIssueInfo.constructFromObject(data['certificate_issue_details']);
            }
            if (data.hasOwnProperty('certificates')) {
                obj['certificates'] = ApiClient.convertToType(data['certificates'], 'String');
            }
            if (data.hasOwnProperty('client_permissions')) {
                obj['client_permissions'] = ApiClient.convertToType(data['client_permissions'], ['String']);
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('customer_fragment_id')) {
                obj['customer_fragment_id'] = ApiClient.convertToType(data['customer_fragment_id'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'Boolean');
            }
            if (data.hasOwnProperty('deletion_date')) {
                obj['deletion_date'] = ApiClient.convertToType(data['deletion_date'], 'Date');
            }
            if (data.hasOwnProperty('display_id')) {
                obj['display_id'] = ApiClient.convertToType(data['display_id'], 'String');
            }
            if (data.hasOwnProperty('gateway_details')) {
                obj['gateway_details'] = ApiClient.convertToType(data['gateway_details'], [GatewayDetailsForItemReplyObj]);
            }
            if (data.hasOwnProperty('is_access_request_enabled')) {
                obj['is_access_request_enabled'] = ApiClient.convertToType(data['is_access_request_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('is_enabled')) {
                obj['is_enabled'] = ApiClient.convertToType(data['is_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('item_accessibility')) {
                obj['item_accessibility'] = ApiClient.convertToType(data['item_accessibility'], 'Number');
            }
            if (data.hasOwnProperty('item_general_info')) {
                obj['item_general_info'] = ItemGeneralInfo.constructFromObject(data['item_general_info']);
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
            }
            if (data.hasOwnProperty('item_metadata')) {
                obj['item_metadata'] = ApiClient.convertToType(data['item_metadata'], 'String');
            }
            if (data.hasOwnProperty('item_name')) {
                obj['item_name'] = ApiClient.convertToType(data['item_name'], 'String');
            }
            if (data.hasOwnProperty('item_size')) {
                obj['item_size'] = ApiClient.convertToType(data['item_size'], 'Number');
            }
            if (data.hasOwnProperty('item_state')) {
                obj['item_state'] = ApiClient.convertToType(data['item_state'], 'String');
            }
            if (data.hasOwnProperty('item_sub_type')) {
                obj['item_sub_type'] = ApiClient.convertToType(data['item_sub_type'], 'String');
            }
            if (data.hasOwnProperty('item_tags')) {
                obj['item_tags'] = ApiClient.convertToType(data['item_tags'], ['String']);
            }
            if (data.hasOwnProperty('item_targets_assoc')) {
                obj['item_targets_assoc'] = ApiClient.convertToType(data['item_targets_assoc'], [ItemTargetAssociation]);
            }
            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');
            }
            if (data.hasOwnProperty('item_versions')) {
                obj['item_versions'] = ApiClient.convertToType(data['item_versions'], [ItemVersion]);
            }
            if (data.hasOwnProperty('last_rotation_date')) {
                obj['last_rotation_date'] = ApiClient.convertToType(data['last_rotation_date'], 'Date');
            }
            if (data.hasOwnProperty('last_version')) {
                obj['last_version'] = ApiClient.convertToType(data['last_version'], 'Number');
            }
            if (data.hasOwnProperty('linked_details')) {
                obj['linked_details'] = LinkedDetails.constructFromObject(data['linked_details']);
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'Date');
            }
            if (data.hasOwnProperty('next_rotation_date')) {
                obj['next_rotation_date'] = ApiClient.convertToType(data['next_rotation_date'], 'Date');
            }
            if (data.hasOwnProperty('protection_key_name')) {
                obj['protection_key_name'] = ApiClient.convertToType(data['protection_key_name'], 'String');
            }
            if (data.hasOwnProperty('protection_key_type')) {
                obj['protection_key_type'] = ApiClient.convertToType(data['protection_key_type'], 'String');
            }
            if (data.hasOwnProperty('public_value')) {
                obj['public_value'] = ApiClient.convertToType(data['public_value'], 'String');
            }
            if (data.hasOwnProperty('rotation_interval')) {
                obj['rotation_interval'] = ApiClient.convertToType(data['rotation_interval'], 'Number');
            }
            if (data.hasOwnProperty('shared_by')) {
                obj['shared_by'] = RuleAssigner.constructFromObject(data['shared_by']);
            }
            if (data.hasOwnProperty('target_versions')) {
                obj['target_versions'] = ApiClient.convertToType(data['target_versions'], [TargetItemVersion]);
            }
            if (data.hasOwnProperty('usc_sync_associated_items')) {
                obj['usc_sync_associated_items'] = ApiClient.convertToType(data['usc_sync_associated_items'], [ItemUSCSyncAssociation]);
            }
            if (data.hasOwnProperty('with_customer_fragment')) {
                obj['with_customer_fragment'] = ApiClient.convertToType(data['with_customer_fragment'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Item</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Item</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_date_display'] && !(typeof data['access_date_display'] === 'string' || data['access_date_display'] instanceof String)) {
            throw new Error("Expected the field `access_date_display` to be a primitive type in the JSON string but got " + data['access_date_display']);
        }
        // ensure the json data is a string
        if (data['access_request_status'] && !(typeof data['access_request_status'] === 'string' || data['access_request_status'] instanceof String)) {
            throw new Error("Expected the field `access_request_status` to be a primitive type in the JSON string but got " + data['access_request_status']);
        }
        // validate the optional field `bastion_details`
        if (data['bastion_details']) { // data not null
          BastionsList.validateJSON(data['bastion_details']);
        }
        // ensure the json data is a string
        if (data['cert_issuer_signer_key_name'] && !(typeof data['cert_issuer_signer_key_name'] === 'string' || data['cert_issuer_signer_key_name'] instanceof String)) {
            throw new Error("Expected the field `cert_issuer_signer_key_name` to be a primitive type in the JSON string but got " + data['cert_issuer_signer_key_name']);
        }
        // validate the optional field `certificate_issue_details`
        if (data['certificate_issue_details']) { // data not null
          CertificateIssueInfo.validateJSON(data['certificate_issue_details']);
        }
        // ensure the json data is a string
        if (data['certificates'] && !(typeof data['certificates'] === 'string' || data['certificates'] instanceof String)) {
            throw new Error("Expected the field `certificates` to be a primitive type in the JSON string but got " + data['certificates']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['client_permissions'])) {
            throw new Error("Expected the field `client_permissions` to be an array in the JSON data but got " + data['client_permissions']);
        }
        // ensure the json data is a string
        if (data['customer_fragment_id'] && !(typeof data['customer_fragment_id'] === 'string' || data['customer_fragment_id'] instanceof String)) {
            throw new Error("Expected the field `customer_fragment_id` to be a primitive type in the JSON string but got " + data['customer_fragment_id']);
        }
        // ensure the json data is a string
        if (data['display_id'] && !(typeof data['display_id'] === 'string' || data['display_id'] instanceof String)) {
            throw new Error("Expected the field `display_id` to be a primitive type in the JSON string but got " + data['display_id']);
        }
        if (data['gateway_details']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['gateway_details'])) {
                throw new Error("Expected the field `gateway_details` to be an array in the JSON data but got " + data['gateway_details']);
            }
            // validate the optional field `gateway_details` (array)
            for (const item of data['gateway_details']) {
                GatewayDetailsForItemReplyObj.validateJSON(item);
            };
        }
        // validate the optional field `item_general_info`
        if (data['item_general_info']) { // data not null
          ItemGeneralInfo.validateJSON(data['item_general_info']);
        }
        // ensure the json data is a string
        if (data['item_metadata'] && !(typeof data['item_metadata'] === 'string' || data['item_metadata'] instanceof String)) {
            throw new Error("Expected the field `item_metadata` to be a primitive type in the JSON string but got " + data['item_metadata']);
        }
        // ensure the json data is a string
        if (data['item_name'] && !(typeof data['item_name'] === 'string' || data['item_name'] instanceof String)) {
            throw new Error("Expected the field `item_name` to be a primitive type in the JSON string but got " + data['item_name']);
        }
        // ensure the json data is a string
        if (data['item_state'] && !(typeof data['item_state'] === 'string' || data['item_state'] instanceof String)) {
            throw new Error("Expected the field `item_state` to be a primitive type in the JSON string but got " + data['item_state']);
        }
        // ensure the json data is a string
        if (data['item_sub_type'] && !(typeof data['item_sub_type'] === 'string' || data['item_sub_type'] instanceof String)) {
            throw new Error("Expected the field `item_sub_type` to be a primitive type in the JSON string but got " + data['item_sub_type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['item_tags'])) {
            throw new Error("Expected the field `item_tags` to be an array in the JSON data but got " + data['item_tags']);
        }
        if (data['item_targets_assoc']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['item_targets_assoc'])) {
                throw new Error("Expected the field `item_targets_assoc` to be an array in the JSON data but got " + data['item_targets_assoc']);
            }
            // validate the optional field `item_targets_assoc` (array)
            for (const item of data['item_targets_assoc']) {
                ItemTargetAssociation.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['item_type'] && !(typeof data['item_type'] === 'string' || data['item_type'] instanceof String)) {
            throw new Error("Expected the field `item_type` to be a primitive type in the JSON string but got " + data['item_type']);
        }
        if (data['item_versions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['item_versions'])) {
                throw new Error("Expected the field `item_versions` to be an array in the JSON data but got " + data['item_versions']);
            }
            // validate the optional field `item_versions` (array)
            for (const item of data['item_versions']) {
                ItemVersion.validateJSON(item);
            };
        }
        // validate the optional field `linked_details`
        if (data['linked_details']) { // data not null
          LinkedDetails.validateJSON(data['linked_details']);
        }
        // ensure the json data is a string
        if (data['protection_key_name'] && !(typeof data['protection_key_name'] === 'string' || data['protection_key_name'] instanceof String)) {
            throw new Error("Expected the field `protection_key_name` to be a primitive type in the JSON string but got " + data['protection_key_name']);
        }
        // ensure the json data is a string
        if (data['protection_key_type'] && !(typeof data['protection_key_type'] === 'string' || data['protection_key_type'] instanceof String)) {
            throw new Error("Expected the field `protection_key_type` to be a primitive type in the JSON string but got " + data['protection_key_type']);
        }
        // ensure the json data is a string
        if (data['public_value'] && !(typeof data['public_value'] === 'string' || data['public_value'] instanceof String)) {
            throw new Error("Expected the field `public_value` to be a primitive type in the JSON string but got " + data['public_value']);
        }
        // validate the optional field `shared_by`
        if (data['shared_by']) { // data not null
          RuleAssigner.validateJSON(data['shared_by']);
        }
        if (data['target_versions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['target_versions'])) {
                throw new Error("Expected the field `target_versions` to be an array in the JSON data but got " + data['target_versions']);
            }
            // validate the optional field `target_versions` (array)
            for (const item of data['target_versions']) {
                TargetItemVersion.validateJSON(item);
            };
        }
        if (data['usc_sync_associated_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['usc_sync_associated_items'])) {
                throw new Error("Expected the field `usc_sync_associated_items` to be an array in the JSON data but got " + data['usc_sync_associated_items']);
            }
            // validate the optional field `usc_sync_associated_items` (array)
            for (const item of data['usc_sync_associated_items']) {
                ItemUSCSyncAssociation.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Date} access_date
 */
Item.prototype['access_date'] = undefined;

/**
 * @member {String} access_date_display
 */
Item.prototype['access_date_display'] = undefined;

/**
 * @member {String} access_request_status
 */
Item.prototype['access_request_status'] = undefined;

/**
 * @member {Boolean} auto_rotate
 */
Item.prototype['auto_rotate'] = undefined;

/**
 * @member {module:model/BastionsList} bastion_details
 */
Item.prototype['bastion_details'] = undefined;

/**
 * @member {String} cert_issuer_signer_key_name
 */
Item.prototype['cert_issuer_signer_key_name'] = undefined;

/**
 * @member {module:model/CertificateIssueInfo} certificate_issue_details
 */
Item.prototype['certificate_issue_details'] = undefined;

/**
 * @member {String} certificates
 */
Item.prototype['certificates'] = undefined;

/**
 * @member {Array.<String>} client_permissions
 */
Item.prototype['client_permissions'] = undefined;

/**
 * @member {Date} creation_date
 */
Item.prototype['creation_date'] = undefined;

/**
 * @member {String} customer_fragment_id
 */
Item.prototype['customer_fragment_id'] = undefined;

/**
 * @member {Boolean} delete_protection
 */
Item.prototype['delete_protection'] = undefined;

/**
 * @member {Date} deletion_date
 */
Item.prototype['deletion_date'] = undefined;

/**
 * @member {String} display_id
 */
Item.prototype['display_id'] = undefined;

/**
 * @member {Array.<module:model/GatewayDetailsForItemReplyObj>} gateway_details
 */
Item.prototype['gateway_details'] = undefined;

/**
 * @member {Boolean} is_access_request_enabled
 */
Item.prototype['is_access_request_enabled'] = undefined;

/**
 * @member {Boolean} is_enabled
 */
Item.prototype['is_enabled'] = undefined;

/**
 * @member {Number} item_accessibility
 */
Item.prototype['item_accessibility'] = undefined;

/**
 * @member {module:model/ItemGeneralInfo} item_general_info
 */
Item.prototype['item_general_info'] = undefined;

/**
 * @member {Number} item_id
 */
Item.prototype['item_id'] = undefined;

/**
 * @member {String} item_metadata
 */
Item.prototype['item_metadata'] = undefined;

/**
 * @member {String} item_name
 */
Item.prototype['item_name'] = undefined;

/**
 * @member {Number} item_size
 */
Item.prototype['item_size'] = undefined;

/**
 * ItemState defines the different states an Item can be in
 * @member {String} item_state
 */
Item.prototype['item_state'] = undefined;

/**
 * @member {String} item_sub_type
 */
Item.prototype['item_sub_type'] = undefined;

/**
 * @member {Array.<String>} item_tags
 */
Item.prototype['item_tags'] = undefined;

/**
 * @member {Array.<module:model/ItemTargetAssociation>} item_targets_assoc
 */
Item.prototype['item_targets_assoc'] = undefined;

/**
 * @member {String} item_type
 */
Item.prototype['item_type'] = undefined;

/**
 * @member {Array.<module:model/ItemVersion>} item_versions
 */
Item.prototype['item_versions'] = undefined;

/**
 * @member {Date} last_rotation_date
 */
Item.prototype['last_rotation_date'] = undefined;

/**
 * @member {Number} last_version
 */
Item.prototype['last_version'] = undefined;

/**
 * @member {module:model/LinkedDetails} linked_details
 */
Item.prototype['linked_details'] = undefined;

/**
 * @member {Date} modification_date
 */
Item.prototype['modification_date'] = undefined;

/**
 * @member {Date} next_rotation_date
 */
Item.prototype['next_rotation_date'] = undefined;

/**
 * @member {String} protection_key_name
 */
Item.prototype['protection_key_name'] = undefined;

/**
 * @member {String} protection_key_type
 */
Item.prototype['protection_key_type'] = undefined;

/**
 * @member {String} public_value
 */
Item.prototype['public_value'] = undefined;

/**
 * @member {Number} rotation_interval
 */
Item.prototype['rotation_interval'] = undefined;

/**
 * @member {module:model/RuleAssigner} shared_by
 */
Item.prototype['shared_by'] = undefined;

/**
 * @member {Array.<module:model/TargetItemVersion>} target_versions
 */
Item.prototype['target_versions'] = undefined;

/**
 * for USC item, hold rotated-secrets that are associated to him for rotated-secret, holds the associated USCs
 * @member {Array.<module:model/ItemUSCSyncAssociation>} usc_sync_associated_items
 */
Item.prototype['usc_sync_associated_items'] = undefined;

/**
 * @member {Boolean} with_customer_fragment
 */
Item.prototype['with_customer_fragment'] = undefined;






export default Item;

