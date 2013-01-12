jQuery("#simulation")
  .delegate(".s-11128d6e-8ec8-48b9-abc4-32827869f403 .click", "click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "create_rubric"
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
    else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "rubric_title",
                    "value": {
                      "target": "#s-Input_2"
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "create_rubric"
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
    else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "rubric_data",
                    "fields": {
                      "id": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimMaxData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "rubric_data",
                            "value": {
                              "field": "id"
                            }
                          }
                        },"1" ]
                      },
                      "name": {
                        "target": "#s-Input_2"
                      },
                      "created_on": {
                        "action": "jimSystemDate"
                      },
                      "updated_on": {
                      },
                      "copy": "++",
                      "delete": "x"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-rubric_data_grid",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "rubric_data"
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
    else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "rubric_data",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "id"
                        },{
                          "target": "#s-Input_1"
                        } ]
                      }
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
    jFirer.parents("tr.datarow").trigger("click");  
  });