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
 * The ChefTargetDetails model module.
 * @module model/ChefTargetDetails
 * @version 3.5.1
 */
class ChefTargetDetails {
    /**
     * Constructs a new <code>ChefTargetDetails</code>.
     * ChefTargetDetails
     * @alias module:model/ChefTargetDetails
     */
    constructor() { 
        
        ChefTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChefTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChefTargetDetails} obj Optional instance to populate.
     * @return {module:model/ChefTargetDetails} The populated <code>ChefTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChefTargetDetails();

            if (data.hasOwnProperty('chef_server_host_name')) {
                obj['chef_server_host_name'] = ApiClient.convertToType(data['chef_server_host_name'], 'String');
            }
            if (data.hasOwnProperty('chef_server_key')) {
                obj['chef_server_key'] = ApiClient.convertToType(data['chef_server_key'], 'String');
            }
            if (data.hasOwnProperty('chef_server_port')) {
                obj['chef_server_port'] = ApiClient.convertToType(data['chef_server_port'], 'String');
            }
            if (data.hasOwnProperty('chef_server_url')) {
                obj['chef_server_url'] = ApiClient.convertToType(data['chef_server_url'], 'String');
            }
            if (data.hasOwnProperty('chef_server_username')) {
                obj['chef_server_username'] = ApiClient.convertToType(data['chef_server_username'], 'String');
            }
            if (data.hasOwnProperty('chef_skip_ssl')) {
                obj['chef_skip_ssl'] = ApiClient.convertToType(data['chef_skip_ssl'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} chef_server_host_name
 */
ChefTargetDetails.prototype['chef_server_host_name'] = undefined;

/**
 * @member {String} chef_server_key
 */
ChefTargetDetails.prototype['chef_server_key'] = undefined;

/**
 * @member {String} chef_server_port
 */
ChefTargetDetails.prototype['chef_server_port'] = undefined;

/**
 * @member {String} chef_server_url
 */
ChefTargetDetails.prototype['chef_server_url'] = undefined;

/**
 * @member {String} chef_server_username
 */
ChefTargetDetails.prototype['chef_server_username'] = undefined;

/**
 * @member {Boolean} chef_skip_ssl
 */
ChefTargetDetails.prototype['chef_skip_ssl'] = undefined;






export default ChefTargetDetails;

