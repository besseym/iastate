function initData() {
  jimData.variables["level2_cat1_desc"] = "Enter Level Description";
  jimData.variables["level3_name"] = "Enter Level Name 3";
  jimData.variables["level2_cat2_desc"] = "Enter Level Description";
  jimData.variables["achieve_max_points"] = "Max Points";
  jimData.variables["level1_cat1_desc"] = "Enter Level Description";
  jimData.variables["level3_value"] = "2.5";
  jimData.variables["level2_name"] = "Enter Level Name";
  jimData.variables["category2_percent"] = "0";
  jimData.variables["color_select"] = "0";
  jimData.variables["level_max_name"] = "Max Level Name";
  jimData.variables["feedback_data"] = "";
  jimData.variables["level3_cat1_desc"] = "Enter Level Description";
  jimData.variables["rubric_title"] = "Enter Rubric Title";
  jimData.variables["level1_name"] = "Enter Level Name";
  jimData.variables["level2_value"] = "5";
  jimData.variables["level1_cat2_desc"] = "Enter Level Description";
  jimData.variables["selected_category"] = "1";
  jimData.variables["assigned_feedback_data"] = "";
  jimData.variables["level_max_value"] = "10";
  jimData.variables["category1"] = "Enter Category Name";
  jimData.variables["level1_value"] = "5";
  jimData.variables["category2"] = "Enter Category Name";
  jimData.variables["level_min_value"] = "0";
  jimData.variables["achieve_min_points"] = "0";
  jimData.variables["category1_percent"] = "100";
  jimData.variables["rubric_data"] = "";
  jimData.variables["sub_category1_2"] = "Enter Sub-Category";
  jimData.variables["sub_category1_1"] = "Enter Sub-Category";
  jimData.variables["sub_category2_2"] = "Enter Sub-Category";
  jimData.variables["achieve_level"] = "";
  jimData.variables["category2_desc"] = "Enter Category Description";
  jimData.variables["sub_category2_1"] = "Enter Sub-Category";
  jimData.variables["level3_cat2_desc"] = "Enter Level Description";
  jimData.variables["category1_desc"] = "Enter Category Description";
  jimData.datamasters["feedback_data"] = [
    {
      "_datamaster": "feedback_data",
      "_id": 1,
      "value": "No initiative"
    },
    {
      "_datamaster": "feedback_data",
      "_id": 2,
      "value": "Lacking in sufficent details"
    },
    {
      "_datamaster": "feedback_data",
      "_id": 3,
      "value": "Poor arguments"
    },
    {
      "_datamaster": "feedback_data",
      "_id": 4,
      "value": "Important information not emphasized"
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