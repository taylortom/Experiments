(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['stitch'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "\n    <div class=\"icon stitch open\">\n        \n    </div>\n    <div class=\"inner\">\n        <div class=\"stitch-global expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Global</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Body Background Colour</div>\n                    <input type=\"input\" class=\"body-background-color color\" value=\"";
  if (stack1 = helpers.bodyBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bodyBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Font Family</div>\n                    <select class=\"main-font-family\">\n                        <option value=\"georgia\">Georgia, serif</option>\n                        <option value=\"palatino\">Palatino, Book Antiqua, Palatino, serif</option>\n                        <option value=\"times\">Times New Roman, Times, serif</option>\n                        <option value=\"arial\">Arial, Helvetica, sans-serif</option>\n                        <option value=\"arialBlack\">Arial Black, Gadget, sans-serif</option>\n                        <option value=\"comicSans\">Comic Sans, cursive, sans-serif</option>\n                        <option value=\"impact\">Impact, Charcoal, sans-serif</option>\n                        <option value=\"lucida\">Lucida Sans, Lucida Grande, sans-serif</option>\n                        <option value=\"tahoma\">Tahoma, Geneva, sans-serif</option>\n                        <option value=\"trebuchet\">Trebuchet MS, Helvetica, sans-serif</option>\n                        <option value=\"verdana\">Verdana, Geneva, sans-serif</option>\n                        <option value=\"courier\">Courier New, Courier, monospace</option>\n                        <option value=\"lucidaConsole\">Lucida Console, Monaco, monospace</option>\n                        <option value=\"bespokeFont\">I would like to use a bespoke font please</option>\n                    </select>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Body Text Size</div>\n                    <input type=\"number\" class=\"main-text-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.mainTextSize, options) : helperMissing.call(depth0, "parseInt", depth0.mainTextSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Body Text Colour</div>\n                    <input type=\"text\" class=\"main-text-color color\" value=\"";
  if (stack2 = helpers.pColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Link/Icon Colour</div>\n                    <input type=\"text\" class=\"link-icon-color color\" value=\"";
  if (stack2 = helpers.linkIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.linkIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Link/Icon Hover Colour</div>\n                    <input type=\"text\" class=\"link-icon-hover-color color\" value=\"";
  if (stack2 = helpers.linkIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.linkIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-tutor expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Tutor</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Background Colour</div>\n                    <input type=\"text\" class=\"tutor-background-color color\" value=\"";
  if (stack2 = helpers.tutorBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.tutorBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Text Size</div>\n                    <input type=\"number\" class=\"tutor-title-text-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.tutorTitleTextSize, options) : helperMissing.call(depth0, "parseInt", depth0.tutorTitleTextSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Body Text Size</div>\n                    <input type=\"number\" class=\"tutor-body-text-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.tutorBodyTextSize, options) : helperMissing.call(depth0, "parseInt", depth0.tutorBodyTextSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Text Colour</div>\n                    <input type=\"text\" class=\"tutor-text-color color\" value=\"";
  if (stack2 = helpers.tutorTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.tutorTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Colour</div>\n                    <input type=\"text\" class=\"tutor-icon-color color\" value=\"";
  if (stack2 = helpers.tutorIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.tutorIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Hover Colour</div>\n                    <input type=\"text\" class=\"tutor-icon-hover-color color\" value=\"";
  if (stack2 = helpers.tutorIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.tutorIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-guide expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Guide</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Background Colour</div>\n                    <input type=\"text\" class=\"guide-background-color color\" value=\"";
  if (stack2 = helpers.guideBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Text Size</div>\n                    <input type=\"number\" class=\"guide-title-text-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.guideTitleTextSize, options) : helperMissing.call(depth0, "parseInt", depth0.guideTitleTextSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Body Text Size</div>\n                    <input type=\"number\" class=\"guide-body-text-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.guideBodyTextSize, options) : helperMissing.call(depth0, "parseInt", depth0.guideBodyTextSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Text Colour</div>\n                    <input type=\"text\" class=\"guide-text-color color\" value=\"";
  if (stack2 = helpers.guideTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Colour</div>\n                    <input type=\"text\" class=\"guide-icon-color color\" value=\"";
  if (stack2 = helpers.guideIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Hover Colour</div>\n                    <input type=\"text\" class=\"guide-icon-hover-color color\" value=\"";
  if (stack2 = helpers.guideIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Footer Background Colour</div>\n                    <input type=\"text\" class=\"guide-footer-background-color color\" value=\"";
  if (stack2 = helpers.guideFooterBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideFooterBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Footer Progress Colour</div>\n                    <input type=\"text\" class=\"guide-footer-progress-color color\" value=\"";
  if (stack2 = helpers.guideFooterProgressColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideFooterProgressColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Footer Progress Selected Colour</div>\n                    <input type=\"text\" class=\"guide-footer-progress-selected-color color\" value=\"";
  if (stack2 = helpers.guideFooterProgressSelectedColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideFooterProgressSelectedColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Background Colour</div>\n                    <input type=\"text\" class=\"guide-button-background-color color\" value=\"";
  if (stack2 = helpers.guideButtonBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideButtonBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Background Hover Colour</div>\n                    <input type=\"text\" class=\"guide-button-background-hover-color color\" value=\"";
  if (stack2 = helpers.guideButtonBackgroundHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideButtonBackgroundHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Text Colour</div>\n                    <input type=\"text\" class=\"guide-button-text-color color\" value=\"";
  if (stack2 = helpers.guideButtonTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideButtonTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Text Hover Colour</div>\n                    <input type=\"text\" class=\"guide-button-text-hover-color color\" value=\"";
  if (stack2 = helpers.guideButtonTextHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.guideButtonTextHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-messages expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Messages</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Toolbar Background Colour</div>\n                    <input type=\"text\" class=\"messages-toolbar-background-color color\" value=\"";
  if (stack2 = helpers.messagesToolbarBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesToolbarBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Toolbar Text Colour</div>\n                    <input type=\"text\" class=\"messages-toolbar-text-color color\" value=\"";
  if (stack2 = helpers.messagesToolbarTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesToolbarTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Toolbar Icon Colour</div>\n                    <input type=\"text\" class=\"messages-toolbar-icon-color color\" value=\"";
  if (stack2 = helpers.messagesToolbarIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesToolbarIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Toolbar Icon Hover Colour</div>\n                    <input type=\"text\" class=\"messages-toolbar-icon-hover-color color\" value=\"";
  if (stack2 = helpers.messagesToolbarIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesToolbarIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Divide Background Colour</div>\n                    <input type=\"text\" class=\"messages-divide-background-color color\" value=\"";
  if (stack2 = helpers.messagesDivideBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesDivideBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Divide Text Colour</div>\n                    <input type=\"text\" class=\"messages-divide-text-color color\" value=\"";
  if (stack2 = helpers.messagesDivideTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesDivideTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Message Background Colour</div>\n                    <input type=\"text\" class=\"messages-message-background-color color\" value=\"";
  if (stack2 = helpers.messagesMessageBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesMessageBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Message Text Colour</div>\n                    <input type=\"text\" class=\"messages-message-text-color color\" value=\"";
  if (stack2 = helpers.messagesMessageTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesMessageTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Message Unread Background Colour</div>\n                    <input type=\"text\" class=\"messages-message-unread-background-color color\" value=\"";
  if (stack2 = helpers.messagesMessageUnreadBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesMessageUnreadBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Message Unread Text Colour</div>\n                    <input type=\"text\" class=\"messages-message-unread-text-color color\" value=\"";
  if (stack2 = helpers.messagesMessageUnreadTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.messagesMessageUnreadTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-nav expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Nav</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Background Colour</div>\n                    <input type=\"text\" class=\"nav-background-color color\" value=\"";
  if (stack2 = helpers.navBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.navBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Bottom Border Colour</div>\n                    <input type=\"text\" class=\"nav-border-color color\" value=\"";
  if (stack2 = helpers.navBorderColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.navBorderColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-page expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Page</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Background Colour</div>\n                    <input type=\"text\" class=\"page-background-color color\" value=\"";
  if (stack2 = helpers.pageBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pageBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Top</div>\n                    <input type=\"number\" class=\"page-padding-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.pagePaddingTop, options) : helperMissing.call(depth0, "parseInt", depth0.pagePaddingTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Right</div>\n                    <input type=\"number\" class=\"page-padding-right\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.pagePaddingRight, options) : helperMissing.call(depth0, "parseInt", depth0.pagePaddingRight, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Bottom</div>\n                    <input type=\"number\" class=\"page-padding-bottom\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.pagePaddingBottom, options) : helperMissing.call(depth0, "parseInt", depth0.pagePaddingBottom, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Left</div>\n                    <input type=\"number\" class=\"page-padding-left\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.pagePaddingLeft, options) : helperMissing.call(depth0, "parseInt", depth0.pagePaddingLeft, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"page-title-color color\" value=\"";
  if (stack2 = helpers.pageTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pageTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"page-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.pageTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.pageTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Top</div>\n                    <input type=\"number\" class=\"page-title-padding-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.pageTitlePaddingTop, options) : helperMissing.call(depth0, "parseInt", depth0.pageTitlePaddingTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Right</div>\n                    <input type=\"number\" class=\"page-title-padding-right\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.pageTitlePaddingRight, options) : helperMissing.call(depth0, "parseInt", depth0.pageTitlePaddingRight, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Bottom</div>\n                    <input type=\"number\" class=\"page-title-padding-bottom\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.pageTitlePaddingBottom, options) : helperMissing.call(depth0, "parseInt", depth0.pageTitlePaddingBottom, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Left</div>\n                    <input type=\"number\" class=\"page-title-padding-left\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.pageTitlePaddingLeft, options) : helperMissing.call(depth0, "parseInt", depth0.pageTitlePaddingLeft, options)))
    + "\" min=\"0\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-article expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Article</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Background Colour</div>\n                    <input type=\"text\" class=\"article-background-color color\" value=\"";
  if (stack2 = helpers.articleBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.articleBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Top</div>\n                    <input type=\"number\" class=\"article-padding-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articlePaddingTop, options) : helperMissing.call(depth0, "parseInt", depth0.articlePaddingTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Right</div>\n                    <input type=\"number\" class=\"article-padding-right\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articlePaddingRight, options) : helperMissing.call(depth0, "parseInt", depth0.articlePaddingRight, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Bottom</div>\n                    <input type=\"number\" class=\"article-padding-bottom\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articlePaddingBottom, options) : helperMissing.call(depth0, "parseInt", depth0.articlePaddingBottom, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Left</div>\n                    <input type=\"number\" class=\"article-padding-left\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articlePaddingLeft, options) : helperMissing.call(depth0, "parseInt", depth0.articlePaddingLeft, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"article-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articleMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.articleMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"article-title-color color\" value=\"";
  if (stack2 = helpers.articleTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.articleTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"article-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articleTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.articleTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Top</div>\n                    <input type=\"number\" class=\"article-title-padding-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articleTitlePaddingTop, options) : helperMissing.call(depth0, "parseInt", depth0.articleTitlePaddingTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Right</div>\n                    <input type=\"number\" class=\"article-title-padding-right\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articleTitlePaddingRight, options) : helperMissing.call(depth0, "parseInt", depth0.articleTitlePaddingRight, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Bottom</div>\n                    <input type=\"number\" class=\"article-title-padding-bottom\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articleTitlePaddingBottom, options) : helperMissing.call(depth0, "parseInt", depth0.articleTitlePaddingBottom, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Left</div>\n                    <input type=\"number\" class=\"article-title-padding-left\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.articleTitlePaddingLeft, options) : helperMissing.call(depth0, "parseInt", depth0.articleTitlePaddingLeft, options)))
    + "\" min=\"0\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-block expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Block</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Background Colour</div>\n                    <input type=\"text\" class=\"block-background-color color\" value=\"";
  if (stack2 = helpers.blockBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.blockBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Top</div>\n                    <input type=\"number\" class=\"block-padding-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockPaddingTop, options) : helperMissing.call(depth0, "parseInt", depth0.blockPaddingTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Right</div>\n                    <input type=\"number\" class=\"block-padding-right\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockPaddingRight, options) : helperMissing.call(depth0, "parseInt", depth0.blockPaddingRight, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Bottom</div>\n                    <input type=\"number\" class=\"block-padding-bottom\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockPaddingBottom, options) : helperMissing.call(depth0, "parseInt", depth0.blockPaddingBottom, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Padding: Left</div>\n                    <input type=\"number\" class=\"block-padding-left\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockPaddingLeft, options) : helperMissing.call(depth0, "parseInt", depth0.blockPaddingLeft, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"block-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.blockMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"block-title-color color\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockTitleColor, options) : helperMissing.call(depth0, "parseInt", depth0.blockTitleColor, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"block-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.blockTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>                    \n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Top</div>\n                    <input type=\"number\" class=\"block-title-padding-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockTitlePaddingTop, options) : helperMissing.call(depth0, "parseInt", depth0.blockTitlePaddingTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Right</div>\n                    <input type=\"number\" class=\"block-title-padding-right\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockTitlePaddingTop, options) : helperMissing.call(depth0, "parseInt", depth0.blockTitlePaddingTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Bottom</div>\n                    <input type=\"number\" class=\"block-title-padding-bottom\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockTitlePaddingTop, options) : helperMissing.call(depth0, "parseInt", depth0.blockTitlePaddingTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Padding: Left</div>\n                    <input type=\"number\" class=\"block-title-padding-left\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.blockTitlePaddingTop, options) : helperMissing.call(depth0, "parseInt", depth0.blockTitlePaddingTop, options)))
    + "\" min=\"0\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-component expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Component</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Background Colour</div>\n                    <input type=\"text\" class=\"component-background-color color\" value=\"";
  if (stack2 = helpers.componentBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.componentBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"component-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.componentMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.componentMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"component-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.componentTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.componentTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"component-title-color color\" value=\"";
  if (stack2 = helpers.componentTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.componentTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Smart Component Spacing</div>\n                    <input type=\"number\" class=\"smart-component-spacing\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.smartComponentSpacing, options) : helperMissing.call(depth0, "parseInt", depth0.smartComponentSpacing, options)))
    + "\" min=\"0\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-text expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Text Component</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"text-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.textMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.textMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"text-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.textTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.textTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"text-title-color color\" value=\"";
  if (stack2 = helpers.textTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.textTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-graphic expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Graphic Component</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"graphic-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.graphicMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.graphicMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"graphic-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.graphicTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.graphicTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"graphic-title-color color\" value=\"";
  if (stack2 = helpers.graphicTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.graphicTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-media expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Media Component</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"media-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.mediaMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.mediaMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"media-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.mediaTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.mediaTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"media-title-color color\" value=\"";
  if (stack2 = helpers.mediaTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mediaTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-narrative expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Narrative Component</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"narrative-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.narrativeMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.narrativeMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"narrative-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.narrativeTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.narrativeTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"narrative-title-color color\" value=\"";
  if (stack2 = helpers.narrativeTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativeTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Controls Colour</div>\n                    <input type=\"text\" class=\"narrative-controls-color color\" value=\"";
  if (stack2 = helpers.narrativeControlsColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativeControlsColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Controls Icon Colour</div>\n                    <input type=\"text\" class=\"narrative-controls-icon-color color\" value=\"";
  if (stack2 = helpers.narrativeControlsIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativeControlsIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Controls Icon Hover Colour</div>\n                    <input type=\"text\" class=\"narrative-controls-icon-hover-color color\" value=\"";
  if (stack2 = helpers.narrativeControlsIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativeControlsIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Mobile Icon Colour</div>\n                    <input type=\"text\" class=\"narrative-mobile-icon-color color\" value=\"";
  if (stack2 = helpers.narrativeMobileIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativeMobileIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Mobile Icon Hover Colour</div>\n                    <input type=\"text\" class=\"narrative-mobile-icon-hover-color color\" value=\"";
  if (stack2 = helpers.narrativeMobileIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativeMobileIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Strapline Background Colour</div>\n                    <input type=\"text\" class=\"narrative-strapline-background-color color\" value=\"";
  if (stack2 = helpers.narrativeStraplineBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativeStraplineBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Strapline Text Colour</div>\n                    <input type=\"text\" class=\"narrative-strapline-text-color color\" value=\"";
  if (stack2 = helpers.narrativeStraplineTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativeStraplineTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Background Colour</div>\n                    <input type=\"text\" class=\"narrative-popup-background-color color\" value=\"";
  if (stack2 = helpers.narrativePopupBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativePopupBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Text Colour</div>\n                    <input type=\"text\" class=\"narrative-popup-text-color color\" value=\"";
  if (stack2 = helpers.narrativePopupTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativePopupTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Icon Colour</div>\n                    <input type=\"text\" class=\"narrative-popup-icon-color color\" value=\"";
  if (stack2 = helpers.narrativePopupIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativePopupIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Icon Hover Colour</div>\n                    <input type=\"text\" class=\"narrative-popup-icon-hover-color color\" value=\"";
  if (stack2 = helpers.narrativePopupIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.narrativePopupIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-hotGraphic expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Hot Graphic Component</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"hotGraphic-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.hotGraphicMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.hotGraphicMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"hotGraphic-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.hotGraphicTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.hotGraphicTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"hotGraphic-title-color color\" value=\"";
  if (stack2 = helpers.hotGraphicTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Pin Colour</div>\n                    <input type=\"text\" class=\"hotGraphic-pin-color color\" value=\"";
  if (stack2 = helpers.hotGraphicPinColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicPinColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Pin Hover Colour</div>\n                    <input type=\"text\" class=\"hotGraphic-pin-hover-color color\" value=\"";
  if (stack2 = helpers.hotGraphicPinHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicPinHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Pin Size</div>\n                    <input type=\"number\" class=\"hotGraphic-pin-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.hotGraphicPinSize, options) : helperMissing.call(depth0, "parseInt", depth0.hotGraphicPinSize, options)))
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Border Color</div>\n                    <input type=\"text\" class=\"hotGraphic-popup-border-color color\" value=\"";
  if (stack2 = helpers.hotGraphicPopupBorderColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicPopupBorderColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Background Color</div>\n                    <input type=\"text\" class=\"hotGraphic-popup-background-color color\" value=\"";
  if (stack2 = helpers.hotGraphicPopupBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicPopupBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Toolbar Background Color</div>\n                    <input type=\"text\" class=\"hotGraphic-popup-toolbar-background-color color\" value=\"";
  if (stack2 = helpers.hotGraphicPopupToolbarBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicPopupToolbarBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Toolbar Text Color</div>\n                    <input type=\"text\" class=\"hotGraphic-popup-toolbar-text-color color\" value=\"";
  if (stack2 = helpers.hotGraphicPopupToolbarTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicPopupToolbarTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Toolbar Icon Color</div>\n                    <input type=\"text\" class=\"hotGraphic-popup-toolbar-icon-color color\" value=\"";
  if (stack2 = helpers.hotGraphicPopupToolbarIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicPopupToolbarIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Toolbar Icon Hover Color</div>\n                    <input type=\"text\" class=\"hotGraphic-popup-toolbar-icon-hover-color color\" value=\"";
  if (stack2 = helpers.hotGraphicPopupToolbarIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicPopupToolbarIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Text Color</div>\n                    <input type=\"text\" class=\"hotGraphic-popup-text-color color\" value=\"";
  if (stack2 = helpers.hotGraphicPopupTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.hotGraphicPopupTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Padding</div>\n                    <input type=\"number\" class=\"hotGraphic-popup-padding\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.hotGraphicPopupPadding, options) : helperMissing.call(depth0, "parseInt", depth0.hotGraphicPopupPadding, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Popup Spacing</div>\n                    <input type=\"number\" class=\"hotGraphic-popup-spacing\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.hotGraphicPopupSpacing, options) : helperMissing.call(depth0, "parseInt", depth0.hotGraphicPopupSpacing, options)))
    + "\" min=\"0\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-accordion expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">Accordion Component</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"accordion-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.accordionMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.accordionMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"accordion-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.accordionTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.accordionTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"accordion-title-color color\" value=\"";
  if (stack2 = helpers.accordionTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Colour</div>\n                    <input type=\"text\" class=\"accordion-icon-color color\" value=\"";
  if (stack2 = helpers.accordionIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Hover Colour</div>\n                    <input type=\"text\" class=\"accordion-icon-hover-color color\" value=\"";
  if (stack2 = helpers.accordionIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Visited Colour</div>\n                    <input type=\"text\" class=\"accordion-icon-visited-color color\" value=\"";
  if (stack2 = helpers.accordionIconVisitedColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionIconVisitedColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Title Background Colour</div>\n                    <input type=\"text\" class=\"accordion-item-background-color color\" value=\"";
  if (stack2 = helpers.accordionItemBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionItemBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Title Hover Colour</div>\n                    <input type=\"text\" class=\"accordion-item-hover-background-color color\" value=\"";
  if (stack2 = helpers.accordionItemHoverBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionItemHoverBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Title Visited Colour</div>\n                    <input type=\"text\" class=\"accordion-item-visited-background-color color\" value=\"";
  if (stack2 = helpers.accordionItemVisitedBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionItemVisitedBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Title Text Colour</div>\n                    <input type=\"text\" class=\"accordion-item-title-text-color color\" value=\"";
  if (stack2 = helpers.accordionItemTitleTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionItemTitleTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Title Text Hover Colour</div>\n                    <input type=\"text\" class=\"accordion-item-title-text-hover-color color\" value=\"";
  if (stack2 = helpers.accordionItemTitleTextHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionItemTitleTextHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Title Text Visited Colour</div>\n                    <input type=\"text\" class=\"accordion-item-title-text-visited-color color\" value=\"";
  if (stack2 = helpers.accordionItemTitleTextVisitedColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionItemTitleTextVisitedColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Border Colour</div>\n                    <input type=\"text\" class=\"accordion-item-border-color color\" value=\"";
  if (stack2 = helpers.accordionItemBorderColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionItemBorderColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Body Background Colour</div>\n                    <input type=\"text\" class=\"accordion-item-body-background-color color\" value=\"";
  if (stack2 = helpers.accordionItemBodyBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionItemBodyBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Body Text Colour</div>\n                    <input type=\"text\" class=\"accordion-item-body-text-color color\" value=\"";
  if (stack2 = helpers.accordionItemBodyTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.accordionItemBodyTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Body Padding</div>\n                    <input type=\"number\" class=\"accordion-item-body-padding\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.accordionItemBodyPadding, options) : helperMissing.call(depth0, "parseInt", depth0.accordionItemBodyPadding, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Spacing</div>\n                    <input type=\"number\" class=\"accordion-item-spacing\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.accordionItemSpacing, options) : helperMissing.call(depth0, "parseInt", depth0.accordionItemSpacing, options)))
    + "\" min=\"0\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-mcq expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">MCQ Component</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"mcq-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.mcqMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.mcqMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"mcq-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.mcqTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.mcqTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"mcq-title-color color\" value=\"";
  if (stack2 = helpers.mcqTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Colour</div>\n                    <input type=\"text\" class=\"mcq-icon-color color\" value=\"";
  if (stack2 = helpers.mcqIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Hover Colour</div>\n                    <input type=\"text\" class=\"mcq-icon-hover-color color\" value=\"";
  if (stack2 = helpers.mcqIconHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqIconHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Icon Selected Colour</div>\n                    <input type=\"text\" class=\"mcq-icon-selected-color color\" value=\"";
  if (stack2 = helpers.mcqIconSelectedColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqIconSelectedColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Correct Icon Colour</div>\n                    <input type=\"text\" class=\"mcq-correct-icon-color color\" value=\"";
  if (stack2 = helpers.mcqCorrectIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqCorrectIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Incorrect Icon Colour</div>\n                    <input type=\"text\" class=\"mcq-incorrect-icon-color color\" value=\"";
  if (stack2 = helpers.mcqIncorrectIconColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqIncorrectIconColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Background Colour</div>\n                    <input type=\"text\" class=\"mcq-item-background-color color\" value=\"";
  if (stack2 = helpers.mcqItemBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqItemBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Background Hover Colour</div>\n                    <input type=\"text\" class=\"mcq-item-background-hover-color color\" value=\"";
  if (stack2 = helpers.mcqItemBackgroundHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqItemBackgroundHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Background Selected Colour</div>\n                    <input type=\"text\" class=\"mcq-item-background-selected-color color\" value=\"";
  if (stack2 = helpers.mcqItemBackgroundSelectedColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqItemBackgroundSelectedColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Text Colour</div>\n                    <input type=\"text\" class=\"mcq-item-text-color color\" value=\"";
  if (stack2 = helpers.mcqItemTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqItemTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Text Hover Colour</div>\n                    <input type=\"text\" class=\"mcq-item-text-hover-color color\" value=\"";
  if (stack2 = helpers.mcqItemTextHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqItemTextHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Item Text Selected Colour</div>\n                    <input type=\"text\" class=\"mcq-item-text-selected-color color\" value=\"";
  if (stack2 = helpers.mcqItemTextSelectedColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqItemTextSelectedColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Background Colour</div>\n                    <input type=\"text\" class=\"mcq-button-background-color color\" value=\"";
  if (stack2 = helpers.mcqButtonBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqButtonBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Background Hover Colour</div>\n                    <input type=\"text\" class=\"mcq-button-background-hover-color color\" value=\"";
  if (stack2 = helpers.mcqButtonBackgroundHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqButtonBackgroundHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Text Colour</div>\n                    <input type=\"text\" class=\"mcq-button-text-color color\" value=\"";
  if (stack2 = helpers.mcqButtonTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqButtonTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Text Hover Colour</div>\n                    <input type=\"text\" class=\"mcq-button-text-hover-color color\" value=\"";
  if (stack2 = helpers.mcqButtonTextHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.mcqButtonTextHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"stitch-ppq expand\">\n            <div class=\"icon plus\"></div>\n            <div class=\"title\">PPQ Component</div>\n            <div class=\"collapse\">\n                <div class=\"item\">\n                    <div class=\"title\">Margin: Top</div>\n                    <input type=\"number\" class=\"ppq-margin-top\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.ppqMarginTop, options) : helperMissing.call(depth0, "parseInt", depth0.ppqMarginTop, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Size</div>\n                    <input type=\"number\" class=\"ppq-title-size\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.parseInt || depth0.parseInt),stack1 ? stack1.call(depth0, depth0.ppqTitleSize, options) : helperMissing.call(depth0, "parseInt", depth0.ppqTitleSize, options)))
    + "\" min=\"0\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Title Colour</div>\n                    <input type=\"text\" class=\"ppq-title-color color\" value=\"";
  if (stack2 = helpers.ppqTitleColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ppqTitleColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Pin Colour</div>\n                    <input type=\"text\" class=\"ppq-pin-color color\" value=\"";
  if (stack2 = helpers.ppqPinColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ppqPinColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Pin Hover Colour</div>\n                    <input type=\"text\" class=\"ppq-pin-hover-color color\" value=\"";
  if (stack2 = helpers.ppqPinHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ppqPinHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Pin Correct Colour</div>\n                    <input type=\"text\" class=\"ppq-pin-correct-color color\" value=\"";
  if (stack2 = helpers.ppqPinCorrectColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ppqPinCorrectColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Pin Incorrect Colour</div>\n                    <input type=\"text\" class=\"ppq-pin-incorrect-color color\" value=\"";
  if (stack2 = helpers.ppqPinIncorrectColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ppqPinIncorrectColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Background Colour</div>\n                    <input type=\"text\" class=\"ppq-button-background-color color\" value=\"";
  if (stack2 = helpers.ppqButtonBackgroundColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ppqButtonBackgroundColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Background Hover Colour</div>\n                    <input type=\"text\" class=\"ppq-button-background-hover-color color\" value=\"";
  if (stack2 = helpers.ppqButtonBackgroundHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ppqButtonBackgroundHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Text Colour</div>\n                    <input type=\"text\" class=\"ppq-button-text-color color\" value=\"";
  if (stack2 = helpers.ppqButtonTextColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ppqButtonTextColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n                <div class=\"item\">\n                    <div class=\"title\">Button Text Hover Colour</div>\n                    <input type=\"text\" class=\"ppq-button-text-hover-color color\" value=\"";
  if (stack2 = helpers.ppqButtonTextHoverColor) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ppqButtonTextHoverColor; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" maxlength=\"6\"/>\n                </div>\n            </div>\n        </div>\n        <!--<a href=\"#\" class=\"save\">SAVE</a>-->\n    </div>\n";
  return buffer;
  });
templates['stitchcss'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-family: ";
  if (stack1 = helpers.mainFontFamily) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mainFontFamily; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.bodyBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bodyBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n    background-color:transparent;\n    ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.navBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.navBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.pageBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pageBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.articleBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articleBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:";
  if (stack1 = helpers.blockBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.componentBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.componentBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    margin-top:";
  if (stack1 = helpers.textMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.textTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.textTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    margin-top:";
  if (stack1 = helpers.graphicMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.graphicMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.graphicTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.graphicTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.graphicTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.graphicTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    margin-top:";
  if (stack1 = helpers.mediaMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mediaMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.mediaTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mediaTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mediaTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mediaTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    margin-top:";
  if (stack1 = helpers.narrativeMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.narrativeTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.narrativeTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program41(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.narrativeControlsColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeControlsColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program43(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.narrativeControlsIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeControlsIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program45(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.narrativeControlsIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeControlsIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program47(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.narrativeMobileIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeMobileIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program49(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.narrativeMobileIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeMobileIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program51(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.narrativeStraplineBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeStraplineBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program53(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.narrativeStraplineTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativeStraplineTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program55(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.narrativePopupBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativePopupBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program57(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.narrativePopupTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativePopupTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program59(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.narrativePopupIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativePopupIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program61(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.narrativePopupIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.narrativePopupIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program63(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    margin-top:";
  if (stack1 = helpers.hotGraphicMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program65(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.hotGraphicTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program67(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.hotGraphicTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program69(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.hotGraphicPinColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPinColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program71(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.hotGraphicPinHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPinHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program73(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.hotGraphicPinSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPinSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program75(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.hotGraphicPopupBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program77(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    border-color:#";
  if (stack1 = helpers.hotGraphicPopupBorderColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupBorderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program79(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.hotGraphicPopupToolbarBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupToolbarBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program81(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.hotGraphicPopupToolbarIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupToolbarIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program83(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.hotGraphicPopupToolbarIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupToolbarIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program85(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.hotGraphicPopupToolbarTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupToolbarTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program87(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.hotGraphicPopupTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program89(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    padding:";
  if (stack1 = helpers.hotGraphicPopupPadding) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupPadding; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n    ";
  return buffer;
  }

function program91(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    padding-left:";
  if (stack1 = helpers.hotGraphicPopupSpacing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupSpacing; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n    ";
  return buffer;
  }

function program93(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    padding-right:";
  if (stack1 = helpers.hotGraphicPopupSpacing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hotGraphicPopupSpacing; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n    ";
  return buffer;
  }

function program95(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    margin-top:";
  if (stack1 = helpers.accordionMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program97(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.accordionTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program99(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.accordionTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program101(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.accordionIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program103(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.accordionIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program105(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.accordionIconVisitedColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionIconVisitedColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program107(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.accordionItemBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program109(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.accordionItemHoverBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemHoverBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program111(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.accordionItemVisitedBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemVisitedBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program113(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.accordionItemTitleTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemTitleTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program115(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.accordionItemTitleTextHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemTitleTextHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program117(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.accordionItemTitleTextVisitedColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemTitleTextVisitedColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program119(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.accordionItemBodyBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemBodyBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program121(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    padding:";
  if (stack1 = helpers.accordionItemBodyPadding) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemBodyPadding; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program123(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.accordionItemBodyTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemBodyTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program125(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    margin-top:";
  if (stack1 = helpers.mcqMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program127(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.mcqTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program129(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program131(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program133(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.mcqItemBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqItemBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program135(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program137(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.mcqItemHoverBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqItemHoverBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program139(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqIconSelectedColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqIconSelectedColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program141(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.mcqItemSelectedBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqItemSelectedBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program143(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqItemTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqItemTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program145(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqItemTextHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqItemTextHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program147(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqItemTextSelectedColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqItemTextSelectedColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program149(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqCorrectIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqCorrectIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program151(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqIncorrectIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqIncorrectIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program153(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.mcqButtonBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqButtonBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program155(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqButtonTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqButtonTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program157(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.mcqButtonBackgroundHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqButtonBackgroundHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program159(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.mcqButtonTextHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mcqButtonTextHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program161(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    margin-top:";
  if (stack1 = helpers.ppqMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program163(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.ppqTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program165(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.ppqTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program167(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.ppqPinColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqPinColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program169(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.ppqPinHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqPinHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program171(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.ppqButtonBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqButtonBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program173(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.ppqButtonTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqButtonTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program175(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.ppqButtonBackgroundHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqButtonBackgroundHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program177(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.ppqButtonTextHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqButtonTextHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program179(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.ppqPinCorrectColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqPinCorrectColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program181(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.ppqPinIncorrectColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ppqPinIncorrectColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program183(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.guideBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program185(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.guideTitleTextSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideTitleTextSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n    ";
  return buffer;
  }

function program187(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.guideTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program189(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.guideBodyTextSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideBodyTextSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n    ";
  return buffer;
  }

function program191(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.guideIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program193(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.guideIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program195(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.guideFooterBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideFooterBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program197(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.guideFooterProgressColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideFooterProgressColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program199(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.guideFooterProgressSelectedColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideFooterProgressSelectedColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program201(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.guideButtonBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideButtonBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program203(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.guideButtonTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideButtonTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program205(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.guideButtonBackgroundHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideButtonBackgroundHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program207(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.guideButtonTextHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.guideButtonTextHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program209(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.tutorBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tutorBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program211(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    border-bottom-color:#";
  if (stack1 = helpers.tutorBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tutorBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program213(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.tutorTitleTextSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tutorTitleTextSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n    ";
  return buffer;
  }

function program215(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.tutorTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tutorTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program217(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    font-size:";
  if (stack1 = helpers.tutorBodyTextSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tutorBodyTextSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n    ";
  return buffer;
  }

function program219(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.tutorIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tutorIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program221(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.tutorIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tutorIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program223(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    border-right-color:#";
  if (stack1 = helpers.messagesToolbarBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesToolbarBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program225(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.messagesToolbarBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesToolbarBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program227(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.messagesToolbarTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesToolbarTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program229(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.messagesToolbarIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesToolbarIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program231(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.messagesToolbarIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesToolbarIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program233(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.messagesDivideBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesDivideBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program235(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.messagesDivideTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesDivideTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program237(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.messagesMessageBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesMessageBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "; \n    ";
  return buffer;
  }

function program239(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    background-color:#";
  if (stack1 = helpers.messagesMessageUnreadBackgroundColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesMessageUnreadBackgroundColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "; \n    ";
  return buffer;
  }

function program241(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    color:#";
  if (stack1 = helpers.messagesMessageUnreadTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesMessageUnreadTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    ";
  return buffer;
  }

function program243(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    .component.left > .inner {\n        margin-right: ";
  if (stack1 = helpers.smartComponentSpacing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.smartComponentSpacing; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    }\n    .component.right > .inner {\n        margin-left: ";
  if (stack1 = helpers.smartComponentSpacing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.smartComponentSpacing; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    }\n    ";
  return buffer;
  }

  buffer += "\n    \nbody, p, select, input, textarea {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mainFontFamily, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    font-size: ";
  if (stack1 = helpers.mainTextSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mainTextSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\nbody {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.bodyBackgroundColor, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#navigation {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.navBackgroundColor, {hash:{},inverse:self.program(5, program5, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    border-bottom: 1px solid #";
  if (stack1 = helpers.navBorderColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.navBorderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n#wrapper {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.pageBackgroundColor, {hash:{},inverse:self.program(5, program5, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#page > .inner {\n    padding-top:";
  if (stack1 = helpers.pagePaddingTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pagePaddingTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-right:";
  if (stack1 = helpers.pagePaddingRight) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pagePaddingRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-bottom:";
  if (stack1 = helpers.pagePaddingBottom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pagePaddingBottom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-left:";
  if (stack1 = helpers.pagePaddingLeft) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pagePaddingLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n#page > .inner > .title > .inner {\n    padding-top:";
  if (stack1 = helpers.pageTitlePaddingTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pageTitlePaddingTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-right:";
  if (stack1 = helpers.pageTitlePaddingRight) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pageTitlePaddingRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-bottom:";
  if (stack1 = helpers.pageTitlePaddingBottom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pageTitlePaddingBottom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-left:";
  if (stack1 = helpers.pageTitlePaddingLeft) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pageTitlePaddingLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.article {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.articleBackgroundColor, {hash:{},inverse:self.program(5, program5, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    margin-top:";
  if (stack1 = helpers.articleMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articleMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.article > .inner {\n    padding-top:";
  if (stack1 = helpers.articlePaddingTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articlePaddingTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-right:";
  if (stack1 = helpers.articlePaddingRight) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articlePaddingRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-bottom:";
  if (stack1 = helpers.articlePaddingBottom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articlePaddingBottom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-left:";
  if (stack1 = helpers.articlePaddingLeft) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articlePaddingLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.article > .inner > .title > .inner {\n    padding-top:";
  if (stack1 = helpers.articleTitlePaddingTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articleTitlePaddingTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-right:";
  if (stack1 = helpers.articleTitlePaddingRight) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articleTitlePaddingRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-bottom:";
  if (stack1 = helpers.articleTitlePaddingBottom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articleTitlePaddingBottom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-left:";
  if (stack1 = helpers.articleTitlePaddingLeft) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articleTitlePaddingLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.block {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.blockBackgroundColor, {hash:{},inverse:self.program(5, program5, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    margin-top:";
  if (stack1 = helpers.blockMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.block > .inner {\n    padding-top:";
  if (stack1 = helpers.blockPaddingTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPaddingTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-right:";
  if (stack1 = helpers.blockPaddingRight) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPaddingRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-bottom:";
  if (stack1 = helpers.blockPaddingBottom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPaddingBottom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-left:";
  if (stack1 = helpers.blockPaddingLeft) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockPaddingLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.block > .inner > .title > .inner {\n    padding-top:";
  if (stack1 = helpers.blockTitlePaddingTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockTitlePaddingTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-right:";
  if (stack1 = helpers.blockTitlePaddingRight) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockTitlePaddingRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-bottom:";
  if (stack1 = helpers.blockTitlePaddingBottom) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockTitlePaddingBottom; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    padding-left:";
  if (stack1 = helpers.blockTitlePaddingLeft) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockTitlePaddingLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.component {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.componentBackgroundColor, {hash:{},inverse:self.program(5, program5, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    margin-top: ";
  if (stack1 = helpers.componentMarginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.componentMarginTop; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\nbody, p {\n    color: #";
  if (stack1 = helpers.pColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\na, a:visited, .component.narrative .strapline .controls .icon, .component.mcq .widget .item label {\n    color: #";
  if (stack1 = helpers.linkIconColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.linkIconColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.no-touch a:hover, \n.no-touch .component.accordion .item .title:hover, \n.no-touch a:focus {\n    color: #";
  if (stack1 = helpers.linkIconHoverColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.linkIconHoverColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\nh1 {\n    font-size: ";
  if (stack1 = helpers.pageTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pageTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: #";
  if (stack1 = helpers.pageTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pageTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\nh2 {\n    font-size: ";
  if (stack1 = helpers.articleTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articleTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: #";
  if (stack1 = helpers.articleTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.articleTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\nh3 {\n    font-size: ";
  if (stack1 = helpers.blockTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: #";
  if (stack1 = helpers.blockTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blockTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\nh4 {\n    font-size: ";
  if (stack1 = helpers.componentTitleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.componentTitleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    color: #";
  if (stack1 = helpers.componentTitleColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.componentTitleColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.component.text {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.textMarginTop, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.text .title h4 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.textTitleSize, {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.textTitleColor, {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.graphic {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.graphicMarginTop, {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.graphic .title h4 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.graphicTitleSize, {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.graphicTitleColor, {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.media {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mediaMarginTop, {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.media .title h4 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mediaTitleSize, {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mediaTitleColor, {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeMarginTop, {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .title h4 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeTitleSize, {hash:{},inverse:self.noop,fn:self.program(37, program37, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeTitleColor, {hash:{},inverse:self.noop,fn:self.program(39, program39, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .slide .controls {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeControlsColor, {hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .slide .controls .icon {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeControlsIconColor, {hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.narrative .slide .controls .icon:hover,\n.no-touch .component.narrative .slide .controls:focus .icon {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeControlsIconHoverColor, {hash:{},inverse:self.noop,fn:self.program(45, program45, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .strapline .controls .icon {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeMobileIconColor, {hash:{},inverse:self.noop,fn:self.program(47, program47, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.narrative .strapline .controls .icon:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeMobileIconHoverColor, {hash:{},inverse:self.noop,fn:self.program(49, program49, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .strapline {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeStraplineBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(51, program51, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeStraplineTextColor, {hash:{},inverse:self.noop,fn:self.program(53, program53, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .strapline {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeStraplineBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(51, program51, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativeStraplineTextColor, {hash:{},inverse:self.noop,fn:self.program(53, program53, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .popup > .inner {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativePopupBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(55, program55, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .popup > .inner .content p {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativePopupTextColor, {hash:{},inverse:self.noop,fn:self.program(57, program57, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .popup > .inner .toolbar .title h5 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativePopupTextColor, {hash:{},inverse:self.noop,fn:self.program(57, program57, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.narrative .popup .close {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativePopupIconColor, {hash:{},inverse:self.noop,fn:self.program(59, program59, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.narrative .popup .close:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.narrativePopupIconHoverColor, {hash:{},inverse:self.noop,fn:self.program(61, program61, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicMarginTop, {hash:{},inverse:self.noop,fn:self.program(63, program63, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic .title h4 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicTitleSize, {hash:{},inverse:self.noop,fn:self.program(65, program65, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicTitleColor, {hash:{},inverse:self.noop,fn:self.program(67, program67, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic .widget .graphic .item {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPinColor, {hash:{},inverse:self.noop,fn:self.program(69, program69, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.hotgraphic .widget .graphic .item:hover,\n.no-touch .component.hotgraphic .widget .graphic .item:focus {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPinHoverColor, {hash:{},inverse:self.noop,fn:self.program(71, program71, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic .widget .graphic .item .icon {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPinSize, {hash:{},inverse:self.noop,fn:self.program(73, program73, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic.desktop .popup {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(75, program75, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupBorderColor, {hash:{},inverse:self.noop,fn:self.program(77, program77, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic.desktop .popup .toolbar {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupToolbarBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(79, program79, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic .toolbar .controls, .component.hotgraphic .toolbar .done {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupToolbarIconColor, {hash:{},inverse:self.noop,fn:self.program(81, program81, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.hotgraphic .toolbar .controls:hover, \n.no-touch .component.hotgraphic .toolbar .done:hover,\n.no-touch .component.hotgraphic .toolbar .controls:focus, \n.no-touch .component.hotgraphic .toolbar .done:focus {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupToolbarIconHoverColor, {hash:{},inverse:self.noop,fn:self.program(83, program83, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic.desktop .popup .toolbar .count {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupToolbarTextColor, {hash:{},inverse:self.noop,fn:self.program(85, program85, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic .popup h5, .component.hotgraphic .popup p {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupTextColor, {hash:{},inverse:self.noop,fn:self.program(87, program87, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic.desktop .popup > .inner {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupPadding, {hash:{},inverse:self.noop,fn:self.program(89, program89, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic.desktop .popup .content .graphic .inner {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupSpacing, {hash:{},inverse:self.noop,fn:self.program(91, program91, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.hotgraphic.desktop .popup .content .body .inner {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.hotGraphicPopupSpacing, {hash:{},inverse:self.noop,fn:self.program(93, program93, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n        \n.component.accordion {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionMarginTop, {hash:{},inverse:self.noop,fn:self.program(95, program95, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .title h4 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionTitleSize, {hash:{},inverse:self.noop,fn:self.program(97, program97, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionTitleColor, {hash:{},inverse:self.noop,fn:self.program(99, program99, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .widget .item .title {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionIconColor, {hash:{},inverse:self.noop,fn:self.program(101, program101, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.accordion .widget .item .title:hover,\n.no-touch .component.accordion .widget .item .title:focus {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionIconHoverColor, {hash:{},inverse:self.noop,fn:self.program(103, program103, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .widget .item .title.visited, \n.no-touch .component.accordion .widget .item .title.visited:hover,\n.no-touch .component.accordion .widget .item .title.visited:focus {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionIconVisitedColor, {hash:{},inverse:self.noop,fn:self.program(105, program105, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .widget .item .title {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionItemBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(107, program107, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.accordion .widget .item .title:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionItemHoverBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(109, program109, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .widget .item .title.visited, .no-touch .component.accordion .widget .item .title.visited:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionItemVisitedBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(111, program111, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .widget .item .title .inner {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionItemTitleTextColor, {hash:{},inverse:self.noop,fn:self.program(113, program113, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.accordion .widget .item .title .inner:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionItemTitleTextHoverColor, {hash:{},inverse:self.noop,fn:self.program(115, program115, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .widget .item .title.visited .inner, .no-touch .component.accordion .widget .item .title.visited .inner:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionItemTitleTextVisitedColor, {hash:{},inverse:self.noop,fn:self.program(117, program117, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .widget .item .body {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionItemBodyBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(119, program119, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .widget .item .body p {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionItemBodyPadding, {hash:{},inverse:self.noop,fn:self.program(121, program121, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.accordionItemBodyTextColor, {hash:{},inverse:self.noop,fn:self.program(123, program123, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.accordion .item {\n    margin-bottom:";
  if (stack1 = helpers.accordionItemSpacing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemSpacing; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n    border-color:#";
  if (stack1 = helpers.accordionItemBorderColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.accordionItemBorderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n\n.component.mcq {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqMarginTop, {hash:{},inverse:self.noop,fn:self.program(125, program125, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .title h4 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqTitleSize, {hash:{},inverse:self.noop,fn:self.program(127, program127, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqTitleColor, {hash:{},inverse:self.noop,fn:self.program(129, program129, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget .item label {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqIconColor, {hash:{},inverse:self.noop,fn:self.program(131, program131, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(133, program133, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget .item label:hover, \n.component.mcq .widget .item label.highlighted {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqIconHoverColor, {hash:{},inverse:self.noop,fn:self.program(135, program135, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemHoverBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(137, program137, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget .item label.selected {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqIconSelectedColor, {hash:{},inverse:self.noop,fn:self.program(139, program139, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemSelectedBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(141, program141, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n/*.component.mcq .widget .item label {\n    background-color\n}*/\n\n.component.mcq .widget .item label h5 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemTextColor, {hash:{},inverse:self.noop,fn:self.program(143, program143, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.mcq .widget .item label h5:hover  {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemTextHoverColor, {hash:{},inverse:self.noop,fn:self.program(145, program145, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.mcq .widget.complete .item label h5:hover  {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemTextColor, {hash:{},inverse:self.noop,fn:self.program(143, program143, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget .item label.selected h5, .no-touch .component.mcq .widget .item label.selected h5:hover{\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemTextSelectedColor, {hash:{},inverse:self.noop,fn:self.program(147, program147, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.mcq .widget.complete .item label:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(133, program133, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqIconColor, {hash:{},inverse:self.noop,fn:self.program(131, program131, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget.complete .item label.selected, .no-touch .component.mcq .widget.complete .item label.selected:hover{\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemSelectedBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(141, program141, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget.complete.model .item label.selected, .no-touch .component.mcq .widget.complete.model .item label.selected:hover{\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(133, program133, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget.complete.model .item.correct label, .no-touch .component.mcq .widget.complete.model .item.correct label:hover{\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemSelectedBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(141, program141, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget.complete.model .item label.selected h5, .no-touch .component.mcq .widget.complete.model .item label.selected h5:hover{\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqItemTextColor, {hash:{},inverse:self.noop,fn:self.program(143, program143, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget.complete .item.correct .selected .state {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqCorrectIconColor, {hash:{},inverse:self.noop,fn:self.program(149, program149, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget.complete .item.incorrect .selected .state {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqIncorrectIconColor, {hash:{},inverse:self.noop,fn:self.program(151, program151, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget.complete.model .item.correct .state {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqCorrectIconColor, {hash:{},inverse:self.noop,fn:self.program(149, program149, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .widget.complete.model .item.incorrect .state {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqIncorrectIconColor, {hash:{},inverse:self.noop,fn:self.program(151, program151, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.mcq .button.submit, .component.mcq .button.reset, .component.mcq .button.mine, .component.mcq .button.model {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqButtonBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(153, program153, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqButtonTextColor, {hash:{},inverse:self.noop,fn:self.program(155, program155, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.mcq .button.submit:hover, \n.no-touch .component.mcq .button.reset:hover, \n.no-touch .component.mcq .button.mine:hover, \n.no-touch .component.mcq .button.model:hover,\n.no-touch .component.mcq .button.submit:focus, \n.no-touch .component.mcq .button.reset:focus, \n.no-touch .component.mcq .button.mine:focus, \n.no-touch .component.mcq .button.model:focus {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqButtonBackgroundHoverColor, {hash:{},inverse:self.noop,fn:self.program(157, program157, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.mcqButtonTextHoverColor, {hash:{},inverse:self.noop,fn:self.program(159, program159, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.ppq {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqMarginTop, {hash:{},inverse:self.noop,fn:self.program(161, program161, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.ppq .title h4 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqTitleSize, {hash:{},inverse:self.noop,fn:self.program(163, program163, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqTitleColor, {hash:{},inverse:self.noop,fn:self.program(165, program165, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.ppq .pinboard .marker {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqPinColor, {hash:{},inverse:self.noop,fn:self.program(167, program167, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.ppq .pinboard .marker:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqPinHoverColor, {hash:{},inverse:self.noop,fn:self.program(169, program169, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.ppq .button.submit, .component.ppq .button.reset, .component.ppq .button.mine, .component.ppq .button.model {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqButtonBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(171, program171, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqButtonTextColor, {hash:{},inverse:self.noop,fn:self.program(173, program173, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch .component.ppq .button.submit:hover, \n.no-touch .component.ppq .button.reset:hover, \n.no-touch .component.ppq .button.mine:hover, \n.no-touch .component.ppq .button.model:hover,\n.no-touch .component.ppq .button.submit:focus, \n.no-touch .component.ppq .button.reset:focus, \n.no-touch .component.ppq .button.mine:focus, \n.no-touch .component.ppq .button.model:focus {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqButtonBackgroundHoverColor, {hash:{},inverse:self.noop,fn:self.program(175, program175, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqButtonTextHoverColor, {hash:{},inverse:self.noop,fn:self.program(177, program177, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.ppq .widget.mine .marker.icon.correct {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqPinCorrectColor, {hash:{},inverse:self.noop,fn:self.program(179, program179, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.component.ppq .widget.mine .marker.icon {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.ppqPinIncorrectColor, {hash:{},inverse:self.noop,fn:self.program(181, program181, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#guide {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(183, program183, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#guide .item .title h6 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideTitleTextSize, {hash:{},inverse:self.noop,fn:self.program(185, program185, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideTextColor, {hash:{},inverse:self.noop,fn:self.program(187, program187, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#guide .item .body p {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideBodyTextSize, {hash:{},inverse:self.noop,fn:self.program(189, program189, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideTextColor, {hash:{},inverse:self.noop,fn:self.program(187, program187, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#guide .left, #guide .right, #guide .done {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideIconColor, {hash:{},inverse:self.noop,fn:self.program(191, program191, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch #guide .left:hover,\n.no-touch #guide .right:hover, \n.no-touch #guide .done:hover,\n.no-touch #guide .left:focus, \n.no-touch #guide .right:focus, \n.no-touch #guide .done:focus {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideIconHoverColor, {hash:{},inverse:self.noop,fn:self.program(193, program193, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#guide .footer {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideFooterBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(195, program195, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#guide .footer .indicators .progress {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideFooterProgressColor, {hash:{},inverse:self.noop,fn:self.program(197, program197, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#guide .footer .indicators .progress.selected {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideFooterProgressSelectedColor, {hash:{},inverse:self.noop,fn:self.program(199, program199, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#guide .toggle {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideButtonBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(201, program201, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideButtonTextColor, {hash:{},inverse:self.noop,fn:self.program(203, program203, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n    \n.no-touch #guide .toggle:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideButtonBackgroundHoverColor, {hash:{},inverse:self.noop,fn:self.program(205, program205, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guideButtonTextHoverColor, {hash:{},inverse:self.noop,fn:self.program(207, program207, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#tutor {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.tutorBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(209, program209, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#tutor .pin {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.tutorBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(211, program211, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#tutor .inner .title h6 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.tutorTitleTextSize, {hash:{},inverse:self.noop,fn:self.program(213, program213, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.tutorTextColor, {hash:{},inverse:self.noop,fn:self.program(215, program215, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#tutor .inner .body p {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.tutorBodyTextSize, {hash:{},inverse:self.noop,fn:self.program(217, program217, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.tutorTextColor, {hash:{},inverse:self.noop,fn:self.program(215, program215, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#tutor .done {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.tutorIconColor, {hash:{},inverse:self.noop,fn:self.program(219, program219, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n.no-touch #tutor .done:hover,\n.no-touch #tutor .done:focus {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.tutorIconHoverColor, {hash:{},inverse:self.noop,fn:self.program(221, program221, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#inbox {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesToolbarBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(223, program223, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#inbox > .inner > .toolbar, #inbox .message .pop-out {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesToolbarBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(225, program225, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n    \n#inbox .message .pop-out .pin {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesToolbarBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(223, program223, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#inbox > .inner > .toolbar .title h6,  #inbox .message .pop-out .title h6, #inbox .message .pop-out .body p {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesToolbarTextColor, {hash:{},inverse:self.noop,fn:self.program(227, program227, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n#inbox .toolbar .done {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesToolbarIconColor, {hash:{},inverse:self.noop,fn:self.program(229, program229, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}   \n\n.no-touch #inbox .toolbar .done:hover {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesToolbarIconHoverColor, {hash:{},inverse:self.noop,fn:self.program(231, program231, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n    \n#inbox .messages .divide {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesDivideBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(233, program233, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "    \n}\n    \n#inbox .messages .divide h6 {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesDivideTextColor, {hash:{},inverse:self.noop,fn:self.program(235, program235, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "    \n}\n    \n#inbox .messages .message, #inbox .messages .placeholder {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesMessageBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(237, program237, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n    \n#inbox .messages .message .preview h6, #inbox .messages .message .preview p, #inbox .messages .placeholder h6  {\n    color:#";
  if (stack1 = helpers.messagesMessageTextColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messagesMessageTextColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n}\n    \n#inbox .messages .message .preview.unread-message {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesMessageUnreadBackgroundColor, {hash:{},inverse:self.noop,fn:self.program(239, program239, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n    \n#inbox .messages .message .unread-message.preview h6, #inbox .messages .message .unread-message.preview p {\n    ";
  stack1 = helpers['if'].call(depth0, depth0.messagesMessageUnreadTextColor, {hash:{},inverse:self.noop,fn:self.program(241, program241, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n\n@media (min-width: 900px) { \n    ";
  stack1 = helpers['if'].call(depth0, depth0.smartComponentSpacing, {hash:{},inverse:self.noop,fn:self.program(243, program243, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n}\n";
  return buffer;
  });
})();