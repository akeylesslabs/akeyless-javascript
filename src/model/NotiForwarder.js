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
import EmailEntry from './EmailEntry';
import ItemVersion from './ItemVersion';
import WebHookNotiForwarderPublicDetails from './WebHookNotiForwarderPublicDetails';

/**
 * The NotiForwarder model module.
 * @module model/NotiForwarder
 * @version 4.3.0
 */
class NotiForwarder {
    /**
     * Constructs a new <code>NotiForwarder</code>.
     * @alias module:model/NotiForwarder
     */
    constructor() { 
        
        NotiForwarder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotiForwarder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotiForwarder} obj Optional instance to populate.
     * @return {module:model/NotiForwarder} The populated <code>NotiForwarder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotiForwarder();

            if (data.hasOwnProperty('auth_type')) {
                obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_permissions')) {
                obj['client_permissions'] = ApiClient.convertToType(data['client_permissions'], ['String']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
            }
            if (data.hasOwnProperty('event_types')) {
                obj['event_types'] = ApiClient.convertToType(data['event_types'], ['String']);
            }
            if (data.hasOwnProperty('gateway_cluster_id')) {
                obj['gateway_cluster_id'] = ApiClient.convertToType(data['gateway_cluster_id'], 'Number');
            }
            if (data.hasOwnProperty('include_error')) {
                obj['include_error'] = ApiClient.convertToType(data['include_error'], 'Boolean');
            }
            if (data.hasOwnProperty('is_enabled')) {
                obj['is_enabled'] = ApiClient.convertToType(data['is_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('last_version')) {
                obj['last_version'] = ApiClient.convertToType(data['last_version'], 'Number');
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'Date');
            }
            if (data.hasOwnProperty('noti_forwarder_id')) {
                obj['noti_forwarder_id'] = ApiClient.convertToType(data['noti_forwarder_id'], 'Number');
            }
            if (data.hasOwnProperty('noti_forwarder_name')) {
                obj['noti_forwarder_name'] = ApiClient.convertToType(data['noti_forwarder_name'], 'String');
            }
            if (data.hasOwnProperty('noti_forwarder_type')) {
                obj['noti_forwarder_type'] = ApiClient.convertToType(data['noti_forwarder_type'], 'String');
            }
            if (data.hasOwnProperty('noti_forwarder_versions')) {
                obj['noti_forwarder_versions'] = ApiClient.convertToType(data['noti_forwarder_versions'], [ItemVersion]);
            }
            if (data.hasOwnProperty('override_url')) {
                obj['override_url'] = ApiClient.convertToType(data['override_url'], 'String');
            }
            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], ['String']);
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('runner_type')) {
                obj['runner_type'] = ApiClient.convertToType(data['runner_type'], 'String');
            }
            if (data.hasOwnProperty('slack_noti_forwarder_public_details')) {
                obj['slack_noti_forwarder_public_details'] = ApiClient.convertToType(data['slack_noti_forwarder_public_details'], Object);
            }
            if (data.hasOwnProperty('timespan_in_seconds')) {
                obj['timespan_in_seconds'] = ApiClient.convertToType(data['timespan_in_seconds'], 'Number');
            }
            if (data.hasOwnProperty('to_emails')) {
                obj['to_emails'] = ApiClient.convertToType(data['to_emails'], [EmailEntry]);
            }
            if (data.hasOwnProperty('user_email')) {
                obj['user_email'] = ApiClient.convertToType(data['user_email'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('webhook_noti_forwarder_public_details')) {
                obj['webhook_noti_forwarder_public_details'] = WebHookNotiForwarderPublicDetails.constructFromObject(data['webhook_noti_forwarder_public_details']);
            }
            if (data.hasOwnProperty('with_customer_fragment')) {
                obj['with_customer_fragment'] = ApiClient.convertToType(data['with_customer_fragment'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} auth_type
 */
NotiForwarder.prototype['auth_type'] = undefined;

/**
 * Auth - JWT
 * @member {String} client_id
 */
NotiForwarder.prototype['client_id'] = undefined;

/**
 * @member {Array.<String>} client_permissions
 */
NotiForwarder.prototype['client_permissions'] = undefined;

/**
 * @member {String} comment
 */
NotiForwarder.prototype['comment'] = undefined;

/**
 * @member {Date} creation_date
 */
NotiForwarder.prototype['creation_date'] = undefined;

/**
 * @member {String} endpoint
 */
NotiForwarder.prototype['endpoint'] = undefined;

/**
 * @member {Array.<String>} event_types
 */
NotiForwarder.prototype['event_types'] = undefined;

/**
 * @member {Number} gateway_cluster_id
 */
NotiForwarder.prototype['gateway_cluster_id'] = undefined;

/**
 * @member {Boolean} include_error
 */
NotiForwarder.prototype['include_error'] = undefined;

/**
 * @member {Boolean} is_enabled
 */
NotiForwarder.prototype['is_enabled'] = undefined;

/**
 * @member {Number} last_version
 */
NotiForwarder.prototype['last_version'] = undefined;

/**
 * @member {Date} modification_date
 */
NotiForwarder.prototype['modification_date'] = undefined;

/**
 * @member {Number} noti_forwarder_id
 */
NotiForwarder.prototype['noti_forwarder_id'] = undefined;

/**
 * @member {String} noti_forwarder_name
 */
NotiForwarder.prototype['noti_forwarder_name'] = undefined;

/**
 * @member {String} noti_forwarder_type
 */
NotiForwarder.prototype['noti_forwarder_type'] = undefined;

/**
 * @member {Array.<module:model/ItemVersion>} noti_forwarder_versions
 */
NotiForwarder.prototype['noti_forwarder_versions'] = undefined;

/**
 * @member {String} override_url
 */
NotiForwarder.prototype['override_url'] = undefined;

/**
 * @member {Array.<String>} paths
 */
NotiForwarder.prototype['paths'] = undefined;

/**
 * @member {String} protection_key
 */
NotiForwarder.prototype['protection_key'] = undefined;

/**
 * @member {String} runner_type
 */
NotiForwarder.prototype['runner_type'] = undefined;

/**
 * @member {Object} slack_noti_forwarder_public_details
 */
NotiForwarder.prototype['slack_noti_forwarder_public_details'] = undefined;

/**
 * @member {Number} timespan_in_seconds
 */
NotiForwarder.prototype['timespan_in_seconds'] = undefined;

/**
 * @member {Array.<module:model/EmailEntry>} to_emails
 */
NotiForwarder.prototype['to_emails'] = undefined;

/**
 * @member {String} user_email
 */
NotiForwarder.prototype['user_email'] = undefined;

/**
 * Auth - User Password
 * @member {String} username
 */
NotiForwarder.prototype['username'] = undefined;

/**
 * @member {module:model/WebHookNotiForwarderPublicDetails} webhook_noti_forwarder_public_details
 */
NotiForwarder.prototype['webhook_noti_forwarder_public_details'] = undefined;

/**
 * @member {Boolean} with_customer_fragment
 */
NotiForwarder.prototype['with_customer_fragment'] = undefined;






export default NotiForwarder;

