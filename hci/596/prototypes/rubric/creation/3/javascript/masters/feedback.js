jQuery("#simulation")
  .delegate(".m-c1be302c-fb05-4377-9c89-5599017bcd10.click, .m-c1be302c-fb05-4377-9c89-5599017bcd10 .click", "click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#m-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "assigned_feedback_data",
                    "fields": {
                      "value": {
                        "action": "jimGetSelection",
                        "parameter": {
                          "target": "#m-Category_1"
                        }
                      }
                    }
                  }
                },
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "feedback_data",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "value"
                        },{
                          "action": "jimGetSelection",
                          "parameter": {
                            "target": "#m-Category_1"
                          }
                        } ]
                      }
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-Category_2",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "assigned_feedback_data"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-Category_1",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "feedback_data"
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
    else if(jFirer.is("#m-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "feedback_data",
                    "fields": {
                      "value": {
                        "action": "jimGetSelection",
                        "parameter": {
                          "target": "#m-Category_2"
                        }
                      }
                    }
                  }
                },
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "assigned_feedback_data",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "value"
                        },{
                          "action": "jimGetSelection",
                          "parameter": {
                            "target": "#m-Category_2"
                          }
                        } ]
                      }
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-Category_1",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "feedback_data"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-Category_2",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "assigned_feedback_data"
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
    else if(jFirer.is("#m-img_add_feedback")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "assigned_feedback_data",
                    "fields": {
                      "value": {
                        "target": "#m-Input_1"
                      }
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-Category_2",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "assigned_feedback_data"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#m-Input_1",
                    "value": ""
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