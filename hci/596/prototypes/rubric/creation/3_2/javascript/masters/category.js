jQuery("#simulation")
  .delegate(".m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8.click, .m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8 .click", "click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#m-btn_new_sub_category")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-Panel_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-btn_delete_sub_category")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-Panel_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-btn_new_sub_category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-Panel_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-btn_delete_sub_category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-Panel_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-img_color_select")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "color_select"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-Table_1"
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "color_select",
                    "value": "1"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "color_select",
                    "value": "0"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#m-Table_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-Cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    ".m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8 #m-Rectangle_1": {
                      "attributes": {
                        "background-color": "#FFFF00",
                        "background-image": "none"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-Cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    ".m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8 #m-Rectangle_1": {
                      "attributes": {
                        "background-color": "#EDC97A",
                        "background-image": "none"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-Cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    ".m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8 #m-Rectangle_1": {
                      "attributes": {
                        "background-color": "#00FFFF",
                        "background-image": "none"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-Cell_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    ".m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8 #m-Rectangle_1": {
                      "attributes": {
                        "background-color": "#B897C0",
                        "background-image": "none"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    
  })
  .delegate(".m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8.pageload, .m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8 .pageload", "pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is(".m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-input_sub_category_1",
                    "value": {
                      "datatype": "variable",
                      "element": "sub_category1_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-input_sub_category_3",
                    "value": {
                      "datatype": "variable",
                      "element": "sub_category1_2"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-input_sub_category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-input_sub_category_1",
                    "value": {
                      "datatype": "variable",
                      "element": "sub_category1_1"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-input_sub_category_2",
                    "value": {
                      "datatype": "variable",
                      "element": "sub_category1_1"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-input_sub_category_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-input_sub_category_2",
                    "value": {
                      "datatype": "variable",
                      "element": "sub_category1_1"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    
  })
  .delegate(".m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8.change, .m-5bc4a2c6-0bc0-4418-977f-3eb9368264b8 .change", "change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#m-input_sub_category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "sub_category1_1",
                    "value": {
                      "target": "#m-input_sub_category_1"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-input_sub_category_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "sub_category1_1",
                    "value": {
                      "target": "#m-input_sub_category_2"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#m-input_sub_category_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "sub_category1_2",
                    "value": {
                      "target": "#m-input_sub_category_3"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    
  });