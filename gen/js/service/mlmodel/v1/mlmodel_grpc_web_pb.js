/**
 * @fileoverview gRPC-Web generated client stub for viam.service.mlmodel.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: service/mlmodel/v1/mlmodel.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.viam = {};
proto.viam.service = {};
proto.viam.service.mlmodel = {};
proto.viam.service.mlmodel.v1 = require('./mlmodel_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.mlmodel.v1.MLModelServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.viam.service.mlmodel.v1.MLModelServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.mlmodel.v1.InferRequest,
 *   !proto.viam.service.mlmodel.v1.InferResponse>}
 */
const methodDescriptor_MLModelService_Infer = new grpc.web.MethodDescriptor(
  '/viam.service.mlmodel.v1.MLModelService/Infer',
  grpc.web.MethodType.UNARY,
  proto.viam.service.mlmodel.v1.InferRequest,
  proto.viam.service.mlmodel.v1.InferResponse,
  /**
   * @param {!proto.viam.service.mlmodel.v1.InferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.mlmodel.v1.InferResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.mlmodel.v1.InferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.mlmodel.v1.InferResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.mlmodel.v1.InferResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.mlmodel.v1.MLModelServiceClient.prototype.infer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.mlmodel.v1.MLModelService/Infer',
      request,
      metadata || {},
      methodDescriptor_MLModelService_Infer,
      callback);
};


/**
 * @param {!proto.viam.service.mlmodel.v1.InferRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.mlmodel.v1.InferResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.mlmodel.v1.MLModelServicePromiseClient.prototype.infer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.mlmodel.v1.MLModelService/Infer',
      request,
      metadata || {},
      methodDescriptor_MLModelService_Infer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.viam.service.mlmodel.v1.MetadataRequest,
 *   !proto.viam.service.mlmodel.v1.MetadataResponse>}
 */
const methodDescriptor_MLModelService_Metadata = new grpc.web.MethodDescriptor(
  '/viam.service.mlmodel.v1.MLModelService/Metadata',
  grpc.web.MethodType.UNARY,
  proto.viam.service.mlmodel.v1.MetadataRequest,
  proto.viam.service.mlmodel.v1.MetadataResponse,
  /**
   * @param {!proto.viam.service.mlmodel.v1.MetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.viam.service.mlmodel.v1.MetadataResponse.deserializeBinary
);


/**
 * @param {!proto.viam.service.mlmodel.v1.MetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.viam.service.mlmodel.v1.MetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.viam.service.mlmodel.v1.MetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.viam.service.mlmodel.v1.MLModelServiceClient.prototype.metadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/viam.service.mlmodel.v1.MLModelService/Metadata',
      request,
      metadata || {},
      methodDescriptor_MLModelService_Metadata,
      callback);
};


/**
 * @param {!proto.viam.service.mlmodel.v1.MetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.viam.service.mlmodel.v1.MetadataResponse>}
 *     Promise that resolves to the response
 */
proto.viam.service.mlmodel.v1.MLModelServicePromiseClient.prototype.metadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/viam.service.mlmodel.v1.MLModelService/Metadata',
      request,
      metadata || {},
      methodDescriptor_MLModelService_Metadata);
};


module.exports = proto.viam.service.mlmodel.v1;

