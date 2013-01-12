jQuery("#simulation")
  .delegate(".m-2ca1d1e7-de39-4296-966f-d5609abdad0b.click, .m-2ca1d1e7-de39-4296-966f-d5609abdad0b .click", "click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#m-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    ".m-2ca1d1e7-de39-4296-966f-d5609abdad0b #m-Input_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#3673AF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#3673AF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#3673AF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#3673AF"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": "#m-Input_2"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#m-Input_2"
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
    else if(jFirer.is("#m-img_delete")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#m-Group_1"
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
  .delegate(".m-2ca1d1e7-de39-4296-966f-d5609abdad0b.drag, .m-2ca1d1e7-de39-4296-966f-d5609abdad0b .drag", "drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer === false) {}
    else if(jFirer.is("#m-left_handle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#m-Group_1",
                    "type": "movewithcursor",
                    "containment": true,
                    "axis": "y"
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
    else if(jFirer.is("#m-left_handle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#m-Group_1",
                    "type": "movewithcursor",
                    "containment": true,
                    "axis": "y"
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
  .delegate(".m-2ca1d1e7-de39-4296-966f-d5609abdad0b.drag, .m-2ca1d1e7-de39-4296-966f-d5609abdad0b .drag", "dragend", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .delegate(".m-2ca1d1e7-de39-4296-966f-d5609abdad0b.dragend, .m-2ca1d1e7-de39-4296-966f-d5609abdad0b .dragend", "dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer === false) {}
    else if(jFirer.is("#m-left_handle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "achieve_level",
                    "value": {
                      "action": "jimRound",
                      "parameter": [ {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "achieve_max_points"
                        },{
                          "action": "jimRandom"
                        } ]
                      },"0" ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-txt_left_value",
                    "value": {
                      "datatype": "variable",
                      "element": "achieve_level"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-txt_right_value",
                    "value": {
                      "datatype": "variable",
                      "element": "achieve_level"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-lbl_value",
                    "value": {
                      "datatype": "variable",
                      "element": "achieve_level"
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
    else if(jFirer.is("#m-left_handle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "achieve_level",
                    "value": {
                      "action": "jimRound",
                      "parameter": [ {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "achieve_max_points"
                        },{
                          "action": "jimRandom"
                        } ]
                      },"0" ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-txt_left_value",
                    "value": {
                      "datatype": "variable",
                      "element": "achieve_level"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-txt_right_value",
                    "value": {
                      "datatype": "variable",
                      "element": "achieve_level"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-lbl_value",
                    "value": {
                      "datatype": "variable",
                      "element": "achieve_level"
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
  .delegate(".m-2ca1d1e7-de39-4296-966f-d5609abdad0b.drag, .m-2ca1d1e7-de39-4296-966f-d5609abdad0b .drag", "dragend", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .delegate(".m-2ca1d1e7-de39-4296-966f-d5609abdad0b.change, .m-2ca1d1e7-de39-4296-966f-d5609abdad0b .change", "change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#m-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": "#m-Input_2"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    ".m-2ca1d1e7-de39-4296-966f-d5609abdad0b #m-Input_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF"
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
    
  });