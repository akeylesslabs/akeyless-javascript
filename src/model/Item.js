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
import GatewayBasicInfo from './GatewayBasicInfo';
import ItemGeneralInfo from './ItemGeneralInfo';
import ItemTargetAssociation from './ItemTargetAssociation';
import ItemVersion from './ItemVersion';
import LinkedDetails from './LinkedDetails';
import RuleAssigner from './RuleAssigner';
import TargetItemVersion from './TargetItemVersion';

/**
 * The Item model module.
 * @module model/Item
 * @version 3.5.1
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
                obj['gateway_details'] = ApiClient.convertToType(data['gateway_details'], [GatewayBasicInfo]);
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
            if (data.hasOwnProperty('with_customer_fragment')) {
                obj['with_customer_fragment'] = ApiClient.convertToType(data['with_customer_fragment'], 'Boolean');
            }
        }
        return obj;
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
 * @member {Array.<module:model/GatewayBasicInfo>} gateway_details
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
 * @member {Boolean} with_customer_fragment
 */
Item.prototype['with_customer_fragment'] = undefined;






export default Item;

