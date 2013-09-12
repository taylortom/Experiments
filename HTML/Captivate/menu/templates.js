(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modules'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"item ";
  stack1 = helpers['if'].call(depth0, depth0.complete, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.graphic, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <a href=\"#/";
  if (stack1 = helpers.route) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.route; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"  id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"inner\">\r\n            <h1 class=\"title\">\r\n                ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </h1>\r\n            <p class=\"body\">\r\n                ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </p>\r\n        </a>\r\n        <div class=\"status\">\r\n            <span class=\"text\">Status</span><span class=\"icon complete-";
  if (stack1 = helpers.complete) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.complete; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></span>\r\n        </div>\r\n    </div>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "complete";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  stack1 = helpers['if'].call(depth0, depth0.visited, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "incomplete";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "visited ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.graphic),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.graphic),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.graphic),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n        ";
  return buffer;
  }

  buffer += "<div class=\"items\">\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.modules, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  });
templates['pages'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"item ";
  stack1 = helpers['if'].call(depth0, depth0.complete, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.graphic, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <a href=\"#/";
  if (stack1 = helpers.route) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.route; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"  id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"inner\">\r\n            <h1 class=\"title\">\r\n                ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </h1>\r\n            <p class=\"body\">\r\n                ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </p>\r\n        </a>\r\n        <div class=\"status\">\r\n            <span class=\"text\">Status</span><span class=\"icon complete-";
  if (stack1 = helpers.complete) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.complete; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></span>\r\n        </div>\r\n    </div>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "complete";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  stack1 = helpers['if'].call(depth0, depth0.visited, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "incomplete";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "visited ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.graphic),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.graphic),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.graphic),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n        ";
  return buffer;
  }

  buffer += "<div class=\"items\">\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.pages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  });
templates['topics'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"item ";
  stack1 = helpers['if'].call(depth0, depth0.complete, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.graphic, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <a href=\"#/";
  if (stack1 = helpers.route) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.route; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"  id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"inner\">\r\n            <h1 class=\"title\">\r\n                ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </h1>\r\n            <p class=\"body\">\r\n                ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </p>\r\n        </a>\r\n        <div class=\"status\">\r\n            <span class=\"text\">Status</span><span class=\"icon complete-";
  if (stack1 = helpers.complete) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.complete; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></span>\r\n        </div>\r\n    </div>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "complete";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  stack1 = helpers['if'].call(depth0, depth0.visited, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "incomplete";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "visited ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.graphic),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.graphic),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.graphic),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n        ";
  return buffer;
  }

  buffer += "<div class=\"items\">\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.topics, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  });
})();