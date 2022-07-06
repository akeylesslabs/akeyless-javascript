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
 * The GatewayUpdateProducerAws model module.
 * @module model/GatewayUpdateProducerAws
 * @version 2.16.11
 */
class GatewayUpdateProducerAws {
    /**
     * Constructs a new <code>GatewayUpdateProducerAws</code>.
     * gatewayUpdateProducerAws is a command that Updates aws producer
     * @alias module:model/GatewayUpdateProducerAws
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerAws.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayUpdateProducerAws</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerAws} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerAws} The populated <code>GatewayUpdateProducerAws</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerAws();

            if (data.hasOwnProperty('access-mode')) {
                obj['access-mode'] = ApiClient.convertToType(data['access-mode'], 'String');
            }
            if (data.hasOwnProperty('admin-rotation-interval-days')) {
                obj['admin-rotation-interval-days'] = ApiClient.convertToType(data['admin-rotation-interval-days'], 'Number');
            }
            if (data.hasOwnProperty('aws-access-key-id')) {
                obj['aws-access-key-id'] = ApiClient.convertToType(data['aws-access-key-id'], 'String');
            }
            if (data.hasOwnProperty('aws-access-secret-key')) {
                obj['aws-access-secret-key'] = ApiClient.convertToType(data['aws-access-secret-key'], 'String');
            }
            if (data.hasOwnProperty('aws-role-arns')) {
                obj['aws-role-arns'] = ApiClient.convertToType(data['aws-role-arns'], 'String');
            }
            if (data.hasOwnProperty('aws-user-console-access')) {
                obj['aws-user-console-access'] = ApiClient.convertToType(data['aws-user-console-access'], 'Boolean');
            }
            if (data.hasOwnProperty('aws-user-groups')) {
                obj['aws-user-groups'] = ApiClient.convertToType(data['aws-user-groups'], 'String');
            }
            if (data.hasOwnProperty('aws-user-policies')) {
                obj['aws-user-policies'] = ApiClient.convertToType(data['aws-user-policies'], 'String');
            }
            if (data.hasOwnProperty('aws-user-programmatic-access')) {
                obj['aws-user-programmatic-access'] = ApiClient.convertToType(data['aws-user-programmatic-access'], 'Boolean');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('enable-admin-rotation')) {
                obj['enable-admin-rotation'] = ApiClient.convertToType(data['enable-admin-rotation'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-account-id')) {
                obj['secure-access-aws-account-id'] = ApiClient.convertToType(data['secure-access-aws-account-id'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-native-cli')) {
                obj['secure-access-aws-native-cli'] = ApiClient.convertToType(data['secure-access-aws-native-cli'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access-mode
 */
GatewayUpdateProducerAws.prototype['access-mode'] = undefined;

/**
 * Admin credentials rotation interval (days)
 * @member {Number} admin-rotation-interval-days
 * @default 0
 */
GatewayUpdateProducerAws.prototype['admin-rotation-interval-days'] = 0;

/**
 * Access Key ID
 * @member {String} aws-access-key-id
 */
GatewayUpdateProducerAws.prototype['aws-access-key-id'] = undefined;

/**
 * Secret Access Key
 * @member {String} aws-access-secret-key
 */
GatewayUpdateProducerAws.prototype['aws-access-secret-key'] = undefined;

/**
 * AWS Role ARNs to be used in the Assume Role operation (relevant only for assume_role mode)
 * @member {String} aws-role-arns
 */
GatewayUpdateProducerAws.prototype['aws-role-arns'] = undefined;

/**
 * AWS User console access
 * @member {Boolean} aws-user-console-access
 * @default false
 */
GatewayUpdateProducerAws.prototype['aws-user-console-access'] = false;

/**
 * AWS User groups
 * @member {String} aws-user-groups
 */
GatewayUpdateProducerAws.prototype['aws-user-groups'] = undefined;

/**
 * AWS User policies
 * @member {String} aws-user-policies
 */
GatewayUpdateProducerAws.prototype['aws-user-policies'] = undefined;

/**
 * AWS User programmatic access
 * @member {Boolean} aws-user-programmatic-access
 * @default true
 */
GatewayUpdateProducerAws.prototype['aws-user-programmatic-access'] = true;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayUpdateProducerAws.prototype['delete_protection'] = undefined;

/**
 * Automatic admin credentials rotation
 * @member {Boolean} enable-admin-rotation
 * @default false
 */
GatewayUpdateProducerAws.prototype['enable-admin-rotation'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerAws.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerAws.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerAws.prototype['producer-encryption-key-name'] = undefined;

/**
 * Region
 * @member {String} region
 * @default 'us-east-2'
 */
GatewayUpdateProducerAws.prototype['region'] = 'us-east-2';

/**
 * @member {String} secure-access-aws-account-id
 */
GatewayUpdateProducerAws.prototype['secure-access-aws-account-id'] = undefined;

/**
 * @member {Boolean} secure-access-aws-native-cli
 */
GatewayUpdateProducerAws.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
GatewayUpdateProducerAws.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerAws.prototype['secure-access-enable'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayUpdateProducerAws.prototype['secure-access-web'] = undefined;

/**
 * @member {Boolean} secure-access-web-browsing
 */
GatewayUpdateProducerAws.prototype['secure-access-web-browsing'] = undefined;

/**
 * @member {Boolean} secure-access-web-proxy
 */
GatewayUpdateProducerAws.prototype['secure-access-web-proxy'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerAws.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerAws.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerAws.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerAws.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerAws.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerAws;

