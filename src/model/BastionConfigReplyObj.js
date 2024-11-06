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
import BastionGlobalConf from './BastionGlobalConf';
import SshBastionConf from './SshBastionConf';
import WebBastionConf from './WebBastionConf';

/**
 * The BastionConfigReplyObj model module.
 * @module model/BastionConfigReplyObj
 * @version 4.3.0
 */
class BastionConfigReplyObj {
    /**
     * Constructs a new <code>BastionConfigReplyObj</code>.
     * @alias module:model/BastionConfigReplyObj
     */
    constructor() { 
        
        BastionConfigReplyObj.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BastionConfigReplyObj</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BastionConfigReplyObj} obj Optional instance to populate.
     * @return {module:model/BastionConfigReplyObj} The populated <code>BastionConfigReplyObj</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BastionConfigReplyObj();

            if (data.hasOwnProperty('api_gateway_url')) {
                obj['api_gateway_url'] = ApiClient.convertToType(data['api_gateway_url'], 'String');
            }
            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
            }
            if (data.hasOwnProperty('gator_cluster_id')) {
                obj['gator_cluster_id'] = ApiClient.convertToType(data['gator_cluster_id'], 'Number');
            }
            if (data.hasOwnProperty('global')) {
                obj['global'] = BastionGlobalConf.constructFromObject(data['global']);
            }
            if (data.hasOwnProperty('ssh_bastion')) {
                obj['ssh_bastion'] = SshBastionConf.constructFromObject(data['ssh_bastion']);
            }
            if (data.hasOwnProperty('web_bastion')) {
                obj['web_bastion'] = WebBastionConf.constructFromObject(data['web_bastion']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} api_gateway_url
 */
BastionConfigReplyObj.prototype['api_gateway_url'] = undefined;

/**
 * @member {String} cluster_id
 */
BastionConfigReplyObj.prototype['cluster_id'] = undefined;

/**
 * @member {Number} gator_cluster_id
 */
BastionConfigReplyObj.prototype['gator_cluster_id'] = undefined;

/**
 * @member {module:model/BastionGlobalConf} global
 */
BastionConfigReplyObj.prototype['global'] = undefined;

/**
 * @member {module:model/SshBastionConf} ssh_bastion
 */
BastionConfigReplyObj.prototype['ssh_bastion'] = undefined;

/**
 * @member {module:model/WebBastionConf} web_bastion
 */
BastionConfigReplyObj.prototype['web_bastion'] = undefined;






export default BastionConfigReplyObj;
