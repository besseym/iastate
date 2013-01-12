jQuery("#simulation")
  .delegate(".s-233f3ecc-32d6-4749-bd4b-0b5de14e7eb3 .click", "click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#s-btn_new_sub_category")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_8"
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
    else if(jFirer.is("#s-btn_delete_sub_category")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_7"
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
    else if(jFirer.is("#s-btn_new_sub_category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_9"
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
    else if(jFirer.is("#s-btn_delete_sub_category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_8"
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
    else if(jFirer.is("#s-img_color_select")) {
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
                    "target": "#s-Table_1"
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
                    "target": "#s-Table_1"
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
    else if(jFirer.is("#s-Cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1": {
                      "attributes": {
                        "background-color": "#FFFF00",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1_1": {
                      "attributes": {
                        "background-color": "#FFFF00",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-rect_category_container": {
                      "attributes": {
                        "background-color": "#FFFF00",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1_2": {
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
    else if(jFirer.is("#s-Cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1": {
                      "attributes": {
                        "background-color": "#EDC97A",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1_1": {
                      "attributes": {
                        "background-color": "#EDC97A",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-rect_category_container": {
                      "attributes": {
                        "background-color": "#EDC97A",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1_2": {
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
    else if(jFirer.is("#s-Cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1": {
                      "attributes": {
                        "background-color": "#00FFFF",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1_1": {
                      "attributes": {
                        "background-color": "#00FFFF",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-rect_category_container": {
                      "attributes": {
                        "background-color": "#00FFFF",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1_2": {
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
    else if(jFirer.is("#s-Cell_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1": {
                      "attributes": {
                        "background-color": "#B897C0",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1_1": {
                      "attributes": {
                        "background-color": "#B897C0",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-rect_category_container": {
                      "attributes": {
                        "background-color": "#B897C0",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category1_2": {
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
    else if(jFirer.is("#s-btn_new_sub_category_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_12"
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
    else if(jFirer.is("#s-btn_delete_sub_category_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
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
    else if(jFirer.is("#s-btn_new_sub_category_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_13"
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
    else if(jFirer.is("#s-btn_delete_sub_category_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_12"
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
    else if(jFirer.is("#s-img_color_select_1")) {
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
                    "target": "#s-Table_2"
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
                    "target": "#s-Table_2"
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
    else if(jFirer.is("#s-Cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category2": {
                      "attributes": {
                        "background-color": "#FFFF00",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-rect_category_container_1": {
                      "attributes": {
                        "background-color": "#FFFF00",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category2_1": {
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
    else if(jFirer.is("#s-Cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category2": {
                      "attributes": {
                        "background-color": "#EDC97A",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-rect_category_container_1": {
                      "attributes": {
                        "background-color": "#EDC97A",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category2_1": {
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
    else if(jFirer.is("#s-Cell_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category2": {
                      "attributes": {
                        "background-color": "#00FFFF",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-rect_category_container_1": {
                      "attributes": {
                        "background-color": "#00FFFF",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category2_1": {
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
    else if(jFirer.is("#s-Cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category2": {
                      "attributes": {
                        "background-color": "#B897C0",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-rect_category_container_1": {
                      "attributes": {
                        "background-color": "#B897C0",
                        "background-image": "none"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-tab_category2_1": {
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
    else if(jFirer.is("#s-btn_create_category")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
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
    else if(jFirer.is("#s-tab_category1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_15"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
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
    else if(jFirer.is("#s-btn_delete_category2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
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
    else if(jFirer.is("#s-tab_category1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
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
    else if(jFirer.is("#s-tab_category2_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
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
    else if(jFirer.is("#s-btn_add_level")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
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
    else if(jFirer.is("#s-btn_add_level_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6"
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
    else if(jFirer.is("#s-btn_add_level_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
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
    else if(jFirer.is("#s-btn_create_rubric_1")) {
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
                        "datatype": "variable",
                        "element": "rubric_title"
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "rubric_list"
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
  .delegate(".s-233f3ecc-32d6-4749-bd4b-0b5de14e7eb3 .drag", "drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer === false) {}
    else if(jFirer.is("#s-level_handle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-grp_level1",
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
    else if(jFirer.is("#s-level_handle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-grp_level1_1",
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
    else if(jFirer.is("#s-level_handle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-grp_level2_1",
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
    else if(jFirer.is("#s-level_handle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-grp_level2_2",
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
    else if(jFirer.is("#s-level_handle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-grp_level1_2",
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
    else if(jFirer.is("#s-level_handle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-grp_level3_2",
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
  .delegate(".s-233f3ecc-32d6-4749-bd4b-0b5de14e7eb3 .drag", "dragend", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .delegate(".s-233f3ecc-32d6-4749-bd4b-0b5de14e7eb3 .drag", "dragend", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .delegate(".s-233f3ecc-32d6-4749-bd4b-0b5de14e7eb3 .pageload", "pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#s-input_rubric_title")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_rubric_title",
                    "value": {
                      "datatype": "variable",
                      "element": "rubric_title"
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
    else if(jFirer.is("#s-input_category_description")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category_description",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_desc"
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
    else if(jFirer.is("#s-input_sub_category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_1",
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
    else if(jFirer.is("#s-Panel_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_2",
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
    else if(jFirer.is("#s-input_sub_category_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_2",
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
    else if(jFirer.is("#s-input_sub_category_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_3",
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
    else if(jFirer.is("#s-input_category_description_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category_description_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category2_desc"
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
    else if(jFirer.is("#s-input_sub_category_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_4",
                    "value": {
                      "datatype": "variable",
                      "element": "sub_category2_1"
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
    else if(jFirer.is("#s-Panel_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_5",
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
    else if(jFirer.is("#s-input_sub_category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_5",
                    "value": {
                      "datatype": "variable",
                      "element": "sub_category2_1"
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
    else if(jFirer.is("#s-input_sub_category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_6",
                    "value": {
                      "datatype": "variable",
                      "element": "sub_category2_2"
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
    else if(jFirer.is("#s-input_category1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1",
                    "value": {
                      "datatype": "variable",
                      "element": "category1"
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
    else if(jFirer.is("#s-input_category1_percent")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_percent",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_percent"
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
    else if(jFirer.is("#s-input_category1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category1"
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
    else if(jFirer.is("#s-input_category1_percent_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_percent_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_percent"
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
    else if(jFirer.is("#s-input_category2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category2",
                    "value": {
                      "datatype": "variable",
                      "element": "category2"
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
    else if(jFirer.is("#s-input_category2_percent")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category2_percent",
                    "value": {
                      "datatype": "variable",
                      "element": "category2_percent"
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
    else if(jFirer.is("#s-input_category1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_2",
                    "value": {
                      "datatype": "variable",
                      "element": "category1"
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
    else if(jFirer.is("#s-input_category1_percent_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_percent_2",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_percent"
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
    else if(jFirer.is("#s-input_category2_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category2_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category2"
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
    else if(jFirer.is("#s-input_category2_percent_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category2_percent_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category2_percent"
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
    else if(jFirer.is("#s-input_level1_desc")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level1_desc",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_desc"
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
    else if(jFirer.is("#s-input_level1_value")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level1_value",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_value"
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
    else if(jFirer.is("#s-input_level1_name")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level1_name",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_name"
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
    else if(jFirer.is("#s-input_level1_desc_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level1_desc_1",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_desc"
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
    else if(jFirer.is("#s-input_level_value_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_value_1",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_value"
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
    else if(jFirer.is("#s-input_level_name_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_name_1",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_name"
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
    else if(jFirer.is("#s-input_level2_desc_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level2_desc_1",
                    "value": {
                      "datatype": "variable",
                      "element": "level2_desc"
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
    else if(jFirer.is("#s-input_level_value_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_value_2",
                    "value": {
                      "datatype": "variable",
                      "element": "level2_value"
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
    else if(jFirer.is("#s-input_level_name_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_name_2",
                    "value": {
                      "datatype": "variable",
                      "element": "level2_name"
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
    else if(jFirer.is("#s-input_level2_desc_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level2_desc_2",
                    "value": {
                      "datatype": "variable",
                      "element": "level2_desc"
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
    else if(jFirer.is("#s-input_level_value_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_value_4",
                    "value": {
                      "datatype": "variable",
                      "element": "level2_value"
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
    else if(jFirer.is("#s-input_level_name_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_name_4",
                    "value": {
                      "datatype": "variable",
                      "element": "level2_name"
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
    else if(jFirer.is("#s-input_level1_desc_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level1_desc_2",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_desc"
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
    else if(jFirer.is("#s-input_level_value_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_value_3",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_value"
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
    else if(jFirer.is("#s-input_level_name_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_name_3",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_name"
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
    else if(jFirer.is("#s-input_level3_desc_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level3_desc_2",
                    "value": {
                      "datatype": "variable",
                      "element": "level3_desc"
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
    else if(jFirer.is("#s-input_level_value_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_value_5",
                    "value": {
                      "datatype": "variable",
                      "element": "level3_value"
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
    else if(jFirer.is("#s-input_level_name_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_name_5",
                    "value": {
                      "datatype": "variable",
                      "element": "level3_name"
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
    else if(jFirer.is("#s-input_max_points")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_max_points",
                    "value": {
                      "datatype": "variable",
                      "element": "level_max_value"
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
    else if(jFirer.is("#s-min_input")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-min_input",
                    "value": {
                      "datatype": "variable",
                      "element": "level_min_value"
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
  .delegate(".s-233f3ecc-32d6-4749-bd4b-0b5de14e7eb3 .change", "change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#s-input_rubric_title")) {
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
                      "target": "#s-input_rubric_title"
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
    else if(jFirer.is("#s-input_category_description")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category1_desc",
                    "value": {
                      "target": "#s-input_category_description"
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
    else if(jFirer.is("#s-input_sub_category_1")) {
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
                      "target": "#s-input_sub_category_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_2",
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
    else if(jFirer.is("#s-input_sub_category_2")) {
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
                      "target": "#s-input_sub_category_2"
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
    else if(jFirer.is("#s-input_sub_category_3")) {
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
                      "target": "#s-input_sub_category_3"
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
    else if(jFirer.is("#s-input_category_description_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category2_desc",
                    "value": {
                      "target": "#s-input_category_description_1"
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
    else if(jFirer.is("#s-input_sub_category_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "sub_category2_1",
                    "value": {
                      "target": "#s-input_sub_category_4"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_sub_category_5",
                    "value": {
                      "datatype": "variable",
                      "element": "sub_category2_1"
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
    else if(jFirer.is("#s-input_sub_category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "sub_category2_1",
                    "value": {
                      "target": "#s-input_sub_category_5"
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
    else if(jFirer.is("#s-input_sub_category_6")) {
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
                      "target": "#s-input_sub_category_6"
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
    else if(jFirer.is("#s-input_category1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category1",
                    "value": {
                      "target": "#s-input_category1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_2",
                    "value": {
                      "datatype": "variable",
                      "element": "category1"
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
    else if(jFirer.is("#s-input_category1_percent")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category1_percent",
                    "value": {
                      "target": "#s-input_category1_percent"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_percent_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_percent"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_percent_2",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_percent"
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
    else if(jFirer.is("#s-input_category1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category1",
                    "value": {
                      "target": "#s-input_category1_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1",
                    "value": {
                      "datatype": "variable",
                      "element": "category1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_2",
                    "value": {
                      "datatype": "variable",
                      "element": "category1"
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
    else if(jFirer.is("#s-input_category1_percent_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category1_percent",
                    "value": {
                      "target": "#s-input_category1_percent_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_percent",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_percent"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_percent_2",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_percent"
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
    else if(jFirer.is("#s-input_category2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category2",
                    "value": {
                      "target": "#s-input_category2"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category2_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category2"
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
    else if(jFirer.is("#s-input_category2_percent")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category2_percent",
                    "value": {
                      "target": "#s-input_category2_percent"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category2_percent_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category2_percent"
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
    else if(jFirer.is("#s-input_category1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category1",
                    "value": {
                      "target": "#s-input_category1_2"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1",
                    "value": {
                      "datatype": "variable",
                      "element": "category1"
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
    else if(jFirer.is("#s-input_category1_percent_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category1_percent",
                    "value": {
                      "target": "#s-input_category1_percent_2"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_percent_1",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_percent"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category1_percent",
                    "value": {
                      "datatype": "variable",
                      "element": "category1_percent"
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
    else if(jFirer.is("#s-input_category2_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category2",
                    "value": {
                      "target": "#s-input_category2_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category2",
                    "value": {
                      "datatype": "variable",
                      "element": "category2"
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
    else if(jFirer.is("#s-input_category2_percent_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "category2_percent",
                    "value": {
                      "target": "#s-input_category2_percent_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_category2_percent",
                    "value": {
                      "datatype": "variable",
                      "element": "category2_percent"
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
    else if(jFirer.is("#s-input_level1_desc")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level1_desc",
                    "value": {
                      "target": "#s-input_level1_desc"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level1_desc_1",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_desc"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level1_desc_2",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_desc"
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
    else if(jFirer.is("#s-input_level1_value")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level1_value",
                    "value": {
                      "target": "#s-input_level1_value"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_value_1",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_value"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_value_3",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_value"
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
    else if(jFirer.is("#s-input_level1_name")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level1_name",
                    "value": {
                      "target": "#s-input_level1_name"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_name_1",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_name"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_name_3",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_name"
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
    else if(jFirer.is("#s-input_level1_desc_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level1_desc",
                    "value": {
                      "target": "#s-input_level1_desc_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level1_desc_2",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_desc"
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
    else if(jFirer.is("#s-input_level_value_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level1_value",
                    "value": {
                      "target": "#s-input_level_value_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_value_3",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_value"
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
    else if(jFirer.is("#s-input_level_name_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level1_name",
                    "value": {
                      "target": "#s-input_level_name_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_name_3",
                    "value": {
                      "datatype": "variable",
                      "element": "level1_name"
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
    else if(jFirer.is("#s-input_level2_desc_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level2_desc",
                    "value": {
                      "target": "#s-input_level2_desc_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level2_desc_2",
                    "value": {
                      "datatype": "variable",
                      "element": "level2_desc"
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
    else if(jFirer.is("#s-input_level_value_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level2_value",
                    "value": {
                      "target": "#s-input_level_value_2"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_value_4",
                    "value": {
                      "datatype": "variable",
                      "element": "level2_value"
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
    else if(jFirer.is("#s-input_level_name_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level2_name",
                    "value": {
                      "target": "#s-input_level_name_2"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-input_level_name_4",
                    "value": {
                      "datatype": "variable",
                      "element": "level2_name"
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
    else if(jFirer.is("#s-input_level2_desc_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level2_desc",
                    "value": {
                      "target": "#s-input_level2_desc_2"
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
    else if(jFirer.is("#s-input_level_value_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level2_value",
                    "value": {
                      "target": "#s-input_level_value_4"
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
    else if(jFirer.is("#s-input_level_name_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level2_name",
                    "value": {
                      "target": "#s-input_level_name_4"
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
    else if(jFirer.is("#s-input_level1_desc_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level1_desc",
                    "value": {
                      "target": "#s-input_level1_desc_2"
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
    else if(jFirer.is("#s-input_level_value_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level1_value",
                    "value": {
                      "target": "#s-input_level_value_3"
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
    else if(jFirer.is("#s-input_level_name_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level1_name",
                    "value": {
                      "target": "#s-input_level_name_3"
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
    else if(jFirer.is("#s-input_level3_desc_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level3_desc",
                    "value": {
                      "target": "#s-input_level3_desc_2"
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
    else if(jFirer.is("#s-input_level_value_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level3_value",
                    "value": {
                      "target": "#s-input_level_value_5"
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
    else if(jFirer.is("#s-input_level_name_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level3_name",
                    "value": {
                      "target": "#s-input_level_name_5"
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
    else if(jFirer.is("#s-input_max_level")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level_max_name",
                    "value": {
                      "target": "#s-input_max_level"
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
    else if(jFirer.is("#s-input_max_points")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreater",
                  "parameter": [ {
                    "target": "#s-input_max_points"
                  },"0" ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "target": "#s-input_max_points"
                  },{
                    "datatype": "variable",
                    "element": "level_min_value"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level_max_value",
                    "value": {
                      "target": "#s-input_max_points"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-lbl_tic_half",
                    "value": {
                      "action": "jimMultiply",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "level_max_value"
                        },{
                          "datatype": "variable",
                          "element": "level_min_value"
                        } ]
                      },"0.5" ]
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-lbl_tic_7_5",
                    "value": {
                      "action": "jimMultiply",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "level_max_value"
                        },{
                          "datatype": "variable",
                          "element": "level_min_value"
                        } ]
                      },"0.75" ]
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-lbl_tic_2_5",
                    "value": {
                      "action": "jimMultiply",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "level_max_value"
                        },{
                          "datatype": "variable",
                          "element": "level_min_value"
                        } ]
                      },"0.25" ]
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
    else if(jFirer.is("#s-min_input")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "target": "#s-min_input"
                  },{
                    "datatype": "variable",
                    "element": "level_max_value"
                  } ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "target": "#s-min_input"
                  },"0" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "level_min_value",
                    "value": {
                      "target": "#s-min_input"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-lbl_tic_7_5",
                    "value": {
                      "action": "jimMultiply",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "level_max_value"
                        },{
                          "datatype": "variable",
                          "element": "level_min_value"
                        } ]
                      },"0.75" ]
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-lbl_tic_half",
                    "value": {
                      "action": "jimMultiply",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "level_max_value"
                        },{
                          "datatype": "variable",
                          "element": "level_min_value"
                        } ]
                      },"0.5" ]
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-lbl_tic_2_5",
                    "value": {
                      "action": "jimMultiply",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "level_max_value"
                        },{
                          "datatype": "variable",
                          "element": "level_min_value"
                        } ]
                      },"0.25" ]
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