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
 * The GatewayUpdateProducerMongo model module.
 * @module model/GatewayUpdateProducerMongo
 * @version 2.16.10
 */
class GatewayUpdateProducerMongo {
    /**
     * Constructs a new <code>GatewayUpdateProducerMongo</code>.
     * gatewayUpdateProducerMongo is a command that updates either mongodb  producer or mongodb atlas producer
     * @alias module:model/GatewayUpdateProducerMongo
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerMongo.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerMongo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerMongo} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerMongo} The populated <code>GatewayUpdateProducerMongo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerMongo();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('mongodb-atlas-api-private-key')) {
                obj['mongodb-atlas-api-private-key'] = ApiClient.convertToType(data['mongodb-atlas-api-private-key'], 'String');
            }
            if (data.hasOwnProperty('mongodb-atlas-api-public-key')) {
                obj['mongodb-atlas-api-public-key'] = ApiClient.convertToType(data['mongodb-atlas-api-public-key'], 'String');
            }
            if (data.hasOwnProperty('mongodb-atlas-project-id')) {
                obj['mongodb-atlas-project-id'] = ApiClient.convertToType(data['mongodb-atlas-project-id'], 'String');
            }
            if (data.hasOwnProperty('mongodb-custom-data')) {
                obj['mongodb-custom-data'] = ApiClient.convertToType(data['mongodb-custom-data'], 'String');
            }
            if (data.hasOwnProperty('mongodb-default-auth-db')) {
                obj['mongodb-default-auth-db'] = ApiClient.convertToType(data['mongodb-default-auth-db'], 'String');
            }
            if (data.hasOwnProperty('mongodb-host-port')) {
                obj['mongodb-host-port'] = ApiClient.convertToType(data['mongodb-host-port'], 'String');
            }
            if (data.hasOwnProperty('mongodb-name')) {
                obj['mongodb-name'] = ApiClient.convertToType(data['mongodb-name'], 'String');
            }
            if (data.hasOwnProperty('mongodb-password')) {
                obj['mongodb-password'] = ApiClient.convertToType(data['mongodb-password'], 'String');
            }
            if (data.hasOwnProperty('mongodb-roles')) {
                obj['mongodb-roles'] = ApiClient.convertToType(data['mongodb-roles'], 'String');
            }
            if (data.hasOwnProperty('mongodb-server-uri')) {
                obj['mongodb-server-uri'] = ApiClient.convertToType(data['mongodb-server-uri'], 'String');
            }
            if (data.hasOwnProperty('mongodb-uri-options')) {
                obj['mongodb-uri-options'] = ApiClient.convertToType(data['mongodb-uri-options'], 'String');
            }
            if (data.hasOwnProperty('mongodb-username')) {
                obj['mongodb-username'] = ApiClient.convertToType(data['mongodb-username'], 'String');
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
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
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
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayUpdateProducerMongo.prototype['delete_protection'] = undefined;

/**
 * MongoDB Atlas private key
 * @member {String} mongodb-atlas-api-private-key
 */
GatewayUpdateProducerMongo.prototype['mongodb-atlas-api-private-key'] = undefined;

/**
 * MongoDB Atlas public key
 * @member {String} mongodb-atlas-api-public-key
 */
GatewayUpdateProducerMongo.prototype['mongodb-atlas-api-public-key'] = undefined;

/**
 * MongoDB Atlas project ID
 * @member {String} mongodb-atlas-project-id
 */
GatewayUpdateProducerMongo.prototype['mongodb-atlas-project-id'] = undefined;

/**
 * MongoDB custom data
 * @member {String} mongodb-custom-data
 */
GatewayUpdateProducerMongo.prototype['mongodb-custom-data'] = undefined;

/**
 * MongoDB server default authentication database
 * @member {String} mongodb-default-auth-db
 */
GatewayUpdateProducerMongo.prototype['mongodb-default-auth-db'] = undefined;

/**
 * MongoDB server host and port
 * @member {String} mongodb-host-port
 */
GatewayUpdateProducerMongo.prototype['mongodb-host-port'] = undefined;

/**
 * MongoDB Name
 * @member {String} mongodb-name
 */
GatewayUpdateProducerMongo.prototype['mongodb-name'] = undefined;

/**
 * MongoDB server password. You will prompted to provide a password if it will not appear in CLI parameters
 * @member {String} mongodb-password
 */
GatewayUpdateProducerMongo.prototype['mongodb-password'] = undefined;

/**
 * MongoDB Roles
 * @member {String} mongodb-roles
 * @default '[]'
 */
GatewayUpdateProducerMongo.prototype['mongodb-roles'] = '[]';

/**
 * MongoDB server URI
 * @member {String} mongodb-server-uri
 */
GatewayUpdateProducerMongo.prototype['mongodb-server-uri'] = undefined;

/**
 * MongoDB server URI options
 * @member {String} mongodb-uri-options
 */
GatewayUpdateProducerMongo.prototype['mongodb-uri-options'] = undefined;

/**
 * MongoDB server username
 * @member {String} mongodb-username
 */
GatewayUpdateProducerMongo.prototype['mongodb-username'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerMongo.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerMongo.prototype['new-name'] = undefined;

/**
 * Encrypt producer with following key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerMongo.prototype['producer-encryption-key-name'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
GatewayUpdateProducerMongo.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerMongo.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
GatewayUpdateProducerMongo.prototype['secure-access-host'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayUpdateProducerMongo.prototype['secure-access-web'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerMongo.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerMongo.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerMongo.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerMongo.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerMongo.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerMongo;

