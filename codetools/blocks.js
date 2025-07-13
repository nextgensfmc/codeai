Blockly.defineBlocksWithJsonArray([
  {
    "type": "ampscript_lookup",
    "message0": "Lookup DE %1 Column %2 Where %3 equals %4",
    "args0": [
      { "type": "input_value", "name": "DE" },
      { "type": "input_value", "name": "COLUMN" },
      { "type": "input_value", "name": "WHERE_FIELD" },
      { "type": "input_value", "name": "WHERE_VALUE" }
    ],
    "output": "String",
    "colour": 160,
    "tooltip": "Retrieve value from a data extension",
    "helpUrl": ""
  },
  {
    "type": "ssjs_write",
    "message0": "Write %1",
    "args0": [
      { "type": "input_value", "name": "CONTENT" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Output content using SSJS",
    "helpUrl": ""
  },
  {
    "type": "api_httpget",
    "message0": "HTTP GET URL %1",
    "args0": [
      { "type": "input_value", "name": "URL" }
    ],
    "output": "String",
    "colour": 20,
    "tooltip": "Make a GET request",
    "helpUrl": ""
  }
]);
,
{
  "type": "sql_select",
  "message0": "SQL SELECT %1 FROM %2 WHERE %3",
  "args0": [
    { "type": "input_value", "name": "COLUMNS" },
    { "type": "input_value", "name": "TABLE" },
    { "type": "input_value", "name": "CONDITION" }
  ],
  "output": "String",
  "colour": 200,
  "tooltip": "Build a SQL SELECT query",
  "helpUrl": ""
},
{
  "type": "json_parse",
  "message0": "Parse JSON string %1",
  "args0": [
    { "type": "input_value", "name": "JSON_STRING" }
  ],
  "output": "Object",
  "colour": 300,
  "tooltip": "Parse a JSON string to an object",
  "helpUrl": ""
},
{
  "type": "dataview_open",
  "message0": "Data View %1",
  "args0": [
    { "type": "field_input", "name": "VIEW", "text": "Sent" }
  ],
  "output": "String",
  "colour": 100,
  "tooltip": "Reference a system Data View",
  "helpUrl": ""
}
