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
 * The GatewayCreateProducerAws model module.
 * @module model/GatewayCreateProducerAws
 * @version 2.15.26
 */
class GatewayCreateProducerAws {
    /**
     * Constructs a new <code>GatewayCreateProducerAws</code>.
     * gatewayCreateProducerAws is a command that creates aws producer
     * @alias module:model/GatewayCreateProducerAws
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerAws.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerAws</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerAws} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerAws} The populated <code>GatewayCreateProducerAws</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerAws();

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
            if (data.hasOwnProperty('enable-admin-rotation')) {
                obj['enable-admin-rotation'] = ApiClient.convertToType(data['enable-admin-rotation'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access-mode
 */
GatewayCreateProducerAws.prototype['access-mode'] = undefined;

/**
 * Admin credentials rotation interval (days)
 * @member {Number} admin-rotation-interval-days
 * @default 0
 */
GatewayCreateProducerAws.prototype['admin-rotation-interval-days'] = 0;

/**
 * Access Key ID
 * @member {String} aws-access-key-id
 */
GatewayCreateProducerAws.prototype['aws-access-key-id'] = undefined;

/**
 * Secret Access Key
 * @member {String} aws-access-secret-key
 */
GatewayCreateProducerAws.prototype['aws-access-secret-key'] = undefined;

/**
 * AWS Role ARNs to be used in the Assume Role operation (relevant only for assume_role mode)
 * @member {String} aws-role-arns
 */
GatewayCreateProducerAws.prototype['aws-role-arns'] = undefined;

/**
 * AWS User console access
 * @member {Boolean} aws-user-console-access
 * @default false
 */
GatewayCreateProducerAws.prototype['aws-user-console-access'] = false;

/**
 * AWS User groups
 * @member {String} aws-user-groups
 */
GatewayCreateProducerAws.prototype['aws-user-groups'] = undefined;

/**
 * AWS User policies
 * @member {String} aws-user-policies
 */
GatewayCreateProducerAws.prototype['aws-user-policies'] = undefined;

/**
 * AWS User programmatic access
 * @member {Boolean} aws-user-programmatic-access
 * @default true
 */
GatewayCreateProducerAws.prototype['aws-user-programmatic-access'] = true;

/**
 * Automatic admin credentials rotation
 * @member {Boolean} enable-admin-rotation
 * @default false
 */
GatewayCreateProducerAws.prototype['enable-admin-rotation'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerAws.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerAws.prototype['password'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerAws.prototype['producer-encryption-key-name'] = undefined;

/**
 * Region
 * @member {String} region
 * @default 'us-east-2'
 */
GatewayCreateProducerAws.prototype['region'] = 'us-east-2';

/**
 * @member {String} secure-access-aws-account-id
 */
GatewayCreateProducerAws.prototype['secure-access-aws-account-id'] = undefined;

/**
 * @member {Boolean} secure-access-aws-native-cli
 */
GatewayCreateProducerAws.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
GatewayCreateProducerAws.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayCreateProducerAws.prototype['secure-access-enable'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayCreateProducerAws.prototype['secure-access-web'] = undefined;

/**
 * @member {Boolean} secure-access-web-browsing
 */
GatewayCreateProducerAws.prototype['secure-access-web-browsing'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayCreateProducerAws.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerAws.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerAws.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerAws.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerAws.prototype['user-ttl'] = '60m';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerAws.prototype['username'] = undefined;






export default GatewayCreateProducerAws;

