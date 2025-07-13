Blockly.JavaScript['ampscript_lookup'] = function(block) {
  var de = Blockly.JavaScript.valueToCode(block, 'DE', Blockly.JavaScript.ORDER_ATOMIC);
  var column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_ATOMIC);
  var whereField = Blockly.JavaScript.valueToCode(block, 'WHERE_FIELD', Blockly.JavaScript.ORDER_ATOMIC);
  var whereValue = Blockly.JavaScript.valueToCode(block, 'WHERE_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `Lookup(${de}, ${column}, ${whereField}, ${whereValue})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ssjs_write'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `Write(${value});\n`;
  return code;
};

Blockly.JavaScript['api_httpget'] = function(block) {
  var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `HTTP.Get(${url})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_select'] = function(block) {
  var columns = Blockly.JavaScript.valueToCode(block, 'COLUMNS', Blockly.JavaScript.ORDER_ATOMIC);
  var table = Blockly.JavaScript.valueToCode(block, 'TABLE', Blockly.JavaScript.ORDER_ATOMIC);
  var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `"SELECT " + ${columns} + " FROM " + ${table} + " WHERE " + ${condition}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['json_parse'] = function(block) {
  var jsonString = Blockly.JavaScript.valueToCode(block, 'JSON_STRING', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `JSON.parse(${jsonString})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dataview_open'] = function(block) {
  var view = block.getFieldValue('VIEW');
  var code = `"SELECT * FROM ${view}"`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
