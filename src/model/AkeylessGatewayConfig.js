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
import AdminsConfigPart from './AdminsConfigPart';
import CFConfigPart from './CFConfigPart';
import CacheConfigPart from './CacheConfigPart';
import DefaultConfigPart from './DefaultConfigPart';
import GatewayMessageQueueInfo from './GatewayMessageQueueInfo';
import GeneralConfigPart from './GeneralConfigPart';
import K8SAuthsConfigPart from './K8SAuthsConfigPart';
import KMIPConfigPart from './KMIPConfigPart';
import LdapConfigPart from './LdapConfigPart';
import LeadershipConfigPart from './LeadershipConfigPart';
import LogForwardingConfigPart from './LogForwardingConfigPart';
import MigrationsConfigPart from './MigrationsConfigPart';
import ProducersConfigPart from './ProducersConfigPart';
import RotatorsConfigPart from './RotatorsConfigPart';
import UIdentityConfigPart from './UIdentityConfigPart';

/**
 * The AkeylessGatewayConfig model module.
 * @module model/AkeylessGatewayConfig
 * @version 2.15.23
 */
class AkeylessGatewayConfig {
    /**
     * Constructs a new <code>AkeylessGatewayConfig</code>.
     * @alias module:model/AkeylessGatewayConfig
     */
    constructor() { 
        
        AkeylessGatewayConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AkeylessGatewayConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AkeylessGatewayConfig} obj Optional instance to populate.
     * @return {module:model/AkeylessGatewayConfig} The populated <code>AkeylessGatewayConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AkeylessGatewayConfig();

            if (data.hasOwnProperty('admins')) {
                obj['admins'] = AdminsConfigPart.constructFromObject(data['admins']);
            }
            if (data.hasOwnProperty('cache')) {
                obj['cache'] = CacheConfigPart.constructFromObject(data['cache']);
            }
            if (data.hasOwnProperty('cf')) {
                obj['cf'] = CFConfigPart.constructFromObject(data['cf']);
            }
            if (data.hasOwnProperty('config_protection_key_name')) {
                obj['config_protection_key_name'] = ApiClient.convertToType(data['config_protection_key_name'], 'String');
            }
            if (data.hasOwnProperty('general')) {
                obj['general'] = GeneralConfigPart.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('k8s_auths')) {
                obj['k8s_auths'] = K8SAuthsConfigPart.constructFromObject(data['k8s_auths']);
            }
            if (data.hasOwnProperty('kmip_clients')) {
                obj['kmip_clients'] = KMIPConfigPart.constructFromObject(data['kmip_clients']);
            }
            if (data.hasOwnProperty('ldap')) {
                obj['ldap'] = LdapConfigPart.constructFromObject(data['ldap']);
            }
            if (data.hasOwnProperty('leadership')) {
                obj['leadership'] = LeadershipConfigPart.constructFromObject(data['leadership']);
            }
            if (data.hasOwnProperty('log_forwarding')) {
                obj['log_forwarding'] = LogForwardingConfigPart.constructFromObject(data['log_forwarding']);
            }
            if (data.hasOwnProperty('message_queue_info')) {
                obj['message_queue_info'] = GatewayMessageQueueInfo.constructFromObject(data['message_queue_info']);
            }
            if (data.hasOwnProperty('migrations')) {
                obj['migrations'] = MigrationsConfigPart.constructFromObject(data['migrations']);
            }
            if (data.hasOwnProperty('producers')) {
                obj['producers'] = ProducersConfigPart.constructFromObject(data['producers']);
            }
            if (data.hasOwnProperty('rotators')) {
                obj['rotators'] = RotatorsConfigPart.constructFromObject(data['rotators']);
            }
            if (data.hasOwnProperty('saml')) {
                obj['saml'] = DefaultConfigPart.constructFromObject(data['saml']);
            }
            if (data.hasOwnProperty('uidentity')) {
                obj['uidentity'] = UIdentityConfigPart.constructFromObject(data['uidentity']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AdminsConfigPart} admins
 */
AkeylessGatewayConfig.prototype['admins'] = undefined;

/**
 * @member {module:model/CacheConfigPart} cache
 */
AkeylessGatewayConfig.prototype['cache'] = undefined;

/**
 * @member {module:model/CFConfigPart} cf
 */
AkeylessGatewayConfig.prototype['cf'] = undefined;

/**
 * @member {String} config_protection_key_name
 */
AkeylessGatewayConfig.prototype['config_protection_key_name'] = undefined;

/**
 * @member {module:model/GeneralConfigPart} general
 */
AkeylessGatewayConfig.prototype['general'] = undefined;

/**
 * @member {module:model/K8SAuthsConfigPart} k8s_auths
 */
AkeylessGatewayConfig.prototype['k8s_auths'] = undefined;

/**
 * @member {module:model/KMIPConfigPart} kmip_clients
 */
AkeylessGatewayConfig.prototype['kmip_clients'] = undefined;

/**
 * @member {module:model/LdapConfigPart} ldap
 */
AkeylessGatewayConfig.prototype['ldap'] = undefined;

/**
 * @member {module:model/LeadershipConfigPart} leadership
 */
AkeylessGatewayConfig.prototype['leadership'] = undefined;

/**
 * @member {module:model/LogForwardingConfigPart} log_forwarding
 */
AkeylessGatewayConfig.prototype['log_forwarding'] = undefined;

/**
 * @member {module:model/GatewayMessageQueueInfo} message_queue_info
 */
AkeylessGatewayConfig.prototype['message_queue_info'] = undefined;

/**
 * @member {module:model/MigrationsConfigPart} migrations
 */
AkeylessGatewayConfig.prototype['migrations'] = undefined;

/**
 * @member {module:model/ProducersConfigPart} producers
 */
AkeylessGatewayConfig.prototype['producers'] = undefined;

/**
 * @member {module:model/RotatorsConfigPart} rotators
 */
AkeylessGatewayConfig.prototype['rotators'] = undefined;

/**
 * @member {module:model/DefaultConfigPart} saml
 */
AkeylessGatewayConfig.prototype['saml'] = undefined;

/**
 * @member {module:model/UIdentityConfigPart} uidentity
 */
AkeylessGatewayConfig.prototype['uidentity'] = undefined;

/**
 * @member {Number} version
 */
AkeylessGatewayConfig.prototype['version'] = undefined;






export default AkeylessGatewayConfig;

