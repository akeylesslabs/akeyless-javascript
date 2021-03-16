/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GatewayCreateProducerMongo model module.
 * @module model/GatewayCreateProducerMongo
 * @version 1.0
 */
class GatewayCreateProducerMongo {
    /**
     * Constructs a new <code>GatewayCreateProducerMongo</code>.
     * gatewayCreateProducerMongo is a command that creates either mongodb  producer or mongodb atlas producer
     * @alias module:model/GatewayCreateProducerMongo
     * @param mongodbName {String} MongoDB Name
     * @param name {String} Producer name
     */
    constructor(mongodbName, name) { 
        
        GatewayCreateProducerMongo.initialize(this, mongodbName, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mongodbName, name) { 
        obj['mongodb-name'] = mongodbName;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayCreateProducerMongo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerMongo} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerMongo} The populated <code>GatewayCreateProducerMongo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerMongo();

            if (data.hasOwnProperty('gateway-url')) {
                obj['gateway-url'] = ApiClient.convertToType(data['gateway-url'], 'String');
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
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
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
 * Gateway url
 * @member {String} gateway-url
 * @default 'http://localhost:8000'
 */
GatewayCreateProducerMongo.prototype['gateway-url'] = 'http://localhost:8000';

/**
 * MongoDB Atlas private key
 * @member {String} mongodb-atlas-api-private-key
 */
GatewayCreateProducerMongo.prototype['mongodb-atlas-api-private-key'] = undefined;

/**
 * MongoDB Atlas public key
 * @member {String} mongodb-atlas-api-public-key
 */
GatewayCreateProducerMongo.prototype['mongodb-atlas-api-public-key'] = undefined;

/**
 * MongoDB Atlas project ID
 * @member {String} mongodb-atlas-project-id
 */
GatewayCreateProducerMongo.prototype['mongodb-atlas-project-id'] = undefined;

/**
 * MongoDB server default authentication database
 * @member {String} mongodb-default-auth-db
 */
GatewayCreateProducerMongo.prototype['mongodb-default-auth-db'] = undefined;

/**
 * MongoDB server host and port
 * @member {String} mongodb-host-port
 */
GatewayCreateProducerMongo.prototype['mongodb-host-port'] = undefined;

/**
 * MongoDB Name
 * @member {String} mongodb-name
 */
GatewayCreateProducerMongo.prototype['mongodb-name'] = undefined;

/**
 * MongoDB server password. You will prompted to provide a password if it will not appear in CLI parameters
 * @member {String} mongodb-password
 */
GatewayCreateProducerMongo.prototype['mongodb-password'] = undefined;

/**
 * MongoDB Roles
 * @member {String} mongodb-roles
 * @default '[]'
 */
GatewayCreateProducerMongo.prototype['mongodb-roles'] = '[]';

/**
 * MongoDB server URI
 * @member {String} mongodb-server-uri
 */
GatewayCreateProducerMongo.prototype['mongodb-server-uri'] = undefined;

/**
 * MongoDB server URI options
 * @member {String} mongodb-uri-options
 */
GatewayCreateProducerMongo.prototype['mongodb-uri-options'] = undefined;

/**
 * MongoDB server username
 * @member {String} mongodb-username
 */
GatewayCreateProducerMongo.prototype['mongodb-username'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerMongo.prototype['name'] = undefined;

/**
 * Encrypt producer with following key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerMongo.prototype['producer-encryption-key-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerMongo.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerMongo.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerMongo.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerMongo;

