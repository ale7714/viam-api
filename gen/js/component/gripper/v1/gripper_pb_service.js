// package: viam.component.gripper.v1
// file: component/gripper/v1/gripper.proto

var component_gripper_v1_gripper_pb = require("../../../component/gripper/v1/gripper_pb");
var common_v1_common_pb = require("../../../common/v1/common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GripperService = (function () {
  function GripperService() {}
  GripperService.serviceName = "viam.component.gripper.v1.GripperService";
  return GripperService;
}());

GripperService.Open = {
  methodName: "Open",
  service: GripperService,
  requestStream: false,
  responseStream: false,
  requestType: component_gripper_v1_gripper_pb.OpenRequest,
  responseType: component_gripper_v1_gripper_pb.OpenResponse
};

GripperService.Grab = {
  methodName: "Grab",
  service: GripperService,
  requestStream: false,
  responseStream: false,
  requestType: component_gripper_v1_gripper_pb.GrabRequest,
  responseType: component_gripper_v1_gripper_pb.GrabResponse
};

GripperService.Stop = {
  methodName: "Stop",
  service: GripperService,
  requestStream: false,
  responseStream: false,
  requestType: component_gripper_v1_gripper_pb.StopRequest,
  responseType: component_gripper_v1_gripper_pb.StopResponse
};

GripperService.IsMoving = {
  methodName: "IsMoving",
  service: GripperService,
  requestStream: false,
  responseStream: false,
  requestType: component_gripper_v1_gripper_pb.IsMovingRequest,
  responseType: component_gripper_v1_gripper_pb.IsMovingResponse
};

GripperService.IsHoldingSomething = {
  methodName: "IsHoldingSomething",
  service: GripperService,
  requestStream: false,
  responseStream: false,
  requestType: component_gripper_v1_gripper_pb.IsHoldingSomethingRequest,
  responseType: component_gripper_v1_gripper_pb.IsHoldingSomethingResponse
};

GripperService.DoCommand = {
  methodName: "DoCommand",
  service: GripperService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.DoCommandRequest,
  responseType: common_v1_common_pb.DoCommandResponse
};

GripperService.GetGeometries = {
  methodName: "GetGeometries",
  service: GripperService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.GetGeometriesRequest,
  responseType: common_v1_common_pb.GetGeometriesResponse
};

GripperService.GetKinematics = {
  methodName: "GetKinematics",
  service: GripperService,
  requestStream: false,
  responseStream: false,
  requestType: common_v1_common_pb.GetKinematicsRequest,
  responseType: common_v1_common_pb.GetKinematicsResponse
};

exports.GripperService = GripperService;

function GripperServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GripperServiceClient.prototype.open = function open(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GripperService.Open, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GripperServiceClient.prototype.grab = function grab(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GripperService.Grab, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GripperServiceClient.prototype.stop = function stop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GripperService.Stop, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GripperServiceClient.prototype.isMoving = function isMoving(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GripperService.IsMoving, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GripperServiceClient.prototype.isHoldingSomething = function isHoldingSomething(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GripperService.IsHoldingSomething, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GripperServiceClient.prototype.doCommand = function doCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GripperService.DoCommand, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GripperServiceClient.prototype.getGeometries = function getGeometries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GripperService.GetGeometries, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GripperServiceClient.prototype.getKinematics = function getKinematics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GripperService.GetKinematics, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.GripperServiceClient = GripperServiceClient;

