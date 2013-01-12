function initData() {
  jimData.variables["achieve_min_points"] = "0";
  jimData.variables["rubric_data"] = "";
  jimData.variables["color_select"] = "0";
  jimData.variables["assigned_feedback_data"] = "";
  jimData.variables["achieve_level"] = "";
  jimData.variables["achieve_max_points"] = "10";
  jimData.variables["rubric_title"] = "";
  jimData.datamasters["feedback_data"] = [
    {
      "_datamaster": "feedback_data",
      "_id": 1,
      "value": "Lacking in sufficent details"
    },
    {
      "_datamaster": "feedback_data",
      "_id": 2,
      "value": "Important information not emphasized"
    },
    {
      "_datamaster": "feedback_data",
      "_id": 3,
      "value": "Lacks in initiative"
    },
    {
      "_datamaster": "feedback_data",
      "_id": 4,
      "value": "sample text"
    }
  ];

  jimData.datamasters["assigned_feedback_data"] = [
  ];

  jimData.datamasters["rubric_data"] = [
    {
      "_datamaster": "rubric_data",
      "_id": 1,
      "id": "1",
      "name": "Math Rubric",
      "created_on": "04\/12\/2011",
      "updated_on": "01\/12\/2012",
      "copy": "++",
      "delete": "x"
    },
    {
      "_datamaster": "rubric_data",
      "_id": 2,
      "id": "2",
      "name": "History Rubric",
      "created_on": "11\/12\/2010",
      "updated_on": "09\/12\/2011",
      "copy": "++",
      "delete": "x"
    },
    {
      "_datamaster": "rubric_data",
      "_id": 3,
      "id": "3",
      "name": "Psychology Rubric",
      "created_on": "02\/12\/2019",
      "updated_on": "09\/04\/2011",
      "copy": "++",
      "delete": "x"
    }
  ];

  jimData.isInitialized = true;
};