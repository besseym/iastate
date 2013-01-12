jQuery("#simulation")
  .delegate(".s-1261e3db-d84a-48e6-be82-9ad12343cf82 .click", "click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#s-img_create_level")) {
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
    else if(jFirer.is("#s-img_create_level_2")) {
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
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-img_create_level_3")) {
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
    else if(jFirer.is("#s-Rectangle_8")) {
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Label_6")) {
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Image_6")) {
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Rectangle_9")) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Label_7")) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Image_8")) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Rectangle_10")) {
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
                    "target": "#s-Panel_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Label_8")) {
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
                    "target": "#s-Panel_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Image_9")) {
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
                    "target": "#s-Panel_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Rectangle_11")) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Label_9")) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Image_10")) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_26"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_26"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_26"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Rectangle_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_29"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_29"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_29"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_25"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(199 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Rectangle_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_28"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Panel_10": {
                      "expressions": {
                        "width": "Math.max(407 - jimEvent.fn.getCurrentStyle('border-left-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-right-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-left', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-right', '#s-Panel_10'),0) + 'px'",
                        "height": "Math.max(105 - jimEvent.fn.getCurrentStyle('border-top-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('border-bottom-width', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-top', '#s-Panel_10') - jimEvent.fn.getCurrentStyle('padding-bottom', '#s-Panel_10'),0) + 'px'"
                      }
                    }
                  },{
                    "#s-Panel_10 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "top"
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
    else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Panel_31"
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
    else if(jFirer.is("#s-Image_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
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
    else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dyn_Category_Panel"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Panel_5"
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
                    "#s-Rectangle_7": {
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
                    "#s-Rectangle_3": {
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
                    "#s-Rectangle_7": {
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
                    "#s-Rectangle_3": {
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
                    "#s-Rectangle_7": {
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
                    "#s-Rectangle_3": {
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
                    "#s-Rectangle_7": {
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
                    "#s-Rectangle_3": {
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
    else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Panel_6"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dyn_Category_Panel"
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
    else if(jFirer.is("#s-btn_create_rubric")) {
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
                        "target": "#s-Input_1"
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
  .delegate(".s-1261e3db-d84a-48e6-be82-9ad12343cf82 .pageload", "pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#s-1261e3db-d84a-48e6-be82-9ad12343cf82")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-txt_achieve_max_points",
                    "value": {
                      "datatype": "variable",
                      "element": "achieve_max_points"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-txt_achieve_min_points",
                    "value": {
                      "datatype": "variable",
                      "element": "achieve_min_points"
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
    else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_1",
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
    
  })
  .delegate(".s-1261e3db-d84a-48e6-be82-9ad12343cf82 .pageunload", "pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#s-txt_achieve_max_points")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "achieve_max_points",
                    "value": {
                      "target": "#s-txt_achieve_max_points"
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
    else if(jFirer.is("#s-txt_achieve_min_points")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "achieve_min_points",
                    "value": {
                      "target": "#s-txt_achieve_min_points"
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
  .delegate(".s-1261e3db-d84a-48e6-be82-9ad12343cf82 .change", "change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer === false) {}
    else if(jFirer.is("#s-txt_achieve_max_points")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "achieve_max_points",
                    "value": {
                      "target": "#s-txt_achieve_max_points"
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
  .delegate(".s-1261e3db-d84a-48e6-be82-9ad12343cf82 .mouseenter", "mouseenter dragenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer === false) {}
    else if(jFirer.is("#s-Rectangle_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_8": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_8": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2013.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_8": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_8": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2014.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Image_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_8": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_8": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2015.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Rectangle_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_10": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_10": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2016.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_10": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_10": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2017.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Image_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_10": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_10": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2018.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Rectangle_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_12": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_12": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2019.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_12": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_12": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2020.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Image_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_12": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_12": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2021.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Rectangle_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_14": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_14": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2022.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_14": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_14": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2023.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    else if(jFirer.is("#s-Image_16") && jFirer.has(event.relatedTarget).length === 0) {
      event.isHover = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-Rectangle_14": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      },
                      "expressions": {
                        "background-image": "jimEvent.fn.getGradientStyle({'-moz':'-moz-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit':'-webkit-linear-gradient(top,#FCFCFC,#BFDAFF)', '-webkit-old':'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FCFCFC), color-stop(100%,#BFDAFF))', '-opera':'-o-linear-gradient(top,#FCFCFC,#BFDAFF)'})"
                      }
                    }
                  },{
                    "#s-Rectangle_14": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('images/[Generated]%2024.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
    
  })
  .delegate(".s-1261e3db-d84a-48e6-be82-9ad12343cf82 .mouseleave", "mouseleave dragleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer === false) {}
    else if(jFirer.is("#s-Rectangle_8")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Image_6")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Rectangle_10")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Image_9")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Rectangle_12")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Image_11")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Rectangle_14")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    }
    else if(jFirer.is("#s-Image_16")) {
      jEvent.undoCases(jFirer);
    }
    
  });