function recursivelyCheckIfArray (parentObj) {
  if (Object.prototype.toString.call(parentObj) != '[object Object]') return parentObj;

  Object.keys(parentObj).map((parentKey) => {
    var childObj = parentObj[parentKey];

    if (Object.prototype.toString.call(childObj) != '[object Object]') return;

    var keys = Object.keys(childObj);

    if (keys.every((childKey) => { return /^(\d+)$/g.test(childKey); }))
      parentObj[parentKey] = keys.map((key) => { return childObj[key] });

    recursivelyCheckIfArray(childObj);
  });


  return parentObj;
}

function parseParam (json) {

  Object.keys(json).map((paramName) => {

    var segments = paramName.match(/([^\[\]]+)/g),
        step = json;

    // No nested params found
    if (segments.length <= 1) return;

    segments.map(function (segment, k) {
      if (k >= segments.length-1) {
        step[segment] = json[paramName];
        return;
      }

      if (!step[segment]) step[segment] = {};
      step = step[segment];
    });

  });


  return recursivelyCheckIfArray(json);
}


module.exports = function (json) {
  return parseParam(json);
};

