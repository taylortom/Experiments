(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['components'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"title\">\r\n        <h3 class=\"inner\">\r\n            <span class=\"blockTitle\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><span class=\"componentTitle\"></span>\r\n        </h3>\r\n    </div>\r\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"body\">\r\n        <p class=\"inner\">\r\n            ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </p>\r\n    </div>\r\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, depth0.triggered, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <a class=\"trigger-button trigger-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"position:absolute; top:"
    + escapeExpression(((stack1 = ((stack1 = depth0.triggerPos),stack1 == null || stack1 === false ? stack1 : stack1.top)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%; left:"
    + escapeExpression(((stack1 = ((stack1 = depth0.triggerPos),stack1 == null || stack1 === false ? stack1 : stack1.left)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%;\">\r\n                    <div class=\"icon\"> Trigger </div>\r\n                </a>\r\n            ";
  return buffer;
  }

  buffer += "<div class=\"inner clearfix\">\r\n    ";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = helpers.each.call(depth0, depth0.components, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  });
})();